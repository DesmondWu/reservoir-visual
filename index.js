(function() {
  
  d3.json("data.json", function(error, data) {
    configs = {};

    for (id in data) {
       var percentage = data[id];
       var number = parseFloat(data[id]);
       configs[id] = liquidFillGaugeDefaultSettings();
       configs[id].waveAnimate = true;
       configs[id].waveAnimateTime = setAnimateTime(number);
       configs[id].waveOffset = 0.3;
       configs[id].waveHeight = 0.05;
       configs[id].waveCount = setWavaCount(number);
       setColor(configs[id], number);
       loadLiquidFillGauge(id, percentage, configs[id]);
    }

    function setColor(config, percentage) {
      if (percentage < 25) {
        config.circleColor = "#00000";
        config.textColor = "#00000";
        config.waveTextColor = "#00000";
        config.waveColor = "#00000"; 
      }
      else if (percentage < 50) {
        config.circleColor = "#FF7777";
        config.textColor = "#FF4444";
        config.waveTextColor = "#FFAAAA";
        config.waveColor = "#FFDDDD"; 
      }
    }

    function setWavaCount(percentage) {
      if (percentage > 75) {
        return 3;
      }
      else if (percentage > 50) {
        return 2;
      }
      return 1;
    }

    function setAnimateTime(percentage) {
      console.log(percentage);
       if (percentage > 75) {
        return 2000;
      }
      else if (percentage > 50) {
        return 3000;
      }
      else if (percentage > 25) {
        return 4000;
      }
      return 5000;
    }
  });


})()