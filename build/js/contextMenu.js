"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("./contextMenu.scss");
var menuList_1 = require("./menuList");
function ContextMenuLite(props) {
    var pageViewClientWidth = document.documentElement.clientWidth;
    var pageViewClientHeight = document.documentElement.clientHeight;
    var _a = tslib_1.__read(react_1.useState(0), 2), renderCount = _a[0], updateRenderCount = _a[1];
    var _b = tslib_1.__read(react_1.useState(0), 2), posX = _b[0], setPositionX = _b[1];
    var _c = tslib_1.__read(react_1.useState(0), 2), posY = _c[0], setPositionY = _c[1];
    var containerRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var posx = props.position.x;
        var posy = props.position.y;
        var element = containerRef.current;
        if (element) {
            var rect = element.getBoundingClientRect();
            if (rect.left + rect.width >= pageViewClientWidth) {
                posx = pageViewClientWidth - rect.width;
            }
            if (rect.top + rect.height >= pageViewClientHeight) {
                posy = pageViewClientHeight - rect.height;
            }
            if (posx <= 0) {
                posx = 0;
            }
            if (posy <= 0) {
                posy = 0;
            }
        }
        setPositionX(posx);
        setPositionY(posy);
        updateRenderCount(renderCount + 1);
    }, [posX, posY, props.position]);
    return (react_1.default.createElement("div", { className: [
            'contextmenu-container',
            props.roundCorner ? 'roundCorner' : '',
            props.dark ? 'dark' : '',
        ].join(' '), ref: containerRef, style: {
            left: posX + "px",
            top: posY + "px",
            display: renderCount > 1 ? 'initial' : 'none',
        } },
        react_1.default.createElement(menuList_1.MenuList, { data: props.data, option: {
                zIndexBase: 20201995,
                hyphen: ':'
            } })));
}
exports.ContextMenuLite = ContextMenuLite;
