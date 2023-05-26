import { createPool } from "mysql2/promise"

 const pool = createPool({
    host: "containers-us-west-40.railway.app"   ,
    port: 6451,
    user: "root",
    password:"9gAEwya8q4qPZCa9ZCib",
    database:"railway"
})

export default pool
