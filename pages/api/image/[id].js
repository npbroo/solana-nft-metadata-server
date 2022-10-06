import fs from 'fs'
import path from 'path'

const ImageServer = async(req, res) => {
  
  // THE ID YOU ASKED IN THE URL
  const token_id = req.query.id;
  const total_tokens = 3
  
  if(parseInt(token_id) <= total_tokens && token_id > 0 ) { 
    //res.statusCode = 200
    const filePath = path.resolve('.', `database/images/${token_id}.png`)
    const imageBuffer = fs.readFileSync(filePath)   
    res.setHeader('Content-Type', 'image/png')
    res.send(imageBuffer)
  } else {
    res.statuscode = 404
    res.json({error: "The token id is out of range"})
  }
}

export default ImageServer