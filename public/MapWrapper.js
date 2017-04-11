var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype = {
  addMarker: function(coords, infoWindow){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })

    marker.addListener('click', function(){
      infoWindow.open(this.googleMap, marker)
    })
  },

  addClickEvent: function(){
  
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      // var coords = {
      //   lat: event.latLng.lat(),
      //   lng: event.latLng.lng()
      // }
      this.addMarker(event.latLng)
    }.bind(this))
    
  },

  getInfoWindow: function(contentString){
    // var contentString = "<p>Alloa is a beautiful, and yet awful, town in the heart of Clackmannanshire</p>"
    return new google.maps.InfoWindow({
      content: contentString
    })
  }
}