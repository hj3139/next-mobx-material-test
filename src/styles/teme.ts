import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: '#fac499',
        color: '#ffffff'
      }
    }
  }
});
