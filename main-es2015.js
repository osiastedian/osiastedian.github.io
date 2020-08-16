(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!********************************************************************************************************!*\
  !*** /Users/tedianosias/side_projects/tedian.dev/node_modules/raw-loader!./src/app/app.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"text-container\">\n    <h3><span>Hi I'm</span> Ted!</h3>\n    <p>\n      I'm a Full Stack Software Development Engineer for\n      <a href=\"https://www.trustarc.com/\">TrustArc</a>.\n    </p>\n    <p class=\"overview-text\">\n      I've built numerous Modern, Rich Web Applications around\n      <a class=\"hover-red\" href=\"https://angular.io/\">Angular</a>,\n      <a class=\"hover-green\" href=\"https://spring.io/\">Spring</a>,\n      <a class=\"hover-blue\" href=\"https://www.docker.com/\">Docker</a>,\n      <a class=\"hover-dark-blue\" href=\"https://www.postgresql.org\">PostgreSQL</a\n      >, and <a class=\"hover-red\" href=\"https://redis.io/\">Redis</a>. In fact\n      the page you are seeing right now is built on Angular. On my spare time\n      I'm learning other technologies like\n      <a class=\"hover-orange\" href=\"https://www.tensorflow.org/\">Tensorflow </a>\n      for Machine Learning,\n      <a class=\"hover-red\" href=\"https://nestjs.com/\">NestJS</a> for Server-Side\n      Javascript,\n      <a class=\"hover-blue\" href=\"https://reactjs.org/\">ReactJS </a> for a super\n      fast and light weight front-end.\n    </p>\n    <p class=\"overview-text\">\n      I am using AWS Services like\n      <a href=\"https://aws.amazon.com/ec2/\">Elastic Compute Cloude(EC2)</a>,\n      <a href=\"https://aws.amazon.com/ecs/\">Elastic Container Service (ECS)</a>,\n      <a href=\"https://aws.amazon.com/ecr/\">Elastic Container Registry(ECR)</a>,\n      <a href=\"https://aws.amazon.com/route53/\"> Route 53</a>, and\n      <a href=\"https://aws.amazon.com/certificate-manager/\">\n        Certificate Manager(CM)</a\n      >\n      integrated with Continous Integration - Continute Deployment (CICD) tools\n      like <a href=\"https://kubernetes.io/\">Kubernetes</a> and\n      <a href=\"https://www.gocd.org/\">GoCD</a>.\n    </p>\n    <div class=\"d-flex my-2\">\n      <div class=\"d-flex align-items-center\">\n        <span class=\"mr-1\">Connect:</span>\n        <a href=\"https://www.linkedin.com/in/osiastedian/\">\n          <img class=\"social-icon\" src=\"/assets/logos/linkedin-in.svg\" alt=\"\" />\n        </a>\n      </div>\n      <button (click)=\"contactMe()\" class=\"ml-auto primary-button\">Let's talk.</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n  background-image: url(\"/assets/images/developer-open-laptop.jpg\");\n  background-position: center;\n  background-size: cover;\n  grid-template-columns: 50% 50%;\n}\n\n@media (max-width: 800px) {\n  .main-container {\n    grid-template-columns: 100%;\n  }\n}\n\n.text-container {\n  color: #dedede;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #010101aa;\n}\n\n.text-container a {\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  transition: border 0.5s ease-in-out;\n}\n\n.hover-red:hover {\n  color: #c3002f !important;\n}\n\n.hover-blue:hover {\n  color: #61dafb !important;\n}\n\n.hover-green:hover {\n  color: #6db33f !important;\n}\n\n.hover-dark-blue:hover {\n  color: #336791 !important;\n}\n\n.hover-orange:hover {\n  color: #ff9100 !important;\n}\n\n.overview-text {\n  font-weight: 100;\n  font-size: 12px;\n}\n\n.primary-button {\n  padding: 10px;\n  background-color: transparent;\n  transition: all 0.15s ease-in-out;\n  width: 140px;\n  font-weight: 100;\n  border: 1px solid white;\n  color: white;\n}\n\n.primary-button:hover {\n  background-color: #ffffff44;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-end {\n  justify-content: flex-end;\n}\n\n.social-icon {\n  height: 16px;\n  width: 16px;\n  border: 1px solid white;\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.social-icon:hover {\n  background-color: #ffffff44;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.my-2 {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n.mr-1 {\n  margin-right: 1em;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWRpYW5vc2lhcy9zaWRlX3Byb2plY3RzL3RlZGlhbi5kZXYvYXBwcy90ZWRpYW4tZGV2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiYXBwcy90ZWRpYW4tZGV2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUVBTndCO0VBT3hCLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0U7SUFDRSwyQkFBQTtFQ0hGO0FBQ0Y7O0FETUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNKRjs7QURNRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7QUNKSjs7QURRQTtFQUNFLHlCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7QUNMRjs7QURRQTtFQUNFLHlCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFwRW1CO0FDK0RyQjs7QURPRTtFQUNFLDJCQUFBO0FDTEo7O0FEU0E7RUFDRSxhQUFBO0FDTkY7O0FEU0E7RUFDRSx5QkFBQTtBQ05GOztBRFNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsMkJBQUE7QUNOSjs7QURVQTtFQUNFLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtBQ1BGIiwiZmlsZSI6ImFwcHMvdGVkaWFuLWRldi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0ZXh0LWRlZmF1bHQtY29sb3I6IHdoaXRlO1xuJGJhY2tncm91bmQtY29sb3ItZGVmYXVsdDogIzFkMWQxZDtcbiRoZWFkZXItYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZGV2ZWxvcGVyLW9wZW4tbGFwdG9wLmpwZ1wiKTtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAkaGVhZGVyLWJhY2tncm91bmQtaW1hZ2U7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIH1cbn1cblxuLnRleHQtY29udGFpbmVyIHtcbiAgY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMTAxYWE7XG5cbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4uaG92ZXItcmVkOmhvdmVyIHtcbiAgY29sb3I6ICNjMzAwMmYgIWltcG9ydGFudDtcbn1cblxuLmhvdmVyLWJsdWU6aG92ZXIge1xuICBjb2xvcjogIzYxZGFmYiAhaW1wb3J0YW50O1xufVxuXG4uaG92ZXItZ3JlZW46aG92ZXIge1xuICBjb2xvcjogIzZkYjMzZiAhaW1wb3J0YW50O1xufVxuXG4uaG92ZXItZGFyay1ibHVlOmhvdmVyIHtcbiAgY29sb3I6ICMzMzY3OTEgIWltcG9ydGFudDtcbn1cblxuLmhvdmVyLW9yYW5nZTpob3ZlciB7XG4gIGNvbG9yOiAjZmY5MTAwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVydmlldy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogJHRleHQtZGVmYXVsdC1jb2xvcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDQ7XG4gIH1cbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnNvY2lhbC1pY29uIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDQ7XG4gIH1cbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5teS0yIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5tci0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iLCIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2RldmVsb3Blci1vcGVuLWxhcHRvcC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIH1cbn1cbi50ZXh0LWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjZGVkZWRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDEwMWFhO1xufVxuLnRleHQtY29udGFpbmVyIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaG92ZXItcmVkOmhvdmVyIHtcbiAgY29sb3I6ICNjMzAwMmYgIWltcG9ydGFudDtcbn1cblxuLmhvdmVyLWJsdWU6aG92ZXIge1xuICBjb2xvcjogIzYxZGFmYiAhaW1wb3J0YW50O1xufVxuXG4uaG92ZXItZ3JlZW46aG92ZXIge1xuICBjb2xvcjogIzZkYjMzZiAhaW1wb3J0YW50O1xufVxuXG4uaG92ZXItZGFyay1ibHVlOmhvdmVyIHtcbiAgY29sb3I6ICMzMzY3OTEgIWltcG9ydGFudDtcbn1cblxuLmhvdmVyLW9yYW5nZTpob3ZlciB7XG4gIGNvbG9yOiAjZmY5MTAwICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVydmlldy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJpbWFyeS1idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJpbWFyeS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc29jaWFsLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNDQ7XG59XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubXktMiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ubXItMSB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG4ubWwtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "Welcome | TedIan.dev";
    }
    contactMe() {
        const aElem = document.createElement('a');
        aElem.href = "mailto:osiastedian@gmail.com";
        document.body.append(aElem);
        aElem.click();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "tedian-dev-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tedianosias/side_projects/tedian.dev/apps/tedian-dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map