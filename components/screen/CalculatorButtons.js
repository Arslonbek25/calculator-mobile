import { Feather, FontAwesome, Entypo } from "@expo/vector-icons";
import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import Button from "../ui/Button";

export default function CalculatorButtons() {
	const width = (Dimensions.get("window").width - 30) / 4;

	console.log(width);
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Button width={width} color={Colors.accent500}>
					C
				</Button>
				<Button width={width}>
					<Feather name="divide" size={32} color={Colors.accent500} />
				</Button>
				<Button width={width}>
					<FontAwesome name="times" size={32} color={Colors.accent500} />
				</Button>
				<Button width={width}>
					<Feather name="delete" size={32} color={Colors.accent500} />
				</Button>
			</View>
			<View style={styles.row}>
				<Button width={width} color={Colors.secondary500}>
					7
				</Button>
				<Button width={width} color={Colors.secondary500}>
					8
				</Button>
				<Button width={width} color={Colors.secondary500}>
					9
				</Button>
				<Button width={width}>
					<Feather name="minus" size={32} color={Colors.accent500} />
				</Button>
			</View>
			<View style={styles.row}>
				<Button width={width} color={Colors.secondary500}>
					4
				</Button>
				<Button width={width} color={Colors.secondary500}>
					5
				</Button>
				<Button width={width} color={Colors.secondary500}>
					6
				</Button>
				<Button width={width}>
					<Feather name="plus" size={32} color={Colors.accent500} />
				</Button>
			</View>
			<View style={styles.group}>
				<View>
					<View style={styles.row}>
						<Button width={width} color={Colors.secondary500}>
							1
						</Button>
						<Button width={width} color={Colors.secondary500}>
							2
						</Button>
						<Button width={width} color={Colors.secondary500}>
							3
						</Button>
					</View>
					<View style={styles.row}>
						<Button width={width} color={Colors.secondary500}>
							<Feather name="percent" size={32} color={Colors.secondary500} />
						</Button>
						<Button width={width} color={Colors.secondary500}>
							0
						</Button>
						<Button width={width} color={Colors.secondary500}>
							<Entypo name="dot-single" size={32} color={Colors.secondary500} />
						</Button>
					</View>
				</View>
				<View>
					<Button width={width} height={width * 2} color={Colors.accent500}>
						=
					</Button>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	group: {
		flexDirection: "row",
	},
	row: {
		flexDirection: "row",
	},
});
