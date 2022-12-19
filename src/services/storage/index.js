import { nanoid } from 'nanoid'

const ENTRIES_KEY = 'diary-entry-keys'

const StorageService = {
  fetchAllEntries: () => {
    const entries = localStorage.getItem(ENTRIES_KEY)
    if (entries == null || entries.length === 0) {
      return []
    }
    return JSON.parse(entries)
  },
  addEntry: (title, tags, notes) => {
    const newEntry = {
      id: nanoid(),
      title,
      tags,
      notes,
      createdAt: new Date().valueOf()
    }
    const currentEntries = StorageService.fetchAllEntries()
    const newEntries = [...currentEntries, newEntry]
    localStorage.setItem(ENTRIES_KEY, JSON.stringify(newEntries))
  }
}

export { StorageService }
