function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n\n  \n        <!--navigation bar-->\n        <nav class=\"navbar navbar-expand-sm fixed-top\" style=\"background-color: white; padding-top: 0px;\">\n          <!-- Brand/logo -->\n          <a style=\"color:black\" class=\"navbar-brand\" href=\"#\">\n            <img src=\"../assets/images/Logo.png\" alt=\"logo\" style=\"width:40px;\">\n          </a>\n          \n          <h5 style=\"font-family: cursive;color:cornflowerblue ;\">Shoppers bag</h5>\n          <!-- Links -->\n          \n  \n          <ul class=\"navbar-nav ml-auto\">\n            \n            <li class=\"nav-item\">\n              <a style=\"color:black; font-family: cursive;\" class=\"nav-link\" routerLink=\"home\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a style=\"color:black; font-family: cursive;\" class=\"nav-link\" routerLink=\"cart\">My Bag</a>\n            </li>\n            <li class=\"nav-item\" style=\"border-right:1px solid rgba(0, 0, 0, 0.021), 0.021)\">\n              <a style=\"color:black; font-family: cursive;\" class=\"nav-link\" data-toggle=\"modal\" href=\"#login\">Sign In</a>\n            </li>\n            <li class=\"nav-item\">\n              <a style=\"color:black; font-family: cursive;\" class=\"nav-link\" data-toggle=\"modal\" href=\"#signUp\">Sign Up</a>\n            </li>\n          </ul>\n  \n          \n        </nav> \n  \n    <!--login code-->\n    <div class=\"modal fade\" id=\"login\" style=\"height: 600px;\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <!-- Modal body -->\n          <div class=\"modal-body\">\n              <h5 class=\"text-center\" style=\"font-family:Arial, Helvetica, sans-serif;font-style: italic;font-size: x-large; font-weight: 100;\">Sign In</h5>\n              <hr class=\"my-4\">\n              <form class=\"form-signin\">\n                  <div class=\"form-label-group\">\n                      <label for=\"inputEmail\">Email address</label>\n                    <input type=\"email\" id=\"inputEmailLogin\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                  </div>\n    \n                  <div class=\"form-label-group pt-2 pb-3\">\n                      <label for=\"inputPassword\">Password</label>\n                    <input type=\"password\" id=\"inputPasswordLogin\" class=\"form-control\" placeholder=\"Password\" required>\n                  </div>\n    \n                  <div class=\"custom-control custom-checkbox mb-3\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n                  </div>\n                  <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\n                  <hr class=\"my-4\">\n                  <button class=\"btn btn-lg btn-google btn-block text-uppercase\" style=\"  background-color: #ea4335; color: white;\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n                  <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--sign up code-->\n    <div class=\"modal fade\" id=\"signUp\" style=\"height: 600px;\">\n      <div class=\"modal-dialog \">\n        <div class=\"modal-content\">\n          <!-- Modal body -->\n          <div class=\"modal-body\">\n              <h5 class=\"text-center\" style=\"font-family:Arial, Helvetica, sans-serif;font-style: italic;font-size: x-large; font-weight: 100;\">Sign Up</h5>\n              <hr class=\"my-4\">\n              <form class=\"form-signin\">\n                  <div class=\"form-label-group\">\n                      <label for=\"inputEmail\">Email address</label>\n                    <input type=\"email\" id=\"inputEmailSignup\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                  </div>\n                  <div class=\"form-label-group\">\n                      <label for=\"inputEmail\">Username</label>\n                    <input type=\"email\" id=\"Usernamesignup\" class=\"form-control\" placeholder=\"Username\" required autofocus>\n                  </div>\n                  <div class=\"form-label-group pt-2 pb-3\">\n                      <label for=\"inputPassword\">Password</label>\n                    <input type=\"password\" id=\"inputPasswordSignup\" class=\"form-control\" placeholder=\"Password\" required>\n                  </div>\n    \n                  <div class=\"custom-control custom-checkbox mb-3\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\n                    <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n                  </div>\n                  <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign Up</button>\n                  <hr class=\"my-4\">\n                  <button class=\"btn btn-lg btn-google btn-block text-uppercase\" style=\"  background-color: #ea4335; color: white;\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign up with Google</button>\n                  <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign up with Facebook</button>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>\n \n    <router-outlet></router-outlet>\n\n\n</body>\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n\n    <!--Company name-->    \n    <div class=\"jumbotron text-center\" style=\"height:500px ; background-image: linear-gradient(to bottom right, white, rgb(166, 98, 243));\">\n        <h2 class=\"headline\" style=\" padding-top:160px; font-size:75px; color:white; font-style: italic; font-family: cursive;\">\n            Shoppers Bag\n            <img src=\"../../assets/images/Logo.png\" alt=\"logo\" style=\"height:90px;width: 80px;\">\n        </h2>\n    </div>\n\n    <!--items-->  \n    <!--Electronics-->\n    <div class=\"jumbotron\" style=\"padding-left:2px ;\">\n        <div class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\"><h2>Electronics</h2></div> \n        <hr class=\"my-4\">\n        <h3 class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\">Phones</h3><br>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Samsung Galaxy M20','samsungGalaxym20',39999)\"><img src=\"../../assets/images/samsungGalaxym20.jpg\" style=\"height:100%;width:45%;\" alt=\"samsungGalaxym20\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Samsung Galaxy M20</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Moto E5 plus','motoe5plus',43999)\"><img src=\"../../assets/images/motoe5plus.jpg\" style=\"height:100%;width:45%;\" alt=\"motoe5plus\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Moto E5 plus</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Lenovo K10 Note','lenovok10note',14999)\"><img src=\"../../assets/images/lenovok10note.jpg\" style=\"height:100%;width:45%;\" alt=\"lenovok10note\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">lenovo K10 Note</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <br><h3 class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\">Laptops</h3>\n        <div class=\"row\" style=\"padding-top: 20px;\">\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Lenovo Ideapad 3','lenovoideapad3',39999)\"><img src=\"../../assets/images/lenovoideapad3.jpg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapad3\"></a>\n                        </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Lenovo Ideapad 3</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Lenovo Ideapad S540','lenovoideapads540',37599)\"><img src=\"../../assets/images/lenovoideapads540.jpg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapads540\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Lenovo Ideapad S540</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Lenovo Ideapad S145','lenovoideapads145',43999)\"><img src=\"../../assets/images/lenovoideapads145.jpg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapads145\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Lenovo Ideapad S145</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--picture (shopping1 about fashion)-->\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img src=\"../../assets/images/shopping1.jpg\" alt=\"shopping woman\">\n        </div>\n        <div class=\"col-sm-6 text-center\">\n        <h2 style=\"font-family: cursive;font-size:50px;color: rgb(226, 43, 171);padding-top: 100px;\">Amazing shopping experience</h2>\n    </div>\n    </div><br>\n\n    <!--pmodal-->\n    <div class=\"modal fade\" id=\"pmodal\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">{{name}}</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n              <img [src]=\"url\" alt=\"lenovoideapads145\" style=\"height:100px;padding-left: 45%;\" > \n              <br><h2 style=\"font-family:Arial, Helvetica, sans-serif;text-align: center;\">Price: Rs  {{price}}</h2>\n            </div>\n            <div class=\"modal-footer text-center\">\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addToBag(name,url,price)\">add to bag</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n  <!--Fashion-->\n    <div class=\"jumbotron\" style=\"padding-top:20px ; background-color: cornsilk;\">\n        <div class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\"><h2>Fashion</h2></div> \n        <hr class=\"my-4\">\n        <h3 class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\">Men's Wear</h3><br>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Shirt','shirt1',1199)\"><img src=\"../../assets/images/shirt1.jpg\" style=\"height:100%;width:45%;\" alt=\"shirt1\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Shirt</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Mens'+' Short','mensshort',699)\"><img src=\"../../assets/images/mensshort.jpg\" style=\"height:100%;width:45%;\" alt=\"mensshort\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Men's short</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Jeans'+' slim'+' fit','Jeansslimfit',1499)\"><img src=\"../../assets/images/Jeansslimfit.jpg\" style=\"height:100%;width:45%;\" alt=\"Jeansslimfit\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Slim fit Jeans</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <br><h3 class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\">Women's wear</h3>\n        <div class=\"row\" style=\"padding-top: 20px;\">\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Party'+' gown','women1',2999)\"><img src=\"../../assets/images/women1.jpg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapad3\"></a>\n                        </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Party gown</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Casual'+' gown','women2',999)\"><img src=\"../../assets/images/women2.jfif\" style=\"height:100%;width:100%;\" alt=\"lenovoideapads540\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Casual gown</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Women8s'+' Office'+'wear','women3',2799)\"><img src=\"../../assets/images/women3.jpeg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapads145\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">women's Office wear</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--picture (available items)-->\n    <div class=\"row\">\n        <div class=\"col-sm-6 text-center\">\n            <h2 style=\"font-family: cursive;font-size:50px;color: rgb(226, 43, 171);padding-top: 100px;\">Don't miss the chance</h2>\n        </div>\n        <div class=\"col-sm-6\">\n            <img src=\"../../assets/images/shopping2.jpeg\"  style=\"height: 100%;width: 100%;\" alt=\"shopping woman\">\n        </div>\n        \n    </div><br>\n\n    <!--Personal care-->\n    <div class=\"jumbotron\" style=\"padding-left:2px ;\">\n        <div class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\"><h2>Personal care</h2></div> \n        <hr class=\"my-4\">\n        <h3 class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\">Skin Care </h3><br>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Sunscreen  lotion','Sunscreen_lotion',779)\"><img src=\"../../assets/images/Sunscreen_lotion.jpg\" style=\"height:100%;width:45%;\" alt=\"samsungGalaxym20\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Sunscreen lotion</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Sun block  lotion','Sun_block_lotion',589)\"><img src=\"../../assets/images/Sun_block_lotion.jpg\" style=\"height:100%;width:45%;\" alt=\"motoe5plus\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Sun Block lotion</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Face mask','Face_mask',399)\"><img src=\"../../assets/images/Face_mask.jpg\" style=\"height:100%;width:45%;\" alt=\"lenovok10note\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Face mask</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <br><h3 class=\"text-center\" style=\"font-family: cursive; color: rgb(26, 62, 80);\">Face care</h3>\n        <div class=\"row\" style=\"padding-top: 20px;\">\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Face cream','Face_cream',499)\"><img src=\"../../assets/images/Face_cream.jpg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapad3\"></a>\n                        </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Face Cream</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Face wash','facewash',275)\"><img src=\"../../assets/images/facewash.jpg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapads540\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Face wash</h4>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card card-block text-center\" style=\"height:300px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); \">\n                    <div class=\"card-body\">\n                        <a href=\"#pmodal\" data-toggle=\"modal\" (click)=\"set('Face serum','face_serum',349)\"><img src=\"../../assets/images/face_serum.jpg\" style=\"height:100%;width:100%;\" alt=\"lenovoideapads145\"></a>\n                    </div>\n                    <div class=\"card-footer\" style=\"background-color: white;\">\n                        <h4 class=\"card-title\" style=\"font-size: medium; color:rgb(209, 147, 77); font-family: cursive;\">Face serum</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--intimation-->\n    <div class=\"jumbotron text-center\">\n        <h2 style=\"font-size: xx-large;color: brown;\">More exciting products are on the way!!</h2>\n    </div>\n\n</body>\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mybag/mybag.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mybag/mybag.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMybagMybagComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mybag works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _mybag_mybag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mybag/mybag.component */
    "./src/app/mybag/mybag.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'cart',
      component: _mybag_mybag_component__WEBPACK_IMPORTED_MODULE_4__["MybagComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'shoppersBag';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _mybag_mybag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mybag/mybag.component */
    "./src/app/mybag/mybag.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _mybag_mybag_component__WEBPACK_IMPORTED_MODULE_6__["MybagComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a{\r\n    color:white;\r\n}\r\n.card-block{\r\n    min-height: 100px;\r\n    min-width: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uY2FyZC1ibG9ja3tcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.bag = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "set",
        value: function set(product, address, val) {
          this.name = product;
          this.price = val;
          this.url = '../../assets/images/' + address + '.jpg';
        }
      }, {
        key: "addToBag",
        value: function addToBag(product, address, val) {
          //console.log("kjdfkjdf");
          this.bag.push({
            product: [address, val]
          });
          this.name = product;
          console.log(this.bag);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/mybag/mybag.component.css":
  /*!*******************************************!*\
    !*** ./src/app/mybag/mybag.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMybagMybagComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YmFnL215YmFnLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mybag/mybag.component.ts":
  /*!******************************************!*\
    !*** ./src/app/mybag/mybag.component.ts ***!
    \******************************************/

  /*! exports provided: MybagComponent */

  /***/
  function srcAppMybagMybagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MybagComponent", function () {
      return MybagComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/home/home.component.ts");

    var MybagComponent = /*#__PURE__*/function () {
      function MybagComponent(obj) {
        _classCallCheck(this, MybagComponent);

        this.obj = obj;
      }

      _createClass(MybagComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.obj.bag.length);
          console.log(this.obj.name);
        }
      }]);

      return MybagComponent;
    }();

    MybagComponent.ctorParameters = function () {
      return [{
        type: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }];
    };

    MybagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mybag',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mybag.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mybag/mybag.component.html"))["default"],
      providers: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mybag.component.css */
      "./src/app/mybag/mybag.component.css"))["default"]]
    })], MybagComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\all_angular_apps\shoppersBag\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map