import React from 'react';
import './Features.css';
import img1 from '../image/High_Five.png'
import img2 from '../image/Talking.png'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

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
      [theme.breakpoints.down('xs')]: {
        
        height: '40%',
        paddingBottom: '10px'
      },

    },
    
    image: {
        width: '35%',
        height: '25rem',
        borderRadius: '10%',
        [theme.breakpoints.down('xs')]: {
            width: '45%',
            height: '10rem',
            position: 'relative',
            top: '45px'
          },
    },
    heading: {
        // heading within each feature container
        fontSize: '30px',
        color: 'rgb(45, 112, 112)',
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '5px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px'
          },
    },
    pTypography: {
        // p's within each feature container
        fontSize: '22px',
        marginTop: '5px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px'
        },
    }

  }));

function Features() {
    const classes = useStyles();

    return (
 
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
  
    )
}

export default Features;


{/* <Grid className={classes.featuresWrapper}>
            <Grid className={classes.featuresFirstContainer}>
            <img src={img1} alt="" className="image-one"/>
                <Grid className={classes.firstContainerText}>
                    <Typography className={classes.heading}>
                        Proven Methodology
                    </Typography>
                    <Typography>
                        MentorAmp's tracking and follow-up technologies encourage
                positive, goals-focused interactions that leave your people
                feeling inspired and suported.
                    </Typography>
                    <Typography className={classes.heading}>
                        Foster Friendship
                    </Typography>
                    <Typography>
                    MentorAmp's structure lends to a strong, long-lasting bond
                    between mentee and mentor.
                    </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.featuresSecondContainer}>
                <img src={img2} alt="" className="image-two"/>
                <Grid className={classes.secondContainerText}>
                    <Typography className={classes.heading}>
                        Proven Methodology
                    </Typography>
                    <Typography>
                    MentorAmp's matching algorithm makes onboarding your 
                entire circle a breeze. Our surveys provide you a simple view
                of how each person in your circles is feeling and doing.
                    </Typography>
                    <Typography className={classes.heading}>
                    Flexible Pricing
                    </Typography>
                    <Typography>
                    MentorAmp is for everyone, and our pricing  reflects that.
                Connect with us to explore your options.
                    </Typography>
                </Grid>
            </Grid>
        </Grid> */}

  