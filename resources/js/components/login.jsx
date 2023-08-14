import React from 'react'

export default function Login(){
    return(
        <div id="login-container">
            <div className="username-container">
                <label htmlFor="username">Username</label>
                <input type="text" required id="username" name="username" />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" required id="password" name="password" />
            </div>
            <input type="submit" />
        </div>
    )
}