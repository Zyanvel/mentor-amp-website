import React from 'react';
import './TestimonySection.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

// We used Material-UI to create this component. Everything was wrapped inside a Grid component/container//
//We used makeStyles in order to style our components//

const useStyles = makeStyles((theme) => ({
    divContainer: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

function TestimonySection() {
    const classes = useStyles();
    return (
     <>
        <Grid className={classes.divContainer} 
        container 
        direction="column" 
        alignItem="center" 
        justify="center" 
        >
            <Typography variant="h3" style= {{color:"#317070"}}>
                    <Box fontWeight="fontWeightBold">
                        In the words of our mentees <span style= {{color:"#EC6333"}}>...</span>
                    </Box>
            </Typography>
                <br></br>
                <br></br>
            <Typography className={classes.pContainer} variant="h5" style= {{color:"rgb(65, 74, 79)"}}>
                    "I appreciate the accountability with the weekly check-ins."
                    <br></br>
                    ~ Stephen, Sales Executive
                    <br></br>
                    <br></br>
                    "I see the mentor meetings so beneficial and I appreciate my mentor's time and effort to support me"
                    <br></br>
                    ~ Susie, Tax Accountant
                    <br></br>
                    <br></br>
                    "I think this is so important for building community! I am developing a mentorship, but also a friendship"
                    <br></br>
                    ~ Michael, Nursing Student
            </Typography>   
        </Grid>
     </>
    )
}
export default TestimonySection
