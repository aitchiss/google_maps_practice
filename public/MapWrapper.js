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

    if(infoWindow){
      marker.addListener('click', function(){
        infoWindow.open(this.googleMap, marker)
      })
    }

    
  },

  addClickEvent: function(){
  
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addMarker(event.latLng)
    }.bind(this))
    
  },

  getInfoWindow: function(contentString){
    return new google.maps.InfoWindow({
      content: contentString
    })
  },

  changeLocation: function(coords){
    this.googleMap.setCenter(coords)
  }
}