import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import CalculatorButtons from "./components/screen/CalculatorButtons";
import Colors from "./constants/Colors";
import InputArea from "./components/screen/InputArea";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<InputArea />
			<CalculatorButtons />
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
