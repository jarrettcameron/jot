import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jots = [
    new Jot({
      name: "HTML",
      body: "Test",
      color: 'yellow'
    })
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())