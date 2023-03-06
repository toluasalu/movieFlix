import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import Card
import { Card, Avatar, Button, Text } from 'react-native-paper';
import { Movie, MoviesResult } from './responses/movies';
import { Item, BoxOfficeResult} from './responses/boxOfficeMovies';







export default function App() {
  
  const [data, setData] = useState<Item[]>();
  
  const getMovies =async () => {
     try {
      const response = await fetch('https://imdb-api.com/en/API/BoxOffice/k_e7wjhkp0');
      const json = await response.json();
      setData(json.items)
     } catch (error) {
      console.error(error);
    }
  };

     useEffect(() => {
        getMovies();
     }, []);

  return (
    <SafeAreaView style= {styles.container}>
     {
      data?.map((x, index) => 
      <Card key = {index}>
        <Card.Title title = {x.title} left = {AvatarComponent}/>
        <Card.Cover source={{uri: x.image}}/>
        
        </Card>
    )}
     <StatusBar style="auto" />
     </SafeAreaView>
  );
}
// 

{/* <FlatList data = {data}
keyExtractor = {({id}) => id}
renderItem = {({item}) => (
 <Text>{item.title}, {item.releaseYear}</Text>
)}    
/> */}


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
