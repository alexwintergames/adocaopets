import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, ScrollView, TouchableOpacity } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [preferencia, setPreferencia] = useState('');

  const handleSubmit = () => {
    if (!nome || !email || !telefone) {
      Alert.alert('Erro', 'Preencha os campos obrigatórios: Nome, Email e Telefone.');
      return;
    }
    Alert.alert(
      'Cadastro enviado!',
      `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}\nPreferência: ${preferencia}`
    );

    setNome('');
    setEmail('');
    setTelefone('');
    setEndereco('');
    setPreferencia('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro para Adoção</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome *"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Email *"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone *"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Preferência de pet"
        value={preferencia}
        onChangeText={setPreferencia}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Cadastro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#FFFAF0',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 25,
    textAlign: 'center',
    textShadowColor: '#FFA07A',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFB6A5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: '#FF6F61',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
