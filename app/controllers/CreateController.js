import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class CreateController {
    constructor() {

    }

    createJot() {
        event.preventDefault()
        const formData = getFormData(event.target)
        if (AppState.jots.filter(x => x.name == formData.name).length == 0) {
            let jot = jotsService.createJot(formData)
            jotsService.saveJots()
            window.location.href = "#"
            return
        }
        Pop.error("A jot with that name already exists. Please pick a new name.")
    }

}