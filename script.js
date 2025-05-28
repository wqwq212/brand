document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("문의가 접수되었습니다! 감사합니다.");
});



document.getElementById("review-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("nickname").value;
  const text = document.getElementById("review").value;
  const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
  reviews.push({ name, text });
  localStorage.setItem("reviews", JSON.stringify(reviews));
  alert("감사합니다!");
  location.reload();
});

window.onload = function() {
  const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
  const reviewDiv = document.getElementById("reviews");
  reviewDiv.innerHTML = reviews.map(r => `<p><b>${r.name}</b>: ${r.text}</p>`).join("");
}
