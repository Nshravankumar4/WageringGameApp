import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const GameCard = ({ game, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: game.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Button title="View Details" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default GameCard;
