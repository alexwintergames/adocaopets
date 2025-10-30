import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const pets = [
  { id: '1', nome: 'Luna', idade: '2 anos', sexo: 'Fêmea', historia: 'Resgatada da rua.', imagem: require('../../assets/gato2.png') },
  { id: '2', nome: 'Max', idade: '3 anos', sexo: 'Macho', historia: 'Muito brincalhão.', imagem: require('../../assets/cachorro2.jpg') },
];

export default function ListaPetsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetalhesPet', { petId: item.id })}
          >
            <Image source={item.imagem} style={styles.image} />
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  card: { alignItems: 'center', marginBottom: 20 },
  image: { width: 150, height: 150, borderRadius: 10 },
  nome: { marginTop: 8, fontSize: 18, fontWeight: 'bold', color: '#333' },
});
