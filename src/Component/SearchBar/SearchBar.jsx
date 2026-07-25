import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [username, setUsername] = useState("");

    function handleSearchClick() {
        if (username.trim() === "") {
            alert("Username field cannot be empty!");
            return;
        }

        onSearch(username.trim());
    }

    return (
        <div className="searchBar">
            <input
                className="searchInput"
                placeholder="Search github username..."
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button className="searchButton" onClick={handleSearchClick}>
                🔍
            </button>
        </div>
    );
}