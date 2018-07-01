
// Using .attr() to change the href attribute of link tags for stylesheet. Essentially, changing the style by switching stylesheets.

function changeThemeGray () {
  $('#switch-style').attr('href', 'styles/style-gray.css');
}

function changeThemeLight () {
  $('#switch-style').attr('href', 'styles/style.css');
}

$('#grayButton').click(changeThemeGray);
$('#whiteButton').click(changeThemeLight);



// Using .attr() to set specific attributee (in this case, class)


// function changeThemeGray () {
//   console.log ('changing to gray')
//   $('body').attr('class', 'gray-theme');
// }

// function changeThemeLight () {
//   console.log ('changing to light')
//   $('body').attr('class', 'light-theme');
// }

// $('#grayButton').click(changeThemeGray);
// $('#whiteButton').click(changeThemeLight);



// Using .addClass() and .removeClass() to add/remove body class:

// function changeThemeGray () {
//   console.log ('changing to gray')
//   $('body').removeClass('light-theme').addClass('gray-theme');
// }

// function changeThemeLight () {
//   console.log ('changing to light')
//   $('body').removeClass('gray-theme').addClass('light-theme');
// }

// $('#grayButton').click(changeThemeGray);
// $('#whiteButton').click(changeThemeLight);