import React from 'react';
import { observer } from 'mobx-react';
import appStore from '../store/appstore';

const HomePage = observer(() => {

    return (
          <div>
            {/*<h1>Counter: {appStore.state}</h1>*/}
            <button onClick={appStore.changeState}>Increment</button>
        </div>
    );
});


export default HomePage;