// Link to Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hcmNoaTAiLCJhIjoiY2p6dTljeDhiMGRwcjNubnl2aXI0OThhYyJ9.4FdGkBJlOXMPRugyqiXrjg';
window.map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/nmarchi0/ckqs7sp4c4m7y17q0get8doa8/draft",
  center: [39.82, -98.57],
  zoom: 3,
  maxZoom: 17.5,
  minZoom: 3,
  hash: true,
  maxBounds: [
    [-176.791110603, 13.91619], //sw
    [-61.96466, 76.3577635769], //ne
  ]
});

// Fly to location buttons
function flyHandler(id, options) {
  var button = document.getElementById(id);
  if(!button) return;
  button.addEventListener('click', function() {
    map.flyTo({
      center: options.center,
      zoom: options.zoom || 10,
      bearing: options.bearing,
      pitch: options.pitch
    });
    if (options.speed) {
      setSpeed(options.speed);
    }
  });
}

flyHandler('newyorkcity', {
  center: [-73.9384,40.66392],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('losangeles', {
  center: [-118.412,34.10698],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('chicago', {
  center: [-87.6847,41.83692],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('houston', {
  center: [-95.3885,29.78602],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('phoenix', {
  center: [-112.089,33.57223],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('philadelphia', {
  center: [-75.1339,40.00764],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('sanantonio', {
  center: [-98.5253,29.4658],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('sandiego', {
  center: [-117.133,32.81682],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('dallas', {
  center: [-96.7662,32.79359],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('sanjose', {
  center: [-121.849,37.30212],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('austin', {
  center: [-97.7522,30.3005],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('jacksonville', {
  center: [-81.6602,30.33699],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('fortworth', {
  center: [-97.3473,32.78115],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('columbus', {
  center: [-82.985,39.98621],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('sanfrancisco', {
  center: [-122.694,37.75972],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('charlotte', {
  center: [-80.8304,35.20798],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('indianapolis', {
  center: [-86.1458,39.77712],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('seattle', {
  center: [-122.351,47.62],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('denver', {
  center: [-104.876,39.76216],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('washington', {
  center: [-77.0163,38.90477],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('boston', {
  center: [-71.0164,42.33223],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('elpaso', {
  center: [-106.431,31.84793],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('detroit', {
  center: [-83.1024,42.38339],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('nashville', {
  center: [-86.7843,36.17146],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('portland', {
  center: [-122.65,45.53715],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('memphis', {
  center: [-89.9774,35.10465],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('oklahomacity', {
  center: [-97.5137,35.46763],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('lasvegas', {
  center: [-115.265,36.23335],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('louisville/jeffersoncounty', {
  center: [-85.6485,38.16631],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});
flyHandler('baltimore', {
  center: [-76.6106,39.30098],
  zoom: 9.25,
  bearing: 0,
  pitch: 0,
  speed: .2
});

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

// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.

var tooltip = document.getElementById('tooltip');

function fn(e) {

      tooltip.style.left = e.pageX + 2 + 'px';
      tooltip.style.top = e.pageY + 2 + 'px';
}

document.addEventListener('mousemove', fn, false);

map.on('mousemove', 'us-hdi', function (e) {

  // console.log(e.features[0]);

  tooltip.innerHTML = `
  <table>
    <tr>
      <th style='color: ${hditoColor(e.features[0].properties.adjusted_hdi)}'>${Math.round(e.features[0].properties.adjusted_hdi*100)/100}</th>
      <th>${Math.round(e.features[0].properties.adjusted_income_index*100)/100}</th>
      <th>${Math.round(e.features[0].properties.le_index*100)/100}</th>
      <th>${Math.round(e.features[0].properties.final_edu_index*100)/100}</th>
    </tr>
    <tr>
      <td>HDI</td>
      <td>Inc.</td>
      <td>Life Exp.</td>
      <td>Edu.</td>
    </tr>
    <tr>
      <td colspan='4'>Compare ${hdiToComp(e.features[0].properties.adjusted_hdi)}</td>
    </tr>
    <tr>
      <td colspan='4'>FIPS <b>${e.features[0].properties.geoid}</b></td>
    </tr>
  </table>
  `
   
});

map.on('mouseenter', 'us-hdi', function () {
  
  tooltip.classList.remove('hide');
  map.getCanvas().style.cursor = 'crosshair'
  
});
   
map.on('mouseleave', 'us-hdi', function () {
  
  tooltip.classList.add('hide');
  map.getCanvas().style.cursor = '';
  
});

map.on('mouseleave', 'water', function () {
  
  tooltip.classList.remove('hide');
  map.getCanvas().style.cursor = 'crosshair'
  
});
   
map.on('mouseenter', 'water', function () {
  
  tooltip.classList.add('hide');
  map.getCanvas().style.cursor = '';
  
});

const hdiCountries = [["Norway", 0.957, "NO"],
["Ireland", 0.955, "IE"],
["Switzerland", 0.955, "CH"],
["Hong Kong", 0.949, "HK"],
["Iceland", 0.949, "IS"],
["Germany", 0.947, "DE"],
["Sweden", 0.945, "SE"],
["Australia", 0.944, "AU"],
["Netherlands", 0.944, "NL"],
["Denmark", 0.94, "DK"],
["Finland", 0.938, "FI"],
["Singapore", 0.938, "SG"],
["UK", 0.932, "GB"],
["Belgium", 0.931, "BE"],
["New Zealand", 0.931, "NZ"],
["Canada", 0.929, "CA"],
["USA", 0.926, "US"],
["Austria", 0.922, "AT"],
["Israel", 0.919, "IL"],
["Japan", 0.919, "JP"],
["Liechtenstein", 0.919, "LI"],
["Slovenia", 0.917, "SI"],
["Luxembourg", 0.916, "LU"],
["S. Korea", 0.916, "KR"],
["Spain", 0.904, "ES"],
["France", 0.901, "FR"],
["Czech Rep.", 0.9, "CZ"],
["Malta", 0.895, "MT"],
["Estonia", 0.892, "EE"],
["Italy", 0.892, "IT"],
["UAE", 0.89, "AE"],
["Greece", 0.888, "GR"],
["Cyprus", 0.887, "CY"],
["Lithuania", 0.882, "LT"],
["Poland", 0.88, "PL"],
["Andorra", 0.868, "AD"],
["Latvia", 0.866, "LV"],
["Portugal", 0.864, "PT"],
["Slovakia", 0.86, "SK"],
["Hungary", 0.854, "HU"],
["Saudi Arabia", 0.854, "SA"],
["Bahrain", 0.852, "BH"],
["Chile", 0.851, "CL"],
["Croatia", 0.851, "HR"],
["Qatar", 0.848, "QA"],
["Argentina", 0.845, "AR"],
["Brunei", 0.838, "BN"],
["Montenegro", 0.829, "ME"],
["Romania", 0.828, "RO"],
["Palau", 0.826, "PW"],
["Kazakhstan", 0.825, "KZ"],
["Russia", 0.824, "RU"],
["Belarus", 0.823, "BY"],
["Turkey", 0.82, "TR"],
["Uruguay", 0.817, "UY"],
["Bulgaria", 0.816, "BG"],
["Panama", 0.815, "PA"],
["Bahamas", 0.814, "BS"],
["Barbados", 0.814, "BB"],
["Oman", 0.813, "OM"],
["Georgia", 0.812, "GE"],
["Costa Rica", 0.81, "CR"],
["Malaysia", 0.81, "MY"],
["Kuwait", 0.806, "XK"],
["Serbia", 0.806, "RS"],
["Mauritius", 0.804, "MU"],
["Seychelles", 0.796, "SC"],
["Albania", 0.795, "AL"],
["Cuba", 0.783, "CU"],
["Iran", 0.783, "IR"],
["Sri Lanka", 0.782, "LK"],
["Grenada", 0.779, "GD"],
["Mexico", 0.779, "MX"],
["Ukraine", 0.779, "UA"],
["Peru", 0.777, "PE"],
["Thailand", 0.777, "TH"],
["Armenia", 0.776, "AM"],
["N. Macedonia", 0.774, "MK"],
["Colombia", 0.767, "CO"],
["Brazil", 0.765, "BR"],
["China", 0.761, "CN"],
["Ecuador", 0.759, "EC"],
["Saint Lucia", 0.759, "LC"],
["Azerbaijan", 0.756, "AZ"],
["Dominican Republic", 0.756, "DO"],
["Moldova", 0.75, "MD"],
["Algeria", 0.748, "DZ"],
["Lebanon", 0.744, "LB"],
["Fiji", 0.743, "FJ"],
["Dominica", 0.742, "DM"],
["Maldives", 0.74, "MV"],
["Tunisia", 0.74, "TN"],
["Suriname", 0.738, "SR"],
["Mongolia", 0.737, "MN"],
["Botswana", 0.735, "BW"],
["Jamaica", 0.734, "JM"],
["Jordan", 0.729, "JO"],
["Paraguay", 0.728, "PY"],
["Tonga", 0.725, "TO"],
["Libya", 0.724, "LY"],
["Uzbekistan", 0.72, "UZ"],
["Bolivia", 0.718, "BO"],
["Indonesia", 0.718, "ID"],
["Philippines", 0.718, "PH"],
["Belize", 0.716, "BZ"],
["Samoa", 0.715, "WS"],
["Turkmenistan", 0.715, "TM"],
["Venezuela", 0.711, "VE"],
["South Africa", 0.709, "ZA"],
["Palestine", 0.708, "PS"],
["Egypt", 0.707, "EG"],
["Marshall Islands", 0.704, "MH"],
["Vietnam", 0.704, "VN"],
["Gabon", 0.703, "GA"],
["Kyrgyzstan", 0.697, "KG"],
["Morocco", 0.686, "MA"],
["Guyana", 0.682, "GY"],
["Iraq", 0.674, "IQ"],
["El Salvador", 0.673, "SV"],
["Tajikistan", 0.668, "TJ"],
["Cabo Verde", 0.665, "CV"],
["Guatemala", 0.663, "GT"],
["Nicaragua", 0.66, "NI"],
["Bhutan", 0.654, "BT"],
["Namibia", 0.646, "NA"],
["India", 0.645, "IN"],
["Honduras", 0.634, "HN"],
["Bangladesh", 0.632, "BD"],
["Kiribati", 0.63, "KI"],
["Micronesia", 0.62, "FM"],
["Laos", 0.613, "LA"],
["Swaziland", 0.611, "SZ"],
["Ghana", 0.611, "GH"],
["Vanuatu", 0.609, "VU"],
["Timor-Leste", 0.606, "TL"],
["Nepal", 0.602, "NP"],
["Kenya", 0.601, "KE"],
["Cambodia", 0.594, "KH"],
["Equatorial Guinea", 0.592, "GQ"],
["Zambia", 0.584, "ZM"],
["Myanmar", 0.583, "MM"],
["Angola", 0.581, "AO"],
["Zimbabwe", 0.571, "ZW"],
["Solomon Islands", 0.567, "SB"],
["Syria", 0.567, "SY"],
["Cameroon", 0.563, "CM"],
["Pakistan", 0.557, "PK"],
["Comoros", 0.554, "KM"],
["Mauritania", 0.546, "MR"],
["Benin", 0.545, "BJ"],
["Uganda", 0.544, "UG"],
["Rwanda", 0.543, "RW"],
["Nigeria", 0.539, "NG"],
["Ivory Coast", 0.538, "CI"],
["Tanzania", 0.529, "TZ"],
["Madagascar", 0.528, "MG"],
["Lesotho", 0.527, "LS"],
["Djibouti", 0.524, "DJ"],
["Togo", 0.515, "TG"],
["Senegal", 0.512, "SN"],
["Afghanistan", 0.511, "AF"],
["Haiti", 0.51, "HT"],
["Sudan", 0.51, "SD"],
["Gambia", 0.496, "GM"],
["Ethiopia", 0.485, "ET"],
["Malawi", 0.483, "MW"],
["Guinea-Bissau", 0.48, "GW"],
["Liberia", 0.48, "LR"],
["Guinea", 0.477, "GN"],
["Yemen", 0.47, "YE"],
["Eritrea", 0.459, "ER"],
["Mozambique", 0.456, "MZ"],
["Burkina Faso", 0.452, "BF"],
["Sierra Leone", 0.452, "SL"],
["Mali", 0.434, "ML"],
["Burundi", 0.433, "BI"],
["South Sudan", 0.433, "SS"],
["Chad", 0.398, "TD"],
["Niger", 0.394, "NE"]];

const hdiToComp = hdi => {
  comp = hdiCountries.sort((a,b) => Math.abs(a[1]-hdi) - Math.abs(b[1]-hdi))[0];
  return `<img src='https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${comp[2].toLowerCase()}.svg'> <i>${comp[0]}</i> <b>(.${Math.round(comp[1]*100)})</b>`
}

const hdiToKey = hdi => {
  return d3.scaleLinear().domain([0.44371750950813293,1.1131939888000488]).range([0,1])(hdi);
}

const keytoColor = c => {
  return d3.scaleLinear().domain([0,.125,.25,.375,.5,.625,.75,.875,1]).range([
    "#000004",
    "#1d1147",
    "#51127c",
    "#832681",
    "#b73779",
    "#e75263",
    "#fc8961",
    "#fec488",
    "#fcfdbf"
  ])(c)
}

const hditoColor = hdi => keytoColor(hdiToKey(hdi));