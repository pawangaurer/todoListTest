exports.config = {


    user: 'pawangaur_YGAPq4',
    key: 'FiqGJFHSMeQwA2C4JxeU',
  
      specs: [
          './test/specs/**/*.js'
      ],
      services: [
          [
            'browserstack',
            {
              browserstackLocal: true,
              app: 'bs://1e351ad68d533796874f790b2e2cc271d425cfd8'
            },
          ]
        ],
        capabilities: [{
          'bstack:options': {
            deviceName: 'Google Pixel 5',
            platformVersion: '12.0',
            platformName: 'android',
          }
        }],
        commonCapabilities: {
          'bstack:options': {
            projectName: "BrowserStack Samples",
            buildName: 'browserstack build 1',
            sessionName: 'BStack',
            debug: true,
            networklogs:true,
            locationServicesEnabled: false
          }
        },
       
      maxInstances: 1,
      framework: 'mocha',
      mochaOpts: {
        ui: 'bdd',
        timeout: 20000
      }
    }