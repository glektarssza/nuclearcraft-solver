//-- NPM Packages
import React, {Fragment, type FunctionComponent} from 'react';

//-- Project Code
import Navbar from './navbar';

/**
 * The properties used to render a {@link App} component.
 */
export type AppProps = object;

/**
 * The root application component.
 */
export const App: FunctionComponent<AppProps> = () => {
    return (
        <Fragment>
            <Navbar />
        </Fragment>
    );
};

export default App;
