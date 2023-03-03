import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator,  View} from 'react-native';
//import Card
import { Card, Avatar, Button, Text } from 'react-native-paper';
import AvatarComponent from './Avatar';






export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies =async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies)
     } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

     useEffect(() => {
        getMovies();
     }, []);

  return (
    <SafeAreaView style= {styles.container}>
     <View style={styles.container}>
    
      {}
        
      <StatusBar style="auto" />
     </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
