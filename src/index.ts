const envPrefix: string = 'REACT_APP_';

const exceptPrefix: Array<string> = ['NODE_ENV'];

const envKey = (key: string) => {
    const keyUpper = key.toUpperCase();

    if(exceptPrefix.includes(keyUpper)) {
        return keyUpper;
    }

    return envPrefix + keyUpper;
}

export const env = (key: string, value: any = null) => {
    return process.env[envKey(key)] || value;
}

export const hasEnv = (key: string): boolean => {
    return process.env[envKey(key)] ? true : false
}