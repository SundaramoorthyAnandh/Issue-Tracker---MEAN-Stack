
const express = require ("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");
var sortJsonArray = require('sort-json-array');


const Issue = require ("./models/issue");

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongo DB connection established succesfully");
})


router.route('/issues').get((req,res) => {
   Issue.find((err, issues) =>{
       if(err){
           console.log(err);
       }
       else{
           res.json(issues);
       }
   })
});

router.route('/fetchIMval').get((req,res) => {
    Issue.find((err, issues) =>{
        if(err){
            console.log(err);
        }
        else{
            let titleArray = [];
            issues.forEach((issue)=>{
                titleArray.push(issue.title); // get only the titles of each issue and convert it as Array
            });
            titleArray.sort(); // sort to Ascending

            titleArray.reverse(); // reverse it to make it descending

            let lastIM = titleArray[0].toString().slice(2);
            // fetch zeroth array element which is the highest IM and convert to string ;
            // then for eg. "IM1234", slicing it from 2nd position to end of string resulted in "1234"

            lastIM = parseInt(lastIM) + 1; // convert the number as string to number itself and increment it by 1

            lastIM = lastIM.toString().padStart(4,"0");
            lastIM = "IM"+lastIM;
            // min length is 4, so adding trailing zeros before the number by making it string
            let imJSON = {'im': lastIM} ;
            console.log(imJSON["im"]);
            res.json( imJSON ); // send as JSON resp with concatenating with "IM"

        }
    })
});

router.route('/issues/add').post((req,res) => {
    let issue = new Issue(req.body);
    console.log(issue);
    issue.save()
        .then( issue => {
            res.status(200).json({ 'issue': 'Added Successfully' })
        })
        .catch(err => {
            res.status(400).send("failed to create incident");
        })
});

router.route('/issues/:title').get((req, res) => {
    Issue.findOne({ 'title': req.params.title }, (err, issue) =>{
        if(err){
            console.log(err);
        }
        else{
            res.json(issue);
        }
    })
});

router.route('/issues/update/:title').post((req, res) => {
    console.log(req.body);
    Issue.findOneAndUpdate({ 'title': req.params.title }, req.body, { new: true },
        // the callback function
        (err, issue) => {
            // Handle any possible database errors
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(issue);
            }
        });
    
    // Issue.findOne({ 'title': req.params.title }, (err, issue) =>{
    //     if (!issue)
    //         return next(new Error('Could not load the Incident from DB',err));
    //     else {
    //         issue.title = req.body.title;
    //         issue.responsible = req .body.responsible;
    //         issue.description = req.body.description;
    //         issue.severity = req.body.severity;
    //         issue.status = req.body.status;
    //         // issue = JSON.stringify(issue);
    //         console.log("ISSUE\n:",issue);
    //         issue.save()
    //             .then( () => {
    //             res.json("Updated the Incident");
    //         })
    //             .catch(err => {
    //             console.log(err);
    //             res.status(400).send("Update Failed");
    //         });
    //     }


    // });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({ _id: req.params.id }, (err, issue) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        else {
            res.json("Removed the Incident Successfully")
        }
    })
});

app.use('/', router);

app.listen(4000, ()=>{
    console.log('Express Server Running at http://localhost:4000');
})