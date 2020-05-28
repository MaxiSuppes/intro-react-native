import React, {Component} from 'react';
import {Text, View, Button} from "react-native";

class HomeScreen extends Component {
    render() {
        return(
            <View>
                <Text>Inicio</Text>
                <Button onPress={() => this.props.navigation.navigate('Profile')} title={"Mi Perfil"}/>
            </View>
        )
    }
}

export default HomeScreen;