import React, {Component} from 'react';
import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

class ProfileScreen extends Component {
    render() {
        return(
            <View>
                <Text>Mi perfil</Text>
            </View>
        )
    }

    // render() {
    //     return(
    //         // Permite posicionar el contenido sin pisar la status-bar, notches, etc.
    //         <SafeAreaView>
    //             <Text>Mi perfil</Text>
    //         </SafeAreaView>
    //     )
    // }
}

export default ProfileScreen;