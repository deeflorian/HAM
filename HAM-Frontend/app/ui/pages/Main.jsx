import React from 'react';
import Api from '../../api/api.js';

import AssignmentCard from '../widgets/AssignmentCard';

let style = {
  mainContainer: {
    position: "relative",
    left: "48px",  //TODO hackish, fix later
    container: "flex",
    flexDirection: "column",
    paddingTop: "32px",
  },
};

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
      assignmentData.forEach(function(cardProps, i) {
        let card = (
          <AssignmentCard info={cardProps} style={style.paper} key={i} />
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
