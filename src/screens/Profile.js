import React, {Component} from 'react';
import {Text, View} from "react-native";
import {app} from '../app/app';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            userData: {}
        };

        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    handleApiResponse(response) {
        this.setState({userData: response.userPersonalData()})
    }

    componentDidMount() {
        app.apiClient().getProfile(this.handleApiResponse)
    }

    render() {
        return(
            <View>
                <Text>Mi perfil</Text>
                <Text>Email: {this.state.userData.email}</Text>
                <Text>Nombre: {this.state.userData.firstName}</Text>
                <Text>Apellido: {this.state.userData.lastName}</Text>
            </View>
        )
    }
}

export default ProfileScreen;