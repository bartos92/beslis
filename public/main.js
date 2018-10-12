(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'prot';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tnc/tnc.component */ "./src/app/tnc/tnc.component.ts");
/* harmony import */ var _experiment_experiment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experiment/experiment.component */ "./src/app/experiment/experiment.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thanks/thanks.component */ "./src/app/thanks/thanks.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'terms', component: _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_6__["TncComponent"] },
    { path: 'experiment', component: _experiment_experiment_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentComponent"] },
    { path: 'survey', component: _survey_survey_component__WEBPACK_IMPORTED_MODULE_8__["SurveyComponent"] },
    { path: 'thanks', component: _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__["ThanksComponent"] },
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'intro' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                _tnc_tnc_component__WEBPACK_IMPORTED_MODULE_6__["TncComponent"],
                _experiment_experiment_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentComponent"],
                _survey_survey_component__WEBPACK_IMPORTED_MODULE_8__["SurveyComponent"],
                _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_9__["ThanksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/experiment/experiment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experiment/experiment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/experiment/experiment.component.html":
/*!******************************************************!*\
  !*** ./src/app/experiment/experiment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Round {{round}}</div>\n    <div class=\"card-body\">\n        <div>\n            <img [src]=\"'assets/color'+round+'.png'\">\n            <div class=\"mt-3 justify-content-around d-flex\">\n                <button class=\"btn btn-default\" (click)=\"nextRound()\">Harmonious</button>\n                <button class=\"btn btn-default\" (click)=\"nextRound()\">Disharmonious</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/experiment/experiment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experiment/experiment.component.ts ***!
  \****************************************************/
/*! exports provided: ExperimentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentComponent", function() { return ExperimentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperimentComponent = /** @class */ (function () {
    function ExperimentComponent(router) {
        this.router = router;
        this.round = 1;
    }
    ExperimentComponent.prototype.ngOnInit = function () {
    };
    ExperimentComponent.prototype.nextRound = function () {
        if (this.round === 4) {
            this.router.navigate(['survey']);
        }
        else {
            this.round += 1;
        }
    };
    ExperimentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experiment',
            template: __webpack_require__(/*! ./experiment.component.html */ "./src/app/experiment/experiment.component.html"),
            styles: [__webpack_require__(/*! ./experiment.component.css */ "./src/app/experiment/experiment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ExperimentComponent);
    return ExperimentComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Visual Perception Experiment\n    </div>\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Explanation</h5>\n        This is a short visual perception experiment. The experiment consists of four rounds. Every round you will be shown a color\n        palette, and we ask you to indicate whether this palette is harmonious or disharmonious.\n\n        <h6 class=\"card-title\" style=\"margin-bottom:0;margin-top:0.75rem\">Definitions</h6>\n        Within this experiment, harmonious has the following definition:\n        <i>forming a pleasant whole</i>. Disharmonious is the opposite of harmonious.\n        <br>\n        <br> When you're ready, press the start button to begin.\n        <br>\n        <br> Thanks in advance,\n        <br> Cas, Bart and Joren\n    </div>\n    <div class=\"card-footer\">\n        <button class=\"btn btn-primary float-right\" routerLink=\"/terms\">Start</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey.component.css":
/*!*********************************************!*\
  !*** ./src/app/survey/survey.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/survey/survey.component.html":
/*!**********************************************!*\
  !*** ./src/app/survey/survey.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Final survey</div>\n    <div class=\"card-body\">\n        <form [formGroup]=\"survey\" (ngSubmit)=\"onSubmit()\" id=\"surveyForm\">\n            First question\n            <input class=\"form-control\" type=\"text\" formControlName=\"q1\">\n            Second question\n            <input class=\"form-control\" type=\"text\" formControlName=\"q2\">\n            Third question\n            <input class=\"form-control\" type=\"text\" formControlName=\"q3\">\n        </form>\n    </div>\n    <div class=\"card-footer\">\n        <button class=\"float-right btn btn-primary\" [disabled]=\"!survey.valid\" type=\"submit\" form=\"surveyForm\">Finish</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/survey/survey.component.ts":
/*!********************************************!*\
  !*** ./src/app/survey/survey.component.ts ***!
  \********************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.survey = formBuilder.group({
            q1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            q3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SurveyComponent.prototype.onSubmit = function () {
        // submit results
        this.router.navigate(["thanks"]);
    };
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(/*! ./survey.component.html */ "./src/app/survey/survey.component.html"),
            styles: [__webpack_require__(/*! ./survey.component.css */ "./src/app/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/thanks/thanks.component.css":
/*!*********************************************!*\
  !*** ./src/app/thanks/thanks.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thanks/thanks.component.html":
/*!**********************************************!*\
  !*** ./src/app/thanks/thanks.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Thank you for participating!</div>\n    <div class=\"card-body\">\n        Your results have been succesfully submitted.\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/thanks/thanks.component.ts":
/*!********************************************!*\
  !*** ./src/app/thanks/thanks.component.ts ***!
  \********************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThanksComponent = /** @class */ (function () {
    function ThanksComponent() {
    }
    ThanksComponent.prototype.ngOnInit = function () {
    };
    ThanksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thanks',
            template: __webpack_require__(/*! ./thanks.component.html */ "./src/app/thanks/thanks.component.html"),
            styles: [__webpack_require__(/*! ./thanks.component.css */ "./src/app/thanks/thanks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThanksComponent);
    return ThanksComponent;
}());



/***/ }),

/***/ "./src/app/tnc/tnc.component.css":
/*!***************************************!*\
  !*** ./src/app/tnc/tnc.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\r\n    height: 70vh;\r\n    overflow: auto;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/tnc/tnc.component.html":
/*!****************************************!*\
  !*** ./src/app/tnc/tnc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Terms and Conditions\n    </div>\n    <div class=\"card-body\">\n        <p>These terms and conditions outline the rules and regulations for the use of this website.</p>\n        <br />\n        <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use this website\n            if you do not accept all of the terms and conditions stated on this page.</p>\n        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any\n            or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting\n            the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.\n            “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All\n            terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance\n            to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means,\n            for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products,\n            in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the\n            singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring\n            to same.</p>\n        <h5>Cookies</h5>\n        <p>We employ the use of cookies. By using {{company}}'s website you consent to the use of cookies in accordance with\n            {{company}}’s privacy policy.</p>\n        <p>Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies\n            are used in some areas of our site to enable the functionality of this area and ease of use for those people\n            visiting. Some of our affiliate / advertising partners may also use cookies.</p>\n        <h5>License</h5>\n        <p>Unless otherwise stated, {{company}} and/or it’s licensors own the intellectual property rights for all material\n            on {{company}}. All intellectual property rights are reserved. You may view and/or print pages from http://website.ctrlf\n            for your own personal use subject to restrictions set in these terms and conditions.</p>\n        <p>You must not:</p>\n        <ol>\n            <li>Republish material from http://website.ctrlf</li>\n            <li>Sell, rent or sub-license material from http://website.ctrlf</li>\n            <li>Reproduce, duplicate or copy material from http://website.ctrlf</li>\n        </ol>\n        <p>Redistribute content from {{company}} (unless content is specifically made for redistribution).</p>\n        <h5>Hyperlinking to our Content</h5>\n        <ol>\n            <li>The following organizations may link to our Web site without prior written approval:\n                <ol>\n                    <li>Government agencies;</li>\n                    <li>Search engines;</li>\n                    <li>News organizations;</li>\n                    <li>Online directory distributors when they list us in the directory may link to our Web site in the same\n                        manner as they hyperlink to the Web sites of other listed businesses; and</li>\n                    <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,\n                        and charity fundraising groups which may not hyperlink to our Web site.</li>\n                </ol>\n            </li>\n        </ol>\n        <ol start=\"2\">\n            <li>These organizations may link to our home page, to publications or to other Web site information so long as the\n                link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of\n                the linking party and its products or services; and (c) fits within the context of the linking party's site.\n            </li>\n            <li>We may consider and approve in our sole discretion other link requests from the following types of organizations:\n                <ol>\n                    <li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile\n                        Association, AARP and Consumers Union;</li>\n                    <li>dot.com community sites;</li>\n                    <li>associations or other groups representing charities, including charity giving sites,</li>\n                    <li>online directory distributors;</li>\n                    <li>internet portals;</li>\n                    <li>accounting, law and consulting firms whose primary clients are businesses; and</li>\n                    <li>educational institutions and trade associations.</li>\n                </ol>\n            </li>\n        </ol>\n        <p>We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably\n            on us or our accredited businesses (for example, trade associations or other organizations representing inherently\n            suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization\n            does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the\n            hyperlink outweighs the absence of\n            <?=$companyName?>; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial\n                content in a newsletter or similar product furthering the mission of the organization.</p>\n\n        <p>These organizations may link to our home page, to publications or to other Web site information so long as the link:\n            (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking\n            party and it products or services; and (c) fits within the context of the linking party's site.\n        </p>\n\n        <p>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you\n            must notify us by sending an e-mail to\n            <a href=\"mailto:email@ctrlf\" title=\"send an email to email@ctrlf\">email@ctrlf</a>. Please include your name, your organization name, contact information (such as a phone number\n            and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our\n            Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>\n\n        <p>Approved organizations may hyperlink to our Web site as follows:</p>\n\n        <ol>\n            <li>By use of our corporate name; or</li>\n            <li>By use of the uniform resource locator (Web address) being linked to; or</li>\n            <li>By use of any other description of our Web site or material being linked to that makes sense within the context\n                and format of content on the linking party's site.</li>\n        </ol>\n        <p>No use of {{company}}’s logo or other artwork will be allowed for linking absent a trademark license agreement.\n        </p>\n        <h5>Iframes</h5>\n        <p>Without prior approval and express written permission, you may not create frames around our Web pages or use other\n            techniques that alter in any way the visual presentation or appearance of our Web site.</p>\n        <h5>Reservation of Rights</h5>\n        <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular\n            link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve\n            the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our\n            Web site, you agree to be bound to and abide by these linking terms and conditions.</p>\n        <h5>Removal of links from our website</h5>\n        <p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about\n            this. We will consider requests to remove links but will have no obligation to do so or to respond directly to\n            you.\n        </p>\n        <p>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness\n            or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website\n            is kept up to date.</p>\n        <h5>Content Liability</h5>\n        <p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and\n            defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on\n            your Web site or within any context containing content or materials that may be interpreted as libelous, obscene\n            or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any\n            third party rights.</p>\n        <h5>Disclaimer</h5>\n        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating\n            to our website and the use of this website (including, without limitation, any warranties implied by law in respect\n            of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer\n            will:\n        </p>\n        <ol>\n            <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>\n            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>\n            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>\n            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>\n        </ol>\n        <p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject\n            to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the\n            subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence)\n            and for breach of statutory duty.</p>\n        <p>To the extent that the website and the information and services on the website are provided free of charge, we will\n            not be liable for any loss or damage of any nature.</p>\n        <h5></h5>\n        <p></p>\n\n    </div>\n    <div class=\"card-footer justify-content-between d-flex\">\n        <span class=\"align-items-center d-flex\">\n            <input type=\"checkbox\" id=\"check\" class=\"float-right\" (change)=\"agreed = !agreed\" />\n            <label for=\"check\" class=\"float-right\"> I agree with the above Terms & Conditions</label>\n        </span>\n        <button class=\"btn btn-primary float-right\" (click)=\"processAndSubmit()\" [disabled]=\"!agreed\">Continue</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tnc/tnc.component.ts":
/*!**************************************!*\
  !*** ./src/app/tnc/tnc.component.ts ***!
  \**************************************/
/*! exports provided: TncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncComponent", function() { return TncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TncComponent = /** @class */ (function () {
    function TncComponent(router, http) {
        this.router = router;
        this.http = http;
        this.agreed = false;
    }
    TncComponent.prototype.ngOnInit = function () {
    };
    TncComponent.prototype.processAndSubmit = function () {
        console.log('refx');
        this.http.post('/api/userEntry', { 'duration': 90, 'concise': 0 }).toPromise();
        this.router.navigate(['/experiment']);
    };
    TncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tnc',
            template: __webpack_require__(/*! ./tnc.component.html */ "./src/app/tnc/tnc.component.html"),
            styles: [__webpack_require__(/*! ./tnc.component.css */ "./src/app/tnc/tnc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TncComponent);
    return TncComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bart/software-engineering/requirements-engineering/re-prototype/re-prototype2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map