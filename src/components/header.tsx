import React, { Component } from "react";
import { Title, Header, Left, Button, Icon, Body } from "native-base";

export interface HeaderAppProps {
  changeScreen: any;
}
export default class HeaderApp extends Component<HeaderAppProps> {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.changeScreen("decode")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Morse EnDecoder !</Title>
        </Body>
      </Header>
    );
  }
}
