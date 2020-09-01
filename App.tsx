import React from "react";
import { AppLoading } from "expo";
import { Container, Text, Header, Title } from "native-base";
import * as Font from "expo-font";
import FooterApp from "./src/components/footer";
import HeaderApp from "./src/components/header";
import About from "./src/components/about";
import { Ionicons } from "@expo/vector-icons";

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
    console.log("Call functon with " + screen);
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
      <Container>
        <HeaderApp />
        {/* <About /> */}
        {/* <Container>
          <Text>Morse EnDecoder ! Welcome to the app !</Text>
        </Container> */}
        <FooterApp screen={screen} changeScreen={this.changeScreen} />
      </Container>
    );
  }
}
