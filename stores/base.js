// 每个模块的store需继承本基类，来确保服务端首次渲染后的state能同步到客户端
// import { makeObservable } from 'mobx'
export default class Base {
  constructor(initState={}) {
    for (const key in initState) {
      if (initState.hasOwnProperty(key)) {
        this[key] = initState[key]
      }
    }
    // makeObservable(this)
  }

}