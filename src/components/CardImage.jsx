import React from 'react';

import { CardImg } from 'reactstrap';
export default class CardImage extends React.Component {

	render() {
		const url = this.props.url !== 'posterthatismissing.jpg' ? this.props.url : 'placeholder_for_missing_posters.png';
		return (
			<CardImg top width="100%" src={`/assets/${url}`} alt="Card image cap" />
		);
	}
}