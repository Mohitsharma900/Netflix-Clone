"use strict" ;

/* 
* Add event on multiple elements
*/

const addEventOnElements  = function (elements , eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType,callback)
}

/**
 * here 'elements' will be something which is accessed through DOM,
 * 'eventType' are the events you give to eventlistener like 'click', 'timeUpdate', etc.
 * 'callback' will be a function which you want to execute on the event.
 */


/**
 * Toggle search box in mobile devices || small screen
*/

const searchBox = document.querySelector('[search-box]')
const searchToggler = document.querySelectorAll('[search-Toggler]');

addEventOnElements(searchToggler, 'click',()=>{
    searchBox.classList.toggle("active");
});











