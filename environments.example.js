import * as Updates from "expo-updates";

const ENV = {
    dev: {
        apiUrl: '',
        usingFakeApi: '',
    },
    staging: {
        apiUrl: '',
    },
    production: {
        apiUrl: '',
    }
};

export function getEnvVars(env = Updates.releaseChannel) {
    // Release channels: https://docs.expo.dev/distribution/release-channels/
    if (env.startsWith('staging')) {
        return ENV.staging;
    } else if (env.startsWith('production')) {
        return ENV.production;
    } else {
        return ENV.dev;
    }
}
