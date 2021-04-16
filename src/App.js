import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Loading, Notify, Alert } from './View/Components';
import { store } from './store/store'
import Routes from './Routes';
import './global.css';

const App = () => {

  const theme = createMuiTheme({
      palette: {
        primary: {
          main: blue[500]
        }
      },
      props: {
        MuiTextField: {
          variant: 'outlined',
          fullWidth: true
        },
        MuiSelect: {
          variant: 'outlined',
          fullWidth: true
        }
      }
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Alert />
        <Notify />
        <Loading />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}


export default App;