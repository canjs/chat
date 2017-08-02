import CanMap from "can-map";
import route from "can-route";
import can from "can";
import template from "./main.stache!";
import "can-map-define";

// Import components
import "./home/";
import "./messages/";

const AppViewModel = CanMap.extend({
  define: {
    page: {
      type: "string"
    }
  }
});

const appState = new AppViewModel();

route(":page", { page: "home" });
route.map(appState);
route.ready();

can.$("body").append(template(appState));
