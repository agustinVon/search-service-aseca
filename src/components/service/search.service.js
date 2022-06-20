"use strict";
exports.__esModule = true;
exports.SearchService = void 0;
var SearchService = (function () {
    function SearchService() {
    }
    SearchService.prototype.search = function (user, preferCategories, products, s) {
        var result = [];
        products.map(function (p) {
            if (p.targetAgeGroup === user.ageGroup) {
                if (p.category.map(function (c) {
                    return preferCategories.includes(c);
                }).includes(true)) {
                    if (p.name.match(".*" + s + ".*")) {
                        result.push(p);
                    }
                }
            }
        });
        return result;
    };
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map