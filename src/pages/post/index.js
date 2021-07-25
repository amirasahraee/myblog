import '../home/index.scss';
import {navbarHandler} from  '../../lib/navbarHandler.js';
import axios from 'axios';


window.addEventListener('DOMContentLoaded', () => {
    
    navbarHandler()
    
    const postColumn = document.querySelectorAll('.postColumn');
    const loc = location.search.replace(/\?/i,'').split('&').map(param=>param.split('=')[1]);
    let i=0;


    axios.get('/api/posts/'+loc[0]).then( response => {
        const result = response.data;

        document.querySelector('#postImage').src =result.image;
        document.querySelector('#description').innerHTML =result.description;
        document.querySelector('#title').innerHTML =result.title;
    });

    axios.get('/api/posts?perPage=3&page=1').then(response =>{
        const results = response.data.results;
        
        results.forEach( postdata => {

            const postBox = ` 
            <div class="postBox" id="${postdata.id}">
                <div class="imgbx">
                    <img src="${postdata.image}" loading="lazy" class="cover">
                </div>
                <div class="textbx">
                    <h3>${postdata.title}</h3>
                    <a href="post?id=${postdata.id}&title=${postdata.title}" class="btn">Read More</a>
                </div>
            </div>
    `
            postColumn[i].innerHTML = postBox;
            i++;

        });
    })
});