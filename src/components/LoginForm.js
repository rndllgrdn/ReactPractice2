function LoginForm(props) {
    return (
        <form>
            <div>{props.userNameLabel}: <input /></div>
            <div>Password: <input /></div>
            <div><button>Sign In</button></div>
        </form>
    );
}

export default LoginForm;
