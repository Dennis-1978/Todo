import { Component } from "react";
import { Link } from "react-router-dom";

export default class TodoListNew extends Component {
	renderDeedTitle(item) {
		if (item.done) {

			return 	<Link to={`/${item.key}`}><del>{item.title}</del></Link>
		} else {
			return <Link to={`/${item.key}`}>{item.title}</Link>
		}
	}

	renderDoneButton(item) {
		return (
			<button className="button is-success"
				title="Пометить как выполненное"
				disabled={item.done}
				onClick={(event) => this.props.setDone(item.key)}
			>
				&#9745;
			</button>
		);
	}

	renderDeleteButton(item) {
		return (
			<button 
				className="button is-danger"
				title="Удалить"
				onClick={(event) => this.props.delete(item.key)}
			>
				&#9746;
			</button>
		);
	}

	renderTable() {
		const arr = [];

		for (let item of this.props.list) {
			arr.push(
					<tr key={item.key}>
						<td>
							{this.renderDeedTitle(item)}
						</td>
						<td>
							{this.renderDoneButton(item)}
						</td>
						<td>
							{this.renderDeleteButton(item)}
						</td>
					</tr>
			);
		}

		return (
			<table className="table is-hoverable is-fullwidth">
				<tbody>
					{arr}
				</tbody>
			</table>
		);
	}

	render() {
		return (
			<section>
				<h1>Дела</h1>
				{this.renderTable()}
			</section>
		);
	}
}