import metadata from "../../../database/metadata.json";
import dotenv from 'dotenv';

dotenv.config();
if (!process.env.BASE_URL) {
  throw new Error('No base url found!');
}

const MetadataServer = async(req, res) => {
  
  // THE ID YOU ASKED IN THE URL
  const token_id = req.query.id;
  const total_tokens = 3

  res.statusCode=200
  res.json({
    "name": "Handsome Dev ",
    "symbol": "SLPPYD",
    "description": "The Handsome Dev collection Pre-reveal",
    "image": "0.png",
    "attributes": [],
    "properties": {
        "files": [
            {
                "uri": "0.png",
                "type": "image/png"
            }
        ],
        "category": "image"
    },
    "seller_fee_basis_points": 500
})
  
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
}

export default MetadataServer