import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import Card
import { Card, Avatar, Button, Text } from 'react-native-paper';







export default function App() {
  
  const [data, setData] = useState([]);

  const getMovies =async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies)
     } catch (error) {
      console.error(error);
    }
  };

     useEffect(() => {
        getMovies();
     }, []);

  return (
    <SafeAreaView style= {styles.container}>
      <FlatList data = {data}
                 keyExtractor = {({id}) => id}
                 renderItem = {({item}) => (
                  <Text>{item.title}, {item.releaseYear}</Text>
                 )}    
       />
      <StatusBar style="auto" />
   
     </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});
