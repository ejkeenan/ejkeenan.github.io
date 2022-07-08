var Data = [
[0,33],
[1,32],
[2,31.7],
[3,31.5],
[4,32.4],
[5,27.6],
[6,27.5],
[7,25.8],
[8,25.2],
[9,26],
[10,24],
[11,23.6],
[12,26.1],
[13,24.5],
[14,26.5],
[15,23.8],
[16,22.8],
[17,22.4],
[18,22.2],
[19,22],
[20,23.1],
[21,22.3],
[22,23.5],
[23,19.8],
[23,19.8],
[24,17.6],
[25,19.6],
[26,18.6],
[27,18.8],
[28,19.8],
[29,17.2],
[30,16.5],
[31,17.4],
[32,18.4],
[33,16.8],
[34,16.1],
[35,15.9],
[36,16.6],
[37,14.5],
[38,15.9],
[39,13.9],
[40,16.4],
[41,15.4],
[42,16.7],
[43,15.3],
[44,13.9],
[45,14.6],
[46,13.6],
[47,13.5],
[48,13.7],
[49,13.4],
[50,13.9],
[51,12.2],
[52,12.9],
[53,14.9],
[54,13.3],
[55,12.8],
[56,15.9],
[57,13.2],
[58,15.9],
[59,11.7],
[60,12.6],
[61,14.9],
[62,11.4],
[63,14.9],
[64,14.9],
[65,10.8],
[66,11.4],
[67,10.4],
[68,11.8],
[69,11.3],
[70,10.8],
[71,11.6],
[72,9.6],
[73,9.6],
[74,11.2],
[75,11.1],
[76,11.8],
[77,11.9],
[78,13.1],
[79,8.9],
[80,12.1],
[81,12.2],
[82,8.1],
[83,13.3],
[84,10.3],
[85,11.8],
[86,11.4],
[87,11.4],
[88,7.9],
[89,9.1],
[90,10.1],
[91,6.2],
[92,8.8],
[93,11.2],
[94,7.9],
[95,8.8],
[96,9.9],
[97,8.7],
[98,7.9],
[99,6.5],
[100,10.1],
[101,10.4],
[102,9.8],
[103,7.2],
[104,8.2],
[105,7.7],
[106,7.2],
[107,5.9],
[108,5.1],
[109,9.8],
[110,7.3],
[111,6.9],
[112,4.8],
[113,5.2],
[114,5.9],
[115,6.4],
[116,5.2],
[117,4.7],
[118,5.3],
[119,3.8],
[120,7.4],
[121,8.1],
[122,8.8],
[123,8.1],
[124,9.4],
[125,4.9],
[126,6.7],
[127,3.8],
[128,4],
[129,5.9],
[130,2.1],
[131,4.3],
[132,5.7],
[133,5.4],
[134,2.9],
[135,4.6],
[136,3.6],
[137,2.9],
[138,3.4],
[139,3.6],
[140,4.6],
[141,3.6],
[142,3.4],
[143,3.4],
[144,2.2],
[145,1.3],
[146,4.6],
[147,3.6],
[148,1.9],
[149,1.4],
[150,3.9],
[151,1.2],
[152,1.7],
[153,1.7],
[154,1],
[155,2.4],
[156,4.3],
[157,3.9],
[158,2.3],
[159,2.1],
[160,3.8],
[161,1.9],
[162,2.8],
[163,2.7],
[164,2.2],
[165,2.4],
[166,1.1],
[167,1.7],
[168,0.9],
[169,1.5],
[170,2.6],
[171,1.9],
[172,1.8],
[173,1.5],
[174,1.4],
[175,1.6],
[176,1.6],
[177,1.5],
[178,0.9],
[179,1.3],
[180,0.7],
[181,2.4],
[182,2.1],
[183,1.2],
[184,0.7],
[185,0.9],
[186,1.2],
[187,1.7],
[188,1.1],
[189,0.7],
[190,0.4],
[191,1.9],
[192,1.2],
[193,1.1],
[194,1.3],
[195,1.1],
[196,1.4],
[197,1.7],
[198,1.2],
[199,2.1],
[200,1.5],
[201,0.9],
[202,0.5],
[203,0.7],
[204,0.4],
[205,1.1],
[206,1.1],
[207,0.9],
[208,0.8],
[209,0.8],
[210,0.4],
[211,0.6],
[212,0.4],
[213,0.4],
[214,0.8],
[215,0.2],
[216,0.4],
[217,0.4],
[218,0.5],
[219,0.3],
[220,0.4],
[221,0.5],
[222,0.3],
[223,0.4],
[224,0.2],
[225,0.1],
[226,0],
[227,0],
[228,0],
[229,0.3],
[230,0.4],
[231,0.3],
[232,0],
[233,0],
[234,0],
[235,0],
[236,0.3],
[237,0],
[238,0],
[239,0],
[240,0],
[241,0],
[242,0]
];

// Now create the chart
Highcharts.chart('container', {

  chart: {
    type: 'area',
    zoomType: 'x',
    panning: true,
    panKey: 'shift',
    width: null,
    height: null,
    scrollablePlotArea: {
      minWidth: 60
    }
  },

  caption: {
    useHTML: true,
    text: "Starting in early April of 2020, I decided I was going to work every day on stretching with the goal to be able to touch my toes. Above is my progress over the next year or so as I finally reached my goal! My full data set can be seen in the link below."
  },

  title: {
    text: 'Stretching Progress'
  },
  
  subtitle: {
    text: 'How I Finally Touched My Toes in 2020'
  },

  accessibility: {
    description: 'This line chart shows the progress of stretching daily and then measuring how close I was able to get to the floor.',
    landmarkVerbosity: 'one'
  },

  annotations: [{
    /*
    draggable: '',
    labelOptions: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      verticalAlign: 'top',
      y: 15
    },
    labels: [{
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 72,
        y: 11
      },
      text: 'First time below 10 cm<br>Day 72'
    }]
        */
      }, 

    {
    draggable: '',
  
    labelOptions: {
      shape: 'connector',
      align: 'right',
      justify: false,
      crop: true,
      style: {
        fontSize: '0.8em',
        textOutline: '1px white'
      }
    },
    labels: [{
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 5,
        y: 27.6
      },
      text: 'Biggest 1 day improvement (4.8 cm)<br>Day 5'
      }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 72,
        y: 9.6
      },
      style: {
          align: 'bottom',
          left: '100px'
      },
      text: 'First time below 10 cm<br>Day 72'
      }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 178,
        y: 0.9
      },
      text: 'First time below 1 cm<br>Day 178'
      }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 226,
        y: 0.0
      },
      text: 'Touching the floor!<br>Day 226'
    }]
  }],

  xAxis: {
    endOnTick: false,
    labels: {
      format: '{value}'
    },
    minRange: 25,
    title: {
      text: 'Day'
    },
    accessibility: {
      rangeDescription: 'Day number - from 0 to 242'
    }
  },

  yAxis: {
    startOnTick: true,
    endOnTick: true,
    //maxPadding: 0.35,
    title: {
      text: "Distance from ground"
    },
    labels: {
      format: '{value} cm'
    },
    accessibility: {
      description: 'Distance to floor',
      rangeDescription: 'Range: 0 to 40 cms from floor'
    }
  },

  tooltip: {
    headerFormat: 'Day {point.x}<br>',
    pointFormat: '{point.y} cm from ground',
    shared: true
  },

  legend: {
    enabled: false
  },
  credits: {
        text: 'Link to Full Data Set',
        href: 'https://docs.google.com/spreadsheets/d/12vZTEGjrupoZ7z9GBanxKgX-dBVr6SB3OgtGzbbnUms/edit?usp=sharing',
        position: {
          align: 'left',
          x: 10,
          y: 0}
    },

  series: [{
    data: Data,
    lineColor: Highcharts.getOptions().colors[1],
    color: Highcharts.getOptions().colors[3],
    fillOpacity: 0.3,
    name: 'Stretching Progress',
    marker: {
      enabled: false
    },
    threshold: null
  }]

});