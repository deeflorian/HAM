import * as Types from './Types';

export const hamReducer = (state, action) => {
	console.log("Reducer called: " + action.type);

	switch(action.type) {
		case Types.ACTIVE_SEMESTER_CHANGE:
			return {...state, activeSemester: action.activeSemester};

		case Types.ADD_COURSE_FILTER:
			return {...state, courseFilters: state.courseFilters.add(action.course)};
		case Types.REMOVE_COURSE_FILTER:
			return {...state, courseFilters: state.courseFilters.delete(action.course)};

		case Types.ADD_STATUS_FILTER:
			return {...state, statusFilters: state.statusFilters.add(action.status)};
		case Types.REMOVE_STATUS_FILTER:
			return {...state, statusFilters: state.statusFilters.delete(action.status)};

		default:
			return state;
	}
};

