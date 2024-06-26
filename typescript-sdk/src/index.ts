import { ctpClient } from './BuildClient';
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { config } from './config/default.js';
// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient)
  .withProjectKey({ projectKey: config.CTP_PROJECT_KEY });

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
const getProject = () => {
  return apiRoot
    .get()
    .execute();
};

// Retrieve Project information and output the result to the log
getProject()
  .then(console.log)
  .catch(console.error);
