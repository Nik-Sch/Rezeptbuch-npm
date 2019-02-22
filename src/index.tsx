import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import App from "./components/App";
import Authentification from "./components/Authentification";

const rootEl = document.getElementById("root");

render(
    <AppContainer>
      <div>
        <App/>
        <Authentification/>
      </div>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NewApp = require("./components/App").default;

        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });
}
