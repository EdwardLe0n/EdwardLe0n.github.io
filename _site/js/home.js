$(document).ready(function(){

    loadTopProjects();
    
    $('.nav-element').on('click', function(){

        let nav_to = $(this).id;

        console.log(nav_to);
        console.log('Clicked on a nav element');

    });

});

function loadTopProjects() {

    console.log('trying to do the thing!');

    loadProject(
        'assets/projects/chaos/chaos-gameplay-square.png',
        'Cutting Up Chaos In-Game Screenshot',
        'Cutting Up Chaos was a rogue-like deck builder in players were tasked with defeating enemies through any means! Even cutting up their own cards and attching them to others to win!'
    );

    loadProject(
        'assets/projects/turbecs/TurbECS-Logo.png',
        'TurbECS Icon',
        'TurbECS is the Turbo Entity Component System (framework), that lets developers make custom components and systems, yet still rely on the flexibility Turbo has!'
    );

}

function loadProject(img, img_alt, text) {

    let html = '';

    html += '<div class="single-project">';
    html += '<img src="' + img + '" alt="' + img_alt + '">';
    html += '<p>' + text + '</p>';
    html += '</div>';

    $('#top-project-list').append(html);

}