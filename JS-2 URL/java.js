
var object_url = 
{
	parametr: {}
};
object_url.error = "";


var error_common = [];
var error_common_index = 0;
var error_fatal ="";

var arr_of_URL = [ 
"ht.tp:/e?x?amplecom:8aabbc0////p&ath//to/my.f.ile.html?key1=&key2=value2&key3#SomewhereInTheDocument",
"https:/www.msn.com//en-us/tv/news/the-21-most-important-political-tv-series-of-all-time-from-the-west-wing-to-the-crown-photos/ss-BB19AiIG?ocid=msedgntp&sfsdf&hh=",
"httpsvk.com",
"https:////////vk.com/im?sel=c54",
"http://example.com:80/path/to/myfile.html?key1=value1&key=value2#SomewhereInTheDocument",
"file:///C:/Users/Семестр%207/WEB/java%20—%20копия/java.html",
"file:///j/av.ry",
"https://www.e-katalog.ru/ek-list.php?katalog_=298&save_podbor_=1&minPrice_=&maxPrice_=&sc_id_=810&pr_%5B%5D=2864&pr_%5B%5D=27311&pr_%5B%5D=31509&pr_%5B%5D=3657&pr_%5B%5D=2842&pr_%5B%5D=33485&pr_%5B%5D=37660",
"https://vk.com/im?sel=1&send=heart&sign=anonymous",
"https:///////v&k.com///////im?sel=1&send=heart&sign=anonymous",
"https://ok.ru/?_erv=vaywlyirbwpynedplup",
"https://auth.huaweicloud.com/authui/login.html?service=https%3A%2F%2Fconsole-intl.huaweicloud.com%2Fcdn%2F%3Flocale%3Den-us%26cloud_route_state%3D%2Fcdn%2Foverview#/login",
"https://spb.shop.megafon.ru/mobile.html?si_sbmt=1&si_av=1&si_archVal=0&si_courier=1&si_salon=1&si_specs_2=38,4454&si_specs_2019=wdzQ4OLk3t0_e&si_specs_8164=1"
];

var x = arr_of_URL[Math.round(Math.random()*(arr_of_URL.length-1))];


document.write("URL: ",x,'<br>');
document.write('<br>');

//protocol--------------------------------------------------------
if (x.indexOf(":/")+1)
{
	var x_protocol = x.substring(0, x.indexOf(":/"));

	x = x.substring(x.indexOf(":")+1);//обрезка строки и проверка на доп слеши

	if ( ((x[0] == "/") && (x[1]=="/") && (x[2]!="/") && (x_protocol!="file") ) ||
			((x[0] == "/") && (x[1]=="/") && (x[2]=="/") && (x_protocol=="file") )) {} 
	else
	{
		error_common[error_common_index] = "Ошибка в количестве / между протоколом и доменом";
		error_common_index++;
	}


	while (x[0] == "/")
	{
	x = x.substring(x.indexOf("/")+1);
	}

}

else
{	
	error_fatal = "Невозможно определить URL, нет протокола";
	x = "";
	x_protocol="";
}

checkSymbol("Протокол",x_protocol,"&?!#$./;,");

object_url.protocol=x_protocol;
document.write("Протокол: ",x_protocol,'<br>');
//document.write("Оставшаяся часть URL ",x,'<br>');
//document.write('<br>');

//domain_full_port--------------------------------------------------------



if (x_protocol != "file")
{
	if (x.indexOf("/")+1)
	{
		var x_domain_full_port = x.substring(0,x.indexOf("/"));
		if (x_domain_full_port.indexOf(":")+1)
		{
			var x_domain_full = x_domain_full_port.substring(0, x_domain_full_port.lastIndexOf(":"));
			var x_port = x_domain_full_port.substring(x_domain_full_port.lastIndexOf(":")+1);
		}
		else
		{
			var x_domain_full = x_domain_full_port;
			var x_port ="";
		}


		x = x.substring(x.indexOf("/")+1); //обрезка строки и проверка на доп слеши
		if (x[0] == "/") 
		{
			error_common[error_common_index] = "Ошибка в количестве / между доменом и файлом";
			error_common_index++;
		}
		while (x[0] == "/")
		{
			x = x.substring(x.indexOf("/")+1);
		}

	}
	else
	{
		var x_domain_full_port = x;
		if (x_domain_full_port.indexOf(":")+1)
		{
			var x_domain_full = x_domain_full_port.substring(0, x_domain_full_port.lastIndexOf(":"));
			var x_port = x_domain_full_port.substring(x_domain_full_port.lastIndexOf(":")+1);
		}
		else
		{
			var x_domain_full = x_domain_full_port;
			var x_port ="";
		}


		x = "";
	}

	if (x_domain_full == "") 
	{
		error_common[error_common_index] ="Нет домена";
		error_common_index++;
	} 

		
}
else
{	
	var x_domain_full_port = "";
	var x_domain_full = "";
	var x_port ="";
}



if (x_domain_full.indexOf(".")+1)
{
	var x_domain =x_domain_full.substring(x_domain_full.lastIndexOf(".")+1);
	var x_domain_name=x_domain_full.substring(0,x_domain_full.lastIndexOf("."));

}
else
{
	var x_domain_name=x_domain_full;
	var x_domain="";
	if (x_protocol!="file")
	{
		error_common[error_common_index] ="Нет разделения на уровни домена";
		error_common_index++;
	}
	

}

checkSymbol("Имя домена",x_domain_name,"&?!#$;,/:");
checkSymbol("Домен",x_domain,"&?!#$;,:");
checkSymbol("Порт",x_port,"&?!#$qwertyuiop[]asdfghjkl;'zxcvbnm,./:");

object_url.domain=x_domain;
object_url.domain_name=x_domain_name;
object_url.port=x_port;

document.write("Имя домена: ",x_domain_name,'<br>');
document.write("Домен: ",x_domain,'<br>');
document.write("Порт: ",x_port,'<br>');
//document.write("Оставшаяся часть URL ",x,'<br>');
//document.write('<br>');


//path_file--------------------------------------------------------
var x_path = x;
var x_file= "";
if (x_path.indexOf("#")+1)  x_path = x_path.substring(0,x.indexOf("#"));
if (x_path.indexOf("?")+1)  x_path = x_path.substring(0,x.indexOf("?"));


if (x_path.indexOf("/")+1)  
{	
	var x_path_file_check = x_path.substring(x_path.lastIndexOf("/")+1);

	if (x_path_file_check.lastIndexOf(".")+1) 
	{	
		x_file = x_path.substring(x_path.lastIndexOf("/")+1);
		x = x.substring(x_path.length);
		x_path = x_path.substring(0,x_path.lastIndexOf("/"));

	} 
	else
	{
		x = x.substring(x_path.length);

	}

}
else
{

	var x_path_file_check = x_path;
	if (x_path_file_check.lastIndexOf(".")+1) 
	{	
		x_file = x_path;
		x_path="";
		x = x.substring(x_file.length);
	} 
	else
	{
		x = x.substring(x_path.length);

	}
}


var x_file_name = x_file.substring(0, x_file.lastIndexOf("."));
var x_file_extension = x_file.substring(x_file.lastIndexOf(".")+1);



checkSymbol("Путь: ",x_path,"&?!#$");
checkSymbol("Имя файла: ",x_file_name,"&?!#$.;:/");
checkSymbol("Расширение файла: ",x_file_extension,"&?!#$.;:/");
checkDoubleSlash("Путь: ",x_path);

object_url.path=x_path;
object_url.file_name=x_file_name;
object_url.file_extension=x_file_extension;

document.write("Путь: ",x_path,'<br>');
document.write("Имя файла: ",x_file_name,'<br>');
document.write("Расширение файла: ",x_file_extension,'<br>');
//document.write("Оставшаяся часть URL ",x,'<br>');
//document.write('<br>');

//parametrs--------------------------------------------------------

var x_parametr = x;

if (x_parametr.indexOf("#")+1)  x_parametr = x_parametr.substring(0,x.indexOf("#"));

x = x.substring(x_parametr.length);

if (x_parametr.indexOf("?")+1)
{
	if (x_parametr.indexOf("?") == 0)
	{	
		document.write("Параметры: ",'<br>');

		x_parametr = x_parametr.substring(1,x_parametr.length);
		var x_parametr_split = x_parametr.split('&');

		for (var i = 0; i < x_parametr_split.length; i++) 
		{
    	var x_parametr_split_split = x_parametr_split[i].split('=');

    	if (x_parametr_split_split[1] == undefined) {x_parametr_split_split[1]=""; }

    	if (x_parametr_split_split[1] == "")
    		{
    			error_common[error_common_index]="Неопределен параметр "+x_parametr_split_split[0];
				error_common_index++;
    		}
		object_url.parametr[x_parametr_split_split[0]] = x_parametr_split_split[1];
    	document.write(x_parametr_split_split[0]," ",x_parametr_split_split[1],'<br>');

		}

	}
	else
	{
		error_common[error_common_index]="Неправильное положение ? в параметрах";
		error_common_index++;
	}
}   


//document.write("Оставшаяся часть URL ",x,'<br>');
//document.write('<br>');

//остаток
if (x.indexOf("#")+1)  x = x.substring(x.indexOf("#")+1);

object_url.a = x;

document.write("Анкор: ",x,'<br>');
document.write('<br>');

//вывод ошибок

if (error_fatal != "")
{
	document.write("Фатальные ошибки: ",error_fatal,'<br>');
	document.write('<br>');
	object_url.error=object_url.error+" | "+error_fatal;
}


if (error_common_index !=0)
{
	document.write("Прочие ошибки: ");

	for (var i = 0; i < error_common_index; i++) 
	{
		document.write(error_common[i]," || ");
		object_url.error=object_url.error+" | "+error_common[i];
	}
	document.write('<br>');

}


//функции


function checkSymbol(name,text,symbols)
{	
	var count = 0;
	for (var i = 0; i < text.length; i++) 
		for (var j = 0; j < symbols.length; j++) 
		{
			if (text[i]==symbols[j]) 
			{
				count++;
			}
		}

	if (count)
	{
		error_common[error_common_index]=count+" лишних символов в элементе <"+name+">" ;
		error_common_index++;
	}
}

function checkDoubleSlash(name,text)
{	
	var count = 0;
	for (var i = 0; i < text.length-1; i++) 
	{
			if ((text[i]+text[i+1])=="//") 
			{
				count++;
			}
	}

	if (count)
	{
		error_common[error_common_index]="Лишний(ие) / в элементе <"+name+">" ;
		error_common_index++;
	}
}