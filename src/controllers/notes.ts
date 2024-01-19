import express from 'express';
import { v4 as uuidv4 } from 'uuid'

const notes: Map<string, {
    header: string;
    body: string;
}> = new Map();

// For adding note
export const createNote = async (req: express.Request, res: express.Response) => {
    try {
        const id = uuidv4()
        notes.set(id, req.body)

        return res.status(200).json({
            message: 'Note has been added',
            note: {
                id,
                ...notes.get(id)
            }
        })
    } catch (error) {
        return res.status(400)
    }
}

// Fetch all notes
export const getNotes = async function (_: express.Request, res: express.Response) {
    try {
        let processedNotes: { id: string; header: string; body: string }[] = []

        notes.forEach((note, id) => {
            processedNotes.push({
                id,
                ...note,
            })
        })

        return res.status(200).json({
            notes: processedNotes
        })
    } catch (error) {
        return res.status(400)
    }
}

// Get single note from id
export const getNote = async function (req: express.Request, res: express.Response) {
    try {
        const { id } = req.params;

        const note = notes.get(id);

        if (!note) {
            return res.status(404).json({ message: `Note doesn't exist.` })
        }

        return res.status(200).json({
            id,
            ...note
        })
    } catch (error) {
        return res.status(400)
    }
}

// Update a specific note based on id
export const updateNote = async function (req: express.Request, res: express.Response) {
    try {
        const { id } = req.params;

        const note = notes.get(id);

        if (!note) {
            return res.status(404).json({ message: `Note doesn't exist.` })
        }

        notes.set(id, req.body)

        return res.status(200).json({
            message: 'Note has been updated.',
            note: {
                id,
                ...notes.get(id)
            }
        })
    } catch (error) {
        return res.status(400)
    }
}

//  Delete a specific note from id
export const deleteNote = async function (req: express.Request, res: express.Response) {
    try {
        const { id } = req.params;

        const note = notes.get(id);

        if (!note) {
            return res.status(404).json({ message: `Note doesn't exist.` })
        }

        notes.delete(id)

        return res.status(200).json({
            message: 'Note has been deleted.',
        })
    } catch (error) {
        return res.status(400)
    }
}