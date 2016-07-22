import React from 'react';
import Api from '../../api/api.js';
import Paper from 'material-ui/Paper';

let style = {
  mainContainer: {
    position: "relative",
    left: "48px",  //TODO hackish, fix later
    container: "flex",
    flexDirection: "column",
    paddingTop: "32px",
  },
  paper: {
    marginBottom: "16px",
    marginTop: "16px",
  }
}

export default class Main extends React.Component {
  componentWillMount() {
    this.setState({
      assignmentData: Api.getAssigmentData()
    });
  }

  render() {
    let assignmentData = this.state.assignmentData;
    let cards = [];

    // Checking null and undefined values -- should not happen, but still...
    if(assignmentData) {
      assignmentData.forEach(function(assignment) {
        let card = (
          <Paper style={style.paper}>
            <p>{assignment.assignment.title}</p>
          </Paper>
        );
        cards.push(card);
      });
    }

    return(
      <div style={style.mainContainer}>
        <p>Active assignments:</p>
        {cards}
      </div>
    )
  }
}
