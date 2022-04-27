import TIM from "tim-js-sdk";
import TIMUploadPlugin from "tim-upload-plugin";

const options = {
	SDKAppID: 40000034,
	oversea: true,
};

const tim = TIM.create(options);
tim.setLogLevel(1);
tim.registerPlugin({ "tim-upload-plugin": TIMUploadPlugin });

export default tim;
