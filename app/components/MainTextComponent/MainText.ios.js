import React from "react";
import { Text } from "react-native";

import PropTypes from "prop-types";

import stylesIos from "./styles.ios";

const MainText = ({ children, style = {} }) => {
  return <Text style={[stylesIos.text, style]}>{children}</Text>;
};

export default MainText;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
