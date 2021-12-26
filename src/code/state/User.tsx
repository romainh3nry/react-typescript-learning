import React from "react";

type AuthUser = {
    name: string,
    email: string
};

export const User = () => {

    const [user, setUser] = React.useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: "romain",
            email: "romain@example.com"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button type="button" onClick={handleLogin}>Login</button>
            <button type="button" onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
};