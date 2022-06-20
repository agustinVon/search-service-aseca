"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DatabaseError = exports.ValidationError = exports.NotFoundError = void 0;
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(model) {
        return _super.call(this, "Not Found Error: ".concat(model, " not found")) || this;
    }
    return NotFoundError;
}(Error));
exports.NotFoundError = NotFoundError;
var ValidationError = (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(field) {
        return _super.call(this, "Validation Error: missing field '".concat(field, "'")) || this;
    }
    return ValidationError;
}(Error));
exports.ValidationError = ValidationError;
var DatabaseError = (function (_super) {
    __extends(DatabaseError, _super);
    function DatabaseError(message) {
        return _super.call(this, "Database Error: ".concat(message)) || this;
    }
    return DatabaseError;
}(Error));
exports.DatabaseError = DatabaseError;
//# sourceMappingURL=errors.js.map