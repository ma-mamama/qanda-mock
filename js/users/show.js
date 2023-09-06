import {Controller, Application} from "https://cdn.skypack.dev/stimulus@2.0.0";

let app = Application.start();

app.register('show', class extends Controller {
    connect() {
      alert('HELLO WORLD')
    }
  })