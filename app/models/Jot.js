export class Jot {
    constructor(data) {
        this.name = data.name
        this.body = data.body || ''
        this.color = data.color

        this.createdAt = data.createdAt == null ? new Date() : new Date(data.createdAt)
        this.updatedAt = data.updatedAt == null ? new Date() : new Date(data.updatedAt)
    }

    get selectMenuTemplate() {
        return `<div class="col-12">
        <div class="row align-content-center justify-content-around">
          <div class="col">
            <h4><span class="border-bottom border-5" style="border-color: ${this.color} !important;">${this.name}</span></h4>
          </div>
          <div class="col-2 text-end">
            <h4>EDIT</h4>
          </div>
          <div class="col-2 text-end">
            <h4 class="text-danger">DELETE</h4>
          </div>
        </div>
      </div>`
    }
}