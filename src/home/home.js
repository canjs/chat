import Component from "can-component";
import CanMap from "can-map";
import "can-map-define";
import template from "./home.stache!";

// Styles
import "bootstrap/less/bootstrap.less!";
import "../styles.less!";
import "bit-tabs/unstyled";
import "./home.less!";

export const ViewModel = CanMap.extend({});

export default Component.extend({
  tag: "chat-home",
  view: template,
  viewModel: ViewModel
});
