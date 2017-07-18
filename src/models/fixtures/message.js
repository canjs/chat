import fixture from "can-fixture";

const store = fixture.store([{
  id: 0,
  description: "First item"
}, {
  id: 1,
  description: "Second item"
}]);

fixture({
  "GET https://chat.donejs.com/api/messages": store.findAll,
  "GET https://chat.donejs.com/api/messages/{id}": store.findOne,
  "POST https://chat.donejs.com/api/messages": store.create,
  "PUT https://chat.donejs.com/api/messages/{id}": store.update,
  "DELETE https://chat.donejs.com/api/messages/{id}": store.destroy
});

export default store;
