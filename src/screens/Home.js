import React, {Component} from 'react';
import {Text, View, Button} from "react-native";
import {getSetting} from "../settings";
import {Grid} from "../components/Grid";

class HomeScreen extends Component {
    render() {
        return(
            <View>
                <Text>{getSetting("apiUrl")}</Text>
                <Button onPress={() => this.props.navigation.navigate('Profile')} title={"Mi Perfil"}/>
                <Grid/>
            </View>
        )
    }
}

export default HomeScreen;