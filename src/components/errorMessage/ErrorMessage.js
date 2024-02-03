import img from "./error.gif"
let ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: '0 auto'}} src={img} alt="error" />
    )
}

export default ErrorMessage