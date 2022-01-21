"use strict";
exports.__esModule = true;
var service_1 = require("../service/service");
window.onload = function () {
    var main = new Main();
    var myService = new service_1.service();
    main.start(myService);
};
var Main = /** @class */ (function () {
    function Main() {
        this.start = function (getInterface) {
            console.log(getInterface.GetData());
        };
    }
    return Main;
}());
