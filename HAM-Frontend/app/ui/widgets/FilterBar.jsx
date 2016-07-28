import React from 'react';
import { connect } from 'react-redux';

import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import Subheader from 'material-ui/Subheader';

import ClientAPI from '../../api/ClientAPI';
import * as Types from '../../redux/Types';

const styles = {
	semesterSelectorContainer: {
		padding: 16,
		paddingTop: 8
	},
	semesterSelector: {
		width: '100%'
	}
};

let clientApi = new ClientAPI;

class FilterBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<List>
					<Subheader>Active semester:</Subheader>
					<SelectField
						value={this.props.activeSemester.key}
						style={styles.semesterSelector}
						maxHeight={300}
						onChange={this.props.handleSemesterChange.bind(this)}>
						{clientApi.getSemesters().map(semester =>
							<MenuItem
								key={semester.key}
								value={semester.key}
								primaryText={semester.name}
							/>
						)}
					</SelectField>
					<Subheader>Filter by course</Subheader>
					{clientApi.getSemesterCourses(this.props.activeSemester.key).map((course) => {
						return (
							<ListItem
								key={course.code}
								primaryText={course.name}
								leftCheckbox={<Checkbox
									onCheck={this.props.handleCourseFilterChange.bind(this, course.key)}
								/>}
							/>
						);
					})}
					<Subheader>Filter by assignment status</Subheader>
					{clientApi.getStatuses().map(status =>
						<ListItem
							key={status.code}
							primaryText={status.name}
							//onChange={this.handleCourseFilterChange.bind(this)}
							leftCheckbox={<Checkbox
								onCheck={this.props.handleStatusFilterChange.bind(this, status.key)}
							/>}
						/>
					)}
				</List>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		activeSemester: state.activeSemester,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSemesterChange: (event, index, value) => {
			//alert(value);
			//this.setState({currentSemester: value});
			dispatch({
				type: Types.ACTIVE_SEMESTER_CHANGE,
				activeSemester: clientApi.getSemesters().find(semester => semester.key == value)
			});
		},
		handleStatusFilterChange: (status, event, checked) => {
			if (checked) {
				dispatch({
					type: Types.ADD_STATUS_FILTER,
					status: status
				});
			} else {
				dispatch({
					type: Types.REMOVE_STATUS_FILTER,
					status: status
				});
			}

			//this.setState({statusFilters: filters});
			//alert(filters.size)
		},
		handleCourseFilterChange: (course, event, checked) => {
			if (checked) {
				dispatch({
					type: Types.ADD_COURSE_FILTER,
					course: course
				});
			} else {
				dispatch({
					type: Types.REMOVE_COURSE_FILTER,
					course: course
				});
			}

			//this.setState({courseFilters: filters});
			//alert(filters.size)
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

