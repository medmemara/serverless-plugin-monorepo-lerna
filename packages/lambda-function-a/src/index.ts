import {hello} from '@example/module-1';
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  const greeting = hello('A');
  const response = {
    statusCode: 200,
    body: greeting
  };
  callback(null, response);
}
