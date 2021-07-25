const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterClients.findAll({
            orderBy: [["NamaClient","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;

    }
}

exports.create = async (data) =>{
    try{
        const result = await db.MasterClients.create(data);
        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterClients.update(data, {
            where: { IdClient:id}
        })
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterClients.destroy(id);
        return result;   
    }
    catch(e){
        throw e
    }
}

