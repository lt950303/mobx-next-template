import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { Button, Modal } from "antd";

function Test(props) {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};
	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
    <div style={{border: '1px solid red'}}>
      <h1> 测试组件</h1>
			<p>Test-component :{props.UserStore.user.name}</p>
			<Button type="primary" onClick={showModal}>
				打开弹窗
			</Button>
			<Modal
				title="Basic Modal"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	);
}

export default inject("UserStore")(observer(Test));
