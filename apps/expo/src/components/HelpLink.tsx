import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function HelpLink() {
  return (
    <Link
      href={{
        pathname: "/toGetStarted/page",
      }}
      style={styles.link}
    >
      <Text style={styles.text}>Need some help getting started?</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  link: {
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
