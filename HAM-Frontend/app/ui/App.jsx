import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Checkbox from 'material-ui/Checkbox';
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
    '2016/2',
    '2016/1',
    '2015/2',
    '2015/1',
    '2014/2',
    '2014/1',
    '2013/2',
    '2013/1',
    '2012/2',
    '2012/1',
    '2011/2',
    '2011/1',
    '2010/2',
    '2010/1'
];

const activeCoursesTest = [
    {code: "VIMIAA00", name: "System Modeling"},
    {code: "VIMIA313", name: "Artificial Intelligence"}
];

export default class App extends React.Component {

    constructor() {
        super();

        this.courseFilterComponents = [];
        this.state = {
            currentSemester: activeSemestersTest[0],
            statusFilters: new Set(),
            courseFilters: new Set(),
        }
    }

    handleSemesterChange(event, index, value) {
        //alert(value);
        this.setState({currentSemester: value});
    }

    handleStatusFilterChange(status, event, checked) {
        var filters = this.state.statusFilters;
        if (checked) {
            filters.add(status);
        } else {
            filters.delete(status);
        }
        this.setState({statusFilters: filters});
        alert(filters.size)
    }

    handleCourseFilterChange(course, event, checked) {
        var filters = this.state.courseFilters;
        if (checked) {
            filters.add(course);
        } else {
            filters.delete(course);
        }
        this.setState({courseFilters: filters});
        alert(filters.size)
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
                                value={this.state.currentSemester}
                                style={styles.semesterSelector}
                                maxHeight={300}
                                onChange={this.handleSemesterChange.bind(this)}>
                                {activeSemestersTest.map((semester) => {
                                    return (
                                        <MenuItem
                                            key={semester}
                                            value={semester}
                                            primaryText={semester} />
                                    );
                                })}
                            </SelectField>
                        </div>
                        <List>
                            <Subheader>Filter by assignment status</Subheader>
                            <ListItem
                                key="active"
                                primaryText="Active"
                                //onChange={this.handleCourseFilterChange.bind(this)}
                                leftCheckbox={<Checkbox
                                    onCheck={this.handleStatusFilterChange.bind(this, "active")}
                                />}
                            />
                            <ListItem
                                key="uploaded"
                                primaryText="Uploaded"
                                //onChange={this.handleCourseFilterChange.bind(this)}
                                leftCheckbox={<Checkbox
                                    onCheck={this.handleStatusFilterChange.bind(this, "uploaded")}
                                />}
                            />
                            <ListItem
                                key="completed"
                                primaryText="Completed"
                                //onChange={this.handleCourseFilterChange.bind(this)}
                                leftCheckbox={<Checkbox
                                    onCheck={this.handleStatusFilterChange.bind(this, "completed")}
                                />}
                            />
                        </List>
                        <Divider />
                        <List ref="courseList">
                            <Subheader>Filter by course</Subheader>
                            {activeCoursesTest.map((course) => {
                                return (
                                    <ListItem
                                        key={course.code}
                                        primaryText={course.name}
                                        //onChange={this.handleCourseFilterChange.bind(this)}
                                        leftCheckbox={<Checkbox
                                            onCheck={this.handleCourseFilterChange.bind(this, course.code)}
                                        />}
                                    />
                                )
                            })}
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
