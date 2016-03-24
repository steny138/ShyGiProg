System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1;
    var MemberService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MemberService = (function () {
                function MemberService(http) {
                    console.log('bootstrap memberService..');
                    this.http = http;
                    this.alerts = [];
                    this.messages = [];
                    this.member = {};
                    this.getMemberInfomation();
                }
                MemberService.prototype.getMemberInfomation = function () {
                    var _this = this;
                    console.log('start loading data...');
                    this.http.get('../test_data/member.json').map(function (res) {
                        return res.json();
                    }).subscribe(function (res) {
                        _this.member = res.member;
                        _this.alerts = res.alerts;
                        _this.messages = res.messages;
                    });
                    console.log(this.member);
                };
                MemberService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MemberService);
                return MemberService;
            }());
            exports_1("MemberService", MemberService);
        }
    }
});
//# sourceMappingURL=MemberServices.js.map