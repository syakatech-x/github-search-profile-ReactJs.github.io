import "./ErrorMessage.css";

export default function ErrorMessage({ errorText }) {
    let solution = "";

    switch (errorText) {
        case "User not found.":
            solution = "Try another username.";
            break;

        case "GitHub API rate limit exceeded.":
            solution = "Please wait a few minutes and try again.";
            break;

        case "GitHub server error.":
            solution = "Please try again later.";
            break;

        default:
            solution = "Please check your internet connection.";
    }

    return (
        <div className="error">
            <p className="error-main">{errorText}</p>
            <p className="error-solution">{solution}</p>
        </div>
    );
}