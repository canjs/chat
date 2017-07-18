import $ from 'jquery';
import Map from "can/map/";
import route from "can/route/";
import template from "./main.stache!";
import 'can/map/define/';

import "bootstrap/less/bootstrap.less!";
import "./styles.less!";
import "./home/";
import "./messages/";

const AppViewModel = Map.extend({
  define: {
    page: {
      type: 'string'
    }
  }
});

const appState = new AppViewModel();

route(':page', { page: 'home' });
route.map(appState);
route.ready();

$("body").append(template(appState));
