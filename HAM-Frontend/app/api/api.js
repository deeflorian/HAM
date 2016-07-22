/*
  Separate file that contains the functions that'll wrap the functionality
  of the backend.
*/

let isTesting = true;

// TODO Balint should check these:
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

// Gets the assignments of a single user.
exports.getAssigmentData = function() {
  if(isTesting) {
    let tomorrow = new Date();
    let yesterday = new Date();
    tomorrow.setDate(tomorrow.getDate() - tomorrow.getDay() + 1);
    yesterday.setDate(yesterday.getDate()  - yesterday.getDay() - 1);
    return [
      {
        course: {  // Later on this could be assembled on the client side so there is no need to send the detailed course description multiple times. Such optimizations seem quite insignificant on the other hand...
          code: "VIMIA313",
          name: "Artificial Intelligence",
          semester: "2016/2",
        },
        assignment: {
          title: "Neural networks",
          description: "Create an application that recognises images, using neural networks.",
          details: "Dat very long text that explains to the student what will he need to do in order to complete the assingment. A really... really... reaaaaaaaaaaaaallly long line. Hopefully.",
          deadline: tomorrow,
          status: "ongoing"
        }
      },
      {
        course: {
          code: "VIMIA313",
          name: "Artificial Intelligence",
          semester: "2016/2",
        },
        assignment: {
          title: "Neural networks",
          description: "Collect and upload images in preparation of the next assignment.",
          details: "Lazy teacher writes nuthin' here.",
          deadline: yesterday,
          status: "uploaded"
        }
      },
    ]
  } else {
    alert("Not implemented API call!");
  }
}
