type GreetProps = {
    name: string,
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return (
        <>
        {props.isLoggedIn 
            ? <h1>Welcome {props.name} ! You have {messageCount} messages</h1>
            : <h1>You have to be logged</h1>}
        </>
    )
};