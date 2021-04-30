import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.png'
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img: {
      width: "100px"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="text.primary">
          <Container>

        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="cyber future academy">
            <img src={logo} alt='cyber future academy' className={classes.img} ></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cyber future academy
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Gallery</Button>

          <Button color="inherit">Contact</Button>
        </Toolbar>
        </Container>

      </AppBar>
    </div>
  );
}
