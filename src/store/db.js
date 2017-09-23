import PouchDB from 'pouchdb'
import Find from 'pouchdb-find'

PouchDB.plugin(Find)

/* eslint-disable no-new */
export const db = new PouchDB('notes')

export const initIndices = async function () {
  await db.createIndex({
    index: {
      fields: [
        'pinned',
        'updated',
        'date'
      ]
    }
  })
  await db.createIndex({
    index: {
      fields: [
        'updated'
      ]
    }
  })
}

export const createNote = async function (spec) {
  const res = await db.post({
    title: spec.title,
    markdown: spec.markdown,
    preview: spec.preview,
    created: spec.created.format(),
    updated: spec.updated.format(),
    tags: spec.tags
  })
  return res.id
}

export const updateNote = async function (spec) {
  try {
    const original = await db.get(spec._id)
    await db.put({
      _id: spec._id,
      _rev: original._rev,
      title: spec.title,
      markdown: spec.markdown,
      preview: spec.preview,
      created: spec.created.format(),
      updated: spec.updated.format(),
      tags: spec.tags
    })
  } catch (err) {
    console.error(err)
  }
}

// TODO: handle pagination
export const getPinnedNotes = async function () {
  return db.find({
    selector: {
      pinned: {$eq: true}
    }
  })
}

// TODO: handle pagination
export const loadNotes = async function () {
  return db.find({
    selector: {
      updated: {$gte: null}
    },
    sort: ['updated']
  })
}

export const loadNoteById = async function (id) {
  return db.get(id)
}

export default {
  createNote,
  getPinnedNotes,
  loadNoteById,
  loadNotes,
  initIndices,
  updateNote
}
