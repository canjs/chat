import F from "funcunit";
import QUnit from "steal-qunit";

F.attach(QUnit);

QUnit.module("canjs-chat functional smoke test", {
  beforeEach() {
    F.open("../development.html");
  }
});

QUnit.test("canjs-chat main page shows up", function() {
  F("title").text("CanJS Chat", "Title is set");
});
