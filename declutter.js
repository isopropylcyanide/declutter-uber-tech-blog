window.onload = removeStickyHeader;

function removeStickyHeader() {
  // Remove the sticky
  document.querySelectorAll(".site-header").forEach(el => el.remove());
  
  // Remove the sidebar
  document.querySelectorAll(".td-pb-span4.td-main-sidebar").forEach(el => el.remove());
  
  // Center the main content
  document.querySelectorAll('.td-pb-span8.td-main-content').forEach(el => el.style.marginLeft = "17%");
};
