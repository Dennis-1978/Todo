import { Component } from "react";

import { SetDoneContext } from "./contexts";

export default class DoneButton extends Component {
    static contextType = SetDoneContext;

    render() {
        return (
            <button
                className="button is-success"
                title="Пометить как сделанное"
                onClick={(event) => this.context(this.props.item.key)}
            >
                &#9745;
            </button>
        );
    }
}