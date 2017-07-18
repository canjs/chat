import Component from 'can/component/';
import Map from 'can/map/';
import Message from '../models/message';
import 'can/map/define/';
import template from './messages.stache!';

// Styles
import "bootstrap/less/bootstrap.less!";
import "../styles.less!";
import './messages.less!';

export const ViewModel = Map.extend({
  send(event) {
    event.preventDefault();

    new Message({
      name: this.attr('name'),
      body: this.attr('body')
    }).save().then(msg => this.attr('body', ''));
  }
});

export default Component.extend({
  tag: 'chat-messages',
  viewModel: ViewModel,
  template
});
