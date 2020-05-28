import {getEnvVars} from "../environments";

export function getSetting(variable) {
    return getEnvVars()[variable];
}