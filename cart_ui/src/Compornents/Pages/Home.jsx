import React from 'react'
import './home.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TheatersIcon from '@mui/icons-material/Theaters';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

 
 
 

function Home() {
  return (
    <div className='mainBox'>
        <div className="innerBox">
             <div className="ContentBOx">
                 <div className="content">
                 <div className="ContentIcons"><span className="ContentIcon"> <TheatersIcon/> </span></div> 
                <h2 className="ContentTitle">Media Library</h2>
                <p className="ContentPharagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, incidunt?</p>
                 <a href="https://www.google.co.uk/" className="contentLink">Discover more &gt;  </a>
                 </div>
             </div>
             <div className="ContentBOx">
             <div className="content">
             <div className="ContentIcons">  <span className="ContentIcon"><AddShoppingCartIcon/> </span></div> 
                <h2 className="ContentTitle">Your Cart</h2>
                <p className="ContentPharagraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, porro.</p>
                <a href="https://www.google.co.uk/" className="contentLink"> Checkout  &gt; </a>
                 </div>
             </div>
             <div className="ContentBOx">
             <div className="content">
             <div className="ContentIcons"><span className="ContentIcon"> <LocalPostOfficeIcon/></span></div> 
                <h2 className="ContentTitle">Contact Us</h2>
                <p className="ContentPharagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, voluptatibus.</p>
                <a href="https://www.google.co.uk/" className="contentLink">About us  &gt; </a>
                 </div>
             </div>
        </div>
 
        
      </div>
  )
}

export default Home