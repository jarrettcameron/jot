import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jots = [
    new Jot({
      name: "HTML",
      body: "Test",
      color: '#000000'
    }),
    new Jot({
      name: "CSS",
      body: "Test",
      color: '#3663F3'
    })
  ]

  activeJot = null

}

export const AppState = createObservableProxy(new ObservableAppState())