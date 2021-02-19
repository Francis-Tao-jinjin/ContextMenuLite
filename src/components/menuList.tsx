import React, {
    useEffect,
    useState,
    useRef,
} from 'react';

import { ContextmenuData, ContextmenuProps } from './contextMenu';
import { MenuItem } from './menuItem';

export function MenuList(props:{
    data:ContextmenuProps,
    option: { zIndexBase:number, hyphen:string },
} = {data:[], option:{zIndexBase:20201994, hyphen: ':'}}) {

    const option = props.option;

    return (<div className='contextmenu-wrapper'
                style={{zIndex: option.zIndexBase++}}>
        <ul className='contextmenu-ulist'>
        {
            props.data.map((item:ContextmenuData, index) => {
                return (
                    <MenuItem
                        key={index}
                        itemData={item}
                        option={props.option}
                    />
                );
            })
        }
        </ul>
    </div>);
}

