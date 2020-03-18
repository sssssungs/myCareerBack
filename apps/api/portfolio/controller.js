const projectModel = require('../../../db/model/project')

exports.getCareer = (req, res) => {
  let project = new projectModel();
  project.title = "smartwork";
  project.fromDate = "";
  project.toDate = "";
  project.skills = ["react", "node", "java"];
  project.role = "developer";
  project.content = "smartwork 제조기술"

  project.save(err => {
    console.log('project.save실행')
  });
  
  return res.json({"data":"sss"})
}


