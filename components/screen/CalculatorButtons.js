import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import Button from "../ui/Button";

export default function CalculatorButtons() {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Button>C</Button>
				<Button>
					<Feather name="divide" size={32} />
				</Button>
				<Button>
					<FontAwesome name="times" size={32} />
				</Button>
				<Button>
					<Feather name="delete" size={32} />
				</Button>
			</View>
			<View style={styles.row}>
				<Button color={Colors.secondary500}>7</Button>
				<Button color={Colors.secondary500}>8</Button>
				<Button color={Colors.secondary500}>9</Button>
				<Button>
					<Feather name="minus" size={32} />
				</Button>
			</View>
			<View style={styles.row}>
				<Button color={Colors.secondary500}>4</Button>
				<Button color={Colors.secondary500}>5</Button>
				<Button color={Colors.secondary500}>6</Button>
				<Button>
					<Feather name="plus" size={32} />
				</Button>
			</View>
			<View style={styles.group}>
				<View>
					<View style={styles.row}>
						<Button color={Colors.secondary500}>1</Button>
						<Button color={Colors.secondary500}>2</Button>
						<Button color={Colors.secondary500}>3</Button>
					</View>
					<View style={styles.row}>
						<Button color={Colors.secondary500}>
							<Feather name="percent" size={32} />
						</Button>
						<Button color={Colors.secondary500}>0</Button>
						<Button color={Colors.secondary500}>
							<Entypo name="dot-single" size={32} />
						</Button>
					</View>
				</View>
				<View>
					<Button size="double" color={Colors.primary500}>
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
