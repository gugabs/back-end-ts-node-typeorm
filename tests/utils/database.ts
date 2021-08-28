import { getConnection } from 'typeorm';

export default async function closeConnection() {
  const connection = getConnection();
  await connection.close();
}
