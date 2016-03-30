import {Inject, Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {ViewEnabled} from './Filters';

@Injectable()
export class MenuService {
	public http: Http;

    constructor(http: Http) {
        console.log('bootstrap menuService..');
        this.http = http;
        //this.getMemberInfomation();
    }

    getMenus() {
		console.log('start loading data...');
        return this.http.get('./app/test_data/menu.json')
			.map((res: Response) => res.json());
    }
}

export interface Menu extends ViewEnabled {
	name: string;
	icon: string;
	link: string;
}