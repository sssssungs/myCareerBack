const projectModel = require('../../../db/model/project')

exports.getAllPortfolio = (req, res) => {
  projectModel.find((err, data) => {
    console.log('>>>>>>> get port');
    return res.json(data);
  });
}

exports.getHashTagSearch = (req, res) => {
  // PersonModel.find({ favouriteFoods: "sushi" }, ...);
  console.log("aaa", req.params.hashtag); 
  const hashtag = req.params.hashtag.replace(":","");
  projectModel.find({ skills: hashtag }, (err, data) => {
    console.log("hash tag search : " , hashtag);
    // console.log(data)
    return res.json(data);
  })
}

