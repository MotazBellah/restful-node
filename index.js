const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

// static html
app.get('/html', function (req, res) {
    res.sendFile('./views/index.html', {root: __dirname })
})

app.get('/results', function (req, res) {

    axios("https://www.theguardian.com/uk-news")
    .then(response => {
        const html = response.data
        

        res.json({message: "ok"})
        
    }).catch(err => console.log(err))

  })

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