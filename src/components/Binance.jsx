import React from 'react'
import '../css/checkout.css'
// import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, TextField, Button, FormControl, FormLabel, FormControlLabel, Select, InputLabel, MenuItem, RadioGroup, Radio } from '@mui/material';

const Binance = ({ nextStep, prevStep, handleChange, values }) => {
  
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
            付款方式 <br/> 
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* username */}
            
              <br />
              <Grid item xs={12} style={{ marginLeft: '10px'}}>
                
                <FormLabel>請問您是否將使用Binance平台轉帳? *</FormLabel><br/>
                <FormLabel style={{ marginLeft: '0px', fontSize:'12px'}}>Binance入金教學：可透過<a href='' className='join'>MAX</a>或<a href='' className='join'>信用卡</a><br/></FormLabel>
                <br />
                <RadioGroup
                    row
                    required
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="male"
                    name="radio-buttons-group"
                >
                    <FormLabel>教學：<Link to='/binanceinternaltransfer' target="_blank" className='join'>Binance內轉</Link>｜<Link to='/binanceexternaltransfer' target="_blank" className='join'>非Binance轉帳</Link></FormLabel>
                    <FormControlLabel value="yes" control={<Radio />} label="建議: Binance內轉 (免手續費+快速)" style={{ color: 'black'}}/>
                    <FormControlLabel value="no" control={<Radio />} label="非Binance平台 TRC20 轉帳 (需手續費+較慢)" style={{ color: 'black'}}/>
                </RadioGroup>
                
              </Grid>
              <br/>
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

export default Binance;