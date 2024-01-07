import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Button({
	children,
	onPress,
	width,
	height = width,
	color,
}) {
	return (
		<View style={[styles.outerContainer, { width: width, height: height }]}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.innerContainer, styles.pressed]
						: styles.innerContainer
				}
				onPress={onPress}>
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
	text: {
		color: Colors.secondary500,
		fontSize: 32,
		textAlign: "center",
	},
});
