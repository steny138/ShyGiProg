import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {MemberService, Alert, Message, Member} from './services/MemberServices';
import {FilterDisalbedPipe} from './services/Filters';


@Component({
    selector: 'member-app',
	templateUrl: '../templates/member.html',
	providers: [MemberService],
	pipes: [FilterDisalbedPipe]
})
export class MemberComponent {
	public alerts: Array<Alert>;
	public messages: Array<Message>;
	public member: Member;
	private _memberService: MemberService;
	constructor(memberService: MemberService) {
		this._memberService = memberService;

		this._memberService.getMemberInfomation().subscribe(res => {
			this.member = res.member;
			this.alerts = res.alerts;
			this.messages = res.messages;
		});

		this.member = memberService.member;
		this.alerts = memberService.alerts;
		this.messages = memberService.messages;
	}
}


