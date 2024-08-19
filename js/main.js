


function openTab(evt, modernTab) {
    // Hide all tab content and remove active class
    document
      .querySelectorAll(".tabcontent")
      .forEach((tab) => (tab.style.display = "none"));
    document
      .querySelectorAll(".tablinks")
      .forEach((link) => link.classList.remove("active"));

    // Show the selected tab content and set the clicked tab as active
    document.getElementById(modernTab).style.display = "block";
    evt.currentTarget.classList.add("active");
  }

  // Open the default tab on page load
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("defaultOpen").click();
  });