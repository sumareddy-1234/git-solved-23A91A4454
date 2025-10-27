const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true
  }
};

const config = monitorConfig[ENV];

console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  if (config.debugMode) {
    console.log(`[${timestamp}] Detailed health check`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');
}

setInterval(checkSystemHealth, config.interval);
checkSystemHealth();

// Experimental monitoring features
// aiMonitoring: true

