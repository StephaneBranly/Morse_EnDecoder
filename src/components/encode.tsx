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
import get from "lodash/get";

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
    this.setState({ textEncoded: this.state.text });
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

          <Grid>
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
