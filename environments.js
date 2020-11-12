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
    switch (env) {
        case 'development':
            return ENV.dev;

        case 'staging':
            return ENV.staging;

        case 'production':
            return ENV.production;

        default:
            return ENV.dev;
    }
}
