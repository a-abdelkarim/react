import React from "react";
import ProductTitle from "./ProductTitle";


export default class Products extends React.PureComponent
{
    constructor(props) 
    {
        super(props);
        this.state = {
        
        }
    }

    render()
    {
        return (
            <>
                <div>
                    <ProductTitle title="title1" />
                    <h6>Description</h6>
                </div>
                <div>
                    <ProductTitle title="title2" />
                    <h6>Description</h6>
                </div>
                <div>
                    <ProductTitle title="title3" />
                    <h6>Description</h6>
                </div>
            </>
        )
    }
}