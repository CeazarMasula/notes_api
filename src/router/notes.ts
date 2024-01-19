import express from 'express';

import {
    getNotes,
    createNote,
    getNote,
    updateNote,
    deleteNote
} from '../controllers/notes'

import validateRequest from '../middlewares/validate-request'

// Notes routes
export default (router: express.Router) => {
    router.get('/notes', getNotes)
    router.post('/notes', validateRequest, createNote)
    router.get('/notes/:id', getNote)
    router.put('/notes/:id', validateRequest, updateNote)
    router.delete('/notes/:id', deleteNote)
}