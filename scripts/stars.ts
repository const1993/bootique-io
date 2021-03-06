import Axios from "axios";

const fs = require("fs");
const path = require("path");

interface GithubResponse {
  forks_count: number;
  stargazers_count: number;
}

const axios = Axios.create();
const githubUrl = `https://api.github.com/repos/bootique/bootique`;

async function main(): Promise<GithubResponse> {
  try {
    const response = await axios.get<GithubResponse>(githubUrl);
    const {forks_count, stargazers_count} = response.data;

    fs.writeFileSync(
      path.resolve(__dirname, "..", "data", "stars.json"),
      JSON.stringify({forks_count, stargazers_count}),
      {encoding: "UTF-8"}
    );

    return response.data;
  } catch (e) {
    return e;
  }
}

console.log("Fetching stars from GitHub.");
main();
console.log("Fetching stars from GitHub. Done.");

