//-- NPM Packages
import React from 'react';
import {createRoot} from 'react-dom/client';

//-- Project Code
import App from './components/app';

/**
 * Find the root HTML element for the application.
 *
 * @returns The root HTML element for the application.
 */
function findRootElement(): HTMLElement {
    let e = document.getElementById('app');
    if (e) {
        return e;
    }
    e = document.getElementById('root');
    if (e) {
        return e;
    }
    return document.body;
}

const root = createRoot(findRootElement());

root.render(<App />);
