import rimraf from "rimraf";
import {fileExists} from "./fileExists";

export const rmdir = (dirname: string): Promise<string> =>
	new Promise(async(resolve, reject) => {
		const alreadyExist = await fileExists(dirname);
		!alreadyExist ? resolve(dirname) : rimraf(dirname, error => error ? reject(error) : resolve(dirname));
	})