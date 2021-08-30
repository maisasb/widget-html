import Widget from "./widget";

const widget = new Widget();
widget.createWidget({
  key: "tY1G4UPZ",
  customer: {
    name: "teste",
    email: "teste@teste.com"
  }
});

const app = document.querySelector("#devhook");
if (app instanceof HTMLElement) {
  app.addEventListener("some-event", function (e) {
    if (e instanceof CustomEvent) {
      console.log(e.detail);
      // you can test events emitted for context app here...
    }
  });
}
