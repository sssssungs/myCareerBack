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
    rtn.sort();
    rtn.map(o => {
      if(cnt[o]) cnt[o] +=1;
      else cnt[o] = 1;
    })
    // console.log(cnt)
    // rtn = Array.from(new Set(rtn));
    return res.json(cnt);
  });
}

exports.deleteProject = (req, res) => {
  // console.log(req.body)
  projectModel.deleteOne({ _id: req.body.id }, (err, data) => {
    console.log("delete project")
    // console.log(">>>>> delete execute")
    return res.json(data)
  })
}

exports.saveNewProject = (req, res) => {
  let project = new projectModel();
  project.title = req.body.title;
  project.category = req.body.category;
  project.fromDate = req.body.fromDate;
  project.toDate = req.body.toDate;
  project.role = req.body.role;
  project.content = req.body.content;
  project.skills = req.body.skills.replace(/\s/g, "").split(",").filter(o => o.length > 0);
  // console.log(project)
  project.save((err, data) => {
    console.log("new project save !");
    return res.json(data);
  })

}



exports.updateProject = (req, res) => {
  // console.log(">>>>>>>---->>>", req.body)
  projectModel.findOneAndUpdate(
    { _id: req.body._id },
    { 
      title: req.body.title, 
      content: req.body.content,
      category: req.body.category,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      role: req.body.role,
      skills: req.body.skills
     },
     (err, data) => {
      console.log(data)
      console.log(err)
      console.log(">>>>> update execute")
      return res.json(data)
  })
}