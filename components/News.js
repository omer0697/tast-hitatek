import { StyleSheet, View,Image } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import {mockData} from '../data/mockData';


export default function News() {

    return (
        <View>
            {mockData && mockData.map((data,index)=>{
                return(
                <Card key={index} mode='contained' style={{margin: 16 ,marginTop:25, backgroundColor:"white"}}>
                    <Card.Cover source={data.img} />
                        <Text style={{marginTop:13, fontSize:20, fontWeight:"700", paddingBottom:10}}>{data.title}</Text>
                        <Text style={{fontSize:14, fontWeight:"400"}}>{data.info}</Text>
                        <View style={{display: 'flex' , flexDirection: 'row', gap:20, justifyContent: 'items-center', marginTop:20}}>
                            {data.authorImg && <Avatar.Image size={32} source={data.authorImg} />}
                            <Text style={{fontWeight:"400", marginTop:5, fontSize:12, color:"#000000", lineHeight:16}}>{data.autorName.toUpperCase()} </Text>
                        </View>
                        {mockData.length-1 != index && <View 
                            style={{
                                borderBottomColor: '#E1E6EB',
                                borderBottomWidth: 1,
                                marginTop: 16,
                            }}  
                        />}
                </Card>
            )
            }) }
        </View>
    );
}
        
    
