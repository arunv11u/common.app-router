# @arunvaradharajalu/common.app-router

[![npm version](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.app-router.svg)](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.app-router)
[![GitHub issues](https://img.shields.io/github/issues/arunv11u/common.app-router)](https://github.com/arunv11u/common.app-router/issues)
[![GitHub license](https://img.shields.io/github/license/arunv11u/common.app-router)](https://github.com/arunv11u/common.app-router/LICENSE)

This package contains a singleton router for an express application.

## Installation

To install the package, run:

```bash
npm install @arunvaradharajalu/common.app-router
```

## Usage

Here is an example demonstrating how to use the singleton router in your Express application:

```typescript
import express from 'express';
import { appRouter } from '@arunvaradharajalu/common.app-router';

const app = express();

// Mount the singleton router under '/api'
app.use('/api', appRouter);

// Define a sample route
appRouter.get('/example', (req, res) => {
  res.send('Hello from the singleton router!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Scripts

The following npm scripts are available:

- `build`: Compile TypeScript using `tsc`.
- `test`: Run tests using `jest`.


## Running Tests

To run the tests, use:

```bash
npm test
```

The test results will be generated in an HTML report with the title "Decorator Test Report".

## Repository

The source code is available at: [GitHub Repository](https://github.com/arunv11u/common.app-router)

## Issues

If you encounter any issues, please report them at: [GitHub Issues](https://github.com/arunv11u/common.app-router/issues)

## Author

Arun Varadharajalu

## License

This project is licensed under the ISC License.