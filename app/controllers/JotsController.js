import { AppState } from "../AppState.js"
import { jotsService } from "../services/JotsService.js"
import { setHTML, setText } from "../utils/Writer.js"

export class JotsController {

    constructor() {
        this.drawJots()
    }

    drawJots() {
        let menuContent = ''
        AppState.jots.forEach(jot => {
            menuContent += jot.selectMenuTemplate
        })
        setHTML('jot-container', menuContent)
        setText('jot-count', AppState.jots.length)
    }

    selectActive(name) {
        jotsService.selectActive(name)
        window.location.href = '#/editor'
    }

}