import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { Pop } from "../utils/Pop.js"
import { loadState, saveState } from "../utils/Store.js"

class JotsService {
    constructor() {

    }

    createJot(data) {
        let jot = new Jot(data)
        AppState.jots.push(jot)
        AppState.activeJot = jot
        return jot
    }

    saveJots() {
        saveState('jots', AppState.jots)
    }

    loadJots() {
        const jots = loadState('jots', [Jot])
        AppState.jots = jots
    }

    selectActive(name) {
        AppState.activeJot = AppState.jots.find(jot => jot.name == name)
    }

    destroyJot(name) {
        const index = AppState.jots.findIndex(x => x.name == name)
        AppState.jots.splice(index, 1)
        this.saveJots()
    }
}

export const jotsService = new JotsService()