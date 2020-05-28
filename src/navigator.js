import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from "./screens/Profile";
import HomeScreen from "./screens/Home";


const Stack = createStackNavigator();

class AppContainer extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    {/*<Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default AppContainer;