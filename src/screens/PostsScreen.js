import { Text, View, StyleSheet } from 'react-native';


export default function PostsScreen() {
    return (
        <View style={styles.container}>
            <Text>PostsScreen</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },

});