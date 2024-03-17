import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RNSScreen } from 'react-native-screens';


const CadastroUsuarioScreen = () => {
  const handleCadastro = () => {
    // Lógica para cadastrar o usuário
    alert('Usuário cadastrado com sucesso!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 300 }}
        placeholder="Nome"
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 300 }}
        placeholder="Email"
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 300 }}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: 'green', padding: 10 }}>
        <Text style={{ color: 'white' }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroUsuarioScreen;
