import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🐾 Amigos de 4 Patas</Text>

      <Text style={styles.text}>
        Nosso abrigo nasceu do sonho de conectar pessoas com animais que precisam de um lar.
        Cada pet resgatado recebe cuidado, amor e uma segunda chance de ser feliz.
      </Text>

      <Text style={styles.text}>
        Trabalhamos com voluntários dedicados, eventos de adoção e programas de conscientização
        sobre posse responsável. Cada adoção transforma vidas — de humanos e de pets!
      </Text>

      <Text style={styles.text}>
        Participe: adote, apoie ou divulgue nosso trabalho. Juntos podemos fazer a diferença
        e proporcionar um futuro melhor para cada animal.
      </Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6F61',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#FFA07A',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  text: {
    fontSize: 17,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 18,
    lineHeight: 24,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
});
