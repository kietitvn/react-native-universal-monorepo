import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Image,
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AsyncStorageExample } from "./store/AsyncStorageExample";
import LogoSrc from "./asset/logo.png";
import { useQuery } from "@apollo/client";
import { gqlSections } from "./graphql/query/section";

const App = () => {
  const { t, i18n } = useTranslation();
  const { data, loading } = useQuery(gqlSections, {
    variables: { id: 1 },
  });

  console.log("data graphql 2:", data);

  return (
    <SafeAreaView style={styles.root}>
      {/* On React Native for Web builds coming from CRA, TypeScript 
          complains about the image type, so we cast it as a workaround  */}
      <Image style={styles.logo} source={LogoSrc as ImageSourcePropType} />
      <Text>{t("Home.HeyHome")}</Text>
      <View style={styles.platformRow}>
        <Button
          onPress={() => i18n.changeLanguage("en")} //Here I change the language to "en" English
          title="EN"
        />
        <Button
          onPress={() => i18n.changeLanguage("vi")} //Here I change the language to "es" Spanish
          title="VI"
        />
      </View>
      <Text style={styles.text}>Hello VTSG!</Text>
      {/* <AsyncStorageExample /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});
