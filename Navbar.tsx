export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between">
      <div className="font-bold">TOKO</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/products" className="hover:underline">Produk</a>
        <a href="/cart" className="hover:underline">Keranjang</a>
        <a href="/login" className="hover:underline">Login</a>
      </div>
    </nav>
  )
}
