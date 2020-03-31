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


exports.getAllSkills = (req, res) => {
  projectModel.find({}, 'skills').exec((err, data) => {
    console.log('>>>>>>> get skill list');
    let rtn = [];
    let cnt = {};
    data.map(o => rtn.push(...o["skills"]));
    rtn.map(o => {
      if(cnt[o]) cnt[o] +=1;
      else cnt[o] = 1;
    })
    // console.log(cnt)
    // rtn = Array.from(new Set(rtn));
    return res.json(cnt);
  });
}