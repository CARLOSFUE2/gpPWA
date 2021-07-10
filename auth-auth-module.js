(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "bsvf");




const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "H8dG":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-login {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container-login .logo-img {\n  position: relative;\n  top: 20vh;\n  transition: all 1s ease-in-out;\n}\n.container-login .logo-img.login-active {\n  width: 70%;\n  top: 15vh;\n  margin-bottom: 10vh;\n}\n.container-login .form-login {\n  margin-top: 4rem;\n}\n.container-login .form-login .button-login {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUdaO0FBQUk7RUFDSSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtBQUdaIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1sb2dpbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAubG9nby1pbWd7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOjIwdmg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgICAgICAgJi5sb2dpbi1hY3RpdmV7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgdG9wOiAxNXZoO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9ybS1sb2dpbntcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICAgICAgLmJ1dHRvbi1sb2dpbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICAycmVtO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");






let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "zu2e");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "H8dG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-auth/service-auth.service */ "vA3E");






let LoginComponent = class LoginComponent {
    constructor(serviceAuth) {
        this.serviceAuth = serviceAuth;
        this.loginActive = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]);
    }
    ngOnInit() {
        this.animationInitial();
    }
    changeEmail(event) {
        this.email.setValue(event.detail.value);
    }
    changePassword(event) {
        this.password.setValue(event.detail.value);
    }
    /*create(){
      const prueba ={
        name:"carlos fuentes",
        numberPhone: "0424-4433022",
        email: "cfuentes@gmail.com",
        password:"Linda089$$",
        address:"guacara",
        identify:"v-24444116",
        vehicle:"moto"
      }
      this.serviceAuth.createDeliver(prueba).subscribe((res)=>{
        console.log(res);
      })
    }*/
    animationInitial() {
        setTimeout(function () {
            this.loginActive = true;
            console.log(this.loginActive);
        }, 3000);
    }
    onSubmit() {
        console.log(this.email.value, this.password.value);
        const data = {
            email: this.email.value,
            password: this.password.value
        };
        this.serviceAuth.login(data).subscribe((res) => {
            console.log(res);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["ServiceAuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "zu2e":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-login\">\n  <div class=\"logo-img\" [ngClass]=\"{'login-active': true }\">\n    <img src=\"../../../assets/LOGO_YA_LLEGA_ copia.png\" alt=\"\" class=\"logo\">\n  </div>\n  <div class=\"form-login\">\n    <!--form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" -->\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input \n        placeholder=\"inserta tu Correo \" \n        name=\"email\"\n        (ionChange)=\"changeEmail($event)\"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Clave</ion-label>\n        <ion-input \n        placeholder=\"inserta tu Clave \" \n        name=\"email\"\n        (ionChange)=\"changePassword($event)\"\n        type=\"password\"\n        ></ion-input>\n      </ion-item>\n      \n      <ion-button  \n      class=\"button-login\" \n      (click)=\"onSubmit()\" \n      expand=\"block\"\n      [disabled]=\"this.email.invalid && this.password.invalid\">Ingresar</ion-button>\n    <!--/form-->\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map