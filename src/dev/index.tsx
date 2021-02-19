import React, { useState } from 'react';
import useEvent from './useEvent';

import './global.scss';
// import { ContextMenuLite } from './contextMenu';
import { ContextMenuLite } from '../../build/context-menu.bundle';

import { data2 } from '../utils/testData';

export function UIContainer () {

    const [contextmenu, toggleContextmenu] = useState(false);
    const [contextmenuPos, setCtxmenuPos] = useState([0, 0]);

    useEvent('contextmenu', (ev:MouseEvent) => {
        ev.preventDefault();
        toggleContextmenu(true);
        setCtxmenuPos([ev.clientX, ev.clientY]);
    });

    useEvent('click', (ev:MouseEvent) => {
        toggleContextmenu(false);
    });

    return <div>
        <h1>React Context Menu Library Example</h1>
        <p>A tiny, dynamic, and multi-level context menu library used to replace the native browser right-click menu.</p>
        <h2>Right Click The Page</h2>
        {
            contextmenu ?
            <ContextMenuLite
                data={data2}
                // dark
                roundCorner
                position={{x: contextmenuPos[0], y: contextmenuPos[1]}}
            /> : null
        }
    </div>;
}