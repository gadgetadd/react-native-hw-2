import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import background from '../assets/images/background.jpg'
import { Fontisto } from '@expo/vector-icons';


export default function LoginScreen() {
    return (
        <ImageBackground source={background} style={styles.container} resizeMode="cover">
            <View style={styles.form}>
                <View style={styles.icon}>
                    <Fontisto name="person" size={80} color="#767b91" />
                </View>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="Login" />
                <TextInput style={styles.input} placeholder="Password" />
                <Button title="Login" color="#FF6C00" />
                <Text style={styles.text}>Don't have an account? Register</Text>
            </View>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    icon: {
        position: 'absolute',
        top: '-50px',
        backgroundColor: '#e1e5ee',
        width: 100,
        height: 100,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        fontFamily: 'Inter-Medium',
        marginBottom: 20,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        marginTop: 20,
        textAlign: 'center'

    },
    form: {
        backgroundColor: '#fff',
        height: '40%',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 60,
        paddingHorizontal: 20,

    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: 'whitesmoke',
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },

});