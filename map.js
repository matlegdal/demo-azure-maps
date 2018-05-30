const fujitsu = [-71.306222, 46.830545];
var map = new atlas.Map("map", {
    "subscription-key": subscriptionKey,
    center: fujitsu,
    zoom: 14
});
// Logic For Zoom Out Button
var minusZoomElement = document.createElement("div");
minusZoomElement.classList.add("zoom", "font-segoeui-b");
minusZoomElement.id = "zoom-minus";
minusZoomElement.innerText = "-";
document.body.appendChild(minusZoomElement);
minusZoomElement.addEventListener("click", function () {
    var currZoom = map.getCamera().zoom;
    map.setCamera({
        zoom: currZoom - 1
    });
});