System.register(['angular2/core', './services/MemberServices', './services/Filters'], function(exports_1, context_1) {
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
    var core_1, MemberServices_1, Filters_1;
    var MemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MemberServices_1_1) {
                MemberServices_1 = MemberServices_1_1;
            },
            function (Filters_1_1) {
                Filters_1 = Filters_1_1;
            }],
        execute: function() {
            MemberComponent = (function () {
                function MemberComponent(memberService) {
                    var _this = this;
                    this._memberService = memberService;
                    this._memberService.getMemberInfomation().subscribe(function (res) {
                        _this.member = res.member;
                        _this.alerts = res.alerts;
                        _this.messages = res.messages;
                    });
                    this.member = memberService.member;
                    this.alerts = memberService.alerts;
                    this.messages = memberService.messages;
                }
                MemberComponent = __decorate([
                    core_1.Component({
                        selector: 'member-app',
                        templateUrl: '../templates/member.html',
                        providers: [MemberServices_1.MemberService],
                        pipes: [Filters_1.FilterDisalbedPipe]
                    }), 
                    __metadata('design:paramtypes', [MemberServices_1.MemberService])
                ], MemberComponent);
                return MemberComponent;
            }());
            exports_1("MemberComponent", MemberComponent);
        }
    }
});
//# sourceMappingURL=member.component.js.map