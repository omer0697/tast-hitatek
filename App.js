import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Appbar from './components/Appbar';
import { PaperProvider } from 'react-native-paper';
import MainNews from './components/MainNews';
import News from './components/News';
import mockData from './data/mockData';
import PopularNews from './components/PopularNews';
import Card from './components/Card';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';


export default function App() {

  return (
    <PaperProvider>
      <Appbar />
      <ScrollView style= { {display: 'flex' , flexDirection: 'column', height: '100%'} }>
        <Text></Text>
        <StatusBar style="auto" />
        <MainNews />
        <News />
        <View 
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 10,
                left: 24,
                marginRight: 50,
            }}
        />
        <PopularNews />
        <View 
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 10,
                left: 24,
                marginRight: 50,
            }}
        />
        <Card />
        <View 
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 20,
                left: 24,
                marginRight: 50,
            }}
        />
      <LatestNews />
      <Footer />
      </ScrollView>
    </PaperProvider>

    
  );
}
