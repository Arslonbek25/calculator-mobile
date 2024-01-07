import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function InputArea() {
	return (
		<View style={styles.container}>
			<Text style={styles.input}>390/4</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "flex-end",
		borderBottomWidth: 1,
		borderColor: Colors.accent500,
		flex: 1,
		justifyContent: "flex-end",
		paddingBottom: 24,
		paddingHorizontal: 16,
		width: "95%",
	},
	input: {
		color: Colors.secondary500,
		fontSize: 36,
	},
});
