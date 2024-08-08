import { checkPropTypes } from "prop-types";
import React, { useState } from "react";

const Home = () => {

const [ColorGreen, setColorGreen]= useState("opacity-50")
const [ColorYellow, setColorYellow]= useState("opacity-50")
const [ColorRed, setColorRed]= useState("opacity-50")



function onGreen(){
		setColorGreen("selected3")
		setColorYellow("opacity-50")
		setColorRed("opacity-50")
}


function onYellow(){
	setColorGreen("opacity-50")
	setColorYellow("selected2")
	setColorRed("opacity-50")
}


function onRed(){
	setColorGreen("opacity-50")
	setColorYellow("opacity-50")
	setColorRed("selected1")
}

	return (
<>
<div className="container-fluid d-flex justify-content-center">
<div className="container bg-dark row py-2 " style={{width: "124px",}}>
<button type="button" className={`btn btn-danger col-12 align-self-center ${ColorRed}`} style={{width: "100px", height:"100px"}}  onClick={onRed}>
</button>
<button type="button" className={`btn btn-warning col-12 align-self-center ${ColorYellow}`} style={{width: "100px", height:"100px"}}  onClick={onYellow}>
</button>
<button type="button" className={`btn btn-success col-12 align-self-center ${ColorGreen}`} style={{width: "100px", height:"100px"}}  onClick={onGreen}>
</button>
</div>
</div>
</>
	);
};

export default Home;
