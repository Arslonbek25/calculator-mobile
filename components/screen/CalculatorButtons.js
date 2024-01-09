import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { all, create } from "mathjs";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import Button from "../ui/Button";

export default function CalculatorButtons({ input, setInput }) {
	const config = {};
	const math = create(all, config);

	const handleInput = value => {
		const inputStr = String(input);
		const symbol = parseInt(value);
		const lastDigit = parseInt(inputStr[inputStr.length - 1]);
		const isOper = isNaN(symbol);

		if (!isOper || (isOper && !isNaN(lastDigit))) {
			if (
				((inputStr === "0" && value !== "0") || inputStr === "0") &&
				!isOper
			) {
				setInput(value);
				return;
			}
			setInput(prev => prev + value);
		}
	};

	function clearInput() {
		setInput("");
	}

	function evaluate() {
		const exp = String(input);
		if (isNaN(parseInt(exp[exp.length - 1]))) {
			return;
		}
		const result = math.evaluate(exp);
		setInput(result);
	}

	function deleteOne() {
		const exp = String(input);
		const result = exp.slice(0, -1);
		setInput(result);
	}

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Button onPress={clearInput}>C</Button>
				<Button onPress={handleInput.bind(this, "/")}>
					<Feather name="divide" size={32} />
				</Button>
				<Button onPress={handleInput.bind(this, "*")}>
					<FontAwesome name="times" size={32} />
				</Button>
				<Button onPress={deleteOne}>
					<Feather name="delete" size={32} />
				</Button>
			</View>
			<View style={styles.row}>
				<Button
					color={Colors.secondary500}
					onPress={handleInput.bind(this, "7")}>
					7
				</Button>
				<Button
					color={Colors.secondary500}
					onPress={handleInput.bind(this, "8")}>
					8
				</Button>
				<Button
					color={Colors.secondary500}
					onPress={handleInput.bind(this, "9")}>
					9
				</Button>
				<Button onPress={handleInput.bind(this, "-")}>
					<Feather name="minus" size={32} />
				</Button>
			</View>
			<View style={styles.row}>
				<Button
					color={Colors.secondary500}
					onPress={handleInput.bind(this, "4")}>
					4
				</Button>
				<Button
					color={Colors.secondary500}
					onPress={handleInput.bind(this, "5")}>
					5
				</Button>
				<Button
					color={Colors.secondary500}
					onPress={handleInput.bind(this, "6")}>
					6
				</Button>
				<Button onPress={handleInput.bind(this, "+")}>
					<Feather name="plus" size={32} />
				</Button>
			</View>
			<View style={styles.group}>
				<View>
					<View style={styles.row}>
						<Button
							color={Colors.secondary500}
							onPress={handleInput.bind(this, "1")}>
							1
						</Button>
						<Button
							color={Colors.secondary500}
							onPress={handleInput.bind(this, "2")}>
							2
						</Button>
						<Button
							color={Colors.secondary500}
							onPress={handleInput.bind(this, "3")}>
							3
						</Button>
					</View>
					<View style={styles.row}>
						<Button
							color={Colors.secondary500}
							onPress={handleInput.bind(this, "%")}>
							<Feather name="percent" size={32} />
						</Button>
						<Button
							color={Colors.secondary500}
							onPress={handleInput.bind(this, "0")}>
							0
						</Button>
						<Button
							color={Colors.secondary500}
							onPress={handleInput.bind(this, ".")}>
							<Entypo name="dot-single" size={32} />
						</Button>
					</View>
				</View>
				<View>
					<Button size="double" color={Colors.primary500} onPress={evaluate}>
						=
					</Button>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 40,
		overflow: "hidden",
		width: "100%",
	},
	group: {
		flexDirection: "row",
	},
	row: {
		flexDirection: "row",
	},
});
