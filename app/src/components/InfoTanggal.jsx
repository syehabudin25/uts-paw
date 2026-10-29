export default function InfoTanggal({ tanggal }) {
  return (
    <span className="info-tanggal">
      Tanggal: {tanggal || '-'}
    </span>
  )
}
