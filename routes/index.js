const express = require('express');
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const Playerdb = require("../models/Player");

var gp1=0;
var gp2=0;
var p1='X';
var p2='X';
var w1=false;
var w2=false;
var s1=false;
var s2=false;
var st1='X';
var st2='X';
var def='X';

router.get('/',function(req,res){
    res.render('index.ejs');
});

router.get('/player1',function(req,res){
    res.render('player1.ejs', {
    	gp1: gp1,
    	data: st1
    });
});


router.get('/player2',function(req,res){
    res.render('player2.ejs',{
    	gp2: gp2,
    	data: st2
    });
});

router.post('/player1',function(req,res){
    res.render('player1.ejs',{
    	gp1: gp1,
    	data: def
    }, admin1(req.body.rps));
});

router.post('/player2',function(req,res){
    res.render('player2.ejs',{
    	gp2: gp2,
    	data: def
    }, admin2(req.body.rps));
});

function admin1(d3){
	st1='X';
	st2='X';
	if(d3==="rock"){
		p1='R';
		s1=true;
		console.log("ROCK");
		checkp1();
	}
	else if(d3==="paper"){
		p1='P';
		s1=true;
		console.log("PAPER");
		checkp1();
	}
	else if(d3==="scissors"){
		p1='S';
		s1=true;
		console.log("SCISSORS");
		checkp1();
	}
	else{
		console.log("NOT VALID");
	}
}

function admin2(d3){
	st1='X';
	st2='X';
	if(d3==="rock"){
		p2='R';
		s2=true;
		console.log("ROCK");
		checkp2();
	}
	else if(d3==="paper"){
		p2='P';
		s2=true;
		console.log("PAPER");
		checkp2();
	}
	else if(d3==="scissors"){
		p2='S';
		s2=true;
		console.log("SCISSORS");
		checkp2();
	}
	else{
		console.log("NOT VALID");
	}
}

function checkp1(){
	if(s2===true){
		if(p1==='R'){
		if(p2==='R'){
			w1=false;
			p1='x';
			w2=false;
			p2='x';
			console.log("tie");
			st1='T';
			st2='T';
		}
		else if(p2==='P'){
			w1=false;
			p1='x';
			w2=false;
			p2='x';
			gp2=gp2+1;
			console.log("p1 loses");
			st1='L';
			st2='W';
		}
		else if(p2==='S'){
			w1=true;
			p1='x';
			w2=false;
			p2='x';
			gp1=gp1+1;
			console.log("p1 wins");
			st1='W';
			st2='L';
		}
	}
	else if(p1==='P'){
		if(p2==='R'){
			w1=true;
			p1='x';
			w2=false;
			p2='x';
			gp1=gp1+1;
			console.log("p1 wins");
			st1='W';
			st2='L';
		}
		else if(p2==='P'){
			w1=false;
			p1='x';
			w2=false;
			p2='x';
			console.log("tie");
			st1='T';
			st2='T';
		}
		else if(p2==='S'){
			w1=false;
			p1='x';
			w2=false;
			p2='x';
			gp2=gp2+1;
			console.log("p1 loses");
			st1='L';
			st2='W';
		}
	}
	else if(p1==='S'){
		if(p2==='R'){
			w1=false;
			p1='x';
			w2=false;
			p2='x';
			gp2=gp2+1;
			console.log("p1 loses");
			st1='L';
			st2='W';
		}
		else if(p2==='P'){
			w1=true;
			p1='x';
			w2=false;
			p2='x';
			gp1=gp1+1;
			console.log("p1 wins");
			st1='W';
			st2='L';
		}
		else if(p2==='S'){
			w1=false;
			p1='x';
			w2=false;
			p2='x';
			console.log("tie");
			st1='T';
			st2='T';
		}
	}
	console.log(gp1);
	console.log(gp2);
	}
}

function checkp2(){
	if(s1===true){
		if(p2==='R'){
		if(p1==='R'){
			w2=false;
			p2='x';
			w1=false;
			p1='x';
			console.log("tie");
			st1='T';
			st2='T';
		}
		else if(p1==='P'){
			w2=false;
			p2='x';
			w1=false;
			p1='x';
			gp1=gp1+1;
			console.log("p2 loses");
			st1='W';
			st2='L';
		}
		else if(p1==='S'){
			w2=true;
			p2='x';
			w1=false;
			p1='x';
			gp2=gp2+1;
			console.log("p2 wins");
			st1='L';
			st2='W';
		}
	}
	else if(p2==='P'){
		if(p1==='R'){
			w2=true;
			p2='x';
			w1=false;
			p1='x';
			gp2=gp2+1;
			console.log("p2 wins");
			st1='L';
			st2='W';
		}
		else if(p1==='P'){
			w2=false;
			p2='x';
			w1=false;
			p1='x';
			console.log("tie");
			st1='T';
			st2='T';
		}
		else if(p1==='S'){
			w2=false;
			p2='x';
			w1=false;
			p1='x';
			gp1=gp1+1;
			console.log("p2 loses");
			st1='W';
			st2='L';
		}
	}
	else if(p2==='S'){
		if(p1==='R'){
			w2=false;
			p2='x';
			w1=false;
			p1='x';
			gp1=gp1+1;
			console.log("p2 loses");
			st1='W';
			st2='L';
		}
		else if(p1==='P'){
			w2=true;
			p2='x';
			w1=false;
			p1='x';
			gp2=gp2+1;
			console.log("p2 wins");
			st1='L';
			st2='W';
		}
		else if(p1==='S'){
			w2=false;
			p2='x';
			w1=false;
			p1='x';
			console.log("tie");
			st1='T';
			st2='T';
		}
	}
	console.log(gp1);
	console.log(gp2);
	}
}

module.exports = router;