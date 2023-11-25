# Promises Group Execute
The PromisesUtil class provides utility methods for working with promises, particularly for executing asynchronous functions in groups.

## Usage

### Import the Class
```typescript
import { PromisesUtil } from './src/promises-util';
```

### Example Usage
```typescript
// Create an instance of PromisesUtil
const promisesUtil = new PromisesUtil();

// Sample data and asynchronous function
const dataList: YourDataType[] = /* ... */; // Replace with your data type
const asyncFunction = async (el: YourDataType): Promise<YourResultType> => {
  // Your asynchronous logic here
  return /* ... */; // Replace with your result type
};

// Execute asynchronous function in groups
const groupSize = 5; // Define your group size
const results = await promisesUtil.groupExecute(dataList, groupSize, asyncFunction);

console.log(results);
```

### Method: groupExecute
```typescript
async groupExecute<T, R=any>(list: T[], groupSize: number, func: (el: T) => Promise<R>): Promise<R[]>
```

This method takes an array of items, a group size, and an asynchronous function. It executes the asynchronous function for each item in groups of the specified size, asynchronously. The method returns a promise that resolves to an array of results.

- **list**: An array of items to process asynchronously.
- **groupSize**: The size of each processing group.
- **func**: An asynchronous function that takes an item and returns a promise.

## License
This TypeScript class is distributed under the MIT License. Feel free to use, modify, and distribute it in accordance with the terms of the license.