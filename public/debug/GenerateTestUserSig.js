/*eslint-disable*/

const genTestUserSig = (userID) => {
	const credentials = {
		URL: "intl.cloud.tencent.com/login",
		user: "liveshopping.greece@gmail.com",
		password: "Podilato500!!",
	};

	var SDKAPPID = 40000034;

	var EXPIRETIME = 604800;

	var SECRETKEY = "d2d944eefa12203f93cac0f94df427c2ae5b6e3216ba08cb02bfbb868ae28e68";

	var generator = new window.LibGenerateTestUserSig(SDKAPPID, SECRETKEY, EXPIRETIME);
	var userSig = generator.genTestUserSig(userID);

	return {
		SDKAppID: SDKAPPID,
		userSig: userSig,
	};
};
