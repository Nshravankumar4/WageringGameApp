import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';

const games = [
  { id: '1', title: 'Game 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Game 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150' },
  // Add more games here
];

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      const start = (page - 1) * 10;
      const end = start + 10;
      setData([...data, ...games.slice(start, end)]);
    };
    fetchData();
  }, [page]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard game={item} onPress={() => navigation.navigate('GameDetail', { game: item })} />
        )}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
