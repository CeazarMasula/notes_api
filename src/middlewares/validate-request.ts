import express from 'express';

export default async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    // Assuming title and body can be an empty string, were only checking if fields are present
    if (!req.body.title) {
        return res.status(400).json({
            message: 'Please inpu the note <title>'
        })
    }

    if (!req.body.body) {
        return res.status(400).json({
            message: 'Please input the note <body>'
        })
    }

    next()
}