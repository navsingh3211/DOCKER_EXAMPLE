
import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
    res.json({
        message: "Healthy server"
    })
})

app.post("/", async (req, res) => {
    await client.user.create({
        data: {
            username: req.body.username,
            password: req.body.password
        }
    })

    res.json({
        message: "Done signing up!"
    })
})

app.listen(3000);