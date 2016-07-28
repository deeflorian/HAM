import React from 'react';
import {connect} from 'react-redux';

import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {GridList, GridTile} from 'material-ui/GridList';


import AssignmentCard from '../widgets/AssignmentCard';
import ClientAPI from '../../api/ClientAPI.js';

const styles = {
	mainContainer: {
		padding: "16px",
	},
	assignmentCardStyle: {
		margin: "16px",
	}
};

let clientApi = new ClientAPI();

class Assignments extends React.Component {

	// FIXED: try not to use componentWillMount, instead init in constructor
	constructor() {
		super();
	}

	render() {
		let assignments = clientApi.getAssignments(this.props.activeSemester.key, this.props.courseFilters, this.props.statusFilters);

		if (assignments.length == 0) {
			return (<Subheader>No assignments</Subheader>);
		} else {
			return (
				<List style={styles.mainContainer}>
					{ assignments.map(assignment => <AssignmentCard key={assignment.key} style={styles.assignmentCardStyle} assignment={assignment}/>) }
				</List>
			);
		}

		// <List style={styles.mainContainer}>
		// 	{assignments.map( => {
		// 		let assignments =
		// 		if (assignments.length > 0) {
		// 		return (
		// 		<div key={course.code}>
		// 		<Subheader>{course.name}</Subheader>
		// 		{
		// 			assignments.map(
		// 				assignment => <AssignmentCard semester={testSemester} course={course}
		// 											  assignment={assignment} key={assignment.id}/>
		// 			)
		// 		}
		// 		<Divider/>
		// 		</div>
		// 		)
		// 	}
		// 	})}
		// </List>
		// );
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		activeSemester: state.activeSemester,
		courseFilters: state.courseFilters,
		statusFilters: state.statusFilters,
	};
};

const mapDispatchToProps = (dispatch) => {
};

export default connect(mapStateToProps)(Assignments);