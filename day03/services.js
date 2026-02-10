import fs from "fs/promises";
export const fileStatus=async (path)=>{
    try{
        const stats = await fs.stat(path);      
        console.log(stats);
    }catch(error){
        console.log("Error occurred while fetching file status:");
    }
}