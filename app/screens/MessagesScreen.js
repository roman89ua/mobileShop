import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const MessagesScreen = () => {
  const messages = [
    {
      id: 1,
      title: "Title #1",
      description: "Description #1",
      image: require("../assets/default_user.jpeg"),
    },
    {
      id: 2,
      title: "Title #2",
      description: "Description #2",
      image: require("../assets/default_user.jpeg"),
    },
  ];
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};
export default MessagesScreen;
