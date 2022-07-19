import { Link } from "react-router-dom";
import { useContext } from "react";

import { TitleContext } from "./contexts";
import DoneButton from "./DoneButton";
import DeleteButton from "./DeleteButton";

export default function TodoList(props) {
	const title = useContext(TitleContext);

	return (
		<section>
			<h1>{title}</h1>
			<table className="table is-hoverable is-fullwidth">
				<tbody>
					{props.list.map((item) => (
						<tr key={item.key}>
							<td>
								<Link to={`/${item.key}`}>
									{item.done && <del>{item.title}</del>}
									{!item.done && item.title}
								</Link>
							</td>
							<td>
								<DoneButton item={item} />
							</td>
							<td>
								<DeleteButton item={item} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}