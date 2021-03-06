"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var error_interceptor_1 = require("./error.interceptor");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var member_list_component_1 = require("./member-list/member-list.component");
var lists_component_1 = require("./lists/lists.component");
var messages_component_1 = require("./messages/messages.component");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent,
                member_list_component_1.MemberListComponent,
                lists_component_1.ListsComponent,
                messages_component_1.MessagesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                dropdown_1.BsDropdownModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            providers: [
                error_interceptor_1.ErrorInterceptorProvider
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
