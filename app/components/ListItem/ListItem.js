import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import PropTypes from "prop-types";
import MainText from "../MainText";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <MainText style={styles.title}>{title}</MainText>
            <MainText style={styles.subTitle}>{subTitle}</MainText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

ListItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
  renderRightActions: PropTypes.func,
};
