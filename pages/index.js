import Head from "next/head";
import styles from "/src/styles/home.module.scss";
import { inject, observer } from "mobx-react";
import Link from "next/link";
import { Component } from "react";
import Test from "/src/components/Test";
import getConfig from 'next/config'

// import "/src/styles/home.scss";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

class Home extends Component {
	render() {
		const { UserStore } = this.props;
		return (
			<div className='home'>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className='test'>
					<h1>mobx-next11-class</h1>
					<h2>{UserStore.user.name}</h2>
					<h2>{UserStore.user.age}</h2>
					<h2 className="test2">{UserStore.user.name}</h2> 
					<h2 className={styles.test2}>{UserStore.user.name}</h2> 
          <h2 className={styles.test2}><Test user={UserStore.user} /></h2>
					<h4>{ JSON.stringify(publicRuntimeConfig)}</h4>
					<h3>
						<Link href="/about">
							<a title="about">去 About 页面</a>
						</Link>
					</h3>
				</div>
			</div>
		);
	}
}

export default inject('UserStore')(observer(Home));

// export async function getServerSideProps(context) {
// 	// const isServer = typeof window === "undefined";
// 	// console.log(context.mobxStore, isServer);

// 	// 返回 props
// 	return {
// 		props: {
// 			// data,
// 		},
// 	};
// }
