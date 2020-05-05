"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.cancelRegister = new core_1.EventEmitter();
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.model).subscribe(function () {
            _this.alertify.success('registration successful');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
        console.log('cancelled');
    };
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "cancelRegister");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
