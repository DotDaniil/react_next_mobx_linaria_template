import React from 'react';
import { observer } from 'mobx-react';
import appStore from '../store/appstore';

const HomePage = observer(() => {

    return (
          <div>
            <button onClick={appStore.changeState}>Change state</button>
        </div>
    );
});


export default HomePage;