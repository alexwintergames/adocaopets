import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Associando id → dados completos do pet
const pets = {
  '1': { nome: 'Luna', idade: '2 anos', sexo: 'Fêmea', historia: 'Resgatada da rua.', imagem: require('../../assets/gato2.png') },
  '2': { nome: 'Max', idade: '3 anos', sexo: 'Macho', historia: 'Muito brincalhão.', imagem: require('../../assets/cachorro2.jpg') },
};

export default function DetalhesPetScreen({ route }) {
  const { petId } = route.params;
  const pet = pets[petId];

  return (
    <View style={styles.container}>
      <Image source={pet.imagem} style={styles.image} />
      <Text style={styles.nome}>{pet.nome}</Text>
      <Text style={styles.info}>Idade: {pet.idade}</Text>
      <Text style={styles.info}>Sexo: {pet.sexo}</Text>
      <Text style={styles.historia}>{pet.historia}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  image: { width: 250, height: 250, borderRadius: 15, marginBottom: 20 },
  nome: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 16, marginBottom: 5 },
  historia: { fontSize: 16, marginTop: 10, textAlign: 'center', color: '#555' },
});
