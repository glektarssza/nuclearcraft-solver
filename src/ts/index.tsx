import React from 'react';
import {createRoot} from 'react-dom/client';

const findAppRoot = (): HTMLElement => {
    let e = document.getElementById('app');
    if (e !== null) {
        return e;
    }
    e = document.getElementById('root');
    if (e !== null) {
        return e;
    }
    return document.body;
};

const root = createRoot(findAppRoot());
root.render(<h1>Hello world!</h1>);
