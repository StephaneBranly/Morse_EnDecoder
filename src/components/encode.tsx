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

export interface EncodeProps {
  changeScreen: any;
}

export default class Encode extends Component<EncodeProps> {
  render() {
    return (
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
          />
        </Form>

        <Grid>
          <Col>
            <Button iconLeft block>
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
              <Text>.-- .-. .. - . / .... . .-. .</Text>
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
    );
  }
}
