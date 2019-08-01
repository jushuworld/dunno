const db = require('../data/db')

const dbController = {
    insertComment(req, res, next){
        // comment is for specifying the model(document)
        // console.log(req.body.chatInput)
        const message = {
            // this 'message' is from the schema value
            message: req.body.chatInput
        }
        // this creates the model
        db.create(message, (err, data) => {
            if(err) console.log(err)
            res.locals.data = data;
            // console.log(res.locals.data)
            return next();
        });
    },

    getComment(req,res,next){
        db.find({}, (err, data) => {
            if(err) console.error(err)
            res.locals.data = data
            return next();
        })
    }
}

module.exports = dbController;