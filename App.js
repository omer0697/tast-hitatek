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

  const steyles = StyleSheet.create({
    line: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginTop: 10,
      left: 24,
      marginRight: 50,
    },
  });

  return (
    <PaperProvider>
      <Appbar />
      <ScrollView style= { {display: 'flex' , flexDirection: 'column', height: '100%'} }>
        <Text></Text>
        <StatusBar style="auto" />
        <MainNews />
        <News />
        <View style={steyles.line} />
        <PopularNews />
        <View style={steyles.line} />
        <Card />
        <View style={steyles.line} />
      <LatestNews />
      <Footer />
      </ScrollView>
    </PaperProvider>
  );
}
