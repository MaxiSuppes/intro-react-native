import React, {Component} from 'react';
import {Text, View, TextInput, Button} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {app} from '../app/app';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            userData: {},
            age: ''
        };

        this.handleApiResponse = this.handleApiResponse.bind(this);
        this.getAgeFromAsyncStorage = this.getAgeFromAsyncStorage.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    handleApiResponse(response) {
        this.setState({userData: response.userPersonalData()})
    }

    getAgeFromAsyncStorage() {
        // Sistema de almacenado asincrónico y no encriptado (ver SecureStore para datos encriptados: https://docs.expo.dev/versions/latest/sdk/securestore/).
        // 6MB de memoria para guardar datos de nuestra app (se puede incrementar). Solo permite guardar strings.

        AsyncStorage.getItem("@introReactNative:edad")
            .then((jsonString) => {
                const jsonResponse = jsonString === null ? "" : JSON.parse(jsonString);
                this.setState({age: jsonResponse.toString()});
            })
            .catch((error) => {
                console.warn("Local fetch error", error);
            });
    }

    componentDidMount() {
        app.apiClient().getProfile(this.handleApiResponse);
        this.getAgeFromAsyncStorage();
    }

    onChangeText(age) {
        this.setState({age: age})
    }

    saveChanges() {
        Keyboard.dismiss();
        AsyncStorage.setItem("@introReactNative:edad", this.state.age)
            .then(() => {
                console.warn("Guardada la edad de: ", this.state.age);
            })
            .catch((error) => {
                console.warn("Local store error", error);
            });
    }

    render() {
        return(
            <View>
                <Text>Mi perfil</Text>
                <Text>Email: {this.state.userData.email}</Text>
                <Text>Nombre: {this.state.userData.firstName}</Text>
                <Text>Apellido: {this.state.userData.lastName}</Text>
                <Text>Edad:</Text>
                <TextInput style={{height: 30, width: 100, borderColor: 'gray', borderWidth: 1}}
                           keyboardType={"numeric"}
                           onChangeText={text => this.onChangeText(text)}
                           value={this.state.age}/>
                <Button onPress={this.saveChanges} title={"Guardar"}/>
            </View>
        )
    }
}

export default ProfileScreen;