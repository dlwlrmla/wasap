import pool  from "../db.js"

export const test = async (req,res) => {
    const [ans] = await pool.query(`select * from personas`)
    console.log(ans)
}

export const createUser = async (id,name) => {
    const [ans] = await pool.query(`insert into personas2 values (?)`, [ name])
    console.log([ans])
}
