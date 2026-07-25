import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch, loading }) {
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
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        handleSearchClick();
                    }
                }}
            />
            <button 
              className="searchButton" 
              onClick={handleSearchClick}
              disabled={loading}>
                🔍
            </button>
        </div>
    );
}
