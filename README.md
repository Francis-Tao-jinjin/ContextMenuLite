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

**Props**

**data**: An Object in type `ContextmenuProps`

```ts
type ContextmenuData = {
    name: string;
    fn: (() => void) | null; // handle when user click this item
    tips?: string;
    separate?: boolean; // this will create a line bellow the meun item
    selected?: boolean; // draw a ✔ tick mark on the front side of this item
    disabled?: boolean; // make this item disabled
    extend: ContextmenuData[];
};

type ContextmenuProps = ContextmenuData[]
```
**position**: `{ x : number, y : number }`, the position related to the viewport that you want the contextmenu show-up. Normally, just use the clientX and clientY of the MouseEvent.

**dark**: optional, toggle dark scheme

**roundCorner**: optional, toggle round corner style

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

