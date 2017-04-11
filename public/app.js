var mainMap

var initialize = function(){
  var center = {lat: 56.114073, lng: -3.791896}
  var container = document.querySelector('#main-map')
  mainMap = new MapWrapper(container, center, 14)
  var infoWindow = mainMap.getInfoWindow("<p>Alloa is a beautiful, and yet awful, town in the heart of Clackmannanshire</p>")
  var escapeButton = document.querySelector('#escape-to-bangkok')
  escapeButton.onclick = onEscapeButtonClick

  var whereAmIButton = document.querySelector('#where-am-i')
  whereAmIButton.onclick = onWhereAmIButtonClick

  mainMap.addMarker(center, infoWindow)
  mainMap.addClickEvent()
}

var onEscapeButtonClick = function(){
  
  mainMap.changeLocation({lat: 13.756331, lng: 100.501765})
}

var onWhereAmIButtonClick = function(){
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position)
    mainMap.changeLocation({lat: position.coords.latitude, lng: position.coords.longitude})
  })
}


window.onload = initialize