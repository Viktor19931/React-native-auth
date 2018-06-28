import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import firebase from 'firebase';
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component<Props> {
    componentWillMount() {
        this.initializeFirebase();
    }

    initializeFirebase() {
        const firebase = require("firebase");

        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBji7T71j-E3grXhFRQlGQnz2eSU6EF3aE",
            authDomain: "auth-react-cbf3e.firebaseapp.com",
            databaseURL: "https://auth-react-cbf3e.firebaseio.com",
            projectId: "auth-react-cbf3e",
            storageBucket: "auth-react-cbf3e.appspot.com",
            messagingSenderId: "449649701681"
        };

        firebase.initializeApp(config);

        //inicializando o firestore
        const firestore = require("firebase/firestore");
        // db = firebase.firestore();
        // db.settings({ timestampsInSnapshots: true });
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
