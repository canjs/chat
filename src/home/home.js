import Component from "can/component/component";
import Map from "can/map/map";
import "can/map/define/define";
import template from "./home.stache!";

// Styles
import "bootstrap/less/bootstrap.less!";
import "../styles.less!";
import "bit-tabs/unstyled";
import "./home.less!";

export const ViewModel = Map.extend({});

export default Component.extend({
  tag: "chat-home",
  template: template,
  viewModel: ViewModel
});
