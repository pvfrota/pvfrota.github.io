function vaccinationSiteCount () {
  const defaultData = 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/data/analyzed/vaccination_site_count.csv'

  Highcharts.chart('vaccination-site-count-chart', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Vacinas aplicadas por local de vacinação'
    },
    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return 'New point added. Value: ' + newPoint.y
          }
          return false
        }
      }
    },
    data: {
      csvURL: defaultData,
      enablePolling: true,
      dataRefreshRate: 10
    }
  })
}

// Create the chart
vaccinationSiteCount()
