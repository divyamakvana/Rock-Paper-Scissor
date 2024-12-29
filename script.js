document.addEventListener("DOMContentLoaded", () => {
	let userScore = 0;
	let compscore = 0;
  
	const choices = document.querySelectorAll(".choice");
	const msg = document.querySelector("#msg");
	const userscorepara = document.querySelector("#user-score");
	const compscorepara = document.querySelector("#comp-score");
  
	const gencompchoice = () => {
	  let option = ["rock", "paper", "scissors"];
	  const randIdx = Math.floor(Math.random() * 3);
	  return option[randIdx];
	};
  
	const drawgame = () => {
	  console.log("Game was a draw");
	  msg.innerText = "Game was a draw!";
	  msg.style.backgroundColor = "black";
	};
  
	const showwinner = (userwin, userchoice, compchoice) => {
	  if (userwin) {
		console.log("You win!");
		userScore++;
		userscorepara.innerText = userScore;
		msg.innerText = "You win!";
		msg.style.backgroundColor = "green";
	  } else {
		console.log("You lose!");
		compscore++;
		compscorepara.innerText = compscore;
		msg.innerText = "You lost.";
		msg.style.backgroundColor = "red";
	  }
	};
  
	const playgame = (userchoice) => {
	  console.log("User choice =", userchoice);
	  const compchoice = gencompchoice();
	  console.log("Computer choice =", compchoice);
  
	  if (userchoice === compchoice) {
		drawgame();
	  } else {
		let userwin = false;
		if (userchoice === "rock") {
		  userwin = compchoice === "scissors";
		} else if (userchoice === "paper") {
		  userwin = compchoice === "rock";
		} else if (userchoice === "scissors") {
		  userwin = compchoice === "paper";
		}
		showwinner(userwin, userchoice, compchoice);
	  }
	};
  
	choices.forEach((choice) => {
	  choice.addEventListener("click", () => {
		const userchoice = choice.getAttribute("id");
		console.log("Choice was clicked:", userchoice);
		playgame(userchoice);
	  });
	});
  });
  