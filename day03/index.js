import fs from "fs";
import path from "path";
const fileStatus=async (path)=>{
    const stats = await fs.stat(path);
    console.log(stats);
}
fileStatus("day02/index2.js");