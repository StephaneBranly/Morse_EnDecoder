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

export interface DecodeProps {
  changeScreen: any;
}

const decode = () => {
  console.log("decode");
};

export default class Decode extends Component<DecodeProps> {
  render() {
    return (
      <Content>
        <HeaderApp backButton={false} />
        <Content padder>
          <Content padder>
            <Text>Decode</Text>
          </Content>
          <Grid>
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
              onSubmitEditing={decode}
            />
          </Form>

          <Grid>
            <Col>
              <Button iconLeft block onPress={() => decode()}>
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
                <Text>Write here</Text>
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
