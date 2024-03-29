import { CreateController } from "./controllers/CreateController.js";
import { EditorController } from "./controllers/EditorController.js";
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
    controllers: [EditorController],
    view: 'app/views/EditorView.html'
  },
  {
    path: '#/create',
    controllers: [CreateController],
    view: 'app/views/CreateView.html'
  }
])