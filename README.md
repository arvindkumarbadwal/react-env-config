# react-env-config

An environment variables helper for React applications (created by CRA)

![npm](https://img.shields.io/npm/v/react-env-config?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/react-env-config?style=for-the-badge)

## Installation

```sh
npm install react-env-config
```

## Using
### Function
```js
    env(key)
    env(key, defaultValue)
    // return environment variable, if no variables then return defaultValue (or null)

    hasEnv(key)
    // return true or false base upon environment variable
```
### Example
```sh
// .env
NODE_ENV=development
REACT_APP_APP_NAME=ReactApplication
```

```js
import { env, hasEnv } from 'react-env-config';

env('APP_NAME')  // Or env('app_name')
// Output: ReactApplication

/* with default value */
env('APP_VERSION', '1.0.0') // Or env('app_version', '1.0.0')
// Output: 1.0.0

env('NODE_ENV') // Or  env('node_env')
// Output: development
```
hasEnv('APP_NAME')
// Output: true

hasEnv('APP_VERSION')
// Output: false



## Contributing

If you find a bug or willing to add some enhancement, pull requests are very welcome

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)