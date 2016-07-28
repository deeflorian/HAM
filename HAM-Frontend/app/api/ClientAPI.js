/*
 Separate file that contains the functions that'll wrap the functionality
 of the backend.
 */

let isTesting = true;

// HF Statuses:
// planned   -- homework present in system, no deadline / no student assigned yet -- should not be listed?
// scheduled -- homework assigned with a deadline present, students can see it but upload is disabled
// ongoing   -- homework assigned, uncompleted, deadline not yet passed
// late      -- homework assigned, uncompleted, deadline passed, but can still be uploaded (minus points or something)
// missed    -- homework assigned, uncompleted, deadline passed, cannot be uploaded
// uploaded  -- solution already uploaded -- upload button should be there if the deadline has not yet passed
// accepted  -- homework is accepted -- upload button should be there if the deadline has not yet passed
// rejected  -- homework is rejected -- upload button should be there if the deadline has not yet passed
// TODO later put these in a readme in the docs folder

let alphabeticalComparison = (a, b) => {
	if (a.name < b.name)
		return -1;
	if (a.name > b.name)
		return 1;
	return 0;
};

export default class ClientAPI {
	getData() {
		if (isTesting) {
			// Tomorrow midnight
			let tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 1);
			tomorrow.setHours(24, 0, 0, 0);

			// Yesterday midnight
			let yesterday = new Date();
			yesterday.setDate(tomorrow.getDate() - 1);
			yesterday.setHours(24, 0, 0, 0);

			return (
				{
				semesters: [
					{
						key: 'http://ham.inf.mit.bme.hu/data/semester/1',
						name: '2016/1'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/semester/2',
						name: '2016/2'
					}
				],
				courses: [
					{
						key: 'http://ham.inf.mit.bme.hu/data/course/1',
						code: 'VIMIA312',
						name: 'Artificial Intelligence'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/course/2',
						code: 'VIMIAA00',
						name: 'System Modeling'
					}
				],
				assignments: [
					{
						key: 'http://ham.inf.mit.bme.hu/data/assignment/1',
						semesterKey: 'http://ham.inf.mit.bme.hu/data/semester/1',
						courseKey: 'http://ham.inf.mit.bme.hu/data/course/1',
						title: "Neural networks",
						description: "Create an application that recognises images, using neural networks.",
						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
						deadline: tomorrow,
						statusKey: "http://ham.inf.mit.bme.hu/data/status/3"
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/assignment/2',
						semesterKey: 'http://ham.inf.mit.bme.hu/data/semester/1',
						courseKey: 'http://ham.inf.mit.bme.hu/data/course/1',
						title: "Neural networks",
						description: "Create an application that recognises images, using neural networks.",
						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
						deadline: tomorrow,
						statusKey: "http://ham.inf.mit.bme.hu/data/status/1"
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/assignment/3',
						semesterKey: 'http://ham.inf.mit.bme.hu/data/semester/1',
						courseKey: 'http://ham.inf.mit.bme.hu/data/course/1',
						title: "Neural networks",
						description: "Create an application that recognises images, using neural networks.",
						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
						deadline: tomorrow,
						statusKey: "http://ham.inf.mit.bme.hu/data/status/2"
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/assignment/4',
						semesterKey: 'http://ham.inf.mit.bme.hu/data/semester/1',
						courseKey: 'http://ham.inf.mit.bme.hu/data/course/2',
						title: "Model creation of railroad system",
						description: "Create a metamodel of a real-world railroad system.",
						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
						deadline: tomorrow,
						statusKey: "http://ham.inf.mit.bme.hu/data/status/8"
					}
				],
				statuses: [
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/1',
						code: 'planned',
						name: 'Planned'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/2',
						code: 'scheduled',
						name: 'Scheduled'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/3',
						code: 'ongoing',
						name: 'Ongoing'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/4',
						code: 'late',
						name: 'Late'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/5',
						code: 'missed',
						name: 'Missed'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/6',
						code: 'uploaded',
						name: 'Uploaded'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/7',
						code: 'accepted',
						name: 'Accepted'
					},
					{
						key: 'http://ham.inf.mit.bme.hu/data/status/8',
						code: 'rejected',
						name: 'Rejected'
					},
				]
			}

				// [
			// 	{
			// 		semester: "2016/2",
			// 		courses: [
			// 			{
			// 				code: "VIMIA313",
			// 				name: "Artificial Intelligence",
			// 				assignments: [
			// 					{
			// 						id: 1,
			// 						title: "Neural networks",
			// 						description: "Create an application that recognises images, using neural networks.",
			// 						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
			// 						deadline: tomorrow,
			// 						status: "ongoing"
			// 					},
			// 					{
			// 						id: 2,
			// 						title: "Neural networks",
			// 						description: "Collect and upload images in preparation of the next assignment.",
			// 						details: "Lazy teacher writes nuthin' here.",
			// 						deadline: yesterday,
			// 						status: "uploaded"
			// 					}
			// 				]
			// 			},
			// 			{
			// 				code: "VIMIAA0",
			// 				name: "System Modeling",
			// 				assignments: [
			// 					{
			// 						id: 3,
			// 						title: "Neural networks",
			// 						description: "Create an application that recognises images, using neural networks.",
			// 						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
			// 						deadline: tomorrow,
			// 						status: "ongoing"
			// 					},
			// 					{
			// 						id: 4,
			// 						title: "Neural networks",
			// 						description: "Collect and upload images in preparation of the next assignment.",
			// 						details: "Lazy teacher writes nuthin' here.",
			// 						deadline: yesterday,
			// 						status: "uploaded"
			// 					}
			// 				]
			// 			}
			// 		]
			// 	},
			// 	{
			// 		semester: "2016/1",
			// 		courses: [
			// 			{
			// 				code: "VIMIA312",
			// 				name: "Artificial Intelligence",
			// 				assignments: [
			// 					{
			// 						id: 5,
			// 						title: "Neural networks",
			// 						description: "Create an application that recognises images, using neural networks.",
			// 						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
			// 						deadline: tomorrow,
			// 						status: "ongoing"
			// 					},
			// 					{
			// 						id: 6,
			// 						title: "Neural networks",
			// 						description: "Collect and upload images in preparation of the next assignment.",
			// 						details: "Lazy teacher writes nuthin' here.",
			// 						deadline: yesterday,
			// 						status: "uploaded"
			// 					}
			// 				]
			// 			},
			// 			{
			// 				code: "VIMIAA1",
			// 				name: "System Modeling",
			// 				assignments: [
			// 					{
			// 						id: 7,
			// 						title: "Neural networks",
			// 						description: "Create an application that recognises images, using neural networks.",
			// 						details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
			// 						deadline: tomorrow,
			// 						status: "ongoing"
			// 					},
			// 					{
			// 						id: 8,
			// 						title: "Neural networks",
			// 						description: "Collect and upload images in preparation of the next assignment.",
			// 						details: "Lazy teacher writes nuthin' here.",
			// 						deadline: yesterday,
			// 						status: "uploaded"
			// 					}
			// 				]
			// 			}
			// 		]
			// 	},
			// ]
			);
		} else {
			alert("Not implemented ClientAPI call!");
		}
	}

	// getSemesters() {
	// 	let data = this.getAssigmentData();
	// 	return data.map((record) => {
	// 		return record.semester;
	// 	});
	// }
	//
	// getSemester(semester) {
	// 	let data = this.getAssigmentData();
	// 	return data.find(record => record.semester == semester);
	// }
	//
	// getCoursesBySemester(semester, courseFilter) {
	// 	let semesterData = this.getSemester(semester);
	//
	// 	let comparison = (a, b) => {
	// 		if (a.name < b.name)
	// 			return -1;
	// 		if (a.name > b.name)
	// 			return 1;
	// 		return 0;
	// 	};
	//
	// 	let courses = courseFilter !== undefined && courseFilter.size > 0 ?
	// 		semesterData.courses.filter(course => courseFilter.has(course.code)) : semesterData.courses;
	// 	courses.sort(comparison);
	// 	return courses;
	// }
	//
	// getCourseBySemester(semesterID, courseID) {
	// 	let courses = this.getCoursesBySemester(semesterID);
	// 	return courses.find(record => record.code == courseID);
	// }
	//
	// getAssignments(semesterID, courseFilter, statusFilter) {
	// 	let semesterData = this.getSemester(semester);
	// 	return semesterData.assignments;
	// }
	//
	// getCourseAssignments(semesterID, courseID, courseFilter, statusFilter) {
	// 	// TODO: Some sorting mechanism, which priorizes the assignments by deadline
	// 	let course = this.getCourseBySemester(semesterID, courseID, courseFilter);
	// 	return statusFilter !== undefined && statusFilter.size > 0 ?
	// 		course.assignments.filter(assignment => statusFilter.has(assignment.status)) : course.assignments;
	// }
	//
	// getCourseAssignment(semester, course, assignment) {
	// 	let assignments = this.getAssignments(semester, course);
	// 	return assignments.find(record => record.id == assignment);
	// }
	//
	// isAllAssignmentsFiltered(semesterID, courseFilter, statusFilter) {
	// 	let semesterData = this.getSemester(semesterID);
	// 	let count = semesterData.courses.reduce((prev, next) =>
	// 		this.getAssignments(semesterID, prev.code, courseFilter, statusFilter).length +
	// 		this.getAssignments(semesterID, next.code, courseFilter, statusFilter).length
	// 	);
	// 	return count == 0 ? true : false;
	// }

	getSemesters() {
		return this.getData().semesters.sort(alphabeticalComparison);
	}

	getSemester(semesterKey) {
		return this.getSemester().find(semester => semester.key == semesterKey);
	}

	getCourses() {
		return this.getData().courses;
	}

	getCourse(courseKey) {
		return this.getCourses().find(course => course.key == courseKey);
	}

	getStatuses() {
		return this.getData().statuses;
	}

	getStatus(statusKey) {
		return this.getStatuses().find(status => status.key == statusKey);
	}

	getAssignments(semesterKey, courseFilters, statusFilters) {
		let assignments = this.getData().assignments;
		if (semesterKey) {
			assignments = assignments.filter(assignment => assignment.semesterKey == semesterKey);
		}
		if (courseFilters && courseFilters.size != 0) {
			assignments = assignments.filter(assignment => courseFilters.has(assignment.courseKey));
		}
		if (statusFilters && statusFilters.size != 0) {
			assignments = assignments.filter(assignment => statusFilters.has(assignment.statusKey));
		}
		return assignments;
	}

	getSemesterCourses(semesterKey) {
		let courses = this.getCourses();
		let semesterCourses = new Set(
			this.getAssignments()
				.filter(assignment => assignment.semesterKey == semesterKey)
				.map(assignment => courses.find(course => assignment.courseKey == course.key))
		);
		return [...semesterCourses];
	}
}