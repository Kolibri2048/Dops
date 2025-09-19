import React from "react";

type PropsType= {
    name:string
    onClick: () => void
}



export const Button =(props: PropsType) => {
    const onclickHandler = () => {
        props.onClick()
    }
    return (
        <>
            <button onClick={onclickHandler}>{props.name}</button>
        </>
    )
}