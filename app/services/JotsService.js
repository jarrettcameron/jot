import { AppState } from "../AppState.js"

class JotsService {
    constructor() {

    }

    selectActive(name) {
        AppState.activeJot = AppState.jots.find(jot => jot.name == name)
    }
}

export const jotsService = new JotsService()