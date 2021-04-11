import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {red, grey} from '@material-ui/core/colors';
import GameSearch from './GameSearch '

const theme = createMuiTheme({
  palette: {
   primary: {
     main: red[700],
   },
   secondary: {
     main: grey[500],
   },
  },
});
 

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <ThemeProvider theme = {theme}>  
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Gamusic</Typography>
      </AppBar>
      <TextField
       variant = "filled"
       color = "secondary"
       align = "center">
       
      </TextField>
      <GameSearch className= {classes.search} >
        
      </GameSearch>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </ThemeProvider> 
  );
};

export default App;
