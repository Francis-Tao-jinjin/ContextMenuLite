"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var menuItem_1 = require("./menuItem");
function MenuList(props) {
    if (props === void 0) { props = { data: [], option: { zIndexBase: 20201994, hyphen: ':' } }; }
    var option = props.option;
    return (react_1.default.createElement("div", { className: 'contextmenu-wrapper', style: { zIndex: option.zIndexBase++ } },
        react_1.default.createElement("ul", { className: 'contextmenu-ulist' }, props.data.map(function (item, index) {
            return (react_1.default.createElement(menuItem_1.MenuItem, { key: index, itemData: item, option: props.option }));
        }))));
}
exports.MenuList = MenuList;
