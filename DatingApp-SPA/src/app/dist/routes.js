"use strict";
exports.__esModule = true;
var lists_component_1 = require("./lists/lists.component");
var messages_component_1 = require("./messages/messages.component");
var member_list_component_1 = require("./member-list/member-list.component");
var home_component_1 = require("./home/home.component");
var auth_guard_1 = require("./_guards/auth.guard");
exports.appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'members', component: member_list_component_1.MemberListComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'messages', component: messages_component_1.MessagesComponent },
            { path: 'lists', component: lists_component_1.ListsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
