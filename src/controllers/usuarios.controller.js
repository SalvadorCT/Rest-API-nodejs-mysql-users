import { pool } from "../db.js";

export const getUsuarios =  async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario');
        res.json(rows);
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener los usuarios'
        });
    }
}

export const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
        if (rows.length <= 0) {
        res.status(404).json({ 
            message: 'Usuario no encontrado' 
        });
        }
        res.json(rows[0]);
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener el usuario'
        });
    }
}

export const createUsuarios = async (req, res) => {
    const { nombre, apellido, correo, password } = req.body

    try {
        if (!nombre || !apellido || !correo || !password) {
        res.status(400).send('Faltan datos');
        return;
        }
        //validar si el nombre y apellido es un string
        if (typeof nombre !== 'string' || typeof apellido !== 'string') {
        res.status(400).send('El nombre y apellido deben ser un string');
        return;
        }
        // validar si el correo es un correo
        // if (!validateEmail(correo)) {
        //     res.status(400).send('El correo no es válido');
        //     return;
        // }
        const [ rows ] = await pool.query('INSERT INTO usuario(nombre, apellido, correo, password) VALUES (?,?,?,?)',[nombre, apellido, correo, password])
        res.send({
            message: 'Usuario creado',
            body: {
                usuario: {
                    id: rows.insertId, 
                    nombre, 
                    apellido, 
                    correo, 
                    password 
                }
            }
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al crear el usuario'
        });
    }
}

export const updateUsuarios = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, password } = req.body;

    try {
        const [result] = await pool.query('UPDATE usuario SET nombre = IFNULL(?,nombre), apellido = IFNULL(?,apellido), correo = IFNULL(?,correo), password = IFNULL(?,password) WHERE id = ?',[nombre, apellido, correo, password, id])

        if (result.affectedRows === 0) {
            res.status(404).send('Usuario no encontrado');
            return;
        }

        const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);

        res.send({
            message: 'Usuario actualizado',
            body: {
                usuario: rows[0]
            }
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al actualizar el usuario'
        });
    }
}

export const deleteUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM usuario WHERE id = ?', [req.params.id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        res.sendStatus(204);
    }
    catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al eliminar el usuario'
        });
    }
}





