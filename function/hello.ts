import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'https://deno.land/x/lambda/mod.ts';

export async function handler(
  event: APIGatewayProxyEvent,
  _context: Context
): Promise<APIGatewayProxyResult> {
  const httpMethod = await event.httpMethod;

  if (httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        message: `Your Lambda GET Request Ran Successfully.`,
      }),
    };
  }
  if (httpMethod === 'POST') {
    const eventBody = JSON.parse(event.body);
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        message: `Your Lambda POST Request Ran Successfully.`,
        eventBody,
      }),
    };
  }
}
