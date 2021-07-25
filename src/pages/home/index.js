import axios from 'axios';
import './index.scss';
import { navbarHandler } from '../../lib/navbarHandler';

window.addEventListener('DOMContentLoaded', () => {
    navbarHandler();



    // information site

    axios.get('/api/siteInformation').then(response => {
        const aboutUsImage = response.data.aboutUsImage.image;
        const aboutUsText = response.data.aboutUsText.value;
        const bannerImage = response.data.bannerImage.image;
        const bannerText = response.data.bannerText.value;
        const bannerTitle = response.data.bannerTitle.value;
        const contactUsText = response.data.contactUsText.value;
        const lastPostsText = response.data.lastPostsText.value;

        document.getElementById('bannerImage').src = bannerImage;
        document.getElementById('bannerTitle').innerHTML = bannerTitle;
        document.getElementById('bannerText').innerHTML = bannerText;
        document.getElementById('aboutUsImage').src = aboutUsImage;
        document.getElementById('aboutUsText').innerHTML = "<p>" + aboutUsText + "</p>";
        document.getElementById('lastPostsText').innerHTML = lastPostsText;
        document.getElementById('contactUsText').innerHTML = contactUsText;



    })





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
                postMore.innerHTML = "load more";
                pageNum = 2;
                open('#post', '_self');
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
                    postMore.innerHTML = "hide posts";

                } else {
                    pageNum++;
                }



                results.forEach(postdata => {

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

    // form contact Us
    const formContactUs = document.forms['formContactUs'];


    formContactUs.addEventListener('submit',
        (event) => {
            event.preventDefault();
            const firstName = formContactUs['firstName'];
            const lastName = formContactUs['lastName'];
            const email = formContactUs['email'];
            const phone = formContactUs['phone'];
            const message = formContactUs['message'];

            if (firstName.value != '' && lastName.value != '') {
                axios.post("/api/contactUs",
                    {   firstName: firstName.value,
                        lastName: lastName.value,
                        email: email.value,
                        phone: phone.value,
                        message: message.value
                    }).then(response => {
                            formContactUs.reset();
                    });

                console.log(1);

            };
        });


    // 



});