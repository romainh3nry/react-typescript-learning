import React from "react";

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button type="button" onClick={handleLogin}>Login</button>
            <button type="button" onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? "logged" : "Logged Out"}</div>
        </div>
    )
};