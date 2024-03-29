import { JotsController } from "./controllers/JotsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JotsController],
    view: 'app/views/MainView.html'
  },
  {
    path: '#/editor',
    controllers: [],
    view: 'app/views/EditorView.html'
  }
])