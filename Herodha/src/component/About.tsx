import { Typography } from "@mui/material";
import photo from '../assets/photo.jpg'
function About(){
    return(
            <div>
            <div className="center" style={{paddingTop:100}}>
            <Typography variant="h4">We pioneered the discount broking model in India.</Typography>
            </div>
            <div>
            <Typography variant="h4" className="center">Now, we are breaking ground with our technology.
            </Typography>
            </div>
            <div className="center" style={{paddingTop:100}}>
            <div className="border"></div>
            </div>
            <div className="container" style={{paddingTop:50}}>
                <div className="left"><Typography style={{lineHeight:'2.5rem'}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</Typography></div>
                <div className="right"><Typography style={{lineHeight:'2.5rem'}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</Typography></div>
            </div>
            <div>
                <Typography variant="h4" className="center" style={{paddingTop:50}}>Webstie Created By</Typography>
            </div>
            <div style={{paddingLeft:50}} className="center">
                <img src={photo} style={{width:200}} className="photoBorder"></img>
            </div>
            <div style={{paddingLeft:50,paddingTop:20}} className="center">
                <Typography>
                Ravi 
                <br></br>
                MERN Stack Developer
                </Typography></div>
            </div>
            
    )
}

export default About;