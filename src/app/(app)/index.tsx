import { useSession } from "@/context/session";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { logout } = useSession();

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Signed in</Text>

        <Pressable accessibilityRole="button" onPress={logout} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>

        <Link href="/settings" style={styles.link}>
          Settings
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    gap: 20,
  },
  title: {
    color: "#111827",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.8,
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
