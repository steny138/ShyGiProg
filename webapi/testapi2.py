from flask import Flask, request
from flask_restful import Resource, Api, abort

app = Flask(__name__)
api = Api(app)

# USER_INFO = {'apple':'6s is expensive'}
# class  USER_INFO(Resource):
# 	def get(self, user_name):
# 		return {user_name: USER_INFO[user_name]}
# 	def put(self, user_name):	
# 		USER_INFO[user_name] = request.form['data']
# 		return {user_name: USER_INFO[user_name]}

# api.add_resource(USER_INFO, '/USER_INFO/<string:user_name>')

def abort_if_user_not_exist(user_name):
	if user_name not in USER_INFO:
		abort(404, message="User {} doesn't exist".format(user_name))

USER_INFO = {'shyshyhao': 'bill', 'steny138': 'gi'}

class User_info(Resource):
	def get(self, user_name):
		#abort_if_user_not_exist(user_name)
		return {user_name: USER_INFO[user_name]}
		#

	def put(self, user_name):	
		USER_INFO[user_name] = request.form['data']
		return {user_name: USER_INFO[user_name]}, 201

	def delete(self, user_name):
		#abort_if_user_not_exist(user_name)
		del USER_INFO[user_name]
		return '', 204

	# def post(self):
	# 	pass
class User_list(Resource):
    def get(self):
        return USER_INFO 
class Hello(Resource):
	def get(self):
		return {'Hello':'kitty'}

api.add_resource(Hello, '/', '/userinfo')
api.add_resource(User_info, '/<string:user_name>')
api.add_resource(User_list, '/user_list')

# a={'b':'abc'}
# class  abc(Resource):
# 	def get(self, user_name):
# 		abort_if_user_not_exist(user_name)
# 		return {user_name: a[user_name]}
# api.add_resource(abc, '/<string:user_name>', '/')


#USER_INFO  -> get   ->put    ->post   ->delete


if __name__ == '__main__':
	app.run(debug=True)
