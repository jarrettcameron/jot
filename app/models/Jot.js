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
        <div class="ps-4 row align-content-center justify-content-around">
          <div class="col">
            <h4><span class="border-bottom border-5" style="border-color: ${this.color} !important;">${this.name}</span></h4>
          </div>
          <div class="col-xl-2 col-3 text-end">
            <button class="btn fs-4 float-end" onclick="app.JotsController.selectActive('${this.name}')">EDIT</button>
          </div>
          <div class="col-xl-2 col-3 text-end">
            <button class="btn fs-4 text-danger float-end">DELETE</button>
          </div>
        </div>
      </div>`
    }
}