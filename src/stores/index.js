import { action, observable, computed, runInAction, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import config from './config'
const isServer = typeof window === 'undefined'

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')

let store = null
export class Store {
  constructor(initialState) {
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        this[key] = new config[key](initialState[key])
      }
    }

    // makeObservable(this)
  }
}


export function initializeStore(initialState = {}) {
  // if (isServer) {
  //   return new Store(initialState)
  // }
  // const _store = store ?? new Store(initialState)

  // return _store

  if (isServer) {
    return new Store(initialState)
  }
  if (store === null) {
    store = new Store(initialState)
  }

  return store
}

