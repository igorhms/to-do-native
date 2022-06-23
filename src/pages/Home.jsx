import React from 'react';
import { View, Button, Text } from "react-native";

const Home = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Details" onPress={() => { navigation.navigate('Details') }} >
            </Button>
        </View>
    );
}

export default Home;