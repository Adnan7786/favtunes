// Language and Genre Button
function myAccFunc(j) {
 //Language Button
 if (j==1) {
	 
	 //hide genre dropdown if it's open
    var x = document.getElementById("allGenre");
    if (x.className.indexOf("ad-show") != -1) {
		x.className = x.className.replace(" ad-show", "");
	}
	
    //show or hide language dropdown 	
   var y = document.getElementById("allLanguage");
   if (y.className.indexOf("ad-show") == -1) {
     y.className += " ad-show";
   } else {
     y.className = y.className.replace(" ad-show", "");
   }
  
 }
 //Genre Button
 if (j==2) {
	 
	//hide language dropdown if it's open
    var x = document.getElementById("allLanguage");
    if (x.className.indexOf("ad-show") != -1) {
		x.className = x.className.replace(" ad-show", "");
	}	
    //show/hide genre dropdown 	
   var y = document.getElementById("allGenre");
   if (y.className.indexOf("ad-show") == -1) {
     y.className += " ad-show";
   } else {
     y.className = y.className.replace(" ad-show", "");
   }
  
 }
}

// Open and close sidebar
function ad_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function ad_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}



//Song Class Definition
class Song{
	constructor(n,a,l,g){
		this.name = n;
		this.artist= a;
		this.language= l;
		this.genre= g;
		this.srce= "allSongs/" + this.name + ".mp3";
		this.lrc="lyrics/" + this.name + ".txt";
	}
}

//array of all songs
var songs=[];
function initialiseSongs(){
	//all Songs object pushed to song list
     
	
	songs.push(new Song("12 Saal",["Bilal Saeed"],"Punjabi",["Pop"]));	
	//A
	songs.push(new Song("Allahu Allah",["Sami Yusuf"],"Arabic",["Sufi"]));
	songs.push(new Song("Amplifier",["Imran Khan"],"Punjabi",["Pop"]));
	songs.push(new Song("Ashq Na Ho",["Arijit Singh"],"Hindi",["Bollywood"]));
	songs.push(new Song("Aye Khuda",["Mithoon","Kshitij Tarey","Saim"],"Hindi",["Pop"]));
	//B
	songs.push(new Song("Beautiful",["Akon"],"English",["Pop"]));
	songs.push(new Song("Bella Ciao",["Manu Pilas"],"Italian",["Folk"]));
	songs.push(new Song("Bewafa",["Imran Khan"],"Punjabi",["Pop"]));
	songs.push(new Song("Bhar Do Jholi Meri",["Adnan Sami"],"Hindi",["Sufi","Bollywood"]));
	songs.push(new Song("Birthday Bash",["Yo Yo Honey Singh","Alfaaz"],"Hindi",["Bollywood","Hip Hop"]));
	songs.push(new Song("Breathless",["Shankar Mahadevan"],"Hindi",["Pop"]));
	songs.push(new Song("Brown Rang",["Honey Singh"],"Punjabi",["Hip Hop"]));
	songs.push(new Song("Budapest",["George Ezra"],"English",["Pop"]));

	//C
	songs.push(new Song("Con Altura",["Rosalia","J Balvin","El Guincho"],"Spanish",["Hip Hop"]));

	//D
	songs.push(new Song("Dangerous",["Kardinall Offishall", "Akon"],"English",["Hip Hop"]));
	songs.push(new Song("Das Dae",["Mohit Chauhan","Jaidev Kumar"],"Punjabi",["Pop"]));
	songs.push(new Song("Despacito",["Luis Fonsi","Daddy Yankee"],"Spanish",["Hip Hop"]));
	songs.push(new Song("Dope Shope",["Yo Yo Honey Singh"],"Punjabi",["Hip Hop"]));

	//E

	//F

	//G
	songs.push(new Song("Give Me Some Sunshine",["Suraj Jagan", "Sharman Joshi"],"Hindi",["Bollywood"]));

	//H
	songs.push(new Song("Ham Madine Mein",["Waheed Zafar Qasmi"],"Hindi",["Sufi"]));
	songs.push(new Song("House of Gold",["Twenty one Pilots"],"English",["Pop","Folk Rock"]));

	//I

	//J
	songs.push(new Song("Jee Le Zara",["Vishal Dadlani"],"Hindi",["Pop"]));

	//K
	songs.push(new Song("Kun Faya Kun",["A.R Rahman", "Javed Ali","Mohit Chauhan"],"Hindi",["Bollywood","Sufi"]));

	//L
	songs.push(new Song("Lab Pe Aati Hai Dua",["Siza Roy"],"Hindi",["Pop"]));
	songs.push(new Song("Laden",["Jassi Gill"],"Punjabi",["Pop"]));
	songs.push(new Song("Let Her Go",["Passenger"],"English",["Folk Rock"]));
	songs.push(new Song("Lo Maan Liya",["Arijit Singh"],"Hindi",["Bollywood"]));
	songs.push(new Song("Lose Yourself",["Eminem"],"English",["Hip Hop"]));

	//M
	songs.push(new Song("Main Dhoondne Ko",["Arijit Singh"],"Hindi",["Bollywood"]));
	songs.push(new Song("Mia",["Bad Bunny","Drake"],"Spanish",["Hip Hop"]));
	songs.push(new Song("Migraine",["Twenty One Pilots"],"English",["Pop"]));

	//N
	songs.push(new Song("Nada",["Chela Rivas","Tony Dark Eyes"],"Spanish",["Pop"]));
	songs.push(new Song("Nadaan Parindey",["A.R Rahman"],"Hindi",["Bollywood"]));

	//O
	songs.push(new Song("One Bottle Down",["Yo Yo Honey Singh"],"Hindi",["Bollywood","Hip Hop"]));

	//P

	//Q

	//R

	//S
	songs.push(new Song("Sigueme Y Te Siego",["Daddy Yankee"],"Spanish",["Hip Hop"]));
	songs.push(new Song("Someone You Loved",["Lewis Capaldi"],"English",["Pop"]));
	songs.push(new Song("Stressed Out",["Twenty One Pilots"],"English",["Rock","Hip Hop"]));
	songs.push(new Song("Sunflower",["Post Malone", "Swae Lee"],"English",["Pop"]));

	//T
	songs.push(new Song("Tajdar E Haram",["Atif Aslam"],"Hindi",["Sufi"]));
	songs.push(new Song("Take Me Home, Country Roads",["John Denver"],"English",["Country"]));
	songs.push(new Song("Tera Chehra",["Adnan Sami"],"Hindi",["Bollywood"]));
	songs.push(new Song("Teri Khair Mangdi",["Bilal Saeed"],"Punjabi",["Pop","Bollywood"]));
		
	//U
	songs.push(new Song("Unforgettable",["French Montana", "Swae Lee"],"English",["Hip Hop"]));

	//V


	//W
	songs.push(new Song("Whistle",["Flo Rida"],"English",["Hip Hop"]));

	//X

	//Y
	songs.push(new Song("Ya Lili",["Balti","Hamouda"],"Arabic",["Hip Hop"]));
	songs.push(new Song("Ye Kaali Kaali Aankhen",["Kumar Sanu","Anu Malik"],"Hindi",["Bollywood"]));

	//Z
	
}

function songclick(i){
		var x= document.getElementById("audio-4");
		x.src = "" +songs[i].srce;
	    	x.play();
		x.onplay = function() {random_bg_color();getRandomBackground(1,10)};
		getlyrics(i);
		loopplaylist();
}

//preload backrounds into cache
function preloadImages(array, waitForOtherResources, timeout) {
    var loaded = false, list = preloadImages.list, imgs = array.slice(0), t = timeout || 15*1000, timer;
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    if (!waitForOtherResources || document.readyState === 'complete') {
        loadNow();
    } else {
        window.addEventListener("load", function() {
            clearTimeout(timer);
            loadNow();
        });
        // in case window.addEventListener doesn't get called (sometimes some resource gets stuck)
        // then preload the images anyway after some timeout time
        timer = setTimeout(loadNow, t);
    }

function loadNow() {
        if (!loaded) {
            loaded = true;
            for (var i = 0; i < imgs.length; i++) {
                var img = new Image();
                img.onload = img.onerror = img.onabort = function() {
                    var index = list.indexOf(this);
                    if (index !== -1) {
                        // remove image from the array once it's loaded
                        // for memory consumption reasons
                        list.splice(index, 1);
                    }
                }
                list.push(img);
                img.src = imgs[i];
            }
        }
    }
}

//preloading all backgrounds to cache
function bcache(){
	preloadImages(["bg/1.jpg", "bg/2.jpg", "bg/3.jpg", "bg/4.jpg", "bg/5.jpg", "bg/6.jpg", "bg/7.jpg", "bg/8.jpg", "bg/9.jpg","bg/10.jpg"], true);
}


function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
  //document.getElementById("dJ").style.background = bgColor;
}

function update_cs(ccpi){
	cs = ccpi;
}

var pr=-1;
function getlyrics(i){
    if (pr!=-1){
	 document.getElementById(songs[pr].name).style.display = "none";
	} else {
		document.getElementById("init").style.display = "none";
	}
	pr=i;
	if (document.getElementById(songs[i].name)!=null){
	document.getElementById(songs[i].name).style.display = "block";
	} else {
		pr=-1;
		document.getElementById("init").style.display = "block";
		
	}
}

function sdesc(i){
	text= "" + songs[i].name ;
	return text;
}

function getRandomBackground(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var x= Math.floor(Math.random() * (max - min + 1)) + min;
	document.body.style.background = "url('bg/" + x + ".jpg') center top fixed no-repeat";
}



var cs; //current song playing curplaylist-index
var curplaylist;
var ccpi; // to update song index in curplaylist 
//function for loading tracks in playlist
var ccpi; // to update song index in curplaylist 
var art_list = {}; // store all artist name
var sart_list=[];
//function for loading tracks in playlist
var tc=0;
function loadtrack(){
	if (arguments[0]==1){
		curplaylist=[];
		cs=-1;
		ccpi=0;
		//all songs table
		var i;
		var text="<div class=\"ad-hide-large\" style=\"margin-top:83px\"></div><table>";
		for(i=0;i<songs.length;i++) {
			if (tc==0){
				var j;
				for(j=0;j<songs[i].artist.length;j++) {
					if (art_list[songs[i].artist[j]]==undefined){
						art_list[songs[i].artist[j]]=1;
					} else {
						art_list[songs[i].artist[j]]+=1;
					}
				}
			}
			curplaylist.push(i);
			text+="<tr><td onclick=songclick(" + i + ");update_cs(" + ccpi + ");>" + songs[i].name + "<br><small>" 
				+songs[i].artist + "</small></td></tr>";
			ccpi+=1;
		}
		text+="</table>";
		document.getElementById("playlist").innerHTML = text;
		if (tc==0){
			var x;
			for (x in art_list){
				sart_list.push(x);
			}
			sart_list.sort();
		}
		tc=1;
	}
	else if (arguments[0]==2){
		curplaylist=[];
		cs=-1;
		ccpi=0;
		//songs sorted by language
		var i;
		var text="<div class=\"ad-hide-large\" style=\"margin-top:83px\"></div><table>";
		for(i=0;i<songs.length;i++) {
			if (songs[i].language==arguments[1]){
				curplaylist.push(i);
				text+="<tr><td onclick=songclick(" + i + ");update_cs(" + ccpi + ");>" + songs[i].name + "<br><small>" 
					+songs[i].artist + "</small></td></tr>";
				ccpi+=1;
			}
		}
		text+="</table>";
		document.getElementById("playlist").innerHTML = text;
		
	}
	else if (arguments[0]==3){
		curplaylist=[];
		cs=-1;
		ccpi=0;
		var i;
		var text="<div class=\"ad-hide-large\" style=\"margin-top:83px\"></div><table>";
		for(i=0;i<songs.length;i++) {
			var j;
			for(j=0;j<songs[i].genre.length;j++) {
			if (songs[i].genre[j]==arguments[1]){
				curplaylist.push(i);
				text+="<tr><td onclick=songclick(" + i + ");update_cs(" + ccpi + ");>" + songs[i].name + "<br><small>" 
					+songs[i].artist + "</small></td></tr>";
				ccpi+=1;
			}
			}
		}
		text+="</table>";
		document.getElementById("playlist").innerHTML = text;
		
	}
	else if (arguments[0]==4){
		if (arguments.length==1){
			curplaylist=[];
			var i;
			var text="<div class=\"ad-hide-large\" style=\"margin-top:83px\"></div><table>";
			for(i=0;i<sart_list.length;i++) {
				text+="<tr><td onclick = loadtrack(4," + i + ");>" + sart_list[i] + "<br><small>" 
					+ art_list[sart_list[i]] + " songs available</small></td></tr>";
			}
			text+="</table>";
			document.getElementById("playlist").innerHTML = text;
		} else {
			curplaylist=[];
			cs=-1;
			ccpi=0;
			var i;
			var text="<div class=\"ad-hide-large\" style=\"margin-top:83px\"></div><table>";
			for(i=0;i<songs.length;i++) {
				var j;
				for(j=0;j<songs[i].artist.length;j++) {
					if (songs[i].artist[j]==sart_list[arguments[1]]){
						curplaylist.push(i);
						text+="<tr><td onclick=songclick(" + i + ");update_cs(" + ccpi + ");>" + songs[i].name + "<br><small>" 
							+songs[i].artist + "</small></td></tr>";
						ccpi+=1;
					}
				}
			}
			text+="</table>";
			document.getElementById("playlist").innerHTML = text;	
		}
	}		
	
	ad_close();
}
function loopplaylist(){
var aud = document.getElementById("audio-4");
aud.onended = function() {
    cs=(cs+1)%curplaylist.length;
    songclick(curplaylist[cs]);
};
}
