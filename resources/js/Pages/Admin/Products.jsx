import { useState } from 'react';
import { Link, router } from '@inertiajs/react';

export default function Products({ products, flash }) {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ name: '', description: '', price: '', stock: '', category: '' });
    const [image, setImage] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        Object.keys(form).forEach(key => data.append(key, form[key]));
        if (image) data.append('image', image);
        router.post('/admin/products', data, {
            onSuccess: () => { setShowForm(false); setForm({ name: '', description: '', price: '', stock: '', category: '' }); setImage(null); }
        });
    }

    function deleteProduct(id) {
        if (confirm('Yakin mau hapus produk ini?')) {
            router.delete(`/admin/products/${id}`);
        }
    }

    return (
        <div style={{ fontFamily: 'Inter, sans-serif', background: '#f5f5f0', minHeight: '100vh', display: 'flex' }}>
            {/* SIDEBAR */}
            <div style={{ width: '240px', background: '#1a2e0a', minHeight: '100vh', padding: '32px 24px', position: 'fixed', top: 0, left: 0 }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: 'white', marginBottom: '8px' }}>Sweet Bite</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px' }}>Admin Panel</div>
                {[
                    { href: '/admin/dashboard', label: '📊 Dashboard' },
                    { href: '/admin/products', label: '🍰 Produk' },
                    { href: '/admin/orders', label: '📦 Pesanan' },
                    { href: '/', label: '🌐 Lihat Web' },
                ].map(item => (
                    <Link key={item.href} href={item.href} style={{
                        display: 'block', padding: '12px 16px', color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none', borderRadius: '10px', marginBottom: '8px', fontSize: '14px'
                    }}>{item.label}</Link>
                ))}
            </div>

            {/* MAIN */}
            <div style={{ marginLeft: '270px', flex: 1, padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
                    <div>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', marginBottom: '4px' }}>Kelola Produk</div>
                        <div style={{ color: '#888', fontSize: '14px' }}>{products.length} produk tersedia</div>
                    </div>
                    <button onClick={() => setShowForm(!showForm)} style={{
                        padding: '12px 24px', background: '#2D5016', color: 'white',
                        border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '500', cursor: 'pointer'
                    }}>+ Tambah Produk</button>
                </div>

                {flash?.success && (
                    <div style={{ background: '#eaf3de', color: '#2D5016', padding: '12px 20px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' }}>
                        {flash.success}
                    </div>
                )}

                {/* FORM TAMBAH */}
                {showForm && (
                    <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', marginBottom: '20px' }}>Tambah Produk Baru</div>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                {[
                                    { label: 'Nama Produk', key: 'name', placeholder: 'Brownies Cokelat' },
                                    { label: 'Kategori', key: 'category', placeholder: 'Brownies' },
                                    { label: 'Harga', key: 'price', placeholder: '45000' },
                                    { label: 'Stok', key: 'stock', placeholder: '50' },
                                ].map(field => (
                                    <div key={field.key}>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>{field.label}</label>
                                        <input
                                            type="text"
                                            value={form[field.key]}
                                            onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                                            placeholder={field.placeholder}
                                            required
                                            style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Deskripsi</label>
                                <textarea
                                    value={form.description}
                                    onChange={e => setForm({ ...form, description: e.target.value })}
                                    placeholder="Deskripsi produk..."
                                    rows={3}
                                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Foto Produk</label>
                                <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{ fontSize: '14px' }} />
                            </div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button type="submit" style={{ padding: '10px 24px', background: '#2D5016', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>Simpan</button>
                                <button type="button" onClick={() => setShowForm(false)} style={{ padding: '10px 24px', background: 'white', color: '#444', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '14px', cursor: 'pointer' }}>Batal</button>
                            </div>
                        </form>
                    </div>
                )}

                {/* TABLE */}
                <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: '#f9fafb' }}>
                                {['Foto', 'Nama', 'Kategori', 'Harga', 'Stok', 'Status', 'Aksi'].map(h => (
                                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#666', fontWeight: '500' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px' }}>
                                        <img src={`/images/${product.image}`} alt={product.name} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }} onError={e => e.target.style.display = 'none'} />
                                    </td>
                                    <td style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '500' }}>{product.name}</td>
                                    <td style={{ padding: '12px 16px', fontSize: '14px', color: '#888' }}>{product.category}</td>
                                    <td style={{ padding: '12px 16px', fontSize: '14px' }}>Rp {parseInt(product.price).toLocaleString('id-ID')}</td>
                                    <td style={{ padding: '12px 16px', fontSize: '14px' }}>{product.stock}</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <span style={{ padding: '4px 12px', borderRadius: '50px', fontSize: '12px', background: product.is_active ? '#eaf3de' : '#fff0f0', color: product.is_active ? '#2D5016' : '#e74c3c' }}>
                                            {product.is_active ? 'Aktif' : 'Nonaktif'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <button onClick={() => deleteProduct(product.id)} style={{ padding: '6px 14px', background: '#fff0f0', color: '#e74c3c', border: 'none', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}