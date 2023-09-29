import React from "react";

export default class Greet extends React.Component
{
    render()
    {
        return (
            <>
                <h1>Greetings, {this.props.name}</h1>
            </>
        )
    }
}