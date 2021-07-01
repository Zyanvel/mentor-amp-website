import React from 'react';
import './Features.css';
import img1 from '../image/High_Five.png'
import img2 from '../image/Talking.png'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'react-bootstrap';

const theme = createMuiTheme({
  breakpoints: {
    values: {
    xs: 700,
    sm: 700,
    md: 960,
    lg: 1200,
    xl: 1920,
}
  }
})

const useStyles = makeStyles((theme) => ({
    
    featuresWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // sets directions of both features containers
    },
    featuresContainer: {
      background:  'rgb(237, 237, 237)',
      display: 'flex',
      flexDirection: 'row',
      height: '80%',
      width: '70%',
      marginTop: '20px',
      fontSize: '25px',
      padding: '0px 15px',
      
      // sets direction of elements within each of the features container
      [theme.breakpoints.down('md')]: { 
        paddingBottom: '15px'
      },
      
      [theme.breakpoints.only('xs')]: { 
        paddingBottom: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%'
      },

    },
    
    image: {
        width: '35%',
        height: '25rem',
        borderRadius: '10%',
        [theme.breakpoints.only('md')]: {
            width: '40%',
            height: '20rem',
            
          },
          [theme.breakpoints.only('sm')]: {
            width: '43%',
            height: '15rem',
            
          },
        [theme.breakpoints.only('xs')]: {
            width: '80%',
            height: '13rem',
           
            
          },
    },
    heading: {
        // heading within each feature container
        fontSize: '30px',
        color: 'rgb(45, 112, 112)',
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '5px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px'
          },
        
    },
    pTypography: {
        // p's within each feature container
        fontSize: '22px',
        marginTop: '5px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px'
          },
       
    }

  }));

function Features() {
    const classes = useStyles(theme);

    return (
    <ThemeProvider theme={theme}>
     <Grid className={classes.featuresWrapper}>
            <Grid className={classes.featuresContainer}>
                <img src={img1} alt="" className={classes.image}/>
                <Grid>
                    <Typography className={classes.heading}>
                        Proven Methodology
                    </Typography>
                    <Typography className={classes.pTypography}>
                        MentorAmp's tracking and follow-up technologies encourage
                positive, goals-focused interactions that leave your people
                feeling inspired and suported.
                    </Typography>
                    <Typography className={classes.heading}>
                        Foster Friendship
                    </Typography>
                    <Typography className={classes.pTypography}>
                    MentorAmp's structure lends to a strong, long-lasting bond
                    between mentee and mentor.
                    </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.featuresContainer}>                
                <Grid>
                    <Typography className={classes.heading}>
                        Proven Methodology
                    </Typography>
                    <Typography className={classes.pTypography}>
                    MentorAmp's matching algorithm makes onboarding your 
                entire circle a breeze. Our surveys provide you a simple view
                of how each person in your circles is feeling and doing.
                    </Typography>
                    <Typography className={classes.heading}>
                    Flexible Pricing
                    </Typography>
                    <Typography className={classes.pTypography}>
                    MentorAmp is for everyone, and our pricing  reflects that.
                Connect with us to explore your options.
                    </Typography>
                </Grid>
                <img src={img2} alt="" className={classes.image}/>
            </Grid>
        </Grid>
      </ThemeProvider>

  
    )
}

export default Features;

