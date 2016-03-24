import {bootstrap}    from 'angular2/platform/browser';
import {MemberComponent} from './member.component';
import {MemberService} from './services/MemberServices';

bootstrap(MemberComponent, [MemberService]);
