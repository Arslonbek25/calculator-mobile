/* eslint-disable react-native/no-unused-styles */
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Button({
	children,
	onPress,
	color = Colors.accent500,
	size = "square",
}) {
	const length = (Dimensions.get("window").width - 30) / 4;

	const btnStyle = StyleSheet.create({
		accent: {
			backgroundColor: Colors.accent500,
		},
		double: {
			borderStartStartRadius: 20,
			height: length * 2,
			overflow: "hidden",
			width: length,
		},
		square: {
			height: length,
			width: length,
		},
	});

	const hover = ({ pressed }) => [
		styles.innerContainer,
		size === "double" && btnStyle.accent,
		pressed && (size === "double" ? styles.pressedAccent : styles.pressed),
	];

	return (
		<View style={[styles.outerContainer, btnStyle[size]]}>
			<Pressable style={hover} onPress={onPress}>
				<Text style={[styles.text, { color }]}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	innerContainer: {
		backgroundColor: Colors.primary500,
		flex: 1,
		justifyContent: "center",
	},
	pressed: {
		backgroundColor: Colors.primary700,
	},
	pressedAccent: {
		backgroundColor: Colors.accent600,
	},
	text: {
		color: Colors.secondary500,
		fontSize: 32,
		textAlign: "center",
	},
});
