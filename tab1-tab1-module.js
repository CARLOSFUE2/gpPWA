(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" >\n  <div class=\"box-title\" >\n    <img class=\"image-logo\" src=\"../../assets/LOGO_YA_LLEGA_ copia.png\" alt=\"\">\n    <span class=\"title\" *ngIf=\"!requestSelect\" >Lista de pedidos</span>\n    <span class=\"title\" *ngIf=\"requestSelect\" >Pedido Seleccionado</span>\n  </div>\n  <!--ion-header collapse=\"condense\" *ngIf=\"!requestSelect\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"../../assets/IDPhoto_20201217_114953.jpg\" alt=\"\">\n      </ion-avatar>\n      <ion-label>Carlos fuentes</ion-label>\n    </ion-item>\n  </ion-header-->\n  <div class=\"body\">\n    <app-detail-deliver \n    *ngIf=\"requestSelect\" \n    [request]=\"request\"\n    (unSelectrequest)=\"unSelectrequest($event)\"\n    (statusRequest)=\"captureStatus($event)\"\n    ></app-detail-deliver>\n    <app-list-delivery \n    *ngIf=\"!requestSelect\" \n    (requestSelect)=\"newRequestSelect($event)\"></app-list-delivery>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Cm2L":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/pages/detail-deliver/detail-deliver.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"card\">\n  <div class=\"boxHeader\">\n    <ion-card-header class=\"description-title\">\n      <ion-card-subtitle>{{request.product}}</ion-card-subtitle>\n      <ion-card-title>{{request.value}}$</ion-card-title>\n    </ion-card-header>\n    <div class=\"image\">\n      <img src=\"../../../../assets/ubicacionMaps.png\" alt=\"\">\n    </div>\n  </div>\n\n  <ion-card-content class=\"content\">\n  <p>Cliente: {{request.client}}</p>\n  <p>Numero de telefono: {{request.numberPhone}}</p>\n  <p>Origen: {{request.origin}}</p>\n  <p>Destino: {{request.destiny}}</p>\n  <p>Distancia a recorrer: {{request.distance}}km</p>\n  <p>Estatus: {{request.status}}</p>\n  </ion-card-content>\n  <div class=\"botonera\">\n    <alert \n    textButtonShow='Cancelar' \n    class=\"alert\"\n    type=\"cancelar-pedido\"\n    [element]=\"request\"\n    (idRequestSelect)=\"unSelect($event)\"\n    ></alert>\n    <alert \n    textButtonShow='Entregado' \n    class=\"alert\"\n    type=\"entregar-pedido\"\n    [element]=\"request\"\n    (idRequestSelect)=\"finalice($event)\"\n    ></alert>\n    <!--ion-button color=\"danger\" (click)=\"unSelect()\">Cancelar</ion-button-->\n    <!--ion-button color=\"success\" (click)=\"entregado()\">Entregado</ion-button-->\n  </div>\n</ion-card>\n");

/***/ }),

/***/ "GwHc":
/*!***********************************************************************!*\
  !*** ./src/app/tab1/pages/detail-deliver/detail-deliver.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetailDeliverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDeliverComponent", function() { return DetailDeliverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_deliver_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-deliver.component.html */ "Cm2L");
/* harmony import */ var _detail_deliver_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-deliver.component.scss */ "llgw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetailDeliverComponent = class DetailDeliverComponent {
    constructor() {
        this.unSelectrequest = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.statusRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.organiceRequest(this.request);
    }
    organiceRequest(element) {
        let response = {
            _id: element._id,
            client: element.client,
            numberPhone: element.numberPhone,
            clientId: element.clientId,
            date: element.date,
            destiny: element.destiny,
            distance: 1,
            origin: element.origin,
            product: element.product,
            status: element.status,
            userId: element.userId,
            value: parseInt(element.price),
        };
        this.request = response;
    }
    unSelect(id) {
        this.unSelectrequest.emit(false);
        this.statusRequest.emit({
            id,
            status: 0
        });
    }
    finalice(id) {
        this.unSelectrequest.emit(false);
        this.statusRequest.emit({
            id: this.request._id,
            status: 3
        });
    }
};
DetailDeliverComponent.ctorParameters = () => [];
DetailDeliverComponent.propDecorators = {
    request: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    unSelectrequest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    statusRequest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
DetailDeliverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-deliver',
        template: _raw_loader_detail_deliver_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_deliver_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailDeliverComponent);



/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_delivery_delivery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/delivery/delivery.service */ "2m//");





let Tab1Page = class Tab1Page {
    constructor(serviceDeliver) {
        this.serviceDeliver = serviceDeliver;
        this.requestSelect = false;
    }
    newRequestSelect(id) {
        this.serviceDeliver.changeStatusDelivery(id, 1).subscribe((response) => {
            this.serviceDeliver.deliverDetail(id).subscribe((res) => {
                this.request = res;
                this.requestSelect = true;
            }, (err) => {
                console.log(err);
            });
        }, (error) => {
            console.log(error);
        });
    }
    changeStatus(id, codeStatus) {
        this.serviceDeliver.changeStatusDelivery(id, codeStatus).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    captureStatus(request) {
        this.changeStatus(request.id, request.status);
    }
    unSelectrequest(event) {
        this.requestSelect = event;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_delivery_delivery_service__WEBPACK_IMPORTED_MODULE_4__["DeliveryService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "llgw":
/*!*************************************************************************!*\
  !*** ./src/app/tab1/pages/detail-deliver/detail-deliver.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description-title {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.description-title ion-card-subtitle {\n  margin-top: 10px;\n  font-size: 14px;\n}\n.description-title ion-card-title {\n  color: #3171e0;\n}\n.botonera {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.botonera ion-button {\n  height: 36px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RldGFpbC1kZWxpdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVSIiwiZmlsZSI6ImRldGFpbC1kZWxpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGVzY3JpcHRpb24tdGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGlvbi1jYXJkLXRpdGxle1xuICAgICAgICBjb2xvcjogIzMxNzFlMDtcbiAgICB9XG59XG4uYm90b25lcmF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGlvbi1idXR0b257XG4gICAgICAgIGhlaWdodDozNnB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background-content {\n  background-image: url('shapes.svg') !important;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.box-title {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  z-index: 10;\n  height: 60px;\n  margin-bottom: 8px;\n  padding: 12px;\n  background: white;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n  width: 100vw;\n}\n\n.box-title .title {\n  font-size: 25px;\n  color: rgba(0, 0, 0, 0.54);\n  margin-left: 12px;\n  position: relative;\n  bottom: 10px;\n}\n\n.box-title .image-logo {\n  border-radius: 100%;\n  width: 45px;\n}\n\n.body {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwySEFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUFJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBRVI7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9zaGFwZXMuc3ZnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5ib3gtdGl0bGV7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggOHB4IDEwcHggMXB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAzcHggMTRweCAycHggcmdiKDAgMCAwIC8gMTIlKTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuXG4gICAgfVxuICAgIC5pbWFnZS1sb2dve1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICB9XG59XG4uYm9keXtcbiAgICBtYXJnaW4tdG9wOjYwcHg7XG59Il19 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _pages_detail_deliver_detail_deliver_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/detail-deliver/detail-deliver.component */ "GwHc");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [
            _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"],
            _pages_detail_deliver_detail_deliver_component__WEBPACK_IMPORTED_MODULE_9__["DetailDeliverComponent"]
        ]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map