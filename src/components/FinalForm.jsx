import React from 'react'
import '../css/checkout.css'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button, FormControl, FormLabel, FormControlLabel, Select, InputLabel, MenuItem, RadioGroup, Radio } from '@mui/material';

const FinalForm = ({ nextStep, prevStep, handleChange, values }) => {
  
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
            注意事項
        </Typography>
        
        <form>
          <Grid container spacing={2}>
            {/* username */}
              
              <Grid item xs={12} style={{ marginLeft: '10px'}}>
                <FormLabel style={{ marginbottom: '10px'}}>
                NULL Investing LLC團隊會在您完成申請表單的一週內發送指標開通郵件以及使用說明書，指標使用期限以郵件送達的次日開始計算。
                <br/>
                <br/>
                *請留意來自於nullinvesting@gmail.com的郵件，指標開通後會收到來自TradingView和NULL Investing LLC的通知*
                <br/>
                <br/>
                我們再次感謝您的購買! 祝您操作順利!
                </FormLabel>
            </Grid>
          </Grid>
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

export default FinalForm;