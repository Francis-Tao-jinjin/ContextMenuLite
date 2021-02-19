import React, {
    useEffect,
    useState,
    useRef,
} from 'react';

import './contextMenu.scss';
import { MenuList } from './menuList';

export type ContextmenuData = {
    name: string;
    fn: (() => void)|null,
    tips?: string,
    separate?: boolean,
    selected?: boolean,
    disabled?: boolean,
    extend: ContextmenuData[],
};

export type ContextmenuProps = ContextmenuData[];

export function ContextMenuLite(props:{
    data:ContextmenuProps,
    position: {x:number, y:number},
    dark?:boolean,
    roundCorner?:boolean,
}) {
    const pageViewClientWidth = document.documentElement.clientWidth;
    const pageViewClientHeight = document.documentElement.clientHeight;
    const [renderCount, updateRenderCount] = useState(0);
    const [posX, setPositionX] = useState(0);
    const [posY, setPositionY] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let posx = props.position.x;
        let posy = props.position.y;
        const element = containerRef.current;
        if (element) {
            const rect = element.getBoundingClientRect();
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
        updateRenderCount(renderCount+1);
    }, [posX, posY, props.position]);
    return (
        <div className={[
            'contextmenu-container',
            props.roundCorner ? 'roundCorner' : '',
            props.dark ? 'dark' : '',
        ].join(' ')}
            ref={containerRef}
            style={{
                left: `${posX}px`,
                top: `${posY}px`,
                display: renderCount > 1 ? 'initial' : 'none',
            }}>
            <MenuList
                data={props.data}
                option={{
                    zIndexBase: 20201995,
                    hyphen: ':'
                }}
            />
        </div>
    );
}