import { StyleSheet, Text, View,Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import { latestNews } from '../data/mockData';

export default function LatestNews(){
    return(
        <View style={{display:"flex" , flexDirection:"column", marginTop:20, margin:16, gap:10}}>
            {
                latestNews.map((data,index)=>{
                    return (
                    <View key={index} style={{display:'flex', flexDirection:'column', gap:10, marginTop:10}}>
                        <View style={{display:"flex", flexDirection:"row",justifyContent: 'items-center', gap:20}}>
                        <Image source={data.img}/>
                        <Text style={{fontSize:12, color:"#BFC3C9", marginTop:15, fontWeight:"400", color:"#A0A5AA"}}>{data.time.toUpperCase()}</Text>
                        </View>
                        <Text style={{fontSize:20, fontWeight:"700", paddingRight:40}}>{data.title}</Text>
                        <Text style={{fontSize:14, fontWeight:"400", paddingRight:90}}>{data.info}</Text>
                        <View style={{display: 'flex' , flexDirection: 'row', gap:20, justifyContent: 'items-center'}}>
                            <Avatar.Image size={32} source={data.authorImg} />
                            <Text style={{fontWeight:"400", marginTop:5}}>{data.autorName.toUpperCase()} </Text>
                        </View>
                        {
                            index != latestNews.length-1 && <View style={{borderBottomColor: '#E5E5E5', borderBottomWidth: 1, marginTop:20}}></View>
                        }
                        
                    </View>)
                })
            }
        </View>
    )
}