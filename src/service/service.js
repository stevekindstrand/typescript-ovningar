"use strict";
exports.__esModule = true;
exports.service = void 0;
var service = /** @class */ (function () {
    function service() {
    }
    service.prototype.GetData = function () {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5ab379e6")
            .then(function (resolve) { return resolve.json(); });
    };
    return service;
}());
exports.service = service;
