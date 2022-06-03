////////////////////////////////////////////////////////////////////////////////// Start Section Import
import { StyleSheet } from "react-native";
////////////////////////////////////////////////////////////////////////////////// End Section Import

////////////////////////////////////////////////////////////////////////////////// Start Section Style
const styles = StyleSheet.create({
  // Start Style App
  app: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2a2a2a",
  },
  // Start Style App

  // Start Style Header
  header: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: "#2a2a2a",
  },

  text_header: {
    color: "#fff",
    fontSize: 22,
  },

  icon_menu: {
    fontSize: 40,
    color: "#fff",
  },
  // End Style Header

  // Start Style Content
  button_select_server: {
    padding: 10,
  },

  text_header_select_server: {
    color: "#ddd",
    fontSize: 25,
    marginBottom: 5,
  },

  text_select_server: {
    color: "#ddd",
    fontSize: 15,
  },

  button_app_incompatible: {
    padding: 10,
  },

  text_header_incompatible_app: {
    color: "#ddd",
    fontSize: 25,
    marginBottom: 5,
  },

  text_incompatible_app: {
    color: "#ddd",
    fontSize: 15,
  },
  // End Style Content

  // Start Style Modal
  box_select_server_internal: {
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  radio_select_server_internal: {
    width: "100%",
    height: 50,
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
  },

  text_select_server_internal: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },

  box_select_server_custom: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  radio_select_server_custom: {
    width: "100%",
    height: 50,
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
  },

  text_select_server_custom: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },
  // End Style Modal
});
////////////////////////////////////////////////////////////////////////////////// End Section Style
export { styles };
