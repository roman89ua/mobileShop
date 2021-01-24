import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import PropTypes from "prop-types";

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

Screen.propTypes = {
  children: PropTypes.object,
};
