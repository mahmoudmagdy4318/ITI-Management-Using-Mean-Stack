let express = require("express"),
  DepartmentRouter = express.Router(),
  path = require("path"),
  mongoose = require("mongoose");

DepartmentRouter.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("../Models/DepartmentModel");
require("../Models/StudentModel");

let departmentSchema = mongoose.model("Departments");
let studentSchema = mongoose.model("Students");

DepartmentRouter.get("/add", (request, response) => {
  departmentSchema.find({}, (error, result) => {
    response.render("departments/adddepertment");
    //response.send(result);
  });
});
DepartmentRouter.get("/edit/:id", (request, response) => {
  departmentSchema.findOne(
    { _id: Number(request.params.id) },
    (error, result) => {
      response.render("departments/editDepartment", { dept: result });
    }
  );
});
DepartmentRouter.get("/delete/:id", (request, response) => {
  departmentSchema.deleteOne({ _id: Number(request.params.id) }, (error) => {
    if (!error) response.send({ data: "deleted" });
    else response.send(error);
    // response.redirect("/departments/list");
  });
});

DepartmentRouter.post("/edit/:id", (request, response) => {
  departmentSchema.updateOne(
    { _id: Number(request.params.id) },
    {
      $set: {
        Name: request.body.Name,
      },
    },
    (error) => {
      if (!error) {
        departmentSchema.findOne(
          { _id: Number(request.params.id) },
          (err, result) => {
            if (!err) response.send(result);
            else response.send(err);
          }
        );
        // response.redirect("/departments/list");
      } else {
        response.send(error);
      }
    }
  );
});
DepartmentRouter.post("/add", (request, response) => {
  let dept = new departmentSchema({
    _id: Number(request.body._id),
    Name: request.body.Name,
  });

  console.log(request.body);

  dept.save((error) => {
    if (!error) {
      departmentSchema.findOne({ _id: request.body._id }, (error, result) => {
        response.send(result);
      });
    } else {
      console.log(error);
      response.send(error);
    }
    //response.redirect("/departments/list");
  });
});
DepartmentRouter.get("/list", (request, response) => {
  // eventSchema.find({},(error,result)=>{
  //     response.render("events/eventslist",{events:result});

  departmentSchema.find({}, (error, result) => {
    response.send(result);
    //response.render("Departments/departmentList",{depts:result});
  });
});

DepartmentRouter.get("/details/:id", (req, response) => {
  departmentSchema
    .findOne({ _id: Number(req.params.id) })
    .then((res) => {
      response.send(res);
    })
    .catch((err) => console.log("" + err));
});

module.exports = DepartmentRouter;
