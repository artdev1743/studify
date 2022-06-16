const testimonials = [
  {
    icon: './img/AvatarIcons/FirstAvatar.svg',
    name: 'Lorraine Raines',
    position: 'Student',
    text: '"I was absolutely shocked to see that Studify had such bad reviews! I am 15, and I started using Studify because I wanted to learn Unity, (a game engine) and purchased 4 courses on the subject."',
  },
  {
    icon: './img/AvatarIcons/SecondAvatar.svg',
    name: 'Julia Smith',
    position: 'UI/UX Designer',
    text: '"I have been a fan of Udemy for a long time and currently have over 85 courses in my account. I find the platform user friendly and you can contact the instructors no matter how long ago the course was posted."',
  },
  {
    icon: './img/AvatarIcons/ThirdAvatar.svg',
    name: 'David Bard',
    position: 'Product Manager',
    text: '"Many of my coworkers choose to use Udemy for continuing education. I feel it has the best selection, training and curriculum vs others I have tried. Yes, the courses may be longer than others, but they\'re more detailed."',
  },
  {
    icon: './img/AvatarIcons/FourthAvatar.svg',
    name: "Sarah O'Neill",
    position: 'Frontend Developer',
    text: '"I have taken several courses (about 6 or 7) and have found the instructors to be professional and knowledgeable. The content has been engaging and cause reflection and opportunities to practice."',
  },
  {
    icon: './img/AvatarIcons/FifthAvatar.svg',
    name: 'John Doe',
    position: 'Web Developer',
    text: '"I\'ve bought three courses so far: Modern Python Bootcamp and SQL Bootcamp by Colt Steele as well as Python for Data Science and Machine learning by Jose Portilla. These 3 courses are incredibly detailed, beautifully made, and amazing for a beginner like myself."',
  },
];

let counter = 0;

const buttonLeft = document.getElementById('testimonial-left');
const buttonRight = document.getElementById('testimonial-right');

const testimonialIcon = document.getElementById('testimonial-icon');
const testimonialName = document.getElementById('testimonial-name');
const testimonialPosition = document.getElementById('testimonial-position');
const testimonialText = document.getElementById('testimonial-text');

const changeContent = function () {
  testimonialIcon.src = testimonials[counter].icon;
  testimonialName.innerText = testimonials[counter].name;
  testimonialPosition.innerText = testimonials[counter].position;
  testimonialText.innerText = testimonials[counter].text;
};

const sliderLoop = function () {
  if (counter > 4) {
    counter = 0;
  } else {
    changeContent();
    counter++;
  }
};

let slider = setInterval(sliderLoop, 10000);

const sliderForward = function () {
  clearInterval(slider);
  if (counter > 3) {
    counter = 0;
    changeContent();
  } else {
    counter++;
    changeContent();
  }
  slider = setInterval(sliderLoop, 10000);
};

const sliderBackward = function () {
  clearInterval(slider);
  if (counter < 1) {
    counter = 4;
    changeContent();
  } else {
    counter--;
    changeContent();
  }
  slider = setInterval(sliderLoop, 10000);
};

buttonRight.addEventListener('click', sliderForward);
buttonLeft.addEventListener('click', sliderBackward);
