import React from 'react';
import { observer } from 'mobx-react';
import appStore from '../store/appstore';
import { css } from "@linaria/core";

const HomePage = observer(() => {

    return (
          <div>
            <button className={test} onClick={appStore.changeState}>Change state</button>
        </div>
    );
});

const test = css`
  color: red;
`;

export default HomePage;