import { getConnection } from "./../database/database";

const getLanguages = async (request, response) => {
    try {
        const connection= await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language");
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

const getLanguage = async (request, response) => {
    try {
        console.log(request.params);
        const {id} = request.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

const addLanguages = async (request, response) => {
    try {
        const {name, programmers} = request.body;
        if (name=== undefined || programmers=== undefined){
            response.status(400).json({message:"Bad Request. Please fill all field."});
        }
        const language = { name, programmers};
        const connection= await getConnection();
        const result = await connection.query("INSERT INTO language SET ?", language);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

const updateLanguage = async (request, response) => {
    try {
        const {id} = request.params;
        const {name, programmers} = request.body;
        if (id=== undefined || name=== undefined || programmers=== undefined){
            response.status(400).json({message:"Bad Request. Please fill all field."});
        }
        const language = { id, name, programmers};
        const connection= await getConnection();
        const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id]);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

const deleteLanguage = async (request, response) => {
    try {
        const {id} = request.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM language WHERE id = ?", id);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

export const methods = {
    getLanguages,
    getLanguage,
    addLanguages,
    updateLanguage,
    deleteLanguage
};