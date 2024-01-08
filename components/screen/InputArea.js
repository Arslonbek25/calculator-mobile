import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function InputArea({ input }) {
	return (
		<View style={styles.container}>
			<Text style={styles.input}>{input}</Text>
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
