import React, { Component } from "react";
import { Linking, TouchableHighlight } from "react-native";
import {
  Container,
  Content,
  Icon,
  Text,
  List,
  ListItem,
  Separator,
  Left,
  Body,
  Thumbnail,
} from "native-base";

import appJson from "../../app.json";
import HeaderApp from "./header";

var version = appJson.expo.version;
var github = appJson.expo.githubUrl;

export interface AboutProps {
  changeScreen: any;
}
export default class About extends Component<AboutProps> {
  render() {
    return (
      <Container>
        <HeaderApp changeScreen={this.props.changeScreen} backButton={true} />

        <Content>
          <List>
            <Separator bordered>
              <Text>The app</Text>
            </Separator>
            <ListItem>
              <Text>Creation date : 01/09/2020</Text>
            </ListItem>

            <ListItem>
              <Text>Version {version}</Text>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(github);
              }}
            >
              <Icon name="ios-git-network" style={{ marginRight: 5 }} />
              <Text>Github of the project</Text>
            </ListItem>

            <Separator bordered>
              <Text>Creator</Text>
            </Separator>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(`https://github.com/StephaneBranly`);
              }}
            >
              <Left style={{ flex: 1 }}>
                <TouchableHighlight
                  onPress={() => {
                    Linking.openURL(
                      `https://avatars3.githubusercontent.com/u/51955833?s=460&v=4`
                    );
                  }}
                >
                  <Thumbnail
                    source={{
                      uri:
                        "https://avatars3.githubusercontent.com/u/51955833?s=460&v=4",
                    }}
                  />
                </TouchableHighlight>
              </Left>
              <Body style={{ flex: 4 }}>
                <Text>StephaneBranly</Text>
                <Text note>Dev</Text>
              </Body>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(
                  `https://paypal.me/StephaneBranly?locale.x=fr_FR`
                );
              }}
            >
              <Icon name="ios-gift" style={{ marginRight: 5 }} />
              <Text>Donate</Text>
            </ListItem>

            <ListItem
              button
              onPress={() => {
                Linking.openURL(
                  `https://www.youtube.com/channel/UC2AEn2UpgLI0RDatPYZ3_gQ`
                );
              }}
            >
              <Icon
                type="EvilIcons"
                name="sc-youtube"
                style={{ marginRight: 5 }}
              />
              <Text>Check Youtube</Text>
            </ListItem>

            <Separator bordered>
              <Text>Used dependencies</Text>
            </Separator>
            <ListItem>
              <Text>react-native</Text>
            </ListItem>
            <ListItem>
              <Text>native-base</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
