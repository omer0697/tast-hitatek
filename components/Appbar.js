
import { StyleSheet, Text, View,Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import g10 from '../assets/g10.png';
import { useState } from 'react';

export default function Appbar() {
    const [text, setText] = useState('');

    return (
        <View style={{position:"relative", top:0, left:0, right:0, bottom:0, zIndex: 1}}>
            <View style={styles.appbar}>
                <Image source={g10} style={styles.icon} />
                <IconButton 
                    icon="menu" 
                    style={styles.hamburger} 
                    onPress={() => setText('hamberger')}
                    iconColor="#ffffff" 
                    size={32}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appbar: {
        width: '100%',  
        height: 104,
        backgroundColor: '#005D99',
        display: 'flex',
        flexDirection: 'column',
    },
    appbarInner: {
        alignItems: 'center',
    },
    appbarRight: {
        position: 'absolute',
        right: 19,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 24,
    },
    icon: {
        position: 'absolute',
        bottom: 16,
        left:16,
    },
    hamburger: {
        position: 'absolute',
        right: 8,
        bottom: 4,
        color: '#ffffff',
        fontSize: 40,
    },
});