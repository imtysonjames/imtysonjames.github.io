// OBJECT ARRAY

const shows = [
    {
        "image": 'assets/1.jpg',
        "title": "Oprah With Meghan And Harry",
        "alt": "Oprah, Meghan and Harry sitting in garden lounge chairs"
    },
    {
        "image": 'assets/2.jpg',
        "title": "The Amazing Race Australia",
        "alt": "Australian outback in background, person in foreground wearing hat"
    },
    {
        "image": 'assets/3.jpg',
        "title": "The Cube",
        "alt": "Person at front, cube in background"
    },
    {
        "image": 'assets/4.jpg',
        "title": "MasterChef",
        "alt": "Three people with dinner plate of enticing food"
    },
    {
        "image": 'assets/5.jpg',
        "title": "Bondi Rescue",
        "alt": "Two lifeguards with Bondi Beach in background"
    },
    {
        "image": 'assets/6.jpg',
        "title": "Territory Cops",
        "alt": "Two police officers standing by road sign indicating crocs nearby"
    },
    {
        "image": 'assets/7.jpg',
        "title": "NCIS",
        "alt": "Digitally framed shots of various characters"
    },
    {
        "image": 'assets/8.jpg',
        "title": "Gogglebox",
        "alt": "A brown leather lounge with two lamps either side"
    },
    {
        "image": 'assets/9.jpg',
        "title": "Hughesy, We Have A Problem",
        "alt": "Photograph of Hughesy with show title"
    },
    {
        "image": 'assets/10.jpg',
        "title": "Nobodies",
        "alt": "Three people smiling casting a shadow on a blank, white backdrop"
    },
    {
        "image": 'assets/11.jpg',
        "title": "The Exes",
        "alt": "Five people standing together smiling and laughing"
    },
    {
        "image": 'assets/12.jpg',
        "title": "Forensic Investigators",
        "alt": "Close-up of main character with binary code in background"
    },
];

// HTTP DATA REQUEST REPLICATION TEST

// const response = {
//     data: [
//         {
//             "image": 'assets/1.jpg',
//             "title": "Oprah With Meghan And Harry",
//             "alt": "Oprah, Meghan and Harry sitting in garden lounge chairs"
//         },
//         {
//             "image": 'assets/2.jpg',
//             "title": "The Amazing Race Australia",
//             "alt": "Australian outback in background, person in foreground wearing hat"
//         },
//         {
//             "image": 'assets/3.jpg',
//             "title": "The Cube",
//             "alt": "Person at front, cube in background"
//         },
//     ],
// }

const showSection = document.getElementById('shows-gallery');

shows.forEach(element => {
    var outerDiv = document.createElement("div");
    outerDiv.className = "show";

    var imageNode = document.createElement('img');
    imageNode.alt = element.alt;
    imageNode.src = element.image;

    var headingNode = document.createElement('h2');
    headingNode.className = "show__title";
    headingNode.innerHTML = element.title;

    outerDiv.appendChild(imageNode);
    outerDiv.appendChild(headingNode);

    showSection.appendChild(outerDiv);
});