import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ocemtechzone',
  appName: 'web-android',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
