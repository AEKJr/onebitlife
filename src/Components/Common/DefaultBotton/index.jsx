import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height,
}) {
    return (
        <TouchableOpacity
            style={[styles.button, { width: width, height: height }]}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 200, 0.9)",
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: "rgba(0, 0, 150, 0.8)",
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    },
});