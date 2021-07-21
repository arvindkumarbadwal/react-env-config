import { env, hasEnv } from '../index';

process.env = Object.assign(process.env, { 
    REACT_APP_APP_NAME: 'REACT_ENV_CONFIG' 
});

describe("Env function", () => {
    test('Null Value', () => {
        expect(env('NULL')).toBeNull();
    })

    test('Env Value', () => {
        expect(env('APP_NAME')).toBe('REACT_ENV_CONFIG');
    })

    test('Env Value Key Small Case', () => {
        expect(env('app_name')).toBe('REACT_ENV_CONFIG');
    })

    test('NODE_ENV Value', () => {
        expect(env('NODE_ENV')).toBe('test');
    })

    test('Default Value', () => {
        expect(env('APP_VERSION', '1.0.0')).toBe('1.0.0');
    })
})

describe("hasEnv function", () => {
    test('Null Value', () => {
        expect(hasEnv('NULL')).toBeFalsy();
    })

    test('Env Value', () => {
        expect(hasEnv('APP_NAME')).toBeTruthy();
    })

    test('Env Value  Key Small Case', () => {
        expect(hasEnv('app_name')).toBeTruthy();
    })

    test('NODE_ENV Value', () => {
        expect(hasEnv('NODE_ENV')).toBeTruthy();
    })
})
