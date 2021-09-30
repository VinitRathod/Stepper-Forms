import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Info } from './components/Info';
import { Quiz } from "./components/Quiz";
import { Final } from "./components/Final";
import info from '../src/assests/info.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    margin: "6rem auto",
    border: "1px solid #999",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "red",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed":{
      color:"red",
    },
    },
  backButton: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(4)
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  reset:{
    marginLeft: theme.spacing(37),
    marginBottom: theme.spacing(3),
    border: "1px solid #999",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "red",
    }
  },
  last:{
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(33),
    marginBottom: theme.spacing(3)
  }
}));

var styles = {
  marginRight:'16px',
  marginBottom: '32px',
};

function getSteps() {
  return ['Information', 'Wizardy world', 'Final'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div><h1 className="me-auto" style={{marginLeft:"9rem",marginBottom:"2rem"}}>Tell us about yourself!</h1>
          <div className="row">
            <div className="col-md-6">
              <Info />
            </div>
            <div className="col-md-6" style={{marginTop:"2rem"}}>
              <img src={info} width="220px" height="150px" alt="img not found" className="img-fluid w-100"/>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <Quiz />
        </div>
        
      );
    case 2:
      return (
        <div>
          <Final />
        </div>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.last}>All steps completed</Typography>
            <Button onClick={handleReset} className={classes.reset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className='container'>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <input type="submit" value={activeStep === steps.length - 1 ? 'Finish' : 'Next'} variant="contained" color="primary" onClick={handleNext} className="btn btn-primary" style={styles} />
                {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
              {/* </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}