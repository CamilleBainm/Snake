document.getElementById("play").addEventListener("click", function() 
{
  window.location.href = "game.html";
}
);

document.querySelector(".exit").addEventListener("click", function()
{
	window.location.replace("https://playsnake.org/");
	window.close();//ne peux fermer que des pages ouverte par le script
}
);//hello
