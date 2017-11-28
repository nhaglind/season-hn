document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  let background = '#fffccc';
  let today = new Date();
  let month = today.getMonth();
  let season;
    
  let whichSeason = function(month) {
    if (month >= 1 && month <= 3) {
      season = 'spring';
    } else if (month >= 4 && month <= 6) {
      season = 'summer';
    } else if (month >= 7 && month <= 9) {
      season = 'fall';
    } else {
      season = 'winter';
    }
  }

  whichSeason(month);
  
  switch (season) {
    case 'spring':
      background = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-86875.jpg';
      console.log(`It's spring!`);
      break;
    case 'summer':
      background = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-112387.jpg';
      console.log(`It's summer!`);
      break;
    case 'fall':
      background = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-435940.png';
      console.log(`It's fall!`);
      break;
    case 'winter':
      background = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-87442.jpg';
      console.log(`It's winter!`);
      break;
    default:
      console.log('Not sure, enjoy default.');
  }

  document.body.style.backgroundImage = `url(${background})`;
  document.getElementById("season").innerHTML = `${season}!`;
});


