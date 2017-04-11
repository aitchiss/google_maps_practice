var initialize = function(){
  var center = {lat: 56.114073, lng: -3.791896}
  var container = document.querySelector('#main-map')
  var mainMap = new MapWrapper(container, center, 14)
  var infoWindow = mainMap.getInfoWindow("<p>Alloa is a beautiful, and yet awful, town in the heart of Clackmannanshire</p>")

  mainMap.addMarker(center, infoWindow)
  mainMap.addClickEvent()
}


window.onload = initialize