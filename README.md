# ContextMenuLite

A simple Contextmenu library for React

## install

`npm i context-menu-lite`

## Core Features
Support nested menu, support the position of the menu automatically adapt to the viewport size.

Support Light, Dark color and Square, Round cornor.

## Preview

Black contextmenu

![Black contextmenu](/assets/1.png)

Black contextmenu at bottom right cornor of the screen

![Black contextmenuat right bottom cornor of the screen](/assets/2.png)

Light Round Cornor contextmenu at right side of the screen

![Light Round Cornor contextmenu at right side of the screen](/assets/3.png)

## Basic Usage & Props

```tsx
import React, { useState, useEffect } from 'react';
import { ContextMenuLite } from 'context-menu-lite';

function useEvent(event, handler, passive = false) {
    useEffect(() => {
        window.addEventListener(event, handler, passive);
        return function cleanup() {
            window.removeEventListener(event, handler);
        }
    })
}

const data = [
    {
        name: 'Open',
        fn: () => {console.log('click open')},
        extend: []
    },
    {
        name: 'Open With',
        fn: null,
        separate: true,
        extend: [{
            name: 'vs code (default)',
            fn: () => console.log('click vs code'),
            extend: [],
            separate: true,
        }, {
            name: 'sublime Text',
            fn: () => console.log('click sublime Text'),
            extend: [],
        }, {
            name: 'X code',
            fn: () => console.log('click X code'),
            extend: [],
        }]
    }];

function App() {
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

    return (
    <div className="App">
      {
        contextmenu ?
        <ContextMenuLite
            data={data}
            // dark
            // roundCorner
            position={{x: contextmenuPos[0], y: contextmenuPos[1]}}
        /> : null
      }
    </div>
  );
}

export default App;
```