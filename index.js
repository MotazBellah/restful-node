const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())


app.get('/tshirt', function (req, res) {
  res.status(200).json({
      message: "OK"
  })
})

app.post('/tshirt/:id', function (req, res) {
    const { id } = req.params
    const { logo } = req.body

    if (!logo) {
        res.status(418).json({
            message: "need logo"
        })
    }

    res.status(201).json({
        message: `your ${logo} and ID of ${id}`
    })
   
  })

app.listen(PORT, () => console.log(`it's live on port ${PORT}`))