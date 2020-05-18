"use strict"


function popUp() {
	den();
	nail();
	murad();
}


function den(){
	denOn();
	denOff();
}

function nail(){
	nailOn();
	nailOff();
}

function murad(){
	muradOn();
	muradOff();
}

function muradOn() {
	let murad = document.getElementById("murad");

	murad.onclick =	muradDone;
}

function muradOff() {
	let cross = document.getElementById("cross");

	cross.onclick =	muradBack;
}

function muradDone(){
	let muradPop = document.getElementById("muradpop");

	muradPop.classList.add("active");
}

function muradBack(){
	let muradPop = document.getElementById("muradpop");

	muradPop.classList.remove("active");
}

function denOn() {
	let den = document.getElementById("den");

	den.onclick = denDone;
}

function denOff() {
	let cross = document.getElementById("cross3");

	cross.onclick =	denBack;
}

function denDone(){
	let denPop = document.getElementById("denpop");

	denPop.classList.add("active");
}

function denBack(){
	let denPop = document.getElementById("denpop");

	denPop.classList.remove("active");
}

function nailOn() {
	let nail = document.getElementById("nail");

	nail.onclick = nailDone;
}

function nailOff() {
	let cross = document.getElementById("cross2");

	cross.onclick =	nailBack;
}

function nailDone(){
	let nailPop = document.getElementById("nailpop");

	nailPop.classList.add("active");
}

function nailBack(){
	let nailPop = document.getElementById("nailpop");

	nailPop.classList.remove("active");
}

popUp();