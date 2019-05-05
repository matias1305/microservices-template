
// ======================
//  ENVIRONMENT
// ======================
export const SERVER_ENV: string = 'env' || process.env.ENV;

// ======================
//  VERSION
// ======================
export const SERVER_VERSION: string = 'v1' || process.env.VERSION;

// ======================
//  PATH
// ======================
export const SERVER_PATH: string = `/api/${SERVER_ENV}/${SERVER_VERSION}`;

// ======================
//  PORT
// ======================
export const SERVER_PORT: number = Number(process.env.PORT) || 5000;