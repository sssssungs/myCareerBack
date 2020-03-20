const projectModel = require('../../../db/model/project')

exports.getAllPortfolio = (req, res) => {
  projectModel.find((err, data) => {
    console.log('>>>>>>> get port')
    return res.json(data);
  });
  
}


