function paragraphTimer() {
    const paragraph = document.querySelector('#text');
    paragraph.innerHTML = 
	"this paragraph appeared after 5 seconds!";
}

setTimeout(paragraphTimer, 5000);