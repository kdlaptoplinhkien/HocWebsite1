import React from 'react';

export default function Login() {
    return (
        <form method="get" action="#">
            <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control"/>
            </div>
            <div className="form-group">
               <button type="button" className="btn btn-primary">Login</button>
            </div>
        </form>
    )
}