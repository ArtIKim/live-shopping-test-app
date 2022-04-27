/*eslint-disable*/
import LibGenerateTestUserSig from "./lib-generate-test-usersig-es.min.js";

const _SDKAPPID = 40000034;
const _SECRETKEY = "d2d944eefa12203f93cac0f94df427c2ae5b6e3216ba08cb02bfbb868ae28e68";

const genTestUserSig = (userID) => {
	const SDKAPPID = _SDKAPPID;
	const EXPIRETIME = 604800;
	const SECRETKEY = _SECRETKEY;

	const generator = new LibGenerateTestUserSig(SDKAPPID, SECRETKEY, EXPIRETIME);
	const userSig = generator.genTestUserSig(userID);
	return {
		sdkappid: SDKAPPID,
		userSig: userSig,
	};
};

export { _SDKAPPID as SDKAPPID, genTestUserSig };
