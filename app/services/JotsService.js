import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"

class JotsService {
    constructor() {

    }

    saveJots() {
        saveState('jots', AppState.jots)
    }

    loadJots() {
        const jots = loadState('jots', [Jot])
        if (jots.length == 0) {
            return
        }
        AppState.jots = jots
    }

    selectActive(name) {
        AppState.activeJot = AppState.jots.find(jot => jot.name == name)
    }
}

export const jotsService = new JotsService()