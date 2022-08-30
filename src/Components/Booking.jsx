import React from "react";
import hotelLogoImg from '../images/hotelLogo.png'

import "../css/Booking.css";

function Booking(){
    return(
        <div className="container">
            <div className="page">
                <div className="logo-img">
                    <img src={hotelLogoImg} />
                </div>
                <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">Booking</a>
                <a href="#">Checkout</a>
                <a href="#">Contact</a>
                </nav>

            </div>

            <div className="text-message">
                <p className="text">Get a discount of 20% when you <br /> book both standard and deluxe <br /> suites!!!!</p>
                </div>

            <div className="input-fields">
            <input type="text" id="name" name="name" placeholder="Check-In Date" />
            <input type="text" id="name" name="name" placeholder="Check-Out Date" />
            <input type="text" id="name" name="name" placeholder="One-Night Stay" />

            <button type="submit" id="btn">Search</button>
                
            </div>

            <h1>Room Booking</h1>
            <div className="tables">
            
            <table className="booking-table">

                <thead>
                    <tr className="table-header">
                    <th scope="col" style={{textAlign: "center"}}>Room Type</th>
                    <th scope="col" style={{textAlign: "center"}}>Sleep</th>
                    <th scope="col" style={{textAlign: "center"}}>Price per night</th>
                    <th scope="col" style={{textAlign: "center"}}>Services</th>
                    <th scope="col" style={{textAlign: "center"}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-data">
                       <td rowSpan={2}>
                       Luxury Room with a double bed, toilet, balcony with a great view of nature
                       </td>
                       <td>2</td>
                       <td>ZAR 9000</td>
                       <td>
                       *Breakfast,Lunch,Dinner
                       *Massage
                       *Pool
                       </td>
                       <td>wwww</td>
                    </tr>
                    <tr className="table-data">
                      <td>1</td>
                      <td>ZAR 4500</td>
                      <td>*Breakfast,Lunch,Dinner
                            *Massage
                            *Pool
                     </td>
                    <td>www</td>
                    </tr>
                </tbody>
            </table>

            <table className="slip-table">
               <td>
                    <small>Booking Slip</small>
                </td>
               </table>
            </div>
            
        </div>
    )
}
export default Booking;