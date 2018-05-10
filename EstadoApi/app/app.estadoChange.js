"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
core_1.Pipe({
    name: 'estadoChange'
});
var estadoChange = /** @class */ (function () {
    function estadoChange() {
    }
    estadoChange.prototype.transform = function (estado, args) {
        if (args[0].length <= 2) {
            if (estado.Sigla.indexOf(args[0]) >= -1)
                return true;
        }
        if (estado.Nome.indexOf(args[0]) >= -1)
            return true;
        return false;
    };
    return estadoChange;
}());
exports.estadoChange = estadoChange;
//# sourceMappingURL=app.estadoChange.js.map