import React, { Component } from "react";
import {
  Form,
  Content,
  Textarea,
  Button,
  Icon,
  Text,
  Grid,
  Col,
  Card,
  CardItem,
  Body,
} from "native-base";
import HeaderApp from "./header";
// @ts-ignore
import get from "lodash/get";
import { CODE } from "../vars/code";

export interface DecodeProps {
  changeScreen: any;
}

export interface DecodeStates {
  text: string;
  textDecoded: string;
}

export default class Decode extends Component<DecodeProps, DecodeStates> {
  constructor(props: any) {
    super(props);
    this.state = { text: "", textDecoded: "" };
  }
  textEncoded = "Write here";

  decode = () => {
    console.log("decode :");
    console.log(this.state.text);
    let textWork = this.state.text + " ";
    let textWorkLetters = textWork.split(" ");
    textWork = "";
    textWorkLetters.forEach((letter) => {
      if (letter == "") textWork += " ";
      else
        for (const char of CODE) {
          if (char[1] == letter) textWork += char[0];
        }
    });

    this.setState({ textDecoded: textWork });
  };

  onChange = (e: any) => {
    e.preventDefault();
    let newText = get(e, "nativeEvent.text", "");
    this.setState({ text: newText });
  };

  write = (text: any) => {
    this.setState({
      text: `${this.state.text}${text}`,
    });
  };
  delete = () => {
    this.setState({
      text: `${this.state.text.slice(0, -1)}`,
    });
  };
  render() {
    return (
      <Content>
        <HeaderApp backButton={false} />
        <Content padder>
          <Content padder>
            <Text>Decode</Text>
          </Content>
          <Grid style={{ alignItems: "center" }}>
            <Col>
              <Button onPress={() => this.write(".")}>
                <Icon type="MaterialIcons" name="lens"></Icon>
              </Button>
            </Col>
            <Col>
              <Button onPress={() => this.write("-")}>
                <Icon type="MaterialIcons" name="remove"></Icon>
              </Button>
            </Col>
            <Col>
              <Button onPress={() => this.write(" ")}>
                <Icon type="MaterialIcons" name="space-bar"></Icon>
              </Button>
            </Col>
            <Col>
              <Button onPress={() => this.delete()}>
                <Icon type="MaterialIcons" name="backspace"></Icon>
              </Button>
            </Col>
          </Grid>

          <Form>
            <Textarea
              rowSpan={8}
              bordered
              placeholder=".-- .-. .. - .   .... . .-. ."
              underline={false}
              returnKeyType="done"
              multiline={true}
              blurOnSubmit={true}
              onSubmitEditing={this.decode}
              onChange={this.onChange}
              value={this.state.text}
            />
          </Form>

          <Grid>
            <Col>
              <Button iconLeft block onPress={() => this.decode()}>
                <Icon name="key" />
                <Text>Decode</Text>
              </Button>
            </Col>
            <Col>
              <Button
                iconLeft
                block
                onPress={() => this.props.changeScreen("encode")}
              >
                <Icon type="MaterialIcons" name="import-export" />
                <Text>Switch</Text>
              </Button>
            </Col>
          </Grid>

          <Card>
            <CardItem>
              <Body>
                <Text>{this.state.textDecoded}</Text>
              </Body>
            </CardItem>
          </Card>

          <Grid style={{ alignItems: "center" }}>
            <Col>
              <Button iconLeft>
                <Icon type="MaterialIcons" name="content-copy" />
                <Text>Copy</Text>
              </Button>
            </Col>
          </Grid>
        </Content>
      </Content>
    );
  }
}
