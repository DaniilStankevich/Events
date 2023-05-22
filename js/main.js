const popup = document.querySelector("#popup")
const overlay =  document.querySelector("#overlay")

document.getElementById("myForm").addEventListener("submit", function(event) {  // необходимо для показа popup окна	
	event.preventDefault(); 
	$(".popup").addClass("show-popup");
	$(".overlay").addClass("overlay_block");	
});

$(document).ready(function() {
	$("#myForm").submit(function(event) {
	event.preventDefault(); 
																			
	let email = $("#email").val(); 										
	  console.log(email)
	  // Создаем объект данных для отправки
	  let formData = {
		email: email
};
  

// Отправка данных с помощью AJAX. Имитация отправки формы 
$.ajax({
	type: "POST",
	url: "submit.php",					
	data: formData,
	success: function(response) {
		// Показ popup окна
		$(".popup").addClass("show-popup");
		$(".overlay").addClass("block");
		},
		error: function(xhr, status, error) {
		  // Обработка ошибок
		  console.log(error);
		}
	  });
	});

	// Скрытие popup окна
	$("#close").click(function() {
	  $(".popup").removeClass("show-popup");
	  $(".overlay").removeClass("overlay_block");
	});
	$("#popup_button").click(function() {
		$(".popup").removeClass("show-popup");
		$(".overlay").removeClass("overlay_block");
	
	  });
});



  


