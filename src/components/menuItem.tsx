import React, { useState, useRef, useEffect } from 'react';
import { ContextmenuData } from './contextMenu';
import { MenuList } from './menuList';

export function MenuItem(props:{
    itemData: ContextmenuData,
    option: { zIndexBase:number, hyphen:string },
}) {
    const item = props.itemData;

    const [extendDisplay, toggleExtend] = useState(false);
    const pageViewClientWidth = document.documentElement.clientWidth;
    const pageViewClientHeight = document.documentElement.clientHeight;
    const [renderCount, updateRenderCount] = useState(0);
    const [posX, setPositionX] = useState(0);
    const [usePosX, allowUsePosX] = useState(false);
    const [posY, setPositionY] = useState(0);
    const [usePosY, allowUsePosY] = useState(false);
    const extendRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const element = extendRef.current;
        const parent = parentRef.current;
        if (element && parent) {
            const extendRect = element.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();
            if( extendRect.left + extendRect.width >= pageViewClientWidth ){
                setPositionX(-1 * (extendRect.width));
                allowUsePosX(true);
            }        
            if( extendRect.top + extendRect.height >= pageViewClientHeight ){
                setPositionY(-1 * (extendRect.height - parentRect.height));
                allowUsePosY(true);
            } 
        }
        updateRenderCount(renderCount+1);
    }, [posX, posY, usePosX, usePosY, extendDisplay]);

    const extendPos = {};
    if (usePosX) {
        extendPos['left'] = posX + 'px';
    }
    if (usePosY) {
        extendPos['top'] = posY + 'px';
    }
    if (item.extend && item.extend.length > 0) {
        return <li className={['contextmenu-item', item.separate ? 'contextmenu-item-separate' : ''].join(' ')}
                    title={item.name}
                    ref={parentRef}
                    onMouseEnter={() => {
                        toggleExtend(true);
                    }}
                    onMouseLeave={() => {
                        toggleExtend(false);
                    }}
                    onClick={(ev:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                        if (!item.disabled) {
                            ev.stopPropagation();
                            if (item.fn) {
                                item.fn();
                            }
                        }
                    }}
                >
            <div className={['contextmenu-item-content', item.disabled ? 'contextmenu-item-content-disabled' : ''].join(' ')}>
                <div className={'contextmenu-item-tag'}></div>
                <div className={'contextmenu-item-text'}>{item.name}</div>
                <div className={'contextmenu-item-tips'}>{item.tips}</div>
            </div>
            <i className='contextmenu-item-extend-icon'></i>
            <div className='contextmenu-item-extend'
                ref={extendRef}
                style={{
                    zIndex: props.option.zIndexBase++,
                    display: (extendDisplay) ? 'initial' : 'none',
                    ...extendPos,
                }}>
                {
                    <MenuList
                        data={item.extend}
                        option={{
                            zIndexBase: props.option.zIndexBase,
                            hyphen: props.option.hyphen,
                        }}
                    ></MenuList>
                }
            </div>
        </li>;
    } else {
        return <li className={['contextmenu-item', item.separate ? 'contextmenu-item-separate' : ''].join(' ')}
                onClick={(ev:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                    if (!item.disabled) {
                        ev.stopPropagation();
                        if (item.fn) {
                            item.fn();
                        }
                    }
                }}
                title={item.name}>
            <div className={['contextmenu-item-content', item.disabled ? 'contextmenu-item-content-disabled' : ''].join(' ')}>
                <div className={'contextmenu-item-tag'}>
                    {item.selected ? <div className="contextmenu-item-tag-selected"></div> : null}
                </div>
                <div className={'contextmenu-item-text'}>{item.name}</div>
                <div className="contextmenu-item-tips">{item.tips}</div>
            </div>
        </li>;
    }
}