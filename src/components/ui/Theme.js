import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#fFBA60';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
});
