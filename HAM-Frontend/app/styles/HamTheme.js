import * as colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export const hamGreen = "#4EAB64";
export const hamGreenLight = "#32994A";

//4EAB64

export const hamTheme = getMuiTheme(lightBaseTheme, {
	palette: {
		primary1Color: hamGreen,
		primary2Color: hamGreenLight,
	},
});

