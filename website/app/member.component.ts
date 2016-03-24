import {Component} from 'angular2/core';
import {MemberService, Alert, Message, Member} from './services/MemberServices';
@Component({
    selector: 'member-app',
  	//templateUrl: '../templates/member.html',
  	template: '<p>test</p>',
  	providers: [MemberService]
})
export class MemberComponent { 
  	public alerts :Array<Alert>;
	public messages : Array<Message>;
	public member : Member;
  	constructor(memberService: MemberService){
  		this.alerts = memberService.alerts;
  		this.messages = memberService.messages;
  		this.member = memberService.member;
  	}
}