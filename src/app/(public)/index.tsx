import { useSession } from "@/context/session";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { login } = useSession();

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Pressable accessibilityRole="button" onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    gap: 20,
  },
  button: {
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#111827",
    marginTop: 4,
    padding: 14,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    alignSelf: "center",
    color: "#6b7280",
    fontSize: 14,
    lineHeight: 24,
    padding: 12,
    textDecorationLine: "underline",
  },
});
