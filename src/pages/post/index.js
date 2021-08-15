import '../home/index.scss';
import { navbarHandler } from '../../lib/navbarHandler.js';
import axios from 'axios';
import { loadPost } from '../../lib/titlePage.js';


window.addEventListener('DOMContentLoaded', () => {

    navbarHandler()

    const postColumn = document.querySelectorAll('.postColumn');

    let i = 0;


    axios.get('/api/posts/' + loadPost()).then(response => {
        const result = response.data;
        

        document.querySelector('#postImage').src = result.image;
        document.querySelector('#description').innerHTML = result.description;
        document.querySelector('#title').innerHTML = result.title;
        document.title = 'My Blog | '+result.title;

    });

    axios.get('/api/posts?perPage=3&page=1').then(response => {
        const results = response.data.results;

        results.forEach(postdata => {

            const postBox = ` 
            <div class="postBox" id="${postdata.id}">
                <div class="imgbx">
                    <img src="${postdata.image}"  class="cover">
                </div>
                <div class="textbx">
                    <h3>${postdata.title}</h3>
                    <a href="/post?id=${postdata.id}&title=${postdata.title}" class="btn">Read More</a>
                </div>
            </div>
    `       
           
            postColumn[i].innerHTML = postBox;
            i++;

        });
    })
});