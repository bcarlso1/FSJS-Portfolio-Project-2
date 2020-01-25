/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const items = document.querySelectorAll('.student-item');

let numberPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const list = document.querySelectorAll(".student-item");

function pageDisplay(page) {
   for (var i = 0; i < list.length; i++) {
       if (page == 1) {
         if (i <= 9) {
            list[i].style.display = "block";
         } else {
            list[i].style.display = "none";
         }
      }

      if (page == 2) {
         if (i <= 19  && i > 9) {
            list[i].style.display = "block";
         } else {
            list[i].style.display = "none";
         }
      }
      
      if (page == 3) {
         if (i <= 29 && i > 19) {
            list[i].style.display = "block";
         } else {
            list[i].style.display = "none";
         }
      }
      
      if (page == 4) {
         if (i <= 39 && i > 29) {
            list[i].style.display = "block";
         } else {
            list[i].style.display = "none";
         }
      }

      if (page == 5) {
         if (i <= 49 && i > 39) {
            list[i].style.display = "block";
         } else {
            list[i].style.display = "none";
         }
      }

      if (page == 6) {
         if (i <= 59 && i > 49) {
            list[i].style.display = "block";
         } else {
            list[i].style.display = "none";
         }
      }
   }

   }


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks() {
   pageDisplay(1);
   pageButton = document.createElement('div');
   pageButton.classList.add('pagination');
   newUL = document.createElement('ul');
   pageButton.appendChild(newUL);
   document.getElementById('list').insertAdjacentElement('afterend', pageButton)
   function createComponents() {
            pageButton = document.createElement('li');
            pageButtonLink = document.createElement('a');
   }
   function addComponent() {
      pageButton.appendChild(pageButtonLink);
      document.getElementsByClassName('pagination')[0].firstElementChild.appendChild(pageButton);
   }
   for (var i = 0; i < list.length; i++) {
         if (i == 1) {
            createComponents();
            pageButton1Text = document.createTextNode('1');
            pageButtonLink.appendChild(pageButton1Text);
            addComponent();
         }
         else if (i == 11) {
            createComponents();
            pageButton2Text = document.createTextNode('2');
            pageButtonLink.appendChild(pageButton2Text);
            addComponent();
         }
         else if (i == 21) {
            createComponents();
            pageButton3 = document.createElement('li');
            pageButton3Text = document.createTextNode('3')
            pageButtonLink.appendChild(pageButton3Text);
            addComponent();
         }
         else if (i == 31) {
            createComponents();
            pageButton4 = document.createElement('li');
            pageButton4Text = document.createTextNode('4');
            pageButtonLink.appendChild(pageButton4Text);
            addComponent();
         }
         else if (i == 41) {
            createComponents();
            pageButton5Text = document.createTextNode('5')
            pageButtonLink.appendChild(pageButton5Text);
            addComponent();
         }
         else if (i == 51) {
            createComponents();
            pageButton6Text = document.createTextNode('6')
            pageButtonLink.appendChild(pageButton6Text);
            addComponent();
         }
         else {
            console.log('sup');
         }
   }

}


window.onload = appendPageLinks();

function removeActive() {
   var numberedLinks = document.getElementsByTagName('a');
   for (var i = 0; i < numberedLinks.length; i++) {
      numberedLinks[i].classList.remove('active');
   }
}

/* ******************
EVENT LISTENER FOR PAGES
******************** */

document.getElementsByTagName('a')[0].addEventListener("click", (e) => {
   pageDisplay(1);
   removeActive();
   event.target.classList.add("active");
}
);
document.getElementsByTagName('a')[1].addEventListener("click", (e) => {
   pageDisplay(2);
   removeActive();
   event.target.classList.add("active");
}
);
document.getElementsByTagName('a')[2].addEventListener("click", (e) => {
   pageDisplay(3);
   removeActive();
   event.target.classList.add("active");
}
);
document.getElementsByTagName('a')[3].addEventListener("click", (e) => {
   pageDisplay(4);
   removeActive();
   event.target.classList.add("active");
}
);
document.getElementsByTagName('a')[4].addEventListener("click", (e) => {
   pageDisplay(5);
   removeActive();
   event.target.classList.add("active");
}
);
document.getElementsByTagName('a')[5].addEventListener("click", (e) => {
   pageDisplay(6);
   removeActive();
   event.target.classList.add("active");
}
);


/* *************************
CREATE SEARCH BAR
*************************** */

var pageHeader = document.getElementsByClassName('page-header')[0]
var searchDiv = document.createElement('div');
searchDiv.classList.add('student-search');
var searchInput = document.createElement('input');
//.setAttribute("type", "search");
searchInput.setAttribute('plaeholder', 'Search for students...');
searchDiv.appendChild(searchInput);
pageHeader.appendChild(searchDiv);
 // <input placeholder="Search for students...">
  //<button>Search</button>

// Create two variables to store the start index and the end index of 
/* the list items to be displayed on the given page. To make this function
 dynamic and work with a list of any length, a bit of basic math can be
  used to determine these values.
Start Index = (page parameter * items per page) - items per page
End Index = page parameter * items per page
Loop over the list parameter.
Inside the loop, display any list item with an index that is greater 
than or equal to the start index variable and less than the end index variable.


Pro Tip: You can divide list.length by the max number of items per page to f
igure out how many pages are needed, and you can use a loop that iterates 
that many times to create the correct number of LI elements.
Each LI element should contain an A element with an href attribute of #, 
and text set to the page number each link will show. First link is 1. 
Second link is 2. And so on.
*/

// Remember to delete the comments that came with this file, and replace them 
//with your own code comments.