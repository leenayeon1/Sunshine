var express = require("express");
var app = express();
var router = express.Router();

router.get("/", function (req, res) {
  
    if (req.session.uid) {
      res.render("student_attendance_suc");
    } else {
         res.write(
           "<script type='text/javascript'>alert('Please log in');</script>"
         );
         res.write(
           "<script type='text/javascript'>location.href='/login'</script>"
         );
    }
  
});

module.exports = router;
