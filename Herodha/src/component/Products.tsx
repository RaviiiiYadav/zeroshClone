import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../App.css'
function Products(){
const navigate=useNavigate();
const navigateToInvestment=()=>{
    navigate('/navigate')
}
    return (
        
        <div className="center">
            <div style={{paddingTop:75}} className="border">
            <Typography variant="h4">
                Technology
            </Typography>
            <br></br>
            <div >
            <Typography variant="h6"> Sleek, modern,and intuitive trading platforms</Typography>
            </div>
            <div>
                <Typography variant="h6">Check out our <span onClick={navigateToInvestment}>investment offerings →</span></Typography>
            </div>
            </div>
            
        </div>
    )
}

export default Products;