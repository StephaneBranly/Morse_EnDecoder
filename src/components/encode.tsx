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
  Fab,
  Separator,
} from "native-base";
import HeaderApp from "./header";
// @ts-ignore
import get from "lodash/get";

import { CODE } from "../vars/code";

export interface EncodeProps {
  changeScreen: any;
}

export interface EncodeStates {
  text: string;
  textEncoded: string;
}

export default class Encode extends Component<EncodeProps, EncodeStates> {
  constructor(props: any) {
    super(props);
    this.state = { text: "", textEncoded: "" };
  }
  textEncoded = ".-- .-. .. - .     .... . .-. .";

  encode = () => {
    console.log("encode :");
    console.log(this.state.text);
    let textWork = this.state.text;
    for (const char of CODE) {
      var replace = char[0];
      var re = new RegExp(replace, "g");
      textWork = textWork.replace(re, char[1] + " ");
    }
    this.setState({ textEncoded: textWork });
  };

  onChange = (e: any) => {
    e.preventDefault();
    const newText = get(e, "nativeEvent.text", "");
    this.setState({ text: newText });
  };

  render() {
    return (
      <Content>
        <HeaderApp backButton={false} />

        <Content padder>
          <Content padder>
            <Text>Encode</Text>
          </Content>

          <Grid>
            <Col>
              <Button></Button>
            </Col>
          </Grid>

          <Form>
            <Textarea
              rowSpan={8}
              bordered
              placeholder="Write here"
              underline={false}
              returnKeyType="done"
              multiline={true}
              blurOnSubmit={true}
              onSubmitEditing={this.encode}
              onChange={this.onChange}
            />
          </Form>

          <Grid>
            <Col>
              <Button iconLeft block onPress={() => this.encode()}>
                <Icon name="key" />
                <Text>Encode</Text>
              </Button>
            </Col>
            <Col>
              <Button
                iconLeft
                block
                onPress={() => this.props.changeScreen("decode")}
              >
                <Icon type="MaterialIcons" name="import-export" />
                <Text>Switch</Text>
              </Button>
            </Col>
          </Grid>

          <Card>
            <CardItem>
              <Body>
                <Text>{this.state.textEncoded}</Text>
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
