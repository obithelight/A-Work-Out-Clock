function showTime(){

	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let session = "AM"

	h = (h > 12) ? h - 12 : h
	session = (h >= 12) ? "PM" : "AM"

	h = (h < 10) ? `0${h}` : h

	m = (m < 10) ? `0${m}` : m 

	s = (s < 10) ? `0${s}` : s 

	document.querySelector("#clock").innerHTML = `${h}:${m}:${s} ${session}`

	setTimeout(showTime, 1000)

}
showTime()



























// function showTime(){

// 	let date = new Date();
// 	let h = date.getHours();
// 	let m = date.getMinutes();
// 	let s = date.getSeconds();
// 	let session = "AM"

// 	if(h == 0){
// 		h = 12;
// 	}

// 	if(h > 12){
// 		h = h - 12
// 		session = "PM"
// 	}

// 	// if(h < 10){
// 	// 	h = `0${h}`
// 	// }

// 	// if(m < 10){
// 	// 	m = `0${m}`
// 	// }

// 	// if(s < 10){
// 	// 	s = `0${s}`
// 	// }

// 	 h = (h < 10) ? `0${h}` : h
// 	 m = (m < 10) ? `0${m}` : m 
// 	 s = (s < 10) ? `0${s}` : s

// 	document.querySelector("#digitalClock").innerHTML = `${h}:${m}:${s} ${session} `


// 	setTimeout(showTime, 1000)


// }
// showTime()
