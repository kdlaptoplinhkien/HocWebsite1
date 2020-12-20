import React from 'react';
import {Link} from "react-router-dom";
export default function Nav(){
    var menu = [
        {
            url:"/",
            title:"Home"
        },
        {
            url:"/login",
            title:"Login"
        },
        {
            url:"/register",
            title:"Register"
        },
        {
            url:"/about-us",
            title:"About us"
        }
    ];
    return (
        <nav className="section col-md-12 nav">
            <div className="container">
                <ul className="menu">
                    {
                       // code js
                        menu.map((e,i)=>{
                            return (
                                <li key={i}><Link to={e.url}>{e.title}</Link></li>
                            )
                        })
                    }

                </ul>
            </div>
        </nav>
    )
}