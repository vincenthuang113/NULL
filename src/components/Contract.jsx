import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Divider } from '@mui/material';

const Contract = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  const [file, setFile] = useState(null);

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file)
    fetch("http://localhost:3000/auth/upload-file",{
        method: "POST",
        body: formData
    })
    .then((res)=> res.json())
    .then((response)=>console.log(response))
    .catch((err)=>{
        console.error(err);
    })
  }

  const handleFileChange = (e) =>{
    setFile(e.target.file[0])
  }

  return (
    <Container  component="main" maxWidth="xs" style={{ backgroundColor: 'white', padding:'2vw', display:'flex',flexDirection:'row',justifyContent:'center', marginTop:'5vw', borderRadius:'10px'}}>
      <div>
        <Typography component="h1" variant="h4" style={{ color: 'black', fontWeight:'600', marginBottom:'1vw', textAlign:'center'}}>
            合約文件簽屬
        </Typography>
        <Divider/>
        <Typography component="h1" variant="h6" style={{ color: 'black', fontWeight:'600', margin:'1vw', textAlign:'center'}}>
        1年方案: 420 USDT <br/>
        請開啟並下載檔案: <span id='contract'> <a href='https://drive.google.com/file/d/1iTZXkYApgqD0Q_4j7rdfmSIw1Vzpcq7A/view' target='_blank'>合約書PDF</a></span>
        </Typography>
        <Divider/>
        <h1 className='pdf'>請下載合約書並上傳至以下網址進行線上簽屬:</h1>
        <div className="sign">
            <a href="https://smallpdf.com/zh-TW/sign-pdf" target='_blank' className='pdfa'>Smallpdf</a>
            <a href="https://hant.hellosign.com/what-is-hellosign/online-contracts" target='_blank' className='pdfa'>Dropbox Sign</a>
            <a href="https://www.ilovepdf.com/zh-tw/sign-pdf" target='_blank' className='pdfa'>Ilovepdf</a>
        </div>
        <Divider/>

        <form onSubmit={handleSubmitFile} className='upload'>
        <input type="file" name="file" onChange={handleFileChange}></input>
        <Button type="submit">Submit</Button>
        </form>

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
    </Container>
  )
}

export default Contract