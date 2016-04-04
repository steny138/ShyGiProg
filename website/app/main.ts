import {bootstrap}    from 'angular2/platform/browser';
import {MemberComponent} from './member.component';
import {MemberService} from './services/MemberServices';

import {MenuComponent} from './menu.component';
import {MenuService} from './services/MenuServices';

import {BlogComponent} from './blog.component';
import {BlogService} from './services/BlogServices';

import {provide} from 'angular2/core';
import {Http,ConnectionBackend,HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map'

bootstrap(MemberComponent, [MemberService, HTTP_PROVIDERS]);
bootstrap(MenuComponent, [MenuService, HTTP_PROVIDERS]);
bootstrap(BlogComponent, [BlogService, HTTP_PROVIDERS]);

