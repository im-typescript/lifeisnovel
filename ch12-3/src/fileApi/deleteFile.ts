import * as fs from "fs";
import {fileExists} from "./fileExists";

export const deleteFile = (filename: string) : Promise<string> => new Promise<any>(async(resolve, reject) => {
	const alreadyExist = await fileExists(filename);
	!alreadyExist ? resolve(filename) : fs.unlink(filename, (error) => error ? reject(error) : resolve(filename));
})