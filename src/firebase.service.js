import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBLIx7hw3p1ttbKuILQxoUJhh6CEtF_AyA",
  authDomain: "rss-dashboard-client.firebaseapp.com",
  databaseURL: "https://rss-dashboard-client.firebaseio.com",
  projectId: "rss-dashboard-client",
  storageBucket: "rss-dashboard-client.appspot.com",
  messagingSenderId: "734063673265"
};

const fire = firebase.initializeApp(config);
const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

const auth = fire.auth();

export const fb = {
  login: () => auth.signInWithPopup(provider),
  logout: () => auth.signOut(),
  auth
};
