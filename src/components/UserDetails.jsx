import React from 'react'
import '../css/checkout.css'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button, FormControl, FormLabel, FormControlLabel, Select, InputLabel, MenuItem, RadioGroup, Radio } from '@mui/material';

const UserDetails = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
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
    <Container component="main" maxWidth="xs" style={{ backgroundColor: 'white', padding:'2vw', display:'flex',flexDirection:'row',justifyContent:'center', marginTop:'5vw', borderRadius:'10px'}}>
      <div>
        <Typography  component="h1" variant="h4" style={{ color: 'black', fontWeight:'600', marginBottom:'1vw', textAlign:'center'}}>
            OFA量化指標購買表單 <br/> 1年方案
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* username */}
            <Grid item xs={6}>
                <TextField 
                    placeholder="姓氏"
                    label="姓氏"
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname}
                    // variant="outlined"
                    autoComplete="lastname"
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    placeholder="名字"
                    label="名字"
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname}
                    // variant="outlined"
                    autoComplete="firstname"
                    fullWidth
                    required
                />
            </Grid>
              <br />
              <Grid item xs={12} style={{ marginLeft: '10px'}}>
                <FormLabel>性別 *</FormLabel>
                <RadioGroup
                    row
                    required
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="male"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="male" control={<Radio />} label="男" style={{ color: 'black'}}/>
                    <FormControlLabel value="female" control={<Radio />} label="女" style={{ color: 'black'}}/>
                    <FormControlLabel value="other" control={<Radio />} label="其它" style={{ color: 'black'}}/>
                </RadioGroup>
              </Grid>
              <br/>
              {/* password */}
              <Grid item xs={6}>
                <TextField 
                  placeholder="年齡"
                  label="年齡"
                  onChange={handleChange('age')}
                  defaultValue={values.age}
                  InputProps={{
                        inputProps: { 
                            max: 100, min: 10 
                        }
                    }}
                  // variant="outlined"
                  autoComplete="age"
                  fullWidth
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  placeholder="電話"
                  label="電話"
                  onChange={handleChange('number')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="number"
                  fullWidth
                />
              </Grid>
              <br />
              {/* email address */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Email"
                  label="Email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                  required
                />
              </Grid>
              <br />
              <Grid item xs={7}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">地區 *</InputLabel>
                    <Select
                        value={location}
                        label="地區"
                        onChange={handleChange2}
                        required
                    >
                        <MenuItem value={'taiwan'}>台灣</MenuItem>
                        <MenuItem value={'china'}>中國</MenuItem>
                        <MenuItem value={'hk'}>香港</MenuItem>
                        <MenuItem value={'malaysia'}>馬來西亞</MenuItem>
                        <MenuItem value={'usa'}>美國</MenuItem>
                        <MenuItem value={'other'}>其它</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <TextField 
                  placeholder="其它地區"
                  label="其它地區"
                  onChange={handleChange('otherLocation')}
                  defaultValue={values.otherLocation}
                  // variant="outlined"
                  autoComplete="otherLocation"
                  fullWidth
                />
              </Grid>
              {/* industry */}
              <br />
              <Grid item xs={7}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">職業</InputLabel>
                    <Select
                        value={profession}
                        label="職業"
                        onChange={handleChange3}
                    >
                        <MenuItem value={'finance'}>金融業</MenuItem>
                        <MenuItem value={'technology'}>科技業</MenuItem>
                        <MenuItem value={'manufacture'}>製造業</MenuItem>
                        <MenuItem value={'construction'}>建築業</MenuItem>
                        <MenuItem value={'service'}>服務業</MenuItem>
                        <MenuItem value={'healthcare'}>醫療業</MenuItem>
                        <MenuItem value={'education'}>教育業</MenuItem>
                        <MenuItem value={'student'}>學生</MenuItem>
                        <MenuItem value={'other'}>其它</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <TextField 
                  placeholder="其它職業"
                  label="其它職業"
                  onChange={handleChange('otherProfession')}
                  defaultValue={values.otherProfession}
                  // variant="outlined"
                  autoComplete="otherProfession"
                  fullWidth
                />
              </Grid>
          </Grid>
          <br />
          <div className="button">
          <Button 
            style={{maxWidth: '6vw'}}
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            下一步
          </Button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default UserDetails