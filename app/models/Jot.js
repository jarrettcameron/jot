export class Jot {
  constructor(data) {
    this.name = data.name
    this.body = data.body || ''
    this.color = data.color

    this.createdAt = data.createdAt == null ? new Date() : new Date(data.createdAt)
    this.updatedAt = data.updatedAt == null ? new Date() : new Date(data.updatedAt)
  }

  get selectMenuTemplate() {
    return `<div class="py-2 col-12">
        <div class="ps-4 row align-content-center justify-content-sm-around justify-content-end">
          <div class="col">
            <h4><span class="border-bottom border-5" style="border-color: ${this.color} !important;">${this.name}</span></h4>
          </div>
          <div class="col-xl-2 col-sm-3 col-5 text-end">
            <button class="btn fs-4 float-end" onclick="app.JotsController.selectActive('${this.name}')">EDIT</button>
          </div>
          <div class="col-xl-2 col-sm-3 col-5 text-end">
            <button class="btn fs-4 text-danger float-end" onclick="app.JotsController.destroyJot('${this.name}')">DELETE</button>
          </div>
        </div>
      </div>`
  }

  get editorHead() {
    return `<div class="col-12">
      <div class="row align-content-center justify-content-around">
        <div class="col">
          <h4><span class="border-bottom border-5" style="border-color: ${this.color} !important;">${this.name}</span></h4>
        </div>
        <div class="col-xl-2 col-3 text-end">
          <button class="btn fs-3 float-end" onclick="app.EditorController.exitEditor()"><i class="mdi mdi-exit-to-app"></i></button>
        </div>
      </div>
    </div>
    <p class="mt-md-0 mt-3">Created at <span class="d-md-inline d-block">${this.createdAt.toLocaleString()}</span><br>Updated at <span class="d-md-inline d-block">${this.updatedAt.toLocaleString()}</span></p>
    `
  }
}