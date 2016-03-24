System.register(['angular2/platform/browser', './member.component', './services/MemberServices'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, member_component_1, MemberServices_1;
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
            }],
        execute: function() {
            browser_1.bootstrap(member_component_1.MemberComponent, [MemberServices_1.MemberService]);
        }
    }
});
//# sourceMappingURL=main.js.map