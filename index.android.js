import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pontuacao: 0 };
  }

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

  salvarDados() {
    //const database = firebase.database();
    //para gravar e atualizar é o mesmo comando
    //database.ref('pontuacao').set('100');
    //database.ref('pontuacao').remove();

    const funcionarios = firebase.database().ref('funcionarios');

    //funcionarios.child('001').remove();

    //funcionarios.child('001').child('nome').set('Kairo');
    //funcionarios.child('002').child('nome').set('Zézinho');
    //---------------------------------------------------------------------
    //funcionarios.push().child('nome').set('Kairo');
    //---------------------------------------------------------------------
    funcionarios.push().set(
      {
        nome: 'Kairo',
        altura: '1,80',
        peso: '80KH'
      }
    );
  }

  listarDados() {
    let pontuacao = firebase.database().ref('pontuacao');
    //on - listener que fica monitorando se ouve alteração de dados
    //dessa maneira, toda vez que altera algo, é disparado o evento
    pontuacao.on('value', (snapshot) => {
      let pontos = snapshot.val();
      this.setState({ pontuacao: pontos });
    });
  }

  render() {
    let { pontuacao } = this.state;
    return (
      <View>
        <Button
          onPress={() => { this.salvarDados(); }}
          title="Salvar dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />
        <Button
          onPress={() => { this.listarDados(); }}
          title="Listar dados"
          color="#841584"
          accessibilityLabel="Listar dados"
        />
        <Text>{pontuacao}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => App);
