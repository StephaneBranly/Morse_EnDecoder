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
  Row,
  Card,
  CardItem,
  Body,
} from "native-base";

export default class Encode extends Component {
  render() {
    return (
      <Content padder>
        <Form>
          <Textarea
            rowSpan={8}
            bordered
            placeholder="Write here"
            underline={false}
          />
        </Form>

        <Content padder>
          <Button iconLeft block>
            <Icon name="key" />
            <Text>Encode</Text>
          </Button>
        </Content>

        <Card>
          <CardItem>
            <Body>
              <Text>.-- .-. .. - . / .... . .-. .</Text>
            </Body>
          </CardItem>
        </Card>

        <Content padder>
          <Button iconLeft>
            <Icon name="copy" />
            <Text>Copy</Text>
          </Button>
        </Content>
      </Content>
    );
  }
}
