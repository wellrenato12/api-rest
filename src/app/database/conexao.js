import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'db_copa'
})

connection.connect()

export const consult = (sql, values='', messageReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result) => {
      if (error) return reject(messageReject)
      const row = JSON.parse(JSON.stringify(result))
      return resolve(row)
    })
  })
}

export default connection