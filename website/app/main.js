System.register(['angular2/platform/browser', './member.component', './services/MemberServices', './menu.component', './services/MenuServices', './blog.component', './services/BlogServices', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, member_component_1, MemberServices_1, menu_component_1, MenuServices_1, blog_component_1, BlogServices_1, http_1;
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
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (MenuServices_1_1) {
                MenuServices_1 = MenuServices_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (BlogServices_1_1) {
                BlogServices_1 = BlogServices_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(member_component_1.MemberComponent, [MemberServices_1.MemberService, http_1.HTTP_PROVIDERS]);
            browser_1.bootstrap(menu_component_1.MenuComponent, [MenuServices_1.MenuService, http_1.HTTP_PROVIDERS]);
            browser_1.bootstrap(blog_component_1.BlogComponent, [BlogServices_1.BlogService, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map