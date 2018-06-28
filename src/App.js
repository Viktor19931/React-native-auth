import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Header, Spinner } from "./components/common";
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";

export default class App extends Component {
    state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
          apiKey: "AIzaSyBji7T71j-E3grXhFRQlGQnz2eSU6EF3aE",
          authDomain: "auth-react-cbf3e.firebaseapp.com",
          databaseURL: "https://auth-react-cbf3e.firebaseio.com",
          projectId: "auth-react-cbf3e",
          storageBucket: "auth-react-cbf3e.appspot.com",
          messagingSenderId: "449649701681"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.setState({ loggedIn: true});
        } else {
            this.setState({ loggedIn: false});
        }
      });

  }

  renderContent() {
      switch(this.state.loggedIn) {
          case true:
              return (
                  <Button onPress={() => firebase.auth().}>
                      Log Out
                  </Button>
          );
          case false:
              return <LoginForm />
          default:
              return (
                  <View style={styles.spinnerStyle}>
                      <Spinner size="large"/>
                  </View>
              );
      }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
          {this.renderContent()}
      </View>
    );
  }
}

const styles = {
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};

