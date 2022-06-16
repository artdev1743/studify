//author: Wenyuan Yu
window.onload = function () {
  var bnt = document.getElementById('login-button');

  $('.error').hide();

  bnt.onclick = function () {
    var username = $('input#username').val();
    var password = $('input#password').val();

    var length_password = password.length;
    var counter = 0;

    if (specification(username) == false) {
      $('#username_error').html('Username must start from a letter').show();
      $('input#username').addClass('input-error');
      $('input#username').focus;
      return false;
    } else if (username_specification(username) == false) {
      $('#username_error').html('Username must only contains numbers and letters').show();
      $('input#username').addClass('input-error');
      $('input#username').focus();
      return false;
    } else if (username == '') {
      $('#username_error').html('Username cannot be empty').show();
      $('input#username').addClass('input-error');
      $('input#username').focus();
      return false;
    } else {
      $('#username_error').hide();
      $('input#username').removeClass('input-error');
      counter++;
    }

    if (length_password < 8 || length_password > 16) {
      $('#password_error').html('Password must be between 8 and 16 characters').show();
      $('input#password').addClass('input-error');
      $('input#password').focus();
      return false;
    } else if (specification(password) == false) {
      $('#password_error').html('The first character must only be letter').show();
      $('input#password').addClass('input-error');
      $('input#password').focus();
      return false;
    } else if (password_specification1(password) == false) {
      $('#password_error').html('The password must contain either ! or *').show();
      $('input#password').addClass('input-error');
      $('input#password').focus();
      return false;
    } else if (password_specification2(password) == false) {
      $('#password_error').html('The password must contain at least 1 digit').show();
      $('input#password').addClass('input-error');
      $('input#password').focus();
      return false;
    } else if (password == '') {
      $('#password_error').html('Password cannot be empty').show();
      $('input#password').addClass('input-error');
      $('input#password').focus();
      return false;
    } else {
      $('#password_error').hide();
      $('input#password').removeClass('input-error');
      counter++;
    }

    if (counter == 2) {
      window.location.href = 'LoginSuccess.html';
      return false;
    }
  };

  function specification(username) {
    var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (letter.includes(username.charAt(0))) {
      return true;
    } else {
      return false;
    }
  }

  function username_specification(username) {
    var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var s;
    var counter = 0;

    for (s of username) {
      if (letter.includes(s)) {
        counter = 0;
      } else {
        counter++;
        break;
      }
    }

    if (counter == 0) {
      return true;
    } else {
      return false;
    }
  }

  function password_specification1(password) {
    var chars = '!*';
    var s;

    for (s of password) {
      if (chars.includes(s)) {
        return true;
      }
    }

    return false;
  }

  function password_specification2(password) {
    var numbers = '0123456789';
    var s;

    for (s of numbers) {
      if (numbers.includes(s)) {
        return true;
      }
    }

    return false;
  }
};
