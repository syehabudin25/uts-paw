import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = [{ id: '1', judul: 'Musyawarah Besar', kategori: 'Organisasi', tanggal: '2026-02-11', lokasi: 'Aula GKU2', penyelenggara: 'Himpunan Mahasiswa Informatika' }]

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('rute tidak dikenal menampilkan 404', () => {
  buka('/tidak-ada')
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman koleksi menampilkan judul koleksi', async () => {
  buka('/koleksi')
  expect(await screen.findByRole('heading', { name: /^Koleksi$/i })).toBeInTheDocument()
})

test('halaman tambah menampilkan judul tambah', () => {
  buka('/tambah')
  expect(screen.getByRole('heading', { name: /Tambah/i })).toBeInTheDocument()
})

test('halaman statistik menampilkan judul statistik', () => {
  buka('/statistik')
  expect(screen.getByRole('heading', { name: /Statistik/i })).toBeInTheDocument()
})

test('halaman tentang menampilkan judul tentang', () => {
  buka('/tentang')
  expect(screen.getByRole('heading', { name: /Tentang/i })).toBeInTheDocument()
})
