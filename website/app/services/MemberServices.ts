import {Inject,Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

@Injectable()
export class MemberService{
	public alerts :Array<Alert>;
	public messages : Array<Message>;
	public member : Member;
	public http: Http;

    constructor(@Inject(Http)http: Http){
        console.log('bootstrap memberService..');
        this.http = http;
        this.alerts = [];
        this.messages = [];
        this.member = <Member>{};
        this.getMemberInfomation();
    }

    getMemberInfomation(){
    	console.log('start loading data...');
        this.http.get('../test_data/member.json').map((res: Response) =>
        	res.json()).subscribe(res => {
        		this.member = res.member;
        		this.alerts = res.alerts;
        		this.messages = res.messages;
        	});

        console.log(this.member);
    }
}


export interface Alert{
	event: string;
	level: number;
	disabled: boolean;
}

export interface Message{
	sender: string;
	send_time: string;
	message: string;
}

export interface Member{
	name: string;
	age: number;
	id_number: string;
	token: string;
	create_time: string;
}