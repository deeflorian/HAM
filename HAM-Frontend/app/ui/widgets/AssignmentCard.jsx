import React from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardTitle, CardText, CardHeader, CardMedia} from 'material-ui/Card';

import ClientAPI from '../../api/ClientAPI';

let styles = {
	paper: {
		marginBottom: "16px",
		marginTop: "16px",
		padding: "16px",
		display: "flex",
		flexDirection: "column",
	},
	row: {
		display: "flex",
		flexDirection: "row",
		flex: 1,
	},
	column: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
	},
	header: {
		color: "#404040",
		display: "flex",
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-between",
	},
	body: {
		color: "#808080"
	},
	footer: {
		display: "flex",
		justifyContent: "flex-end",
	},
	dueStyle: {
		backgroundColor: '#FF2D1C',
	}
};

let clientApi = new ClientAPI();

export default class AssignmentCard extends React.Component {
	render() {
		let course = clientApi.getCourse(this.props.assignment.courseKey);

		return (
			<Card style={this.props.style}>
				<CardHeader
					title={this.props.assignment.title}
					// FIXME: Tried to add en dash, which resulted in weird character output
					subtitle={course.name + ' - ' + course.code}
				/>
				<CardText style={styles.dueStyle}>

				</CardText>
				<CardText>
					{this.props.assignment.description}
				</CardText>
				<CardActions>
					<FlatButton label="Upload" />
					<FlatButton label="Details" />
					<div s>
						<span>Due date: </span><span>{this.props.assignment.deadline.toISOString()}</span>
					</div>
				</CardActions>
			</Card>
		)
	}
}

AssignmentCard.propTypes = {
	semester: React.PropTypes.string,
	assignment: React.PropTypes.object
}