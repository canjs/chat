import can from "can";
import template from "./main.stache!";
import "can/map/define/";

// Import components
import "./home/";
import "./messages/";

const AppViewModel = can.Map.extend({
  define: {
    page: {
      type: "string"
    }
  }
});

const appState = new AppViewModel();

can.route(":page", { page: "home" });
can.route.map(appState);
can.route.ready();

can.$("body").append(template(appState));
