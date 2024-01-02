function seeMore(e) {
  e.innerHTML = `<div class="spinner-border spinner-border-sm" role="status">
<span class="visually-hidden">Loading...</span>
</div> <span>Loading...</span>`;
  setTimeout(() => {
    e.innerHTML = `See More`;
    alert("Tidak ada data lagi!");
  }, 4000);
}

function alertBuy(name) {
  alert(`maat produk ${name} belum tersedia!`);
}
// Dom Ready
$(document).ready(function () {
  var isMouseDown = false,
    startX,
    scrollLeft;
  dragXcontainer("mainMenu");
  dragXcontainer("populerGames");
  // Get the container element
  function dragXcontainer(className) {
    var container = $("." + className);

    // Add event listeners
    container.on("mousedown", function (e) {
      isMouseDown = true;
      startX = e.pageX - container.offset().left;
      scrollLeft = container.scrollLeft();
    });

    container.on("mouseleave", function () {
      isMouseDown = false;
    });

    container.on("mouseup", function () {
      isMouseDown = false;
    });

    container.on("mousemove", function (e) {
      if (!isMouseDown) return;
      var x = e.pageX - container.offset().left;
      var walk = (x - startX) * 1; // Adjust the scrolling speed if needed
      container.scrollLeft(scrollLeft - walk);
    });
  }
});
