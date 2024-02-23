import React from "react";
import './Home.css'

export const Home = () => {
    var Images = [
        {
            image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 1",
            price: 10.99
        },
        {
            image: "https://images.pexels.com/photos/1654760/pexels-photo-1654760.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 2",
            price: 19.99
        },
        {
            image: "https://images.pexels.com/photos/2162133/pexels-photo-2162133.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 3",
            price: 15.49
        },
        {
            image: "https://images.pexels.com/photos/7676308/pexels-photo-7676308.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 1",
            price: 10.99
        },
        {
            image: "https://images.pexels.com/photos/8236113/pexels-photo-8236113.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 2",
            price: 19.99
        },
        {
            image: "https://images.pexels.com/photos/6900713/pexels-photo-6900713.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 3",
            price: 15.49
        },
        {
            image: "https://images.pexels.com/photos/5740932/pexels-photo-5740932.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 1",
            price: 10.99
        },
        {
            image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 2",
            price: 19.99
        },
        {
            image: "https://images.pexels.com/photos/4691398/pexels-photo-4691398.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 3",
            price: 15.49
        },
        {
            image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 1",
            price: 10.99
        },
        {
            image: "https://images.pexels.com/photos/7459424/pexels-photo-7459424.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 2",
            price: 19.99
        },
        {
            image: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 3",
            price: 15.49
        },
        {
            image: "https://images.pexels.com/photos/8152002/pexels-photo-8152002.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 1",
            price: 10.99
        },
        {
            image: "https://images.pexels.com/photos/6109101/pexels-photo-6109101.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 2",
            price: 19.99
        },
        {
            image: "https://images.pexels.com/photos/6943131/pexels-photo-6943131.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 3",
            price: 15.49
        }
    ];
  return (

        <div className="container">
         
            <div className="cardBody"> 
            
            {Images.map((ele,ind)=>{
                return(
                    <div key={ind} className="card">

                    <img style={{width:"100%",borderRadius:"10px 10px 0px 0px"}} src={ele.image} alt="" />
                    <div className="small-card">
                    <h5 >{ele.title}</h5>
                    <p >${ele.price}</p>
                    </div>
                   
                </div>
                )
              
 } )}
            </div>
           

        </div>
 
    
  )
};