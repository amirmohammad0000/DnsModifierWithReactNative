////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./Css/CssMain";
import {
  NativeBaseProvider,
  ScrollView,
  Button,
  Link,
  Heading,
  Switch,
  Box,
  Text,
} from "native-base";
import { Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons";
////////////////////////////////////////////////////////////////////////////////// End Section Import

////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Main extends React.Component {
  // Start Section State
  state = {
    PositionMenu: "100%",
    StateDnsModifier: false,
    TextStateDnsModifier: "Off",
    TextConnect: "Your connection is down",
    TypeLock: "Not encrypted",
    CurrentDnsServer: "Anonymous server",
  };
  // End Section State

  // Start Section Functions
  FuncOpenMenu() {
    this.setState({
      PositionMenu: "40%",
    });
  }

  FuncCloseMenu() {
    this.setState({
      PositionMenu: "100%",
    });
  }

  FuncPageMain() {
    this.props.navigation.replace("Main");
  }

  FuncPageSetting() {
    this.props.navigation.navigate("Settings");
  }

  FuncOnOffApp() {
    if (this.state.StateDnsModifier === false) {
      this.setState({
        StateDnsModifier: true,
        TextStateDnsModifier: "On",
        TextConnect: "Your connection is connected",
      });
    } else {
      this.setState({
        StateDnsModifier: false,
        TextStateDnsModifier: "Off",
        TextConnect: "Your connection is down",
      });
    }
  }
  // End Section Functions

  // Start Section Render
  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.FuncCloseMenu();
          }}
        >
          <Box name="App" style={styles.app}>
            {/* Start Section Header */}
            <Box name="Header" style={styles.header}>
              <Box name="Icon_Header">
                <Entypo
                  name="menu"
                  style={styles.icon_menu}
                  onPress={() => {
                    this.FuncOpenMenu();
                  }}
                />
              </Box>

              <Box name="Box_Text_Header">
                <Text style={styles.text_header}>DnsModifier</Text>
              </Box>
            </Box>
            {/* End Section Header */}

            <ScrollView>
              {/* Start Section Content */}
              <Box name="Content" style={styles.content}>
                <Box name="Box_Button_On_Off" style={styles.box_button_on_off}>
                  <Box name="Box_Switch" style={styles.box_switch}>
                    <Switch
                      size="lg"
                      onChange={() => {
                        this.FuncOnOffApp();
                      }}
                    />
                    <Heading style={styles.text_state_on_off}>
                      {this.state.TextStateDnsModifier}
                    </Heading>
                  </Box>

                  <Text style={styles.text_connect}>
                    {this.state.TextConnect}
                  </Text>
                </Box>

                <Box name="Box_Open_Google" style={styles.box_open_google}>
                  <Link
                    href="https://google.com"
                    style={styles.button_open_google}
                  >
                    <Text style={styles.text_button_open_google}>
                      Open Google
                    </Text>
                  </Link>

                  <Button
                    style={styles.button_change_server_dns}
                    onPress={() => {
                      this.FuncPageSetting();
                    }}
                  >
                    <Text style={styles.text_button_change_server_dns}>
                      Change Server DNS
                    </Text>
                  </Button>
                </Box>
              </Box>
              {/* End Section Content */}

              {/* Start Section Footer */}
              <Box name="Box_Footer" style={styles.footer}>
                <Box>
                  <Text style={styles.text_system_details}>System details</Text>
                </Box>

                <Box
                  name="Box_All_System_Details"
                  style={styles.box_all_system_details}
                >
                  <Box
                    name="Box_System_Details"
                    style={styles.box_system_details}
                  >
                    <AntDesign name="unlock" style={styles.icon_unlock} />
                    <Text style={styles.text_type_lock_header}>
                      {this.state.TypeLock}
                    </Text>
                    <Text style={styles.text_type_lock}>Default transfer</Text>
                  </Box>

                  <Box
                    name="Box_System_Details"
                    style={styles.box_system_details}
                  >
                    <FontAwesome5 name="server" style={styles.icon_server} />
                    <Text style={styles.text_current_dns_server_header}>
                      ({this.state.CurrentDnsServer})
                    </Text>
                    <Text style={styles.text_current_dns_server}>
                      Current dns server
                    </Text>
                  </Box>
                </Box>
              </Box>
              {/* End Section Footer */}
              {/* End Section Content */}
            </ScrollView>
          </Box>
        </TouchableOpacity>

        {/* Start Section Menu */}
        <Box name="Menu" style={styles.menu} right={this.state.PositionMenu}>
          <TouchableOpacity
            style={styles.button_pages}
            onPress={() => {
              this.FuncPageMain();
            }}
          >
            <Text style={styles.text_button_page}>Page Main</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_pages}
            onPress={() => {
              this.FuncPageSetting();
            }}
          >
            <Text style={styles.text_button_page}>Setting</Text>
          </TouchableOpacity>
        </Box>
        {/* End Section Menu */}
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
  // End Section Render
}
////////////////////////////////////////////////////////////////////////////////// End Section Class
