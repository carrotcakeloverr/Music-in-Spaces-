document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle-badge");
  
  circles.forEach(circle => {
    circle.addEventListener("click", () => {
      const columnGroup = circle.closest(".column-card-group");
      const contentCard = columnGroup.querySelector(".content-card");
      
      // Toggles the text card between hidden and visible when clicked
      if (contentCard.style.display === "none" || contentCard.style.display === "") {
        contentCard.style.display = "block";
      } else {
        contentCard.style.display = "none";
      }
    });
  });
});
