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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'Frontend';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./issues.service */ "./src/app/issues.service.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// adding Routes Array with imports here

var routes = [
    { path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"] },
    { path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"] },
    { path: 'list', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"] }
];
// adding HTTP Client Module


// adding PrimeNG Modules



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
                primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_issues_service__WEBPACK_IMPORTED_MODULE_11__["IssuesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/list\">Incident Tracker</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/list\">Home</a></li>\n      <li class=\"active\"><a routerLink=\"/create\">Create Incident</a></li>\n      <li><a routerLink=\"/edit\">Update Incident</a></li>\n    </ul>\n      </div>\n</nav>\n\n<p id=\"banner-text\"><span><strong>Create New Incident</strong></span></p>\n\n<div class=\"well\">\n\n  <form class=\"form-horizontal\" >\n\n\n  <div [style.visibility]=\"showSBsuccess\"  id=\"snackbar-success\" role=\"alert\">\n    <strong>Success!</strong> Issue Added Successfully.. Redirecting to Home\n  </div> \n  <div [style.visibility]=\"showSBfailure\"  id=\"snackbar-failure\" role=\"alert\">\n    <strong>Failure!</strong> Error Adding a New Issue.. Please raise again\n  </div>\n\n\n  <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"imNum\">IM Number:</label>\n    <div class=\"col-sm-8\">\n      <input type=\"text\" class=\"form-control\" id=\"imNum\" value=\"{{latestIM}}\"  placeholder=\"IM Number\" disabled>\n    </div>\n  </div>\n\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" >Status:</label>\n      <div class=\"col-sm-8\">\n        <div class=\"radio\">\n          <label><input type=\"radio\" name=\"optradio\" value=\"Open\" checked>Open</label>\n        </div>\n        <div class=\"radio\">\n          <label><input type=\"radio\" name=\"optradio\" value=\"Pending\"disabled>Pending</label>\n        </div>\n        <div class=\"radio\">\n          <label><input type=\"radio\" name=\"optradio\" value=\"Closed\" disabled>Closed</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" >Severity:</label>\n    <div class=\"col-sm-8\">\n      <div class=\"radio\">\n        <label><input type=\"radio\" name=\"optradio1\" (click)=\"severityFunc($event)\" value=\"Low\" checked>Low</label>\n      </div>\n      <div class=\"radio\">\n        <label><input type=\"radio\" name=\"optradio1\" (click)=\"severityFunc($event)\" value=\"Medium\" >Medium</label>\n      </div>\n      <div class=\"radio\">\n        <label><input type=\"radio\" name=\"optradio1\" (click)=\"severityFunc($event)\" value=\"High\" >High</label>\n      </div>\n    </div>\n    </div>\n\n    <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"responsible\">Responsible:</label>\n    <div class=\"col-sm-8\">\n      <input type=\"email\" class=\"form-control\" id=\"responsible\" (change)=\"responsibleFunc($event)\" required placeholder=\"Add your Email\" />\n    </div>\n    </div>\n\n    <div class=\"form-group\">\n    <label class=\"control-label col-sm-2\" for=\"description\">Description:</label>\n    <div class=\"col-sm-8\">\n      <textarea class=\"form-control\" rows=\"5\" minlength=\"20\" maxlength=\"200\" id=\"description\" (change)=\"descriptionFunc($event)\" placeholder=\"Add the description of your issue\"></textarea>\n    </div>\n    </div>\n\n    <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-8\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submitIssue($event)\"> Raise IM </button>\n    </div>\n    </div>\n\n  </form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../issues.service */ "./src/app/issues.service.ts");
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



var CreateComponent = /** @class */ (function () {
    function CreateComponent(iServ, router) {
        this.iServ = iServ;
        this.router = router;
        this.im = this.latestIM;
        this.status = "Open";
        this.severity = "Low";
        this.responsible = "nothing";
        this.description = "empty";
        this.showSBsuccess = "hidden";
        this.showSBfailure = "hidden";
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iServ.getLatestIM().subscribe(function (latestIM) {
            _this.latestIM = latestIM["im"];
        }, function (err) {
            console.log("ERROR WHILE GETTING LATEST IM VAL FROM DB\n", err);
        });
    };
    CreateComponent.prototype.responsibleFunc = function (event) {
        this.responsible = event.target.value;
    };
    CreateComponent.prototype.descriptionFunc = function (event) {
        this.description = event.target.value;
    };
    CreateComponent.prototype.severityFunc = function (event) {
        this.severity = event.target.value;
    };
    CreateComponent.prototype.submitIssue = function (event) {
        var _this = this;
        console.log("OnSubmitIssue\ntitle:" + this.latestIM + "\nResp:" + this.responsible + "\nDesc:" + this.description + "\nSevere:" + this.severity);
        var formSubmit = this.iServ.addIssue(this.latestIM, this.responsible, this.description, this.severity).subscribe(function (resp) {
            console.log("Updated: ", resp);
            _this.showSBsuccess = "visible";
            setTimeout(function () {
                _this.showSBsuccess = "hidden";
                _this.showSBfailure = "hidden";
                _this.router.navigate(['list']);
            }, 5000);
        }, function (err) {
            console.log("Err Updating", err);
            _this.showSBfailure = "visible";
            setTimeout(function () {
                _this.showSBsuccess = "hidden";
                _this.showSBfailure = "hidden";
                _this.router.navigate(['create']);
            }, 5000);
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_issues_service__WEBPACK_IMPORTED_MODULE_1__["IssuesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/list\">Incident Tracker</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/list\">Home</a></li>\n      <li><a routerLink=\"/create\">Create Incident</a></li>\n      <li class=\"active\"><a routerLink=\"/edit\">Update Incident</a></li>\n    </ul>\n  </div>\n</nav>\n<p id=\"banner-text\"><span><strong>Update Incident</strong></span></p>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../issues.service */ "./src/app/issues.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditComponent = /** @class */ (function () {
    function EditComponent(iServ) {
        this.iServ = iServ;
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_issues_service__WEBPACK_IMPORTED_MODULE_1__["IssuesService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<p-table [value]=\"allIssues\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>IM Title</th>\n            <th>Status</th>\n            <th>Severity</th>\n            <th>Responsible</th>\n            <th>Description</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-issue>\n        <tr>\n            <td>{{issue.title}}</td>\n            <td>{{issue.status}}</td>\n            <td>{{issue.severity}}</td>\n            <td>{{issue.responsible}}</td>\n            <td>{{issue.description}}</td>\n        </tr>\n    </ng-template>\n</p-table>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<!-- <nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/list\">Incident Tracker</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"active\">\n        <a routerLink=\"/list\">\n        <i class=\"fa fa-home\" aria-hidden=\"true\"></i>Home\n        </a>\n      </li>\n      <li><a routerLink=\"/create\">Create Incident</a></li>\n      <li><a routerLink=\"/edit\">Update Incident</a></li>\n    </ul>\n  </div>\n</nav>\n<p id=\"banner-text\"><span><strong>List All Incidents</strong></span></p>\n<table class=\"table table-hover\" id=\"issuedata\" data-unique-id=\"Keyword\" data-sort-name=\"SearchVolume\" data-sort-order=\"desc\">\n  <thead>\n  <tr>\n    <th data-sortable=\"true\">IM Number</th>\n    <th data-sortable=\"true\">Status</th>\n    <th data-sortable=\"true\">Severity</th>\n    <th data-sortable=\"true\">Responsible</th>\n    <th data-sortable=\"true\">Description</th>\n    <th data-sortable=\"true\">ID</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let issue of allIssues; index as i\">\n      <td>{{issue.title}}</td>\n      <td>{{issue.status}}</td>\n      <td>{{issue.severity}}</td>\n      <td>{{issue.responsible}}</td>\n      <td>{{issue.description}}</td>\n      <td>{{issue._id}}</td>\n  </tr>\n  </tbody>\n</table> -->\n\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../issues.service */ "./src/app/issues.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(iServ) {
        this.iServ = iServ;
        this.allIssues = [];
    }
    // SortByIMtitle = (x, y) => {
    //   return ((x.title === y.title) ? 0 : ((x.title > y.title) ? 1 : -1 ));
    // }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iServ.getIssues().toPromise()
            .then(function (data) {
            _this.allIssues = data;
            console.log(_this.allIssues);
            return _this.allIssues;
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_issues_service__WEBPACK_IMPORTED_MODULE_1__["IssuesService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/issues.service.ts":
/*!***********************************!*\
  !*** ./src/app/issues.service.ts ***!
  \***********************************/
/*! exports provided: IssuesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function() { return IssuesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IssuesService = /** @class */ (function () {
    function IssuesService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    IssuesService.prototype.getIssues = function () {
        return this.http.get(this.uri + "/issues");
    };
    IssuesService.prototype.getIssueById = function (id) {
        return this.http.get(this.uri + "/issues/" + id);
    };
    IssuesService.prototype.getLatestIM = function () {
        var val = this.http.get(this.uri + "/fetchIMval");
        console.log(val);
        return val;
    };
    IssuesService.prototype.addIssue = function (title, responsible, description, severity) {
        console.log("OnService\ntitle:" + title + "\nResp:" + responsible + "\nDesc:" + description + "\nSevere:" + severity);
        var newIssue = {
            "title": title,
            "responsible": responsible,
            "description": description,
            "severity": severity
        };
        console.log("OnServiceStep2\ntitle:" + newIssue.title + "\nResp:" + newIssue.responsible + "\nDesc:" + newIssue.description + "\nSevere:" + newIssue.severity);
        return this.http.post(this.uri + "/issues/add", newIssue);
    };
    IssuesService.prototype.updateIssue = function (id, title, responsible, description, severity, status) {
        var updatedIssue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity,
            status: status
        };
        return this.http.post(this.uri + "/issues/update/" + id, updatedIssue);
    };
    IssuesService.prototype.deleteIssue = function (id) {
        return this.http.get(this.uri + "/issues/delete/" + id);
    };
    IssuesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IssuesService);
    return IssuesService;
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

module.exports = __webpack_require__(/*! E:\Js tries\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map