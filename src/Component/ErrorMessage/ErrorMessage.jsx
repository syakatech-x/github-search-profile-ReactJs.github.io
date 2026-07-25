import "./ErrorMessage.css";

export default function ErrorMessage({ errorText }) {
    return <p className="errorText">{errorText}</p>;
}
