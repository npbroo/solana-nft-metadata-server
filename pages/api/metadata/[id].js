import metadata from "../../../database/metadata.json";
import dotenv from 'dotenv';
import path from 'path'
import fs from 'fs'

dotenv.config();
if (!process.env.BASE_URL) {
  throw new Error('No base url found!');
}

const MetadataServer = async(req, res) => {
  
  // THE ID YOU ASKED IN THE URL
  const token_id = req.query.id;
  const total_tokens = 3

  const filePath = path.resolve('.', `database/${token_id}.json`)
  const imageBuffer = fs.readFileSync(filePath)
  res.send(imageBuffer)
  //const example = await fs.readFile('./example.json');
  //return res.status(200).json({example});

  res.statusCode=200
  let j = {"name":"DeGod #1353","symbol":"DGOD","description":"A collection of 10,000 of the most degenerate gods in the universe.","seller_fee_basis_points":999,"image":"https://metadata.degods.com/g/1352-dead.png","external_url":"https://degods.com","attributes":[{"trait_type":"background","value":"Deep Ocean Blue"},{"trait_type":"skin","value":"Turquoise"},{"trait_type":"specialty","value":"None"},{"trait_type":"clothes","value":"Silk Robe"},{"trait_type":"neck","value":"None"},{"trait_type":"head","value":"Propeller Hat"},{"trait_type":"eyes","value":"Laser Eyes"},{"trait_type":"mouth","value":"None"},{"trait_type":"version","value":"DeadGod"},{"trait_type":"y00t","value":"Claimed"}],"collection":{"name":"DeGods","family":"Godplex"},"properties":{"files":[{"uri":"https://metadata.degods.com/g/1352-dead.png","type":"image/png"}],"category":"image","creators":[{"address":"AxFuniPo7RaDgPH6Gizf4GZmLQFc4M5ipckeeZfkrPNn","share":100}]}}
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(j)
  /*
  if(parseInt(token_id) <= total_tokens && token_id > 0 ) {

    const attributes = metadata[parseInt(token_id)]

    // CHECK METAPLEX METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let _metadata = {
    "name": `Handsome Dev Official #${token_id}`,
    "symbol": "SLPPYD",
    "description": "This is the OFFICIAL metadata for the Handsome Dev collection. It is a limited edition collection of the sexiest highschool portraits",
    "image": `${process.env.BASE_URL}/image/${token_id}`,
    "attributes": attributes,
    "properties": {
        "files": [
            {
                "uri": `${process.env.BASE_URL}/image/${token_id}`,
                "type": "image/png"
            }
        ]
    }
    }

    res.statusCode = 200
    res.json(_metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The token id is out of range"})
  }
  */
}

export default MetadataServer