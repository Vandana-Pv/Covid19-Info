const express = require("express");
const router = express.Router();
const axios = require('axios');

const {getDetails} = require('../helpers/getDetails');
const {stateDetails} = require('../helpers/stateDetails');
// const {postDetails} = require('../helpers/postDetails');

// Countries Get Request 
router.get("/", async function(req, res){
    const value = await getDetails();
    res.send(value);
    // res.render('demo', {data:data})
    });

// ROUTE FOR GETTING ALL COUNTRIES DETAILS
router.get("/new", async function(req,res){
    const data = await getDetails();
    // const result = data;
    // console.log('rrrrrrrr',result)
    // res.send(data);
    res.render("countries",{data:data});
})

// ROUTE FOR GETTING STATE DETAILS
router.get("/India", async function(req,res){
    const data = await stateDetails();
    // const result = data;
    // console.log('rrrrrrrr',result)
    // res.send(result)
    res.render("India",{data:data});
})

// ROUTE FOR GETTING DISTRICT DETAILS OF EACH STATE
router.get("/State", async function(req,res){
    const data = await stateDetails();
    const result = data;
    // console.log('rrrrrrrr',result)
    // res.send(result)
    res.render("state",{data:data});
})



// Exporting router
module.exports = router;