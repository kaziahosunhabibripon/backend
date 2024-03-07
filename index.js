require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login Here</h1>");
});
const githubData = {
  login: "kaziahosunhabibripon",
  id: 34180396,
  node_id: "MDQ6VXNlcjM0MTgwMzk2",
  avatar_url: "https://avatars.githubusercontent.com/u/34180396?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/kaziahosunhabibripon",
  html_url: "https://github.com/kaziahosunhabibripon",
  followers_url: "https://api.github.com/users/kaziahosunhabibripon/followers",
  following_url:
    "https://api.github.com/users/kaziahosunhabibripon/following{/other_user}",
  gists_url:
    "https://api.github.com/users/kaziahosunhabibripon/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/kaziahosunhabibripon/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/kaziahosunhabibripon/subscriptions",
  organizations_url: "https://api.github.com/users/kaziahosunhabibripon/orgs",
  repos_url: "https://api.github.com/users/kaziahosunhabibripon/repos",
  events_url:
    "https://api.github.com/users/kaziahosunhabibripon/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/kaziahosunhabibripon/received_events",
  type: "User",
  site_admin: false,
  name: "Kazi Ahosun Habib",
  company: null,
  blog: "https://portfolio-website-a955b.web.app/",
  location: "Bangladesh",
  email: null,
  hireable: true,
  bio: "MERN Stack Developer           ||\r\nMachine Learning Research Student",
  twitter_username: "habibkazi92",
  public_repos: 130,
  public_gists: 1,
  followers: 5,
  following: 12,
  created_at: "2017-12-02T05:49:11Z",
  updated_at: "2024-01-20T11:04:14Z",
};
app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
