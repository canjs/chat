import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './home.less!';
import template from './home.stache!';

import 'bit-tabs/unstyled';

export const ViewModel = Map.extend({});

export default Component.extend({
  tag: 'chat-home',
  template: template,
  viewModel: ViewModel
});
