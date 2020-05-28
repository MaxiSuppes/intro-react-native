import Constants from "expo-constants";

const ENV = {
    dev: {
        apiUrl: '12312312',
        usingFakeApi: '',
    },
    staging: {
        apiUrl: '',
    },
    production: {
        apiUrl: '',
    }
};

export function getEnvVars(env = Constants.manifest.releaseChannel) {
    if (env === null || env === undefined || env === '') return ENV.dev;
    if (env.indexOf('dev') !== -1) return ENV.dev;
    if (env.indexOf('staging') !== -1) return ENV.staging;
    if (env.indexOf('production') !== -1) return ENV.production;
}
