//-- NPM Packages
import React from 'react';
import {createRoot} from 'react-dom/client';

/**
 * Find the root element to attach the application to.
 *
 * @returns The root element to attach the application to.
 */
function findRootElement(): HTMLElement {
    let elem: HTMLElement | null = document.getElementById('app');
    if (elem !== null) {
        return elem;
    }
    elem = document.getElementById('root');
    if (elem !== null) {
        return elem;
    }
    elem = document.getElementById('body');
    if (elem !== null) {
        return elem;
    }
    return document.body;
}

const root = createRoot(findRootElement());
root.render(<h1>Hello, world!</h1>);
