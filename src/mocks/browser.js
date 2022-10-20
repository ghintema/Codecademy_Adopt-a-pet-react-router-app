import { setupWorker } from 'msw';
import { handlers } from './handlers'; // this is an array of handler-functions. Each function defines a request to be intercepted for mocking and defines the corresponding fake-answer to be send.

export const worker = setupWorker(...handlers); // worker is imported in src/index.js and worker.start() invoked
