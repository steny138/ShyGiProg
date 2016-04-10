#coding=utf-8

from flask import Flask, request, jsonify
from flask import g, Response
from flask_restful.reqparse import RequestParser
from flask.views import MethodView
import time, datetime
from Crypto.Cipher import AES 
from Crypto import Random
import base64

app = Flask(__name__)

ENCRYPT_KEY = "AUJJSLSPDVMDSSJSODSLIDmlcxsxslin"

@app.before_request
def option_autoreply():
    """ Always reply 200 on OPTIONS request """

    if request.method == 'OPTIONS':
        resp = app.make_default_options_response()

        headers = None
        if 'ACCESS_CONTROL_REQUEST_HEADERS' in request.headers:
            headers = request.headers['ACCESS_CONTROL_REQUEST_HEADERS']

        h = resp.headers

        # Allow the origin which made the XHR
        h['Access-Control-Allow-Origin'] = request.headers['Origin']
        # Allow the actual method
        h['Access-Control-Allow-Methods'] = request.headers['Access-Control-Request-Method']
        # Allow for 10 seconds
        h['Access-Control-Max-Age'] = "10"

        # We also keep current headers
        if headers is not None:
            h['Access-Control-Allow-Headers'] = headers

        return resp

@app.after_request
def set_allow_origin(resp):
    """ Set origin for GET, POST, PUT, DELETE requests """
    h = resp.headers
    # Allow crossdomain for other HTTP Verbs
    if request.method != 'OPTIONS' and 'Origin' in request.headers:
        h['Access-Control-Allow-Origin'] = request.headers['Origin']

    return resp

def encrypt(data, encrypt_key):  
    bs = AES.block_size  
    pad = lambda s: s + (bs - len(s) % bs) * chr(bs - len(s) % bs)  
    iv = Random.new().read(bs)  
    cipher = AES.new(encrypt_key, AES.MODE_CBC, iv)  
    data = cipher.encrypt(pad(data))  
    data = iv + data
    data = base64.encodestring(data).strip()
    return data  

def decrypt(data, encrypt_key):  
    data = base64.decodestring(data)
    bs = AES.block_size  
    if len(data) <= bs:  
        return data  
    unpad = lambda s : s[0:-ord(s[-1])]  
    iv = data[:bs]  
    cipher = AES.new(encrypt_key, AES.MODE_CBC, iv)  
    data  = unpad(cipher.decrypt(data[bs:]))  
    return data

class Login(MethodView):
    @classmethod
    def login(cls):
    	p_token = "123123"
        strs = request.json['account'] + request.json['password'] + datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        enrypt_data = encrypt(strs, ENCRYPT_KEY)
        res = {'account': request.json['account'], 
        'p_token': enrypt_data
        # ,"decrypt_data" :  decrypt(enrypt_data, ENCRYPT_KEY)
        }
        

    	return jsonify(res)

app.add_url_rule('/prog/api/login', 'login', Login.login, methods=['POST'])

class Profile(MethodView):
    @classmethod
    def get(cls):
        
        
        res = {
		    "member": {
		        "name":"bill yang",
		        "age": 26,
                "id_number": "R123123123123",
                "token": "GJKLGFSAS",
                "create_time": "2016/04/10 00:10:20"
		        },
		    "alerts": [
		                    {
		        "event": "Morning Call",
                "level": 1,
                "disabled": False

		        }, {
                "event": "study",
                "level": 2,
                "disabled": True
                }, {
                "event": "Go to taipei",
                "level": 3,
                "disabled": False
                }
            ],
            "messages": [
                            {
                "sender": "Shyshyhao",
                "send_time": "2016/03/25 10:10:20",
                "message": "Hello, yuchen Nice to meet you."
                }, {
                "sender": "Adela Lin",
                "send_time": "2016/03/25 07:10:20",
                "message": "Get up!! Now is your time."
                }
            ]


		}
        return jsonify(res)
app.add_url_rule('/prog/api/profile', 'user_profile', Profile.get, methods=['GET'])



if __name__ == '__main__':
    app.debug = True
	# or add debug=True in param
    app.run(host='0.0.0.0')