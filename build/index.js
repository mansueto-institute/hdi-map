// Link to Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hcmNoaTAiLCJhIjoiY2p6dTljeDhiMGRwcjNubnl2aXI0OThhYyJ9.4FdGkBJlOXMPRugyqiXrjg';
window.map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/nmarchi0/ckqs7sp4c4m7y17q0get8doa8",
  center: [-98.57, 39.82],
  zoom: 4.25,
  maxZoom: 17.5,
  minZoom: 3,
  hash: true,
  maxBounds: [
    [-176.791110603, 13.91619], //sw
    [-61.96466, 76.3577635769], //ne
  ]
});

let currentId;
let tooltipActive; 
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

cities.forEach(x => {
  flyHandler(x[0], {
    center: x[1], 
    zoom: 9.25,
    bearing: 0,
    pitch: 0,
    speed: .2
  });
})


// tooltip functions

var tooltip = document.getElementById('tooltip');

function fn(e) {
  tooltip.style.left = e.pageX + 2 + 'px';
  tooltip.style.top = e.pageY + 2 + 'px';
}


const hidetooltip = () => {
  tooltipActive = false;
  tooltip.classList.add('hide');
  map.getCanvas().style.cursor = '';
  data.forEach(x => document.getElementById(x.bucket).classList.add('selected'));
};

const showtooltip = () => {
  if (!tooltipActive) {
    tooltipActive = true;
    tooltip.classList.remove('hide');
    map.getCanvas().style.cursor = 'crosshair';
  }
};

function handleTooltipInfo(features){
  // check for null event and for features
  if (!features?.length) return;
  const {
    properties 
  } = features[0]
  // check for event on same geography
  if (currentId === properties.geoid) return;
  currentId = properties.geoid;
  tooltip.innerHTML = `
    <table>
      <tr>
        <th style='color: ${hditoColor(properties.adjusted_hdi)}'>${Math.round(properties.adjusted_hdi*100)/100}</th>
        <th>${Math.round(properties.adjusted_income_index*100)/100}</th>
        <th>${Math.round(properties.le_index*100)/100}</th>
        <th>${Math.round(properties.final_edu_index*100)/100}</th>
      </tr>
      <tr>
        <td>HDI</td>
        <td>Inc.</td>
        <td>Life Exp.</td>
        <td>Edu.</td>
      </tr>
      <tr>
        <td colspan='4'>Compare ${hdiToComp(properties.adjusted_hdi)}</td>
      </tr>
      <tr>
        <td colspan='4'>FIPS <b>${properties.geoid}</b></td>
      </tr>
    </table>
  `;

  data.forEach(x => document.getElementById(x.bucket).classList.remove('selected'));
  document.getElementById(hditoBucket(properties.adjusted_hdi)).classList.add('selected');
}

const handleDesktopTooltip = (e) => {
  if (window.innerWidth < 600){
    return;
  } else {
    if (e?.features?.length) {
      showtooltip();
      handleTooltipInfo(e.features);
    }
  }
}

function handleMobileTooltip() {
  if (window.innerWidth > 600){
    return;
  } else {
    const {
      lng,
      lat
    } = map.getCenter();
    const features = map.queryRenderedFeatures(
      [lng, lat],
      {layers: ['us-hdi']}
      );
    handleTooltipInfo(features);
  }
}

// information change events
map.on('move', handleMobileTooltip)
map.on('mousemove', 'us-hdi', handleDesktopTooltip);
// show events
map.on('mouseleave', 'water', showtooltip);
map.on('mouseenter', 'us-hdi', showtooltip);
map.on('click', 'us-hdi', showtooltip);
// hide events
map.on('mouseenter', 'water', hidetooltip);
map.on('mouseleave', 'us-hdi', hidetooltip);
// map.on('move', hidetooltip);
document.addEventListener('mousemove', fn, false);

// tooltip util functions
const hdiToComp = hdi => {
  comp = hdiCountries.sort((a,b) => Math.abs(a[1]-hdi) - Math.abs(b[1]-hdi))[0];
  return `<img src='https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${comp[2].toLowerCase()}.svg'> <i>${comp[0]}</i> <b>(.${Math.round(comp[1]*100)})</b>`
}

const hdiToKey = hdi => {
  return d3.scaleLinear().domain([0.67,1.1131939888000488]).range([0,1])(hdi);
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

const hditoBucket = x => `bucket${Math.floor((x-0.67)/0.0221597)}`;

const hditoColor = hdi => keytoColor(hdiToKey(hdi));

//build histogram

let width = 190, height = 112;

let x = d3.scaleBand().range([0, width]).round(.05);
let y = d3.scaleLinear().range([height, 0]);

let svg = d3.select("#histogram-placeholder")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

x.domain(data.map(d => d.start));
y.domain([0, d3.max(data, d => d.count)]);

svg.selectAll("bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", d => x(d.start))
  .attr("width", x.bandwidth())
  .attr("y", d => y(d.count))
  .attr("height", d => height - y(d.count))
  .attr("fill", d => hditoColor(d.start))
  .attr("id", d => d.bucket);