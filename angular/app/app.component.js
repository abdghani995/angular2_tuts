"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_form_component_1 = require('./hero-form.component');
var AppComponent = (function () {
    function AppComponent() {
        this.values = '';
        this.onclickFunction = function () {
            alert(this.name);
        };
        this.onKeyUpFunction = function () {
        };
        this.model = {
            search: "",
            email: ""
        };
        this.name = "silver";
        this.lastname = "user";
    }
    // without strong typing
    AppComponent.prototype.onKey = function (event) {
        console.log(event);
        this.values += event.target.value + ' | ';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'hello-world',
            template: "<div>\n                    <h2>hello {{name}}</h2>\n                    <button (click) = \"onclickFunction()\">Click For AlErt</button>\n                    <input type = \"text\" placeholder = \"enter somethinng\" (keyup)=\"onKeyUpFunction()\" #inputbox>\n                    {{inputbox.value}}\n                    <br>\n\n                    <form #searchForm=\"ngForm\">\n                        Enter Something <input type=\"text\" required [(ngModel)]=\"model.search\" ngControl=\"search\" #inputSearch = \"ngForm\">\n                        Enter Email <input type=\"email\" required [(ngModel)]=\"model.email\" ngControl=\"email\" #inputEmail = \"ngForm\" >\n                         <p class=\"error\" [hidden]=\"inputSearch.valid\">required field</p>\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">Send</button>\n                    </form>\n                </div>\n                \n                <hero-form></hero-form>\n\n                <input (keyup)=\"onKey($event)\">\n                <p>{{values}}</p>\n                \n                ",
            styles: ["\n        .error{\n            color:red;\n            font-size:14px;\n        }\n    "],
            directives: [hero_form_component_1.HeroFormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map