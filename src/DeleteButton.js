import { DeleteContext } from "./contexts";

export default function DeleteButton(props) {
    return (
        <DeleteContext.Consumer>
            {
                (value) => (
                    <button
                        className="button is-danger"
                        title="Удалить"
                        onClick={(event) => value(props.item.key)}
                    >
                        &#9746;
                    </button>
                )
            }
        </DeleteContext.Consumer>
    );
}