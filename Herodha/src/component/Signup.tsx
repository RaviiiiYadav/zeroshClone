import { Button, Typography } from '@mui/material';
import signupp from '../assets/signup.png'
import {TextField,InputAdornment} from '@mui/material';
function Sigup(){
return(
    <div className='container' style={{paddingLeft:160}}>
        <div className='left'>
        <img src={signupp} style={{paddingTop:80,paddingLeft:50}} className='left'></img>
        </div>
        <div className='right' style={{paddingTop:80,paddingLeft:50}} >
            <Typography variant='h4'>Signup now</Typography>
            <br></br>
            <Typography>Or track your existing application.</Typography>
            <div style={{paddingTop:20}}> <TextField id='phone_no' label="Phone Number"
            InputProps={{startAdornment: (<InputAdornment position="start">+91</InputAdornment>), }} />
            <br></br>
            <Typography style={{color:'gray'}}>You will recieve an OTP on your number</Typography>
            <Button  variant="contained">Continue</Button>
            </div>
            
            
            

        </div>
    </div>
)

}

export default Sigup;