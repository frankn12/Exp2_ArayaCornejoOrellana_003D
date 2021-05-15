function iniciarMap(){
    var coord = {lat:-33.511205889838905 ,lng: -70.75247328921532};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

