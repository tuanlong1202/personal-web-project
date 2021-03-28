const strTitle = "Flatiron - Amazon Web Development class";
const strBottom = "Brooklyn, New York";
const arrMenus = [] ;
const arrContents = [];
const head = document.getElementById("head");
const body = document.getElementById("body");
const bottom = document.getElementById("bottom");

//
// Set Content
//

// Menu
arrMenus[0] = "Home";
arrMenus[1] = "Welcome";
arrMenus[2] = "Welcome to HTML";
arrMenus[3] = "About This Course";
// Web Content
arrContents[0] = `<h2>Hello everyone</h2>
<p>My name is Tuan Long Ly, and this is my draft project for first stage of Web Development class, it look simple and contents are draft, I simple borrow it from Flatiron Canvas , hope you guy ok with this.</p>
<p>It's a show off a little bit things I got from this class.<p>
<p>Hope everyone enjoy<p>
<p>Best regards!</p>`;
arrContents[1] = `<h2>Welcome</h2><p>Welcome to Flatiron School! We're thrilled that you've joined our community of learners!

The following content is designed for people who are passionate, curious, self-driven, and serious about learning. We are comrades in a never-ending quest for knowledge. While there are no shortcuts, we believe that by providing knowledge in an optimized order, reinforcing knowledge with hands-on, feedback driven practice, and providing space for discussion, you will learn quickly. Our goal is to provide the right materials, support and structure you need to discover your own love for code.</p>

<h2>Learning to Write Code</h2>
<p>This is the beginning of our Software Engineering course, where you will go through everything from the basics of coding to building full-stack React web applications.

So, where do we start? How do we know what is necessary to understand first? In this course, we're going to start with a simple idea - programming is like having a conversation, and just like learning to talk, we need to start by learning a few words and practicing them.

Many people on joining Flatrion School have already spent some time dabbling with coding by using the amazing and plentiful resources all around the internet. In developing the content here, though, we make no assumptions. This content is designed for absolute beginners. Lessons build off each other, providing the tools and concepts necessary to complete future lessons.

What we don't do, however, is dumb anything down. We believe in your infinite capacity to learn. We do our best to offer a curriculum that is clear, digestible, engaging, challenging, and deep. The curriculum you'll encounter on here is rigorous and will demand that you be patient and resourceful.</p>

<h2>The Flatiron Community</h2>
<p>We don't believe in learning alone. As you make progress, expect to bump into other learners just like you, ready and willing to help each other succeed. Together, we can go further than we could ever go alone. We expect everyone here to be friendly, respectful, helpful, and nice.</p>

<h2>Conclusion</h2>
<p>The first part of this course will focus getting you set up for the course. Then, we will introduce some fundamental programming concepts. As you progress, you'll start to use the tools on your personal computer to build projects and test your knowledge. You're just getting started, and we're glad you're here.</p>

<p>Happy Learning!</p>`;
arrContents[2] = `<h2>Welcome to HTML</h2>

Welcome to the HTML Basics unit!

<h2>Preview</h2>
<p>In the next few lessons, we'll be introducing you to HTML (HyperText Markup Language).

HTML is a documentation-based technology. The word documentation probably inspires a mental image of someone carrying heaps of papers, folders, files. But what is a document in the digital realm?

We'll start our exploration of HTML by thinking about files and learning the vocabulary technologists use to discuss them in the process of creating HTML documents. This will assist your searches for help and your ability to interact with professionals on the topic.

We'll then proceed to a collaborative lab where you'll be guided in editing a simple HTML document. The point here is not to memorize the full detail of HTML's vocabulary, but to experience the joy and excitement of being able to adjust and customize HTML.

After that, we'll learn a core set of HTML features that will enable you to create simple HTML documents with less-explicit guidance. Around this time, you'll then begin tying these discoveries together and will start creating your first HTML documents.</p>
<img src='https://curriculum-content.s3.amazonaws.com/html-basics/welcome-to-html/Image_48_HTMLBannerGraphic.png' />
<h2>Repetition & Getting Stuck</h2>
<p>In the lessons ahead, many of the ideas are deliberately repeated. You might not get "attributes" the first time you see them, but, after some hands-on experience, they'll make sense the second time you see them.</p>

<h2>Beyond</h2>
<p>At the close of the unit, you'll be ready to learn a series of HTML expressions that will allow you to create a meaningful web page.</p>`;
arrContents[3] = `<h2>About this course.</h2>
<p>This is the beginning of Flatiron School's Software Engineering and Web Development Courses. Before we dive into the core topics of these courses, we need to cover some fundamental topics and make sure you are fully equipped for success.</p>

<p>First, we need to get your computer (your local environment) set up for writing and running code in JavaScript and Ruby. You'll be running code via a terminal on your computer, so we'll also go through the basics of the command-line interface.</p>

<p>After this, we'll introduce Git, GitHub and the concept of version control, essential for storing your prograrmming work in this course and beyond.</p>

<p>With these topics covered, we will dive into the technologies behind every modern website - HTML, CSS and JavaScript. These three are best understood in conjunction, so the goal is to introduce just enough of each that you will be able to use them together. When you can, you'll have all the skills needed to build a website entirely from scratch.</p>

<p>At the end, your final task is to do just that - build and publish your own website!</p>`;

//
// Build content
//

// Main Title
const h1 = document.createElement("h1");
h1.className = "main_title";
h1.textContent = strTitle ;
head.appendChild(h1);
// Menu
// Build menu click function
function mnuClick () {
    var refInt = this.href.substring(this.href.indexOf('#'));
    intI = parseInt(refInt.replace('#',''));
    if (intI >= 0 && intI < arrMenus.length){
        body.innerHTML = arrContents[intI];
    }
}
// Make menu
const nav = document.createElement("div");
nav.className = "nav";
const navA = [];
for(let i = 0; i < arrMenus.length; i++){
    navA[i] = document.createElement("a");
    navA[i].href = `#${i}`;
    navA[i].textContent = arrMenus[i];
    nav.appendChild(navA[i]);
}
head.appendChild(nav);
// Event listener for every menu items
for (let i = 0; i < navA.length; i++) {
    navA[i].addEventListener('click',mnuClick) ;
}
// Bottom
bottom.innerHTML = strBottom;

//
// Initialize
//
body.innerHTML = arrContents[0];