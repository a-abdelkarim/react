import ProductTitle from "./ProductTitle";

export default function Products(props)
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