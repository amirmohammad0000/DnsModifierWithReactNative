////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./Css/CssSettings";
import {
  NativeBaseProvider,
  Heading,
  Box,
  Button,
  Link,
  Modal,
  Text,
  Radio,
  Input,
  Select,
} from "native-base";
import { Feather } from "@expo/vector-icons";
////////////////////////////////////////////////////////////////////////////////// End Section Import

////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class App extends React.Component {
  // Start Section State
  state = {
    Server: "",
    VisibileModalSelectServer: false,
    VisibileModalAppIncompatible: false,
    StateSelectServerInternal: false,
    StateSelectServerCustom: true,
    OpacityTextServerInternal: 1,
    OpacityTextServerCustom: 0.5,
    ValueRadio: "SelectServerInternal",
  };
  // End Section State

  // Start Section Functions
  FuncBackToPageMain() {
    this.props.navigation.goBack();
  }

  FuncSelectServer() {
    this.setState({
      VisibileModalSelectServer: true,
    });
  }

  FuncAppIncompatible() {
    this.setState({
      VisibileModalAppIncompatible: true,
    });
  }

  FuncCloseModalSelectServer() {
    this.setState({
      VisibileModalSelectServer: false,
    });
  }

  FuncCloseModalAppIncompatible() {
    this.setState({
      VisibileModalAppIncompatible: false,
    });
  }

  FuncSetValueRadio(Value) {
    if (Value === "SelectServerInternal") {
      this.setState({
        StateSelectServerInternal: false,
        StateSelectServerCustom: true,
        OpacityTextServerInternal: 1,
        OpacityTextServerCustom: 0.5,
        ValueRadio: "SelectServerInternal",
      });
    } else {
      this.setState({
        StateSelectServerInternal: true,
        StateSelectServerCustom: false,
        OpacityTextServerInternal: 0.5,
        OpacityTextServerCustom: 1,
        ValueRadio: "SelectServerCustom",
      });
    }
  }
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Header */}
          <Box name="Header" style={styles.header}>
            <Box>
              <Feather
                name="arrow-right"
                style={styles.icon_menu}
                onPress={() => {
                  this.FuncBackToPageMain();
                }}
              />
            </Box>

            <Box>
              <Text style={styles.text_header}>DnsModifier</Text>
            </Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content">
            <TouchableOpacity
              style={styles.button_select_server}
              onPress={() => {
                this.FuncSelectServer();
              }}
            >
              <Heading style={styles.text_header_select_server}>
                Select Server
              </Heading>
              <Text style={styles.text_select_server}>
                Server Selected Is : {this.state.Server}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button_app_incompatible}
              onPress={() => {
                this.FuncAppIncompatible();
              }}
            >
              <Heading style={styles.text_header_incompatible_app}>
                Incompatible program
              </Heading>
              <Text style={styles.text_incompatible_app}>
                If a program seems incompatible with the DnsModifier program,
                you can add it here
              </Text>
            </TouchableOpacity>
          </Box>
          {/* End Section Content */}

          {/* Start Section Modal */}
          {/* Start Section Modal Select Server */}
          <Box name="Modal_Select_Server">
            <Modal isOpen={this.state.VisibileModalSelectServer}>
              <Modal.Content
                maxWidth="400px"
                onClose={() => {
                  this.FuncCloseModalSelectServer();
                }}
              >
                <Modal.Header>
                  <Text>Please select the desired server</Text>
                </Modal.Header>
                <Modal.Body>
                  <Radio.Group
                    value={this.state.ValueRadio}
                    onChange={(Value) => {
                      this.FuncSetValueRadio(Value);
                    }}
                  >
                    <Box
                      name="Select_Server_Internal"
                      style={styles.box_select_server_internal}
                    >
                      <Radio
                        value="SelectServerInternal"
                        style={styles.radio_select_server_internal}
                      >
                        Server Internal
                      </Radio>

                      <Select
                        minWidth="100%"
                        placeholder="Select Server"
                        isDisabled={this.state.StateSelectServerInternal}
                      >
                        <Select.Item
                          label="Google Public DNS"
                          value="Google Public DNS"
                        />
                        <Select.Item
                          label="Cloudflare 1.1.1.1 DNS"
                          value="Cloudflare 1.1.1.1 DNS"
                        />
                        <Select.Item
                          label="Quad9 Secure DNS"
                          value="Quad9 Secure DNS"
                        />
                        <Select.Item
                          label="CleanBrowsing Security Filter"
                          value="CleanBrowsing Security Filter"
                        />
                        <Select.Item
                          label="Foundation For Applied Privacy"
                          value="Foundation For Applied Privacy"
                        />
                        <Select.Item label="PowerDNS" value="PowerDNS" />
                        <Select.Item label="DNS.SB" value="DNS.SB" />
                        <Select.Item
                          label="Internet Initiative Japan"
                          value="Internet Initiative Japan"
                        />
                        <Select.Item
                          label="TWNIC Quad101"
                          value="TWNIC Quad101"
                        />
                        <Select.Item label="NetWeaver" value="NetWeaver" />
                        <Select.Item label="FAELIX" value="FAELIX" />
                        <Select.Item
                          label="Andrews & Arnold"
                          value="Andrews & Arnold"
                        />
                        <Select.Item
                          label="421 Association"
                          value="421 Association"
                        />
                        <Select.Item
                          label="Digitale Gesellschaft"
                          value="Digitale Gesellschaft"
                        />
                        <Select.Item label="Snopyta" value="Snopyta" />
                      </Select>
                      <Text
                        style={styles.text_select_server_internal}
                        opacity={this.state.OpacityTextServerInternal}
                      >
                        Visit the{" "}
                        <Link
                          href="https://google.com"
                          opacity={this.state.OpacityTextServerInternal}
                        >
                          this website
                        </Link>{" "}
                        to review the privacy policy and all applicable terms of
                        service
                      </Text>
                    </Box>

                    <Box
                      name="Select_Server_Custom"
                      style={styles.box_select_server_custom}
                    >
                      <Radio
                        value="SelectServerCustom"
                        style={styles.radio_select_server_custom}
                      >
                        Server Custom
                      </Radio>
                      <Input
                        minWidth="100%"
                        placeholder="https://..."
                        isDisabled={this.state.StateSelectServerCustom}
                      />
                      <Text
                        style={styles.text_select_server_custom}
                        opacity={this.state.OpacityTextServerCustom}
                      >
                        The custom server must be a valid web address
                      </Text>
                    </Box>
                  </Radio.Group>
                </Modal.Body>
                <Modal.Footer borderTopWidth={2} borderTopColor="#aaa">
                  <Button.Group variant="ghost">
                    <Button
                      onPress={() => {
                        this.FuncCloseModalSelectServer();
                      }}
                    >
                      No
                    </Button>
                    <Button
                      onPress={() => {
                        this.FuncCloseModalSelectServer();
                      }}
                    >
                      Confirmation
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Box>
          {/* End Section Modal Select Server */}

          {/* Start Section Modal App Incompatible */}
          <Box name="Modal_App_Incompatible">
            <Modal isOpen={this.state.VisibileModalAppIncompatible}>
              <Modal.Content
                maxWidth="400px"
                onClose={() => {
                  this.FuncCloseModalAppIncompatible();
                }}
              >
                <Modal.Header>
                  <Text>
                    Check programs that are not compatible with Dns Modifier
                  </Text>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer borderTopWidth={2} borderTopColor="#aaa">
                  <Button.Group variant="ghost">
                    <Button
                      onPress={() => {
                        this.FuncCloseModalAppIncompatible();
                      }}
                    >
                      No
                    </Button>
                    <Button
                      onPress={() => {
                        this.FuncCloseModalAppIncompatible();
                      }}
                    >
                      Confirmation
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Box>
          {/* End Section Modal App Incompatible */}
          {/* End Section Modal */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////// End Section Class
