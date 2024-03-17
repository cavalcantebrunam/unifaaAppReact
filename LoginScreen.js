// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica para exibir uma mensagem ao clicar no botão Entrar
    alert('Bem-vindo!');
  };

  const handleNavigateToCadastroUsuario = () => {
    navigation.navigate('CadastroUsuario');
  };

  const handleNavigateToRecuperarSenha = () => {
    alert('clicou em recuperar a senha');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 300 }}
        placeholder="Email"
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 300 }}
        placeholder="Senha"
        secureTextEntry={true}
      />
<TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'blue', padding: 10, marginBottom: 10 }}>
  <Text style={{ color: 'white' }}>Entrar</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleNavigateToCadastroUsuario} style={{ backgroundColor: 'red', padding: 10, marginTop: 10 }}>
  <Text style={{ color: 'white' }}>Cadastrar Usuário</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleNavigateToRecuperarSenha} style={{ backgroundColor: 'red', padding: 10, marginTop: 10 }}>
  <Text style={{ color: 'white' }}>Recuperar senha</Text>
</TouchableOpacity>

    </View>
  );
};

export default LoginScreen;
