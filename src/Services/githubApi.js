export async function getUserProfile(username) {
    const baseURL = "https://api.github.com/users/";
    const TOKEN = "";

    const response = await fetch(`${baseURL}${username}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });

    if (!response.ok) {
        switch (response.status) {
            case 404:
                throw new Error("User not found.");

            case 403:
                throw new Error("GitHub API rate limit exceeded.");

            case 500:
                throw new Error("GitHub server error.");

            default:
                throw new Error("Something went wrong.");
        }
    }

    const data = await response.json();
    return data;
}