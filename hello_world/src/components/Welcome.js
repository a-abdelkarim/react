function Welcome({name, age})
{
    console.log(name, age);
    return(
        <>
            <h1>Hello, {name}</h1>
            <h4>Your age is, {age}</h4>
        </>
    )
}

export default Welcome;