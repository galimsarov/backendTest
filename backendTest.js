const { v4: uuidv4 } = require("uuid")
let express = require("express")
let app = express()
let store = []

app.use(express.json())
app.get("/:uuid", function (req, res) {
  let entry = store.find((el) => el.uuid == req.params.uuid)
  if (entry) res.send(entry)
  else res.status(400).send(`Отсутствует элемент с uuid = ${req.params.uuid}`)
})

app.get("/", function (req, res) {
    res.send(store)
})

app.post("/", function (req, res) {
  let body = req.body
  let entry = {
    uuid: uuidv4(),
    firstName: body.firstName,
    secondName: body.secondName,
  }

  store.push(entry)
  res.send(entry)
})

app.put("/:uuid", function (req, res) {
  let entry = store.find((el) => el.uuid == req.params.uuid)
  if (entry) {
    entry.firstName = req.body.firstName
    entry.secondName = req.body.secondName
    res.send(entry)
  } else res.status(400).send(`Отсутствует элемент с uuid = ${req.params.uuid}`)
})

app.delete("/:uuid", function (req, res) {
  store = store.filter((el) => el.uuid != req.params.uuid)
  res.send("Элемент успешно удалён")
})

app.listen(3123)
