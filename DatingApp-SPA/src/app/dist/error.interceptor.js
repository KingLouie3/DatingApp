"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ErrorInteceptor = /** @class */ (function () {
    function ErrorInteceptor() {
    }
    ErrorInteceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(operators_1.catchError(function (error) {
            if (error.status === 401) {
                console.log('test', error.statusText);
                return rxjs_1.throwError(error.statusText);
            }
            if (error instanceof http_1.HttpErrorResponse) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return rxjs_1.throwError(applicationError);
                }
                var serverError = error.error;
                var modalStateErrors = '';
                if (serverError.errors && typeof serverError.errors === 'object') {
                    for (var key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modalStateErrors += serverError.errors[key] + '\n';
                        }
                    }
                }
                return rxjs_1.throwError(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInteceptor = __decorate([
        core_1.Injectable()
    ], ErrorInteceptor);
    return ErrorInteceptor;
}());
exports.ErrorInteceptor = ErrorInteceptor;
exports.ErrorInterceptorProvider = {
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: ErrorInteceptor,
    multi: true
};
