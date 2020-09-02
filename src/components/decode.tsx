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
    this.setState({ textDecoded: this.state.text });
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
            <Text>Decode</Text>
          </Content>
          <Grid style={{ alignItems: "center" }}>
            <Col>
              <Button>
                <Icon type="MaterialIcons" name="lens"></Icon>
              </Button>
            </Col>
            <Col>
              <Button>
                <Icon type="MaterialIcons" name="remove"></Icon>
              </Button>
            </Col>
            <Col>
              <Button>
                <Icon type="MaterialIcons" name="space-bar"></Icon>
              </Button>
            </Col>
            <Col>
              <Button>
                <Icon type="MaterialIcons" name="backspace"></Icon>
              </Button>
            </Col>
          </Grid>

          <Form>
            <Textarea
              rowSpan={8}
              bordered
              placeholder=".-- .-. .. - . / .... . .-. ."
              underline={false}
              returnKeyType="done"
              multiline={true}
              blurOnSubmit={true}
              onSubmitEditing={this.decode}
              onChange={this.onChange}
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
