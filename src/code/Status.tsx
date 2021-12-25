type StatusProps = {
    status: 'loading' | 'success' | 'error' 
}

export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = "Loading...";
    }
    else if (props.status === 'success'){
        message = "Data Fetched Successfuly";
    }
    else if (props.status === 'error') {
        message = "Error Fetched Data";
    }

    return (
        <h2>status - {message}</h2>
    )
};