FusionCharts.ready(function() {
  var topStores = new FusionCharts({
    type: "sankey",
    renderAt: "container",
    id: "sankey-chart",
    width: "100%",
    height: "800",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Job Hunt - 2023",
		subCaption: "Flow of job hunt as a project manager with 10+ years experience for roughly 2 months in 2023",
        showLegend: 0,
        linkcolor: 'blend',
        theme: "fusion",
        nodeWidth: "25",
        enableDrag: "1",
        nodeLabelPosition: "right",
        showNodeValues: "1",
        nodeSpacing: "30",
        nodeLabelFontSize: "16"
      },
      nodes: [
    {
      label: "Applied"
    },
    {
      label: "Recruited"
    },
    {
      label: "Screener Interview"
    },
    {
      label: "Manager Interview"
    },
    {
      label: "Team Interview"
    },
    {
      label: "Final Interview"
    },
    {
      label: "Offer"
    },
    {
      label: "No Response",
      color: "#818589",
      alpha: "80"
    },
    {
      label: "Rejected",
      color: "#ff0000"
    },
    {
      label: "Withdrew",
      color: "#818589",
      alpha: "80"
    },
    {
      label: "Accepted",
      color: "#00ff00",
      nodeLabelFontBold: "1"
    },
    {
      label: "Declined",
      color: "#818589",
      alpha: "80"
    }
      ],
      links: [ {
      from: "Applied",
      to: "No Response",
      value: 35
    },
    {
      from: "Applied",
      to: "Rejected",
      value: 26
    },
    {
      from: "Applied",
      to: "Screener Interview",
      value: 6
    },
    {
      from: "Recruited",
      to: "Screener Interview",
      value: 2
    },
    {
      from: "Screener Interview",
      to: "Manager Interview",
      value: 5
    },
    {
      from: "Screener Interview",
      to: "No Response",
      value: 1
    },
    {
      from: "Screener Interview",
      to: "Rejected",
      value: 2
    },
    {
      from: "Manager Interview",
      to: "Team Interview",
      value: 3
    },
    {
      from: "Manager Interview",
      to: "Rejected",
      value: 2
    },
    {
      from: "Team Interview",
      to: "Final Interview",
      value: 3
    },
    {
      from: "Final Interview",
      to: "Offer",
      value: 2
    },
    {
      from: "Final Interview",
      to: "Withdrew",
      value: 1
    },
    {
      from: "Offer",
      to: "Accepted",
      value: 1
    },
    {
      from: "Offer",
      to: "Declined",
      value: 1
    }
      ]
    }
  }).render();
});