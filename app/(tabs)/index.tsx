import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F4A9C0", dark: "#7B2D40" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello!</ThemedText>
      </ThemedView>

      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>Student Profile</ThemedText>
        <View style={styles.row}>
          <ThemedText style={styles.label}>Name</ThemedText>
          <ThemedText style={styles.value}>
            Adebayo Oluwatimilehin Esther
          </ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.label}>Matric No</ThemedText>
          <ThemedText style={styles.value}>RUN/IFT/22/13157</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.label}>Department</ThemedText>
          <ThemedText style={styles.value}>Information Technology</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.label}>Course</ThemedText>
          <ThemedText style={styles.value}>React Native</ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.label}>Course Code</ThemedText>
          <ThemedText style={styles.value}>GIT 404</ThemedText>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#F4A9C0",
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#7B2D40",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e0a0b0",
    paddingBottom: 6,
  },
  label: {
    fontWeight: "600",
    color: "#7B2D40",
  },
  value: {
    color: "#333",
    flexShrink: 1,
    textAlign: "right",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
