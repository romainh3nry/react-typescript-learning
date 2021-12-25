type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <>
        {props.isLoggedIn 
            ? <h1>Welcome {props.name} ! You have {props.messageCount} messages</h1>
            : <h1>You have to be logged</h1>}
        </>
    )
};