const masterClientsService = require('../services/MasterClientsService');

exports.getAll = (req, res) => {
    masterClientsService.getAll()
    .then(result => {
        //console.log(result)
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByPk = (req, res) => {
    //console.log(req.params.id)
    masterClientsService.getByPk(req.params.id)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByUrl = (req, res) => {
    masterClientsService.getByUrl(req.params.url)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByStatus = (req, res) => {
    masterClientsService.getByStatus(req.params.status)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err);
    })
}

// exports.getMultipleValues = (req, res) => {
//     console.log(req.params.val1)
//     console.log(req.params.val2)
//     console.log(req.params.val3)
//     console.log(req.params.val4)

//     res.status(200).send("hai")
// }

// exports.getQueryString = (req, res) => {
//     console.log(req.query.val1)
//     console.log(req.query.val2)
//     console.log(req.query.val3)
//     console.log(req.query.val4)

//     res.status(200).send("hai")
// }

exports.create = (req, res) => {
    masterClientsService.create(req.body)
    .then(result => {
        res.status(200).send({message: "Record Has Been Added", status: true})
    })
    .catch(err => {
        console.log(err.message);
    })   
}

exports.update = (req, res) => {

    const id = req.params.id;

    masterClientsService.update(id, req.body)
    .then((result) => {      

        if (result == 1){
            res.status(200).send({message:"Data Has Been Updated", status:true})
        }
        else{
            res.status(400).send({message:"Data Has NOT Been Updated", status:false})
        }
        
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    masterClientsService.delete(id)
    .then(result => {

        if (result == 1){            
            res.status(200).send({message:"Data Has Been Removed", status: true})
        }
        else{
            res.status(400).send({message:"Data Has NOT Been Removed", status: false})
        }
        
    })
    .catch(err => {
        console.log(err.message);
    })
}