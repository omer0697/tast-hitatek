import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';

const listFooter = [
    "About HİTATEK",
    "Jobs",
    "Press Releases",
    "Documentary Submission",
    "Contact Us"
]

export default function Footer() {

    return (
        <View style={{display:"flex" , flexDirection:"column", backgroundColor:"black", height:446, justifyContent:"center", paddingLeft:140}}>
            <Image source={require('../assets/logo.png')}/>
            <Text style={{color:"white", fontSize:12, fontWeight:"700", marginTop:20}}>Copyright © 2023 Hitatek.</Text>
            <Text style={{color:"#3FB6E5", fontSize:16, fontWeight:"400", marginTop:20}}>Corporate</Text>
            {
                listFooter.map((data,index)=>{
                    return(
                        <Text key={index} style={{color:"white", fontSize:12, fontWeight:"400", marginTop:20}}>{data}</Text>
                    )
                })
            }
        </View>
    );
}