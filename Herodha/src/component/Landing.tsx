import img from '../assets/landing.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Landing(){
    const navigate=useNavigate();
    const navigateToSingup=()=>{
        navigate('/signup');
    }
    return (
       

        <div>
        <div className='center'>
            <img src={img} style={{height:450}} ></img>
        </div>
        <div style={{paddingTop:20}} className='center'>
            <Typography variant='h4'>Invest In Every Thing</Typography>
            </div>
            <div style={{paddingTop:20}} className='center'>
            <Typography variant='h6'>Online platform to invest in stocks, derivatives, mutual funds, and more</Typography>
            </div>
            <div className='center' style={{paddingTop:15}}>
            <Button variant="contained" onClick={navigateToSingup}>Signup</Button>
            </div>
        </div>
    )
}
export default Landing;