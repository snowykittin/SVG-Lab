//Class that has game logic
class Game{
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#999966";
    normalColor = "#508199";
    gameZone = document.getElementById("gameZone");
    foundBar = new foundBar();

    constructor(){
        //make the circles
        for(var i = 0; i < 25; i++){
            //create circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            //newCirc.setAttribute("radius", 15);

            //grabs circle style class
            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);

            //randomly choose what reveal color the circle is
            if(Math.random() < .3){
                //set to be the 'looking for' color
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            }else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            //mouse events

            //on mouseover, show the hidden color of data-hidden attribute
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            });
            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";
            });


            newCirc.addEventListener("click", (event) => {
                //if the user clicked on something with the 'looking for' color
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                    //updates how many have been clicked
                this.foundCircles++;

                //update the found UI
                this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            //add the circle to the screen
            this.gameZone.appendChild(newCirc);
        }
    }
}

class foundBar{
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
};

/*let f = new foundBar();
f.setPercent(.7);*/

let g = new Game();