System.register(['angular2/core', './services/MenuServices', './services/Filters'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, MenuServices_1, Filters_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MenuServices_1_1) {
                MenuServices_1 = MenuServices_1_1;
            },
            function (Filters_1_1) {
                Filters_1 = Filters_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(menuService) {
                    var _this = this;
                    this._menuService = menuService;
                    this._menuService.getMenus().subscribe(function (res) {
                        _this.menus = res.menus;
                    });
                    this.menus = [];
                }
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-app',
                        templateUrl: '../templates/menu.html',
                        providers: [MenuServices_1.MenuService],
                        pipes: [Filters_1.FilterDisalbedPipe]
                    }), 
                    __metadata('design:paramtypes', [MenuServices_1.MenuService])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map