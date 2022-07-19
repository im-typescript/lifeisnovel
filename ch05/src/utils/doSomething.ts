import {resultType} from "./resultType";

export const doSomething = (): resultType => {
	try {
		throw new Error('Some error occurs...');
	} catch(e) {
		/* FIXME e가 unknown이므로 error 발생 */
		return [false, e.message];
	}
}