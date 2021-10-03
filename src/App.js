import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import AppExpenseTracker from './Components/ExpenseTracker/AppExpenseTracker';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';


function App(props) {
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
<React.Fragment>
  <ElevationScroll {...props}>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>React101</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </ElevationScroll>
  <Toolbar/>
  <Container>
    <Box>
      {/* <AppTaskTracker/> */}
      <AppExpenseTracker/>
    </Box>
  </Container>
</React.Fragment>
  );
}

export default App;
