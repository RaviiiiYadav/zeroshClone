import Button from '@mui/material/Button';
import logo from '../assets/logo.png';
import '../App.css'
import { useNavigate } from 'react-router-dom';
function Navbar(){
    const navigate=useNavigate();
    const navigateToAnotherComponent=()=>{
        navigate('/About');
    }
    const navigateToHome=()=>{
        navigate('/');
    }
    const navigateToSingup=()=>{
        navigate('/Signup')
    }
    const navigateToProduct=()=>{
        navigate('/Products')
    }
return(
    <div style={{display:'flex',alignItems:'center',paddingTop:15}} className='navBarBorder'>
        <div >
        <img src={logo} alt='logo' style={{height:25}} onClick={navigateToHome}></img></div>
        <div style={{flex:1}}></div>
        <div>
        <Button variant="text" style={{color:'black'}} onClick={navigateToSingup}>signup</Button>
        <Button variant="text" style={{color:'black'}} onClick={navigateToAnotherComponent}>About</Button>
        <Button variant="text" style={{color:'black'}} onClick={navigateToProduct}>Products</Button>
        <Button variant="text" style={{color:'black'}}>Pricing</Button>
        <Button variant="text" style={{color:'black'}}>Support</Button>
        </div>
    </div>
)
}
export default Navbar;