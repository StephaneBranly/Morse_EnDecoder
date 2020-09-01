import React from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import FooterApp from "./components/footer";
import { Ionicons } from "@expo/vector-icons";

export interface AppProps {}
export interface AppStates {
  isReady: boolean;
}
export default class App extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Container>
          <Text>Morse EnDecoder ! Welcome to the app !</Text>
        </Container>
        <FooterApp />
      </Container>
    );
  }
}
