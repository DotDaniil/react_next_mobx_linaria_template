import React from "react";
import { Provider } from 'mobx-react';
import appStore from '../store/appstore';

function Piatnashki({ Component, pageProps }) {
    return (
        <Provider appStore={appStore}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default Piatnashki;