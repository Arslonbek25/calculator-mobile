import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CalculatorButtons from "./components/screen/CalculatorButtons";
import InputArea from "./components/screen/InputArea";
import Colors from "./constants/Colors";

export default function App() {
	const [input, setInput] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<InputArea input={input} />
			<CalculatorButtons input={input} setInput={setInput} />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: Colors.primary500,
		flex: 1,
		justifyContent: "center",
		marginBottom: 15,
		marginHorizontal: 15,
	},
});
