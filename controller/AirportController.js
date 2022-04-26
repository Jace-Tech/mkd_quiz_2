import fs from "fs"
import path from "path"
import csv from "csv-parser"

export const getAllAirports = async (req, res) => {
    const result = []
    
    const filePath = path.resolve(process.cwd(), "utils", "airports.csv")

    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => result.push(data))
    .on('end', () => {
        res.status(200).json({result})
    });
}