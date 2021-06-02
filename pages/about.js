import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <h1>姓名： { this.props.UserStore.user.name}</h1>
        <h1>年龄： { this.props.UserStore.user.age}</h1>
        <button onClick={() => {
          this.props.UserStore.setUser({
            name: "leeeeeeeee·leiiii&hanMeiMei",
            age: 18
          })
        }}>切换账户</button>
        <Link href='/'><a>回首页</a></Link>
      </div>
    )
  }
}

export default inject('UserStore')(observer(About))
