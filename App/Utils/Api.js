class Api {
  static getBio(username){
    username = username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json())
  }
  static getRepos(username){
    username = username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json())
  }
  static getNotes(username){
    username = username.toLowerCase().trim();
    let url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json())
  }
  static addNote(username, note){
    username = username.toLowerCase().trim();
    let url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
}

module.exports = Api;
// class Api {
//   static getBio(username){
//     username = username.toLowerCase().trim();
//     var url = `https://api.github.com/users/${username}`;
//     return fetch(url).then((res) => res.json());
//   }
//   static getRepos(username){
//     username = username.toLowerCase().trim();
//     var url = `https://api.github.com/users/${username}/repos`;
//     return fetch(url).then((res) => res.json());
//   }
//   static getNotes(username) {
//     username = username.toLowerCase().trim();
//     // var url = `https://githubnotetaker-cf326.firebaseio.com/${username}.json`
//     var url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
//     // fetch('https://native-gh-notetaker.firebaseio.com/lukekhamilton.json').then((res) => res.json()).then((res) => console.log(res))
//     debugger;
//     return fetch(url)
//           .then((res) => res.json())
//           .catch((error) => console.log(error));
//   }
//   static addNote(username, note) {
//     username = username.toLowerCase().trim();
//     // var url = `https://githubnotetaker-cf326.firebaseio.com/${username}.json`
//     var url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
//     return fetch(url,{
//       method: 'post',
//       body: JSON.stringify(note)
//     }).then((res) => res.json());
//   }
// }
//
// module.exports = Api;
