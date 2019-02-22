import * as React from "react";

export interface AuthentificationProps {
}

export default class Authentification extends React.Component<AuthentificationProps, undefined> {
    render() {
        return (
            <div className="auth">
            <input type="text" id="username" required minLength={1} size={15}/>
            <input type="text" id="password" required minLength={1} size={15}/>

            </div>
        );
    }
}
