import { Link } from 'react-router-dom'
import InfoKegiatan from './InfoKegiatan.jsx'

export default function KartuItem({ item }) {
  const { id, judul, kategori} = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori}
      </p>
      <InfoKegiatan item={item} />
    </article>
  )
}