import React, {Component} from "react";
import {View, StyleSheet, Dimensions, Platform} from "react-native";

export class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.element1}>
                </View>
                <View style={styles.element2}>
                    <View style={styles.element21}>
                    </View>
                    <View style={styles.containerElements2223}>
                        <View style={styles.elements22}>
                        </View>
                        <View style={styles.elements23}>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: "column"
    },
    element1: {
        height: 80,
        borderWidth: 2,
        borderColor: "blue"
    },
    element2: {
        height: 160,
        borderWidth: 2,
        borderColor: "red",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    element21: {
        height: 40,
        borderWidth: 2,
        borderColor: "black",
        width: dimensions.width * 0.9,
    },
    containerElements2223: {
        width: dimensions.width * 0.9,
        flexDirection: "row",
        justifyContent: "center"
    },
    elements22: {
        height: 70,
        width: "30%",
        borderWidth: 2,
        borderColor: "red",
    },
    elements23: {
        height: 70,
        width: "30%",
        borderWidth: 2,
        borderColor: Platform.OS === 'ios' ? "red" : "blue",
    }
});