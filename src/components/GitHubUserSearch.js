import React, { useState } from "react";

function GitHubUserSearch() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    try {
      // Fetch user data and repositories here
      const userData1 = fetch(`https://api.github.com/users/${username}`).then(
        (data) => {
          console.log(data);
          data.json().then((json) => {
            console.log(json);
          });
        }
      );

      console.log(userData1);
    } catch (error) {
      // Handle errors here
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {userData && <div>{/* Display user information */}</div>}
      <ul>{/* Display the list of repositories */}</ul>
    </div>
  );
}

export default GitHubUserSearch;
