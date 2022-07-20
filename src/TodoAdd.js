import { Component } from "react";
import { Navigate } from 'react-router-dom';

export default class TodoAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirect: false
		};

		this.clearFormData();

		this.generateChangeHandler = this.generateChangeHandler.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	clearFormData() {
		this.formData = {
			title: '',
			desc: '',
			image: ''
		};
	};

	generateChangeHandler(propertyName) {
		return ((event) => {
				this.formData[propertyName] = event.target.value.trim();
			}
		);
	}

	handleImageChange(event) {
		const cFiles = event.target.files;

		if (cFiles.length > 0) {
			const fileReader = new FileReader();
			const that = this;

			fileReader.onload = () => {
				that.formData.image = fileReader.result;
			}

			fileReader.readAsDataURL(cFiles[0]);
		} else {
			this.formData.image = '';
		}
	}

	handleFormSubmit(event) {
		event.preventDefault();

		const newDeed = { ...this.formData }
		const date = new Date();
		newDeed.done = false;
		newDeed.createdAt = date.toLocaleString();
		newDeed.key = date.getTime();
		this.props.add(newDeed);
		this.clearFormData();
		event.target.reset();
		this.setState((state) => ({redirect: true}));
	}

	render() {
		if (this.state.redirect) {
			return <Navigate to="/" />
		} else {
			return (
				<section>
					<h1>Создание нового дела</h1>
					<form onSubmit={this.handleFormSubmit}>
						<div className="field">
							<label className="label">Заголовок</label>
							<div className="control">
								<input 
									className="input"
									onChange={this.generateChangeHandler('title')} />
							</div>
						</div>
						<div className="field">
							<label className="label">Примечание</label>
							<div className="control">
								<textarea 
									className="textarea"
									onChange={this.generateChangeHandler('desc')} />
							</div>
						</div>
						<div className="field">
							<div className="file">
								<label className="file-label">
									<input 
										className="file-input"
										type="file"
										accept="image/*"
										onChange={this.handleImageChange} />
									<span className="file-cta">
										<span className="file-label">
											Графическая иллюстрация ...
										</span>
									</span>
								</label>
							</div>
						</div>
						<div className="field is-grouped is-grouped-right">
							<div className="control">
								<input 
									type="reset"
									className="button is-link is-light"
									value="Сброс" />
							</div>
							<div className="control">
								<input 
									type="submit" 
									className="button is-primary"
									value="Создать дело" />
							</div>
						</div>
					</form>
				</section>
			);
		}
	}
}