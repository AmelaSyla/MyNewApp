import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { auth } from "./firebaseConfig";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: "77042057-tetq15h7unl1lsj6teqekknefomrdu93.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => console.log("Login me Google u krye me sukses!"))
        .catch((error) => console.log("Gabim gjatë login:", error));
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kyçu me Google</Text>
      <Button
        title="Vazhdo me Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 },
});
