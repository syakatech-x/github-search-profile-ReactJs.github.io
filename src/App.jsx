import { useState } from "react";
import Header from "./Component/Header/Header.jsx";
import SearchBar from "./Component/SearchBar/SearchBar.jsx";
import EmptyState from "./Component/EmptyState/EmptyState.jsx";
import Loading from "./Component/Loading/Loading.jsx";
import ErrorMessage from "./Component/ErrorMessage/ErrorMessage.jsx";
import ProfileCard from "./Component/ProfileCard/ProfileCard.jsx";
import { getUserProfile } from "./Services/githubApi.js";
import "./App.css";

export default function App() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    let textContent;

    if (loading) {
        textContent = <Loading />;
    } else if (!loading && error) {
        textContent = <ErrorMessage errorText={error} />;
    } else if (!loading && profile) {
        textContent = <ProfileCard profile={profile} />;
    } else {
        textContent = <EmptyState />;
    }

    /* === EVENT HANDLER ===*/
    async function handleSearch(username) {
        setLoading(true);
        setProfile(null);
        setError("");
        try {
            const user = await getUserProfile(username);
            setProfile(user);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="app">
            <main className="container">
                <Header />
                <SearchBar onSearch={handleSearch} />
                <div className="content">{textContent}</div>
            </main>
        </div>
    );
}
