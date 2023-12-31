import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { popularDarta } from '../data/mockData';
import {useFonts} from "expo-font"

export default function PopularNews() {
    const [loaded] = useFonts({
        Ultra: require('../assets/fonts/NotoSerif_Condensed-Regular.ttf'),
      });

        if (!loaded) { return null; }
      
    const styles = StyleSheet.create({
        text: {
            fontSize: 24,
            paddingBottom: 16,
            fontWeight:"400",
            lineHeight: 24,
        },
      });

    return (
        <View style={{display:"flex" , flexDirection:"column", margin:16}}>
            <Text style={{fontSize:16}}>POPULAR</Text>
            {popularDarta.map((data,index)=>{
                return (
                    <View key={index}><View style={{marginTop:20, display:'flex', flexDirection:"row", alignItems:"center"}}>
                        <Text style={{color:"#BFC3C9", fontSize:48 , fontFamily:"Ultra"}}>{data.id}</Text>
                        <View style={{display:"flex", flexDirection:"column", marginLeft:30, marginBottom:12, marginRight:30}}>
                            <Text style={styles.text}>{data.text}</Text>
                            <Text style={{fontSize:12,lineHeight:16, fontWeight:"400"}}>{data.autor}</Text>
                        </View>
                    </View>
                    {popularDarta.length-1 !=index && <View 
                        style={{
                            borderBottomColor: '#E1E6EB',
                            borderBottomWidth: 1,
                            marginTop: 10,
                        }}
                    />}
                    </View>
                )
            })}
        </View>
    );
}
