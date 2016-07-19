import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List'
import SelectField from 'material-ui/SelectField';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import * as colors from 'material-ui/styles/colors'

import Ham from '../icons/Ham';

const styles = {
    container: {
        paddingLeft: 256
    },
    drawerContainer: {
        height: 'calc(100% - 64px)',
        top: 64,
        padding: 8,
        paddingTop: 16
    },
    semesterSelectorContainer: {
        padding: 16,
        paddingTop: 8
    },
    semesterSelector: {
        width: '100%'
    },
    topListElement: {
        color: colors.grey500
    },
};

const activeSemestersTest = [
    {key: 1, label: '2016/2'},
    {key: 2, label: '2016/1'},
    {key: 3, label: '2015/2'},
    {key: 4, label: '2015/1'},
    {key: 5, label: '2014/2'},
    {key: 6, label: '2014/1'},
    {key: 7, label: '2013/2'},
    {key: 8, label: '2013/1'},
    {key: 9, label: '2012/2'},
    {key: 10, label: '2012/1'},
    {key: 11, label: '2011/2'},
    {key: 12, label: '2011/1'},
    {key: 13, label: '2010/2'},
    {key: 14, label: '2010/1'},
];


export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentSemester: activeSemestersTest[0]
        }
    }

    handleSemesterChange(event, index, value) {
        setState({currentSemester: value})
    }

    handleStatusChange(event, index, value) {

    }

    handleCourseChange(event, index, value) {

    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title='Homework Assignment Module'
                        iconElementLeft={<IconButton><Ham/></IconButton>}
                        showMenuIconButton={true}
                    />
                    <Drawer open={true} containerStyle={styles.drawerContainer}>
                        <div style={styles.semesterSelectorContainer}>
                            <span>Active semester:</span>
                            <SelectField
                                value={this.state.currentSemester.key}
                                label={this.state.currentSemester.label}
                                style={styles.semesterSelector}
                                maxHeight={300}
                                onChange={() => {
                                    this.handleSemesterChange
                                }}>
                                {activeSemestersTest.map((semester) => {
                                    return (
                                        <MenuItem key={semester.key} value={semester.key} primaryText={semester.label}/>
                                    );
                                })}
                            </SelectField>
                        </div>
                        <List>
                            <Subheader>Filter by assignment status</Subheader>
                            <ListItem primaryText="Active" leftCheckbox={<Checkbox />} />
                            <ListItem primaryText="Completed" leftCheckbox={<Checkbox />} />
                        </List>
                        <Divider />
                        <List>
                            <Subheader>Filter by course</Subheader>
                            <ListItem primaryText="Artificial Intelligence" leftCheckbox={<Checkbox />} />
                            <ListItem primaryText="Systems Engineering" leftCheckbox={<Checkbox />} />
                        </List>
                    </Drawer>
                    <div style={styles.container}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
