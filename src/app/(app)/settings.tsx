import { useSession } from "@/context/session";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const { session, logout } = useSession();

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      {session ? (
        <Pressable
          accessibilityRole="button"
          onPress={logout}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 20,
  },
  button: {
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#111827",
    padding: 14,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
