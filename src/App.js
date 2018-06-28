import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from "./components/common";
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  componentWillMount() {
      const config = {
          apiKey: "AIzaSyBji7T71j-E3grXhFRQlGQnz2eSU6EF3aE",
          authDomain: "auth-react-cbf3e.firebaseapp.com",
          databaseURL: "https://auth-react-cbf3e.firebaseio.com",
          projectId: "auth-react-cbf3e",
          storageBucket: "auth-react-cbf3e.appspot.com",
          messagingSenderId: "449649701681"
      };

      firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

