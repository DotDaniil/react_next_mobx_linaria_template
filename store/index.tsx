import { inject, observer } from "mobx-react";
import { NextPage } from "next";
import { DataStore } from "./appstore";

type Props = {
    dataStore?: DataStore;
};

const IndexPage: NextPage = inject("dataStore")(
    observer((props: Props) => {
        const dataStore = props.dataStore!;

        return (
            <>
                <h1>My first Medium article</h1>

                <p>{dataStore.title} 👋</p>

                <input
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dataStore.changeTitle(e.target.value)
                    }
                />
            </>
        );
    })
);
export default IndexPage;