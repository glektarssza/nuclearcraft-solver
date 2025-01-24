import React, {type FunctionComponent} from 'react';

/**
 * The properties for the {@link App} component.
 */
export interface AppProps {}

/**
 * The main application component.
 */
export const App: FunctionComponent<AppProps> = () => {
    return <h1>Hello world!</h1>;
};

export default App;
