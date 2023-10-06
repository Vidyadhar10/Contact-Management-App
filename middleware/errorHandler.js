const { constants } = require('../constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "VAlidation Failed",
                msg: err.message,
                StackTrace: err.stack
            })

            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                msg: err.message,
                StackTrace: err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                msg: err.message,
                StackTrace: err.stack
            })
            break;
        case constants.UNAUTHORISED:
            res.json({
                title: "Unauthorised",
                msg: err.message,
                StackTrace: err.stack
            })
            break;
        case constants.SERVRER_ERROR:
            res.json({
                title: "Server Error",
                msg: err.message,
                StackTrace: err.stack
            })
            break;
        default:
            console.log("no error");
            break;
    }
}
module.exports = errorHandler;