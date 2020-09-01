import React from "react";
import { AppLoading } from "expo";
import { Container, Text, StyleProvider } from "native-base";
import * as Font from "expo-font";
import FooterApp from "./src/components/footer";
import HeaderApp from "./src/components/header";
import About from "./src/components/about";
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
    this.setState({ isReady: true, screen: "about" });
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
        <HeaderApp />
        {screen === "encode" && (
          <Container>
            <Text>Encode view</Text>
          </Container>
        )}
        {screen === "decode" && (
          <Container>
            <Text>Decode view</Text>
          </Container>
        )}
        {screen === "about" && <About />}
        <FooterApp screen={screen} changeScreen={this.changeScreen} />
      </Container>
      // </StyleProvider>
    );
  }
}
