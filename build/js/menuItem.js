"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var menuList_1 = require("./menuList");
function MenuItem(props) {
    var item = props.itemData;
    var _a = tslib_1.__read(react_1.useState(false), 2), extendDisplay = _a[0], toggleExtend = _a[1];
    var pageViewClientWidth = document.documentElement.clientWidth;
    var pageViewClientHeight = document.documentElement.clientHeight;
    var _b = tslib_1.__read(react_1.useState(0), 2), renderCount = _b[0], updateRenderCount = _b[1];
    var _c = tslib_1.__read(react_1.useState(0), 2), posX = _c[0], setPositionX = _c[1];
    var _d = tslib_1.__read(react_1.useState(false), 2), usePosX = _d[0], allowUsePosX = _d[1];
    var _e = tslib_1.__read(react_1.useState(0), 2), posY = _e[0], setPositionY = _e[1];
    var _f = tslib_1.__read(react_1.useState(false), 2), usePosY = _f[0], allowUsePosY = _f[1];
    var extendRef = react_1.useRef(null);
    var parentRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var element = extendRef.current;
        var parent = parentRef.current;
        if (element && parent) {
            var extendRect = element.getBoundingClientRect();
            var parentRect = parent.getBoundingClientRect();
            if (extendRect.left + extendRect.width >= pageViewClientWidth) {
                setPositionX(-1 * (extendRect.width));
                allowUsePosX(true);
            }
            if (extendRect.top + extendRect.height >= pageViewClientHeight) {
                setPositionY(-1 * (extendRect.height - parentRect.height));
                allowUsePosY(true);
            }
        }
        updateRenderCount(renderCount + 1);
    }, [posX, posY, usePosX, usePosY, extendDisplay]);
    var extendPos = {};
    if (usePosX) {
        extendPos['left'] = posX + 'px';
    }
    if (usePosY) {
        extendPos['top'] = posY + 'px';
    }
    if (item.extend && item.extend.length > 0) {
        return react_1.default.createElement("li", { className: ['contextmenu-item', item.separate ? 'contextmenu-item-separate' : ''].join(' '), title: item.name, ref: parentRef, onMouseEnter: function () {
                toggleExtend(true);
            }, onMouseLeave: function () {
                toggleExtend(false);
            }, onClick: function (ev) {
                if (!item.disabled) {
                    ev.stopPropagation();
                    if (item.fn) {
                        item.fn();
                    }
                }
            } },
            react_1.default.createElement("div", { className: ['contextmenu-item-content', item.disabled ? 'contextmenu-item-content-disabled' : ''].join(' ') },
                react_1.default.createElement("div", { className: 'contextmenu-item-tag' }),
                react_1.default.createElement("div", { className: 'contextmenu-item-text' }, item.name),
                react_1.default.createElement("div", { className: 'contextmenu-item-tips' }, item.tips)),
            react_1.default.createElement("i", { className: 'contextmenu-item-extend-icon' }),
            react_1.default.createElement("div", { className: 'contextmenu-item-extend', ref: extendRef, style: tslib_1.__assign({ zIndex: props.option.zIndexBase++, display: (extendDisplay) ? 'initial' : 'none' }, extendPos) }, react_1.default.createElement(menuList_1.MenuList, { data: item.extend, option: {
                    zIndexBase: props.option.zIndexBase,
                    hyphen: props.option.hyphen,
                } })));
    }
    else {
        return react_1.default.createElement("li", { className: ['contextmenu-item', item.separate ? 'contextmenu-item-separate' : ''].join(' '), onClick: function (ev) {
                if (!item.disabled) {
                    ev.stopPropagation();
                    if (item.fn) {
                        item.fn();
                    }
                }
            }, title: item.name },
            react_1.default.createElement("div", { className: ['contextmenu-item-content', item.disabled ? 'contextmenu-item-content-disabled' : ''].join(' ') },
                react_1.default.createElement("div", { className: 'contextmenu-item-tag' }, item.selected ? react_1.default.createElement("div", { className: "contextmenu-item-tag-selected" }) : null),
                react_1.default.createElement("div", { className: 'contextmenu-item-text' }, item.name),
                react_1.default.createElement("div", { className: "contextmenu-item-tips" }, item.tips)));
    }
}
exports.MenuItem = MenuItem;
