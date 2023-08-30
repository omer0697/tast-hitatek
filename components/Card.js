import { StyleSheet, Text, View,Image } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function Card(){
    return(
        <View style={{display:"flex" , flexDirection:"column", marginTop:20}}>
            <Image source={require('../assets/trump.png')} style={{width: "100%", height: 120}}/>
            <View style={{display:"flex", flexDirection:"column", paddingTop:3, height:164, backgroundColor:"black", paddingRight:90}}>
                <Text style={{color:"white", margin:16, fontSize:20, fontWeight:"700", lineHeight:28}}>This is how a Trump constitutional coup would unfold</Text>
                <View style={{display: 'flex' , flexDirection: 'row', gap:20, justifyContent: 'items-center', left: 16}}>
                    <Avatar.Image size={32} source={require('../assets/122.png')} />
                    <Text style={{fontWeight:"400", marginTop:5, color:"white"}}>{"ALFONS LOPEZ TENA".toUpperCase()} </Text>
                </View>
            </View>
        </View>
    )
};