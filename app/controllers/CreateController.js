import { jotsService } from "../services/JotsService.js";

export class CreateController {
    constructor() {

    }

    createJot() {

        jotsService.createJot()
    }

}