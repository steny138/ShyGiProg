System.register(['angular2/platform/browser', './member.component', './services/MemberServices', 'angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, member_component_1, MemberServices_1, core_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (member_component_1_1) {
                member_component_1 = member_component_1_1;
            },
            function (MemberServices_1_1) {
                MemberServices_1 = MemberServices_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(member_component_1.MemberComponent, [MemberServices_1.MemberService, core_1.provide(http_1.Http, { useClass: http_1.Http })]);
        }
    }
});
//# sourceMappingURL=main.js.map