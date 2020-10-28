
document.write('<br>');
message = "Привет, как деasdasdasdла?";

document.write(message + '<br>');
document.write("Количество символов: " + message.length + '<br>');

altMessage = message.split(' ');
document.write("Количество слов: " + altMessage.length + '<br>');

var currentLocation = window.location;
document.write(currentLocation.href + '<br>');
document.write(currentLocation.protocol + '<br>');

document.write(document.URL.substring(document.URL.lastIndexOf('/')+1,document.URL.lastIndexOf('.')) + '<br>');
document.write(document.URL.substring(document.URL.lastIndexOf('.')+1,document.URL.length) + '<br>');

//var param_string = currentLocation.search.substring(1,currentLocation.search.length);

document.write('<br>');

x = "?search=sometext&page=&abc=1&abc=qwe"
var param_string = x.substring(1,x.length);
document.write(param_string + '<br>');

var param_string_split = param_string.split('&');
document.write(param_string_split + '<br>');



document.write('<br>');



var objectURL = {};

for (var i = 0; i < param_string_split.length; i++) 
{
    param_string_split_split = param_string_split[i].split('=');



    objectURL[param_string_split_split[0]] = param_string_split_split[1];

    document.write(param_string_split_split[0] + ' ');
    document.write(param_string_split_split[1] + '<br>');
}

document.write('<br>');
document.write(objectURL["page"] + '<br>');



document.write('<br>');
/*2 задание*/


x=document.getElementsByTagName("a");

y=0;
f=-1;

for (i=0;i<x.length;i++)
{
if (x[i] == "")
	{

		if (f==-1) {f=i;}
		y++;
	} 

}

document.write("Количество анкеров ", y); document.write('<br>');
document.write("Количество ссылок ", x.length-y); document.write('<br>');
document.write(x[f].innerHTML); document.write('<br>');

x=document.getElementsByTagName("img");
document.write("Количество картинок ", x.length); document.write('<br>');
document.write(x[0].width); document.write('<br>');


if (x[1].width>x[0].width) 
{
	document.write(x[1].width); document.write('<br>');
}
else
{
	document.write(x[0].width); document.write('<br>');
}


document.write(x[0].height+x[1].height); document.write('<br>');

/*Задание 3*/



x=document.getElementsByTagName("form");

for (i=0;i<x.length;i++)
{
	if (i % 2 == 1 ) {document.write(x[i].name, "<br>"); } 

}



x=document.getElementsByTagName("input")

for (i=0;i<x.length;i++)
{
if (x[i].value=="Показать имя формы:") 
	{x[i].style.backgroundImage='url("https://img.icons8.com/nolan/72/edit-image.png")';} 

if (x[i].value=="Принадлежность") 
	{x[i].style.backgroundImage='url("https://img.icons8.com/nolan/72/resize-four-directions.png")';} 

if (x[i].value=="Сбросить") 
	{x[i].style.backgroundImage='url("https://img.icons8.com/nolan/72/delete-sign.png")';} 

if (x[i].value=="Показать количество полей") 
	{x[i].style.backgroundImage='url("https://img.icons8.com/nolan/72/ruler.png")';} 

}




function terminator(myform)
{
	document.getElementById(myform).reset();
}


function ShowCount(myform)
{

y=0;
x=document.getElementById(myform).getElementsByTagName("input");

for (i=0;i<x.length;i++)
{
	if (x[i].type != "button")
	{
		y++;
	}

}
alert(y);

}



/*Задание 4*/

var arr_url = [];

for(var i=0;i<10;i++){

		let index= Math.trunc(Math.random()*1000000);
		let a = document.createElement('a');
		a.href = 'https://vk.com/id1'+index;
		
		if(index%2==1){
			a.innerHTML = 'Группа 1';
		} 

		if(index%2==0){
			a.innerHTML = 'Группа 2';
		} 
		if (index%4==0) {
			a.innerHTML = 'Группа 3';
		}
		
		arr_url[i]=a;
		document.write(arr_url[i].href," ",arr_url[i].innerHTML,'<br>');
	}


var arr_table = [[],[],[]];


arr_table[0][0]=arr_url[0].innerHTML; 
arr_table[1][0]=1;
arr_table[2][0]=arr_url[0].href; 



var arr_table_index = 0;

for(var i=1;i<10;i++){

		let flag =0;
		let arr_table_breakindex = 0;

		for (var j = 0; j <= arr_table_index; j++) {
			if (arr_table[0][j]==arr_url[i].innerHTML) 
			{
				flag=1; arr_table_breakindex=j; break; 
			}
		}

		if (flag)
		{
			arr_table[1][arr_table_breakindex]++;
			arr_table[2][arr_table_breakindex]+= ","+arr_url[i].href;
		}
		else
		{	
			arr_table_index++;
			arr_table[0][arr_table_index]=arr_url[i].innerHTML; 
			arr_table[1][arr_table_index]=1;
			arr_table[2][arr_table_index]=arr_url[i].href;
		}



	}

/*for (var i = 0; i <=arr_table_index; i++) {
	document.write(arr_table[0][i]," ",arr_table[1][i]," ",arr_table[2][i],"<br>");
}*/


let Tb = document.createElement('table');
document.body.append(Tb);
Tb.style.border= "1px solid grey";

for (var i = 0; i <=arr_table_index; i++) {

	let Tr =document.createElement('tr');
	Tb.appendChild(Tr);

	let tdName = document.createElement('td');
	tdName.innerHTML = arr_table[0][i];
	tdName.style.border= "1px solid grey";
	Tr.appendChild(tdName);


	let tdNumber = document.createElement('td');
	tdNumber.innerHTML = arr_table[1][i];
	tdNumber.style.border= "1px solid grey";
	Tr.appendChild(tdNumber);

	let tdLinks = document.createElement('td');
	tdLinks.innerHTML = arr_table[2][i];
	tdLinks.style.border= "1px solid grey";
	Tr.appendChild(tdLinks);

		

	}






