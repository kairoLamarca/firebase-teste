import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCkMo8Z3hoVquFx3U8OOIMEqCuxB7KBAj4',
      authDomain: 'configuracaofirebasereac-dfb42.firebaseapp.com',
      databaseURL: 'https://configuracaofirebasereac-dfb42.firebaseio.com',
      projectId: 'configuracaofirebasereac-dfb42',
      storageBucket: '',
      messagingSenderId: '76905310869'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Text>Meu App</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);
