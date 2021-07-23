import axios from 'axios';
import './index.scss';
import { navbarHandler } from '../../lib/navbarHandler';

window.addEventListener('DOMContentLoaded', () => {
    navbarHandler();
    const postColumn = document.body.querySelectorAll('.postColumn');


    let pageNum = 1;
    const postMore = document.body.querySelector('#postMore');
    postMore.addEventListener('click',
        () => {
            if (pageNum) {
                loadPost();
            }
            else {
                postColumn.forEach(column => {
                    let nodes = column.children;
                    while (nodes.length > 2) {
                        nodes[nodes.length - 1].remove();
                        nodes = column.children;
                    }
                });
                postMore.innerHTML="load more";
                pageNum = 2;
                open('#post','_self');
            }


        });

    function loadPost() {

        axios.get('/api/posts?perPage=6&page=' + pageNum)
            .then(response => { 
                const results = response.data.results;
                const next = response.data.next;
                let i = 0;




                // hide button
                if (next == null) {
                    // postMore.style.visibility = "hidden";
                    pageNum = null;
                    postMore.innerHTML="hide posts";

                } else {
                    pageNum++;
                }



                results.forEach(postdata => {

                    const postBox = ` 
                <div class="postBox" id="${postdata.id}">
                    <div class="imgbx">
                        <img src="${postdata.image}" class="cover">
                    </div>
                    <div class="textbx">
                        <h3>${postdata.title}</h3>
                        <a href="post" class="btn">Read More</a>
                    </div>
                </div>
        `

                    postColumn[i].innerHTML += postBox;
                    if (i < 2) {
                        i++;
                    } else {
                        i = 0;
                    }


                });

            });
    };
    loadPost();

});




