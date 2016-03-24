import {bootstrap}    from 'angular2/platform/browser';
import {MemberComponent} from './member.component';
import {MemberService} from './services/MemberServices';
import {provide} from 'angular2/core';
import {Http} from 'angular2/http';

bootstrap(MemberComponent, [MemberService, provide(Http, {useClass: Http})]);
