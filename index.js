const app = "I don't do much.";
const token = 'c02c83266e6bdd77a81f746511eb21ac909dcb13';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
