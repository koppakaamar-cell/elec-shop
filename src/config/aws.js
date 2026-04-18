// AWS Configuration for Elec Shop
// Replace these values with your actual AWS resource IDs after deployment

const awsConfig = {
  // Amazon Cognito
  cognito: {
    region: process.env.REACT_APP_AWS_REGION || 'us-east-2',
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID || 'us-east-2_cwqI4uAUA',
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID || '2sqo75ohr3h35g4dvvaudmp73m',
  },

  // API Gateway
  apiGateway: {
    region: process.env.REACT_APP_AWS_REGION || 'us-east-2',
    endpoint: process.env.REACT_APP_API_ENDPOINT || 'https://rlplbofoee.execute-api.us-east-2.amazonaws.com/Prod',
  },

  // Stripe (test mode)
  stripe: {
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXX',
  },
};

export default awsConfig;
