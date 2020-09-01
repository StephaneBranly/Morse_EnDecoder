import React from "react";
import { AppLoading } from "expo";
import { Container, Text, StyleProvider, Fab, Icon } from "native-base";
import * as Font from "expo-font";
import About from "./src/components/about";
import Encode from "./src/components/encode";
import Decode from "./src/components/decode";
import { Ionicons } from "@expo/vector-icons";

// import getTheme from "./native-base-theme/components";
// import material from "./native-base-theme/variables/material";

export interface AppProps {}
export interface AppStates {
  isReady: boolean;
  screen: string;
}
export default class App extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isReady: false,
      screen: "",
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true, screen: "decode" });
  }

  changeScreen: any = (screen: string) => {
    this.setState({ screen: screen });
  };

  render() {
    const { isReady, screen } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }

    if (!["about", "encode", "decode"].includes(screen)) {
      return <AppLoading />;
    }

    return (
      // <StyleProvider style={getTheme(material)}>
      <Container>
        {screen === "encode" && <Encode changeScreen={this.changeScreen} />}
        {screen === "decode" && <Decode changeScreen={this.changeScreen} />}
        {screen === "about" ? (
          <About changeScreen={this.changeScreen} />
        ) : (
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => this.changeScreen("about")}
          >
            <Icon type="MaterialIcons" name="info" />
          </Fab>
        )}
      </Container>
      // </StyleProvider>
    );
  }
}
