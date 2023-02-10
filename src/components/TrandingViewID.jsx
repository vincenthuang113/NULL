import React from 'react'
import '../css/checkout.css'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button, FormControl, FormLabel, FormControlLabel, Select, InputLabel, MenuItem, RadioGroup, Radio } from '@mui/material';

const TradingViewID = ({ nextStep, prevStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  const [location, setLocation] = React.useState('');
  const [profession, setProfession] = React.useState('');

  const handleChange2 = (event) => {
    setLocation(event.target.value);
  };
  const handleChange3 = (event) => {
    setProfession(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: 'white', padding:'1.8vw', display:'flex',flexDirection:'row',justifyContent:'center', marginTop:'5vw', borderRadius:'10px'}}>
      <div>
        <Typography  component="h1" variant="h4" style={{ color: 'black', fontWeight:'600', marginBottom:'1vw', textAlign:'center'}}>
            TradingView資訊
        </Typography>
        
        <form>
          <Grid container spacing={2}>
            {/* username */}
              
              <Grid item xs={12} style={{ marginLeft: '1px'}}>
                <FormLabel style={{ marginbottom: '10px'}}>請填寫您的TradingView ID*</FormLabel>
                <br/>
                <TextField 
                    style={{ maxWidth: '10vw', marginLeft: '0vw', marginTop:'1vw'}}
                    placeholder="TradingView ID"
                    label="TradingView ID"
                />
            </Grid>
          </Grid>
          <br />
          <div className="button">
            <div className="contractAlign">
            <Button 
                style={{maxWidth: '6vw', marginLeft: '1vw'}}
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                上一步
            </Button>
            <Button 
                style={{maxWidth: '6vw', marginLeft: '1vw'}}
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                下一步
            </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default TradingViewID;