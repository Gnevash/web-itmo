//1
$(document).ready( function(){
  disabler();
});

$('.letter a').css({
	"color":"red",
	"textDecoration":"none"
});
$('p.text').css({
	"color":"#A34AAA", 
	"margin":"10px"
});
$('.text a').css("fontWeight", "bold");
$('p.letter').css("color", "#A34AFF");

function disabler(){
	$('.form input:enabled, select:enabled').attr("disabled","");
}

//2
$('a').prepend("<span class='arrow'>↗</span>"); //prepend - добавить в начало
$('a').each(function(){										// Сохраняем исходные значения аттрибута target
	$(this).attr("target_backup", $(this).attr("target"))
});

$('a').attr("target", "_blank"); //target отвечает за открытие страниц

$("a[href^='http://']").each( function(){
	this.href = this.href.replace('http://', 'https://');	// Замена http на https для всех ссылок, 
});															// у которых в начале href есть http

var $input = $('<input type="button" onclick="back()" value="Отмена" style="float:right" />');
    $input.prependTo($("body"));	// Добавляем HTML элемент в начало body

function back(){
	$("span.arrow").remove();
	
	$('a').each(function(){
		$(this).attr("target", $(this).attr("target_backup")) // Возвращаем исходные значения аттрибута target
	});
}

//3
$("#button1").click(function(){
    $("#panel").slideDown("slow");
});

$("#button2").click(function(){
	$("#img1").fadeIn("slow");
});

$("#button3").click(function(){
    $("td a").toggle();
});

$("#button4").click(function(){
    $("#animated").animate({left: '400px'})
});

$("#button5").click(function(){
    $("td input[type='text']").fadeTo(1000, 0.3);
});

//4
$("#button6").click(function(){
    $("#some").load("https://inxaoc.github.io/example/ajax-1.html");
});


function toList(obj) {
	var stringList = "";
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
        	stringList += '<ul>';
        	stringList += prop;
        	stringList += toList(value);
        	stringList += '</ul>';
        }
        else {
			stringList += '<li>';
        	stringList += prop;
        	stringList += ': ';
        	stringList += value;
        	stringList += '</li>';
        }
    }
    return stringList
}


$("#button7").click(function(){
		$.getJSON('https://inxaoc.github.io/example/ajax.json', function(object) {
		var string = "";
		string = toList(object);
		//$("#some2").empty();
		$("#some2").append(string);
		});
});


