import mysql from 'mysql2/promise';

export default async function handler(_req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const connection = await mysql.createConnection({
      host: 'db.mineidhost.com',
      port: 3306,
      user: 'u1042_vSd5PjOhlI',
      password: 'hGSK4bEe3EF.^X8I2NPFPt^k',
      database: 's1042_MineCore'
    });

    const [rows] = await connection.query(
      'SELECT playername, value FROM ajlb_statistic_player_kills ORDER BY value DESC LIMIT 3'
    );

    await connection.end();
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
