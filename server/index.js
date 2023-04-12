require("dotenv").config()

const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const userRouter = require("./routes/user.routes")


const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(cookieParser())
app.use(cors()) //взаимодействие с сервером из браузера


app.use('/api', userRouter)

const start = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`server working on port = ${PORT}`)
		})
	} catch (err) {
		console.log(err)
	}
}

app.get("/", (req, res) => {
	res.send("Welcome!!!!")
})

start()
