import "./ProfileCard.css"

export default function ProfileCard({ profile }) {
    return (
        <div className="profileCard">
            <h5>👤</h5>
            <img
                className="profil_img"
                src={profile.avatar_url}
                alt={profile.login}
            />
            <h4 className="username">{profile.login}</h4>
            <h5 className="name">
                {profile.name ? `@${profile.name}` : "No Name"}
            </h5>
            <p className="bio">{profile.bio || "No Bio Available."}</p>
            <div className="stats">
                <p className="followers">
                    👥{profile.followers}
                    <br />
                    followers
                </p>
                <p className="following">
                    👤{profile.following}
                    <br />
                    following
                </p>
                <p className="repos">
                    📦{profile.public_repos}
                    <br />
                    repos
                </p>
            </div>
            <p className="location">
                📍 {profile.location || "Location Unavailable"}
            </p>
            <p className="company">🏢 {profile.company || "No Company"}</p>
            <p className="html_url">
                🔗 {profile.html_url.replace("https://", "")}
            </p>
            <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github"
            >
                View on github
            </a>
        </div>
    );
}
