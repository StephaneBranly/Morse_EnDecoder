import React, { Component } from "react";
import { Clipboard } from "react-native";
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
  Toast,
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
  showToast: boolean;
}

function slugify(str: string) {
  var map: any = {
    " ": "-",
    a: "á|à|ã|â|À|Á|Ã|Â",
    e: "é|è|ê|É|È|Ê",
    i: "í|ì|î|Í|Ì|Î",
    o: "ó|ò|ô|õ|Ó|Ò|Ô|Õ",
    u: "ú|ù|û|ü|Ú|Ù|Û|Ü",
    c: "ç|Ç",
    n: "ñ|Ñ",
  };

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], "g"), pattern);
  }

  return str;
}

export default class Encode extends Component<EncodeProps, EncodeStates> {
  constructor(props: any) {
    super(props);
    this.state = { text: "", textEncoded: "", showToast: false };
  }
  textEncoded = "·−− ·−· ·· − ·     ···· · ·−· ·";

  encode = () => {
    console.log("encode :");
    console.log(this.state.text);
    let textWork = this.state.text.toLowerCase();
    textWork = slugify(textWork);
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

  copy = () => {
    Clipboard.setString(this.state.textEncoded);
    Toast.show({
      text: "Text copied to clipboard !",
      type: "success",
      duration: 1500,
    });
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
              <Button iconLeft onPress={() => this.copy()}>
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
