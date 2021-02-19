import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UIContainer } from './dev/index';

export class DevApp {
    private root:HTMLElement;
    constructor() {
        this.root = document.createElement('div');
        this.root.style.left = '0';
        this.root.style.right = '0';
        document.body.appendChild(this.root);
    }

    public start() {
        this.render();
    }

    public render() {
        ReactDOM.render(<UIContainer></UIContainer>, this.root);
    }
}