export default function InfoKegiatan({ item }) {
  const { tanggal, lokasi, penyelenggara } = item

  return (
    <div className="info-kegiatan">
      <p><strong>Tanggal:</strong> {tanggal}</p>
      <p><strong>Lokasi:</strong> {lokasi}</p>
      <p><strong>Penyelenggara:</strong> {penyelenggara}</p>
    </div>
  )
}
