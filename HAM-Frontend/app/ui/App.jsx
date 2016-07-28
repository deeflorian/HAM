import React from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import * as colors from 'material-ui/styles/colors';

import Ham from '../icons/Ham';
import {hamGreenLight, hamTheme} from '../styles/HamTheme';

import FilterBar from './widgets/FilterBar';

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

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={hamTheme}>
				<div>
					<AppBar
						title='Homework Assignment Module'
						iconElementLeft={<IconButton><Ham/></IconButton>}
						showMenuIconButton={true}
					/>
					<Drawer open={true} containerStyle={styles.drawerContainer}>
						<FilterBar />
					</Drawer>
					<div style={styles.container}>
						{this.props.children}
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}
App = connect()(App);

export default App;
