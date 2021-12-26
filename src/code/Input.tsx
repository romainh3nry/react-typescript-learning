import React from "react"

type InputProps = {
    value: string,
}

export const Input = (props: InputProps) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <input type="text" value={props.value} onChange={handleInputChange}/>
    )
};