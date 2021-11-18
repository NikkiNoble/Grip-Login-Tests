export const config: WebdriverIO.Config = {
  
    specs: [
        './test/specs/**/*.ts'
    ],
 
    exclude: [
        // 'path/to/excluded/files'
    ],
 
    maxInstances: 10,
  
    capabilities: [{
    
        maxInstances: 5,

        browserName: 'chrome',
        acceptInsecureCerts: true
        
    }],
    
    logLevel: 'info',
    
    bail: 0,
   
    baseUrl: 'https://demo-v2.grip.tools',
    
    waitforTimeout: 40000,
    
    connectionRetryTimeout: 120000,
  
    connectionRetryCount: 3,

    services: ['chromedriver'],
    
    framework: 'mocha',
  
    reporters: ['spec'],
 
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
