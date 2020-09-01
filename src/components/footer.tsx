import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export interface FooterAppProps {
  screen: string;
  changeScreen: any;
}

export default class FooterApp extends Component<FooterAppProps, any> {
  render() {
    const { screen, changeScreen } = this.props;
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={screen === "encode"}
            onPress={() => changeScreen("encode")}
          >
            <Icon type="EvilIcons" name="lock" />
            <Text>Encode</Text>
          </Button>
          <Button
            vertical
            active={screen === "decode"}
            onPress={() => changeScreen("decode")}
          >
            <Icon type="EvilIcons" name="unlock" />
            <Text>Decode</Text>
          </Button>

          <Button
            vertical
            active={screen === "about"}
            onPress={() => changeScreen("about")}
          >
            <Icon type="Ionicons" name="information-circle-outline" />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
