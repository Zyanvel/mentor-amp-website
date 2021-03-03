import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import sunset from '../image/Sunset.jpg';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background:  'url(../image/Sunset.jpg)'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
      <div style={{
                  backgroundImage: `url(${sunset})`,
                  backgroundSize: 'cover',
                 backgroundPosition: 'bottom',
                 minWidth: '100%',
      }}>
        <div style={{
                  background: `rgba(0,0,0,.80)`,
      }}>
         <h1>Connect with us to explore if MentorAmp is the solution for you.</h1>
          
      
        <Container component="main" 
      maxWidth="xs"
      >
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <TextField
                  autoComplete="name"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  color="primary"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Your Email Address"
                  name="email"
                  autoComplete="email"
                  color="primary"
                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              className={classes.submit}
              color="primary"
            >
              Submit
            </Button>
          </form>
        </div>
      </Container> 
        </div>
        
      </div>
      
    );
}
