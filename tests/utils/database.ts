import { getConnection } from "typeorm"

export async function closeConnection()
{
  const connection = getConnection()
  await connection.close()
}