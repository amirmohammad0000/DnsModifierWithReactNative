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
  // End Style App

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

  // Start Style Menu
  menu: {
    position: "absolute",
    width: "60%",
    height: "100%",
    backgroundColor: "#3a3a3a",
  },

  button_pages: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  text_button_page: {
    color: "#fff",
    fontSize: 20,
  },
  // End Style Menu

  // Start Style Content
  content: {
    width: "100%",
    height: 600,
  },

  box_button_on_off: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 40,
  },

  box_switch: {
    flexDirection: "row-reverse",
  },

  text_state_on_off: {
    color: "#ddd",
  },

  text_connect: {
    color: "#ddd",
    fontSize: 18,
  },

  box_open_google: {
    width: "100%",
    height: 120,
  },

  button_open_google: {
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    borderRadius: 1000,
    marginRight: "5%",
    marginLeft: "5%",
    marginBottom: "5%",
  },

  text_button_open_google: {
    color: "#2a2a2a",
    fontSize: 22,
  },

  button_change_server_dns: {
    width: "60%",
    height: 50,
    borderRadius: 20,
    marginRight: "20%",
    marginLeft: "20%",
  },

  text_button_change_server_dns: {
    color: "#ddd",
    fontSize: 22,
  },
  // End Style Content

  // Start Style Footer
  footer: {
    width: "100%",
    height: 300,
    borderTopColor: "#aaa",
    borderTopWidth: 2,
    padding: 5,
  },

  text_system_details: {
    color: "#ddd",
    fontSize: 22,
    marginBottom: 40,
  },

  box_all_system_details: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },

  box_system_details: {
    width: "46%",
    height: "60%",
    padding: 10,
    margin: "2%",
    borderRadius: 10,
    backgroundColor: "#353535",
  },

  icon_unlock: {
    fontSize: 28,
    color: "#d1731b",
  },

  text_type_lock_header: {
    fontSize: 22,
    color: "#fff",
    marginTop: 40,
  },

  text_type_lock: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 4,
  },

  icon_server: {
    fontSize: 28,
    color: "#d1731b",
  },

  text_current_dns_server_header: {
    fontSize: 22,
    color: "#fff",
    marginTop: 40,
  },

  text_current_dns_server: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 4,
  },
  // End Style Footer
});
////////////////////////////////////////////////////////////////////////////////// End Section Style
export { styles };
