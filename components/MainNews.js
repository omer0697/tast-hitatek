import { StyleSheet, Text, View,Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import {useFonts} from "expo-font"

export default function MainNews() {
    const [loaded] = useFonts({
        NatoSerif: require('../assets/fonts/NotoSerif_Condensed-Bold.ttf'),
        reguler : require('../assets/fonts/NotoSerif_Condensed-Black.ttf'),
      });

        if (!loaded) { return null; }

    return (
        <View style={{display: 'flex' , flexDirection: 'column'}}>
            <Text style={styles.title}>OPINION</Text>
            <Image source={require('../assets/thumb.png')} style={styles.image} />
            <Text style={styles.shadowText}>Celebrate Kamala Harris, but don’t stop applying pressure to the system</Text>
            <Text style={styles.shadowInfo}>We shouldn’t downplay what vice president-elect Kamala Harris means as a minority woman in high office, but we can’t ignore her complicated past nor a system she inhabits that is built to thwart change.</Text>
            <View style={{display: 'flex' , flexDirection: 'row', gap:20, justifyContent: 'items-center', marginTop: 16, left: 24}}>
                <Avatar.Image size={32} source={require('../assets/pp.png')} />
                <Text style={{fontWeight:"600", marginTop:5}}>{"Sharan Dhaliwal".toUpperCase()} </Text>
            </View>
            <View 
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 16,
                    left: 24,
                    marginRight: 50,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        left: 16,
        color: '#005D99',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 240,
        marginTop: 16,
        objectFit: 'cover',
    },
    shadowText: {
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        fontSize: 35,
        left: 24,
        marginRight: 100,
        marginTop: 19,
        lineHeight: 36,
        fontWeight: '700',
        fontFamily: 'NatoSerif',
    },
    shadowInfo:{
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 4,
        fontSize: 16,
        left: 24,
        marginTop: 19,
        lineHeight: 24,
        marginRight: 130,
        fontFamily: 'reguler'
    },
});