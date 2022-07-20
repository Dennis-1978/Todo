import { useContext } from "react";

import { TitleContext } from "./contexts";

export default function TodoList(props) {
	const title = useContext(TitleContext);

	return (
		<section>
			<h1>{title}</h1>
			<table className="table is-hoverable is-fullwidth">
				<tbody>
					{props.list.map((item) => props.render(item))}
				</tbody>
			</table>
		</section>
	);
}