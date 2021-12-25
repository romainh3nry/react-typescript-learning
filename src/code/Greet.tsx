type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
    return (
        <h1>Greetings from {props.name} !</h1>
    )
};
