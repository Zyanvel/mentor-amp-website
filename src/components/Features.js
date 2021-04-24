import React from 'react';
import './Features.css';
import img1 from '../image/High_Five.png'
import img2 from '../image/Talking.png'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
    // const classes = useStyles();
//     featuresWrapper: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//   }));

function Features() {
    

    return (
    <>
         <div className='features-wrapper'>
            <div className="features-first-container">
                <img src={img1} alt="" className="image-one"/>
                <div className="first-container-text">
                    <h1 className="proven-methodology">
                    Intelligent Automation
                    </h1>
                    <p>
                        MentorAmp's tracking and follow-up technologies encourage
                        positive, goals-focused interactions that leave your people
                        feeling inspired and suported.
                    </p>
                    <h1 className="foster-friendship">
                        Foster Friendship
                    </h1>
                    <p>
                        MentorAmp's structure lends to a strong, long-lasting bond
                        between mentee and mentor.
                    </p>
                </div>
            
            </div>
            <div className="features-second-container">
                <div className="second-container-text">
                    <h1 className="intelligent-automation">
                        Intelligent Automation
                    </h1>
                    <p>
                        MentorAmp's matching algorithm makes onboarding your 
                        entire circle a breeze. Our surveys provide you a simple view
                        of how each person in your circles is feeling and doing.
                    </p>
                    <h1 className="flexible-pricing">
                        Flexible Pricing
                    </h1>
                    <p>
                        MentorAmp is for everyone, and our pricing  reflects that.
                        Connect with us to explore your options.
                    </p>
                </div>
                <img src={img2} alt="" className="image-two"/>
            </div>
        </div>
    </>
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