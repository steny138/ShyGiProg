import {Inject, Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {ViewEnabled} from './Filters';
import {Pipe, PipeTransform} from 'angular2/core';

@Injectable()
export class MemberService {
	public alerts: Array<Alert>;
	public messages: Array<Message>;
	public member: Member;
	public http: Http;

    constructor(http: Http) {
        console.log('bootstrap memberService..');
        this.http = http;
        this.alerts = [];
        this.messages = [];
        this.member = <Member>{};
        //this.getMemberInfomation();
    }

    getMemberInfomation() {
		console.log('start loading data...');
        return this.http.get('./app/test_data/member.json')
			.map((res: Response) => res.json());
    }
    alertLevel(level: number) {
		var result: string = "";
		switch (level) {
			case 1:
				result = "primary";
				break;
			case 2:
				result = "success";
				break;
			case 3:
				result = "info";
				break;
			case 4:
				result = "warning";
				break;
			case 5:
				result = "danger";
				break;
			default:
				result = "default";
				break;
		}

		return result;
	}
}

export interface Message {
	sender: string;
	send_time: string;
	message: string;

}

export interface Member {
	name: string;
	age: number;
	id_number: string;
	token: string;
	create_time: string;
}

export interface Alert extends ViewEnabled {
	event: string;
	level: number;
}

