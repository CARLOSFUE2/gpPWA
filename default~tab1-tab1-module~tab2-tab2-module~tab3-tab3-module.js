(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"],{

/***/ "1fNh":
/*!*********************************************!*\
  !*** ./src/app/components/alert/alert.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-request {\n  height: 36px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FsZXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImFsZXJ0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXJlcXVlc3R7XG4gICAgaGVpZ2h0OjM2cHg7XG4gICAgbWFyZ2luOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "2m//":
/*!*******************************************************!*\
  !*** ./src/app/services/delivery/delivery.service.ts ***!
  \*******************************************************/
/*! exports provided: DeliveryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return DeliveryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let DeliveryService = class DeliveryService {
    constructor(http) {
        this.http = http;
        this.backUrl = 'http://localhost:3000';
    }
    listAllDelivery() {
        return this.http.get(this.backUrl + '/request');
    }
    deliverDetail(id) {
        return this.http.get(this.backUrl + '/request/' + id);
    }
    changeStatusDelivery(id, status) {
        return this.http.put(this.backUrl + '/request/select/' + id, { status });
    }
};
DeliveryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DeliveryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DeliveryService);



/***/ }),

/***/ "9t+z":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body-chat {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  position: fixed;\n  bottom: 90px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.body-chat .message-admin {\n  background: #5f4384;\n  color: white;\n  padding: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 70vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0.5rem;\n  margin: 1rem 0;\n  margin-left: 1rem;\n}\n.body-chat .message-deliver {\n  background: #7e6999;\n  color: white;\n  padding: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 70vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0.5rem;\n  margin-top: 1rem;\n  margin-right: 1rem;\n  float: right;\n}\n.footer-chat {\n  display: flex;\n  flex-wrap: nowrap;\n  position: fixed;\n  bottom: 0.5rem;\n}\n.footer-chat ion-item {\n  width: 80vw;\n}\n.footer-chat ion-fab {\n  position: relative;\n  left: 2vw;\n  top: 16px;\n  transform: scale(0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYXQtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUo7QUFESTtFQUNJLFdBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBR1IiLCJmaWxlIjoiY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1jaGF0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogOTBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIC5tZXNzYWdlLWFkbWlue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNWY0Mzg0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cbiAgICAubWVzc2FnZS1kZWxpdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjN2U2OTk5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuLmZvb3Rlci1jaGF0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLjVyZW07XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgIH1cbiAgICBpb24tZmFie1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDJ2dztcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC43KTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "AmB2":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-window/chat-window.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body-chat\">\n\n  <div class=\"message\" *ngFor=\"let message of listMessage\">\n    <div class=\"message-admin\" *ngIf=\"message.type == 'admin'\">{{message.body}}</div>\n    <div class=\"message-deliver\" *ngIf=\"message.type == 'deliver'\"> {{message.body}}</div>\n  </div>\n\n</div>\n<div class=\"footer-chat\">\n  <ion-item>\n      <ion-label position=\"floating\">Mensaje</ion-label>\n      <ion-input \n      placeholder=\"inserta tu mensaje \" \n      name=\"message\"\n      (ionChange)=\"change($event)\"\n      [clearInput]=true\n      [value]=\"valueInitial\"\n      ></ion-input>\n  </ion-item>\n    <ion-fab >\n    <ion-fab-button (click)=\"sendMessage()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</div>\n\n");

/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "rJJk");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "Pn+3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
    history() {
        alert('ir al historial');
    }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "Pn+3":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-profile {\n  width: 150px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  margin-top: 1rem;\n}\n.image-profile img {\n  border-radius: 100%;\n}\n.body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.body .name {\n  margin: 10px 0;\n  font-size: 17px;\n}\n.body .value {\n  color: #3171e0;\n}\n.body .row {\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n.body .row .key-amount {\n  margin-top: 8px;\n}\n.container-button {\n  width: 90%;\n  margin: auto;\n}\n.container-button ion-button {\n  font-size: 18px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDSSxtQkFBQTtBQUVSO0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdSO0FBREk7RUFDSSxjQUFBO0FBR1I7QUFESTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBR1I7QUFGUTtFQUNJLGVBQUE7QUFJWjtBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFHSjtBQUZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSVIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1wcm9maWxle1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFyZW0gO1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG59XG4uYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAubmFtZXtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZToxN3B4O1xuICAgIH1cbiAgICAudmFsdWV7XG4gICAgICAgIGNvbG9yOiAjMzE3MWUwO1xuICAgIH1cbiAgICAucm93e1xuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAua2V5LWFtb3VudHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jb250YWluZXItYnV0dG9ue1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "QQAA":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "m1kx");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "huSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "QyiM":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-delivery/list-delivery.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDeliveryComponent", function() { return ListDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_delivery_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-delivery.component.html */ "cw2X");
/* harmony import */ var _list_delivery_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-delivery.component.scss */ "lWDm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_delivery_delivery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/delivery/delivery.service */ "2m//");





let ListDeliveryComponent = class ListDeliveryComponent {
    constructor(serviceDelivery) {
        this.serviceDelivery = serviceDelivery;
        this.requestSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"];
        this.requests = [];
        this.listResponse = [];
    }
    ngOnInit() {
        this.serviceDelivery.listAllDelivery().subscribe((res) => {
            console.log(res);
            res.forEach(element => {
                let response = {
                    _id: element._id,
                    clientId: element.clientId,
                    date: element.date,
                    destiny: element.destiny,
                    distance: 1,
                    origin: element.origin,
                    product: element.product,
                    status: element.status,
                    userId: element.userId,
                    value: parseInt(element.value),
                };
                // if(element.status == 'En Espera'){            
                this.requests.push(response);
                // }
            });
        }, (err) => {
            console.log(err);
        });
    }
    idRequestSelect(idSelect) {
        this.requestSelect.emit(idSelect);
    }
};
ListDeliveryComponent.ctorParameters = () => [
    { type: _services_delivery_delivery_service__WEBPACK_IMPORTED_MODULE_4__["DeliveryService"] }
];
ListDeliveryComponent.propDecorators = {
    requestSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ListDeliveryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-delivery',
        template: _raw_loader_list_delivery_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_delivery_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListDeliveryComponent);



/***/ }),

/***/ "a4M4":
/*!*******************************************!*\
  !*** ./src/app/components/alert/alert.ts ***!
  \*******************************************/
/*! exports provided: AlertExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExample", function() { return AlertExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.html */ "xzoQ");
/* harmony import */ var _alert_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.scss */ "1fNh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let AlertExample = class AlertExample {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
        this.textButtonShow = 'Alert';
        this.idRequestSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlertMultipleButtons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['Cancel', 'Open Modal', 'Delete']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertRequestSelect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmar',
                message: 'Acepto tomar el pedido',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Acepto',
                        handler: () => {
                            this.idRequestSelect.emit(this.element._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertRequestCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Cancelar la entrega del pedido',
                message: 'Al cancelar la entrega recibira una amonestacion de un 30% del costo del pedido',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Acepto ',
                        handler: () => {
                            this.idRequestSelect.emit(this.element._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertRequestFinalice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Pedido entregado',
                message: 'Confirma para agregar este pedido a tu historial de entregas.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Acepto ',
                        handler: () => {
                            this.idRequestSelect.emit(this.element._id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Prompt!',
                inputs: [
                    {
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Placeholder 1'
                    },
                    {
                        name: 'name2',
                        type: 'text',
                        id: 'name2-id',
                        value: 'hello',
                        placeholder: 'Placeholder 2'
                    },
                    // multiline input.
                    {
                        name: 'paragraph',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'Placeholder 3'
                    },
                    {
                        name: 'name3',
                        value: 'http://ionicframework.com',
                        type: 'url',
                        placeholder: 'Favorite site ever'
                    },
                    // input date with min & max
                    {
                        name: 'name4',
                        type: 'date',
                        min: '2017-03-01',
                        max: '2018-01-12'
                    },
                    // input date without min nor max
                    {
                        name: 'name5',
                        type: 'date'
                    },
                    {
                        name: 'name6',
                        type: 'number',
                        min: -5,
                        max: 10
                    },
                    {
                        name: 'name7',
                        type: 'number'
                    },
                    {
                        name: 'name8',
                        type: 'password',
                        placeholder: 'Advanced Attributes',
                        cssClass: 'specialClass',
                        attributes: {
                            maxlength: 4,
                            inputmode: 'decimal'
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertRadio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Radio',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Radio 1',
                        value: 'value1',
                        handler: () => {
                            console.log('Radio 1 selected');
                        },
                        checked: true
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Radio 2',
                        value: 'value2',
                        handler: () => {
                            console.log('Radio 2 selected');
                        }
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Radio 3',
                        value: 'value3',
                        handler: () => {
                            console.log('Radio 3 selected');
                        }
                    },
                    {
                        name: 'radio4',
                        type: 'radio',
                        label: 'Radio 4',
                        value: 'value4',
                        handler: () => {
                            console.log('Radio 4 selected');
                        }
                    },
                    {
                        name: 'radio5',
                        type: 'radio',
                        label: 'Radio 5',
                        value: 'value5',
                        handler: () => {
                            console.log('Radio 5 selected');
                        }
                    },
                    {
                        name: 'radio6',
                        type: 'radio',
                        label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                        value: 'value6',
                        handler: () => {
                            console.log('Radio 6 selected');
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertCheckbox() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Checkbox',
                inputs: [
                    {
                        name: 'checkbox1',
                        type: 'checkbox',
                        label: 'Checkbox 1',
                        value: 'value1',
                        handler: () => {
                            console.log('Checkbox 1 selected');
                        },
                        checked: true
                    },
                    {
                        name: 'checkbox2',
                        type: 'checkbox',
                        label: 'Checkbox 2',
                        value: 'value2',
                        handler: () => {
                            console.log('Checkbox 2 selected');
                        }
                    },
                    {
                        name: 'checkbox3',
                        type: 'checkbox',
                        label: 'Checkbox 3',
                        value: 'value3',
                        handler: () => {
                            console.log('Checkbox 3 selected');
                        }
                    },
                    {
                        name: 'checkbox4',
                        type: 'checkbox',
                        label: 'Checkbox 4',
                        value: 'value4',
                        handler: () => {
                            console.log('Checkbox 4 selected');
                        }
                    },
                    {
                        name: 'checkbox5',
                        type: 'checkbox',
                        label: 'Checkbox 5',
                        value: 'value5',
                        handler: () => {
                            console.log('Checkbox 5 selected');
                        }
                    },
                    {
                        name: 'checkbox6',
                        type: 'checkbox',
                        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                        value: 'value6',
                        handler: () => {
                            console.log('Checkbox 6 selected');
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AlertExample.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AlertExample.propDecorators = {
    textButtonShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    element: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idRequestSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
AlertExample = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'alert',
        template: _raw_loader_alert_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertExample);



/***/ }),

/***/ "cw2X":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-delivery/list-delivery.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-list>\n  <ion-item *ngFor=\"let request of requests\">\n    <ion-card class=\"card\">\n      <ion-item>\n        <ion-icon name=\"bicycle\" slot=\"start\"></ion-icon>\n        <ion-card-subtitle>{{request.product}}</ion-card-subtitle>\n      </ion-item>\n    \n      <ion-card-content class=\"content\">\n        <ion-card-title class=\"price\">{{request.value}}$</ion-card-title>\n        <p>De {{request.origin}} a {{request.destiny}}</p>\n        <p>Distancia a recorrer: {{request.distance}}km</p>\n        <p>Estatus: {{request.status}}</p>\n        <div class=\"botonera\">\n          <alert \n          textButtonShow='Tomar Pedido' \n          class=\"alert\"\n          type=\"pedido\"\n          [element]=\"request\"\n          (idRequestSelect)=\"idRequestSelect($event)\"\n          ></alert>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-item>\n\n</ion-list>");

/***/ }),

/***/ "e2wl":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_window_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat-window.component.html */ "AmB2");
/* harmony import */ var _chat_window_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-window.component.scss */ "9t+z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChatWindowComponent = class ChatWindowComponent {
    constructor() {
        this.listMessage = [
            {
                type: "admin",
                body: "hola desde el admin"
            }
        ];
    }
    ngOnInit() {
    }
    change(event) {
        this.message = event.detail.value;
    }
    sendMessage() {
        const message = {
            type: 'deliver',
            body: this.message
        };
        this.listMessage.push(message);
    }
};
ChatWindowComponent.ctorParameters = () => [];
ChatWindowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat-window',
        template: _raw_loader_chat_window_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_window_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatWindowComponent);



/***/ }),

/***/ "huSS":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_delivery_list_delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-delivery/list-delivery.component */ "QyiM");
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert */ "a4M4");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "DZ0t");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "e2wl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_delivery_list_delivery_component__WEBPACK_IMPORTED_MODULE_3__["ListDeliveryComponent"],
            _alert_alert__WEBPACK_IMPORTED_MODULE_4__["AlertExample"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__["ChatWindowComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        exports: [
            _list_delivery_list_delivery_component__WEBPACK_IMPORTED_MODULE_3__["ListDeliveryComponent"],
            _alert_alert__WEBPACK_IMPORTED_MODULE_4__["AlertExample"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_6__["ChatWindowComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "lWDm":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-delivery/list-delivery.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  width: 100%;\n}\n.card ion-icon {\n  color: #3171e0;\n}\n.card ion-card-subtitle {\n  margin-left: 10px;\n  margin-bottom: 0;\n}\n.card .boxHeader {\n  display: flex;\n}\n.card .boxHeader .description-title {\n  width: 80%;\n}\n.card .boxHeader .image {\n  width: 20%;\n  margin-top: 30px;\n}\n.card .boxHeader .image img {\n  width: 40px;\n  border-radius: 100%;\n  height: 40px;\n}\n.card .content {\n  padding-top: 0;\n}\n.card .content .price {\n  margin: 15px 0px 5px 0px;\n  text-align: center;\n  color: #3171e0;\n}\n.card .content p {\n  text-align: center;\n}\n.card .botonera {\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n}\n.card .botonera .alert {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QtZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0FBRVI7QUFEUTtFQUNJLFVBQUE7QUFHWjtBQURRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBR1o7QUFGWTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFJaEI7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQURRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7QUFHWjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtBQUdaIiwiZmlsZSI6Imxpc3QtZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMzMTcxZTA7XG4gICAgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmJveEhlYWRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLmRlc2NyaXB0aW9uLXRpdGxle1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIC5wcmljZXtcbiAgICAgICAgICAgIG1hcmdpbjoxNXB4IDBweCA1cHggMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMzMTcxZTA7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuICAgICAgICB9XG4gICAgfVxuICAgIC5ib3RvbmVyYXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIC5hbGVydHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAvL2JveC1zaGFkb3c6IDVweCAzcHggNHB4ICMzODgwZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "m1kx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>\n<!--ion-avatar>\n  <img src=\"../../assets/IDPhoto_20201217_114953.jpg\">\n</ion-avatar>\n\n<ion-chip>\n  <ion-avatar>\n    <img src=\"../../assets/IDPhoto_20201217_114953.jpg\">\n  </ion-avatar>\n  <ion-label>Chip Avatar</ion-label>\n</ion-chip-->\n");

/***/ }),

/***/ "qtYk":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "QQAA");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "rJJk":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <div class=\"image-profile\">\n    <img class=\"image-logo\" src=\"assets/img-Profile.jpg\" alt=\"\">\n  </div>\n  <ion-card-header>\n    <div class=\"body\">\n      <ion-card-subtitle class=\"name\">Carlos Fuentes</ion-card-subtitle>\n      <div class=\"row\">\n        <ion-card-subtitle class=\"key-amount\">Acumulado:</ion-card-subtitle>\n        <ion-card-title class=\"value\">300000$</ion-card-title>\n      </div>\n      <div class=\"row\">\n        <ion-card-subtitle class=\"key\">Fecha de cobro:</ion-card-subtitle>\n        <ion-card-subtitle class=\"value\">12/02/21</ion-card-subtitle>\n      </div>\n      <div class=\"row\">\n        <ion-card-subtitle class=\"key\">Km recorridos:</ion-card-subtitle>\n        <ion-card-subtitle class=\"value\">45km</ion-card-subtitle>\n      </div>\n      <div class=\"row\">\n        <ion-card-subtitle class=\"key\">Cantidad de pedidos:</ion-card-subtitle>\n        <ion-card-subtitle class=\"value\">9</ion-card-subtitle>\n      </div>\n    </div>\n  </ion-card-header >\n  <div class=\"container-button\">\n    <ion-button expand=\"block\" (click)='history()'>Ver historial</ion-button>\n  </div>\n  <ion-card-content>\n\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "xzoQ":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-button expand=\"block\" (click)=\"presentAlertRequestSelect()\" *ngIf=\"type =='pedido'\">{{textButtonShow}}</ion-button>\n<ion-button class=\"button-request\" color=\"danger\" expand=\"block\" (click)=\"presentAlertRequestCancel()\" *ngIf=\"type =='cancelar-pedido'\">{{textButtonShow}}</ion-button>\n<ion-button class=\"button-request\" color=\"success\" expand=\"block\" (click)=\"presentAlertRequestFinalice()\" *ngIf=\"type =='entregar-pedido'\">{{textButtonShow}}</ion-button>");

/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module.js.map