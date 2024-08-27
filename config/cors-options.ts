// Configure CORS
export const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Default to localhost if not set
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    credentials: true, // Allow cookies to be sent with requests
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };