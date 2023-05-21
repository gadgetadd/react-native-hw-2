import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import background from '../assets/images/background.jpg'
import { Fontisto } from '@expo/vector-icons';


export default function RegistrationScreen() {
    return (

        <ImageBackground source={background} style={styles.container} resizeMode="cover">
            <View style={styles.form}>
                <View style={styles.icon}>
                    <Fontisto name="person" size={80} color="#767b91" />
                </View>
                <Text style={styles.title}>Registration</Text>
                <TextInput style={styles.input} placeholder="Login" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <Button title="Register" color="#FF6C00" />
                <Text style={styles.text}>Already have an account ? Log in</Text>
            </View>
        </ImageBackground >


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    icon: {
        position: 'absolute',
        top: -50,
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