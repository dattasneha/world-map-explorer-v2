/* 
 * Copyright (c) 2023-25 Zendalona
 * This software is licensed under the GPL-3.0 License.
 * See the LICENSE file in the root directory for more information.
  */
import { map } from "../components/map.js";
import Marker from "../components/Marker/marker.js";


export function fetchCurrentLocation() {
  if (window.Android) {
    Android.getDeviceLocation();
  } else {
    map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
  }
}

window.updateDeviceLocation = function (lat, lon) {
  map.setView([lat, lon], 16);
  if (window.marker) {
    window.map.removeLayer(window.marker);
    window.marker = new Marker(map.getCenter()).addTo(map);
   }
}