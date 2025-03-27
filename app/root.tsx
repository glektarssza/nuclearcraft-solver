//-- NPM Packages
import React from 'react';
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from 'react-router';

//-- Project Code
import './app.scss';

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <Meta />
                <title>Nuclearcraft Solver</title>
                <base href='%BASE_URL%' />
                <Links />
                <Scripts />
            </head>
            <body>
                {children}
                <ScrollRestoration />
            </body>
        </html>
    );
}

export function meta() {
    return [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            name: 'application-name',
            content: 'Nuclearcraft Solver'
        },
        {
            name: 'description',
            content:
                'A web-based tool for solving where to place things inside Nuclearcraft reactors.'
        },
        {
            name: 'keywords',
            content:
                'nuclearcraft, nuclear, minecraft, mod, solver, web, app, tool, calculator, simulator'
        },
        {
            name: 'author',
            content: "G'lek Tarssza <glek@glektarssza.com>"
        },
        {
            name: 'generator',
            content: 'ViteJS'
        },
        {
            name: 'color-scheme',
            content: 'normal'
        },
        {
            name: 'robots',
            content: 'index, follow, noarchive'
        }
    ];
}

export default function App() {
    return <Outlet />;
}
