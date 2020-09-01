import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export default class FooterApp extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon type="EvilIcons" name="lock" />
            <Text>Encode</Text>
          </Button>
          <Button vertical active>
            <Icon type="EvilIcons" name="unlock" />
            <Text>Decode</Text>
          </Button>

          <Button vertical>
            <Icon type="Ionicons" name="information-circle-outline" />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
