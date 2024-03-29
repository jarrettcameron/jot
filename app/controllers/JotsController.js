import { AppState } from "../AppState.js"
import { jotsService } from "../services/JotsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class JotsController {

    constructor() {
        jotsService.loadJots()
        this.drawJots()
    }

    drawJots() {
        let menuContent = ''
        AppState.jots.forEach(jot => {
            menuContent += jot.selectMenuTemplate
        })
        setHTML('jot-container', menuContent == '' ? `<h5 class="text-emp mt-3 text-center">You don't have any jots!<h5>` : menuContent)
        setText('jot-count', AppState.jots.length)
    }

    selectActive(name) {
        jotsService.selectActive(name)
        window.location.href = '#/editor'
    }

    destroyJot(name) {
        let x = Pop.confirm('Confirm Deletion', "Are you sure you want to delete this jot? This action is irreversable.")
        x.finally(() => {
            x.then(xx => {
                if (xx) {
                    jotsService.destroyJot(name)
                    this.drawJots()
                }
            })
        })
    }

}