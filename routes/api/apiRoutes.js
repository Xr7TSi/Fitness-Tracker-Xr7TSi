const Workout = require("./models/workout")


app.post("/api/workouts",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});