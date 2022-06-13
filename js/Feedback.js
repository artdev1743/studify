//author: Wenyuan Yu
window.onload = function () {
  var bnt = document.getElementById('form-button');
  $('.error').hide();
  bnt.onclick = function () {
    var content = $('input#fullname').val();
    if (content == '') {
      $('input#fullname').focus();
      $('.error').show();
    } else {
      $('.error').hide();
      window.location.href = '#';
    }
  };
};
