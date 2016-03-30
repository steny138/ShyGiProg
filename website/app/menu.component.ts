import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {MenuService, Menu} from './services/MenuServices';
import {MemberService, Alert, Message, Member} from './services/MemberServices';
import {FilterDisalbedPipe} from './services/Filters';

@Component({
    selector: 'menu-app',
	templateUrl: '../templates/menu.html',
	providers: [MenuService],
	pipes: [FilterDisalbedPipe]
})
export class MenuComponent {
	public menus: Array<Menu>;
	
	private _menuService: MenuService;
	constructor(menuService: MenuService) {
		this._menuService = menuService;

		this._menuService.getMenus().subscribe(res => {
			this.menus = res.menus;
		});
		this.menus = [];
	}
}


