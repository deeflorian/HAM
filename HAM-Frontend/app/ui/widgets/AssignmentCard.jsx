import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

let style = {
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
};

export default class AssignmentCard extends React.Component {
  componentWillMount() {

  }

  render() {
    return(
      <Paper style={style.paper}>
        <div style={style.header}>
          <div>
            {this.props.info.assignment.title}
          </div>
          <div>
            {this.props.info.course.name}
          </div>
        </div>
        <div style={style.body}>
          {this.props.info.assignment.description}
        </div>
        <div style={style.footer}>
          <RaisedButton label="TODO" primary={true} style={style} />
        </div>
      </Paper>
    )
  }
}
