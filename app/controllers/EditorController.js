import { AppState } from "../AppState.js"
import { jotsService } from "../services/JotsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class EditorController {
    constructor() {
        this.drawEditor()
    }

    drawEditor() {
        if (AppState.activeJot == null) {
            window.location.href = '#'
            return
        }

        const bodyElm = document.querySelector('#body')
        bodyElm.setAttribute('onblur', 'app.EditorController.exitJot()')
        setHTML('jot-head', AppState.activeJot.editorHead)
        setText('body', AppState.activeJot.body)
    }

    exitJot() {
        const bodyElm = document.querySelector('#body')
        // @ts-ignore
        AppState.activeJot.body = bodyElm.value
        AppState.activeJot.updatedAt = new Date()
        jotsService.saveJots()
        this.drawEditor()
        Pop.success('Saved your work!')
    }

    exitEditor() {
        // @ts-ignore
        AppState.activeJot.body = document.querySelector('#body').value
        AppState.activeJot.updatedAt = new Date()
        jotsService.saveJots()
        window.location.href = '#'
    }
}