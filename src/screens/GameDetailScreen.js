import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GameDetailScreen = ({ route }) => {
  const { game } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: game.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default GameDetailScreen;
