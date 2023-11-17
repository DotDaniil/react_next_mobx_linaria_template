import { observable, action, makeObservable } from 'mobx';


class AppStore {
    state = {changed: false};



    constructor() {

        makeObservable(this, {
            state: observable,
            changeState: action,
        });
    }

    changeState = () => {
        this.state = {...this.state, changed: true}
    }
}

const appStore = new AppStore();
export default appStore;
