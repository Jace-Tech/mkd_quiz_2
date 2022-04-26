import fs from "fs"
import express from "express"
import csv from "csv-parser"

export const getAllAirports = async (req, res) => {
    const data = []

    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => data.push(data))
    .on('end', () => {
        res.status(200).json({data})
    });
}