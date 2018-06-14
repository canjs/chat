import CanList from "can-list";
import CanMap from "can-map";
import superMap from "can-connect/can/super-map/";
import tag from "can-connect/can/tag/";
import "can-map-define";
import io from "steal-socket.io";
import canAjax from "can-ajax";

export const Message = CanMap.extend({
  define: {}
});

Message.List = CanList.extend({
  Map: Message
}, {});

export const messageConnection = superMap({
  url: "https://chat.donejs.com/api/messages",
  idProp: "id",
  Map: Message,
  List: Message.List,
  name: "message"
});

messageConnection.ajax = canAjax;

tag("message-model", messageConnection);

const socket = io("https://chat.donejs.com");

socket.on("messages created",
  message => messageConnection.createInstance(message));
socket.on("messages updated",
  message => messageConnection.updateInstance(message));
socket.on("messages removed",
  message => messageConnection.destroyInstance(message));

export default Message;
