const items = document.querySelectorAll('.student-item');

let numberPerPage = 10;

/***************** 
PAGE DISPLAY FUNCTION
********************/

const list = document.querySelectorAll(".student-item");

function pageDisplay(page) {
   var start = (page*10)-10;
   var end = page*10;
   for (var i = 0; i < list.length; i++) {
       if (i >= start && i < end) {
         list[i].style.display = "block";
       } else {
         list[i].style.display = "none";
      }
   }

   }


/*********************** 
  APPEND PAGE FUNCTION
**********************/
function appendPageLinks(list1) {
   pageDisplay(1);
   pageButton = document.createElement('div');
   pageButton.classList.add('pagination');
   newUL = document.createElement('ul');
   pageButton.appendChild(newUL);
   document.getElementById('list').insertAdjacentElement('afterend', pageButton);

   const studentList = document.querySelectorAll(".student-item");
   let count = 1;
   for (var i = 0; i < studentList.length; i++) {
         if ((i-1) % 10 == 0) {
            pageButton = document.createElement('li');
            pageButtonLink = document.createElement('a');
            pageButton1Text = document.createTextNode(count);
            pageButtonLink.appendChild(pageButton1Text);
            pageButton.appendChild(pageButtonLink);
            document.getElementsByClassName('pagination')[0].firstElementChild.appendChild(pageButton);
            count++;
          //  console.log(i);
         }
   }

}


window.onload = appendPageLinks();

/* ******************
Remove Active Class Fxn for Event Listener
******************** */

function removeActive() {
   var numberedLinks = document.getElementsByTagName('a');
   for (var i = 0; i < numberedLinks.length; i++) {
      numberedLinks[i].classList.remove('active');
   }
}

/* ******************
EVENT LISTENER FOR PAGES
******************** */

var numLinks = document.getElementsByTagName('a');

for (var i = 0; i < numLinks.length; i++) {
let counter = i+1;
document.getElementsByTagName('a')[i].addEventListener("click", (e) => {
   pageDisplay(counter);
   removeActive();
   event.target.classList.add("active");
}
);
}


/* *************************
CREATE SEARCH BAR
*************************** */

var pageHeader = document.getElementsByClassName('page-header')[0]
var searchDiv = document.createElement('div');
searchDiv.classList.add('student-search');
var searchInput = document.createElement('input');
searchInput.setAttribute("placeholder", "Search for students...");
searchDiv.appendChild(searchInput);
var searchButton = document.createElement('button');
searchButton.innerHTML = "Search";
searchDiv.appendChild(searchButton);
pageHeader.appendChild(searchDiv);

 
/* **********
AUTOCOMPLETE SEARCH
************** */

const searchBar = document.getElementsByTagName("input")[0];
var students = document.getElementsByClassName('student-item');
var searchClick = document.getElementsByTagName('button')[0];

searchClick.addEventListener('onclick', myFunction);
searchBar.addEventListener('keyup', myFunction);

function myFunction() {
    searchBar.value = searchBar.value.toLowerCase();
    var mySearch = searchBar.value;
    console.log(mySearch);
    // var tally = 0;
    for (var i = 0; i < students.length; i += 1) {
        var title = students[i].innerHTML.toLowerCase();
        console.log(title);
        if (title.includes(mySearch)) {
       //  tally++;
         students[i].style.display = "";
         } else {
         students[i].style.display = "none";
          }      
         // if (tally == 0) {
        //     alert('no results');
      //    }
}
}
;

/*Pro Tip: 
Each LI element should contain an A element with an href attribute of #, 
and text set to the page number each link will show. First link is 1. 
Second link is 2. And so on.*/

