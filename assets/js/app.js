const cl = console.log;


const showmodalbtn =document.getElementById("showmodalbtn");
const backdrop = document.getElementById("backdrop");
const ourModal = document.getElementById("ourModal");
const movieForm = document.getElementById("movieForm");
const moviecontainer = document.getElementById("moviecontainer")
const closebtns = [ ...document.querySelectorAll(".closebtn")];

const movieTitlecontrol = document.getElementById("movieTitle");
const imgurlcontrol = document.getElementById("imgurl");
const ratingcontrol = document.getElementById("rating");


let movieArr = [];


const templating = (cardArr) => {
        let result = ``;

        cardArr.forEach(movie => {
                result += `
                <div class="col-md-4">
			<div class="card movieCard mb-4">
				<div class="card-header">
					${movie.movieTitle}
				</div>
				<div class="card-body ">
					<img src="${movie.imgurl}" alt="">
				</div>
				<div class="card-footer">
					<button class="btn btn-primary">Edit</button>
					<button class="btn btn-danger">Delete</button>
				</div>
			</div>
		</div>
                       `
                       moviecontainer.innerHTML =result;
        })
}



closebtns.forEach(closebtn => {
        closebtn.addEventListener("click", function() {
                backdrop.classList.remove("visible")
                ourModal.classList.remove("visible")
        })

})



const showmodalHandler = () => {
       // cl("btn clicked")
        backdrop.classList.add("visible")
        ourModal.classList.add("visible")
}


const onmovieAdd = (eve) => {
        eve.preventDefault();
        let movieobj = {
                movieTitle : movieTitlecontrol.value,
                imgurl : imgurlcontrol.value,
                rating  : ratingcontrol.value
        }

        movieArr.push(movieobj);

        cl(movieArr)
        templating(movieArr)

        backdrop.classList.remove("visible")
        ourModal.classList.remove("visible")
}


showmodalbtn.addEventListener("click",showmodalHandler);
movieForm.addEventListener("submit",onmovieAdd);



























