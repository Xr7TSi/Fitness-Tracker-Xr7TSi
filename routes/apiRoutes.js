const router = require("express").Router();
const Workout = require("../models/Workout.js");



module.exports = router;


router.get("/api/workouts", (req, res) => {
  Workout.find({}, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id",({body,params},res)=>{   
  Workout.findByIdAndUpdate(  
   params.id,
   {$push:{exercises:body} },
   {new: true,runValidators:true }
  )
  .then(data => res.json(data))
  .catch(err => { 
      res.json(err)
      console.log(err)
  })
});

router.get("/api/workouts/range",function(req,res){  
  Workout.find()
  .then(data =>{  
      res.json(data)
  })
  .catch(err => { 
      res.json(err)
  })
});

// 
// db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])




