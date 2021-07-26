
// Link to Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hcmNoaTAiLCJhIjoiY2p6dTljeDhiMGRwcjNubnl2aXI0OThhYyJ9.4FdGkBJlOXMPRugyqiXrjg';
window.map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/nmarchi0/ckqs7sp4c4m7y17q0get8doa8/draft",
  center: [39.82, -98.57],
  zoom: 4,
  maxZoom: 17.5,
  minZoom: 3,
  hash: true,
  // maxBounds: [
  //   [18.91619, -171.791110603], //sw
  //   [71.3577635769, -66.96466], //ne
  // ]
});

// Fly to location buttons
// function flyHandler(id, options) {
//   var button = document.getElementById(id);
//   if(!button) return;
//   button.addEventListener('click', function() {
//     map.flyTo({
//       center: options.center,
//       zoom: options.zoom || 10,
//       bearing: options.bearing,
//       pitch: options.pitch
//     });
//     if (options.speed) {
//       setSpeed(options.speed);
//     }
//   });
// }

// flyHandler('malawi', {
//   center: [34.99562,-15.81003],
//   zoom: 12.3,
//   bearing: 0,
//   pitch: 0,
//   speed: .2
// });

// Interactive popups
// var title = document.getElementById('location-title');
// var description = document.getElementById('location-description');
// var buttontext = document.getElementById('location-button');

// var locations = [
//   {"id": 1,
//   "title": "Why street access",
//   "description": "Streets connect each home or place of work to basic services. Without street access there is often no sanitation or clean water. There are also no addresses or routes for emergency responders, trash collectors, and buses.\n\nAround the world, over a million neighborhoods lack adequate access to such services. We are mapping them here, block by block. Here is an example in Port-au-Prince, Haiti.",
//   "buttontext":"Continue explainer (2/8)",
//   "camera": {
//     center: [-72.34257, 18.52656],
//     bearing: 0,
//     pitch:0,
//     zoom: 13.75,
//     speed: .6
//   }
// },{"id": 2,
// "title": "How this map can help",
// "description": "Maps crowdsourced from OpenStreetMap make it possible to create new models of urban planning that are people-centric, built from local knowledge and enhanced with technology.\n\nIn the hands of communities and local governments this can become a powerful resource to support decision-making and action.",
// "buttontext":"Continue explainer (3/8)",
// "camera": {
//   center: [-72.343405, 18.524463],
//   bearing: 0,
//   pitch:60,
//   zoom: 16.2,
//   speed:.3
// }
// }];

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function executedFunction() {
//     var context = this;
//     var args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// function playback(id, index) {
//   var button = document.getElementById(id);
//   if(!button) return;
//   button.addEventListener('click', debounce(function() {
//     title.textContent = locations[index].title;
//     description.textContent = locations[index].description;
//     buttontext.textContent = locations[index].buttontext;
//     map.flyTo(locations[index].camera);
//     index = ((index + 1) === locations.length) ? 0 : index + 1;}, 1000, 500)
//   );
// }

// title.textContent = locations[locations.length -1].title;
// description.textContent = locations[locations.length - 1].description;
// buttontext.textContent = locations[locations.length - 1].buttontext;

// playback('play-interactive',0)