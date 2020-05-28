import React, {Component} from 'react';
import {Text, View, Button} from "react-native";
import {getSetting} from "../settings";

class HomeScreen extends Component {
    render() {
        return(
            <View>
                <Text>{getSetting("apiUrl")}</Text>
                <Button onPress={() => this.props.navigation.navigate('Profile')} title={"Mi Perfil"}/>
            </View>
        )
    }
}

export default HomeScreen;