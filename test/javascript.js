document.getElementById('question-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from refreshing the page
  var question = document.getElementById('question').value;
  var email = "mailto:fadhilmuf.work@gmail.com?subject=Question&body=" + question;
  window.location.href = email;
});
