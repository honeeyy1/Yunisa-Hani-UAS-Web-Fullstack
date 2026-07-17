import Layout from './Layout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Home({ products, auth }) {
    const [modal, setModal] = useState(null);
    const [qty, setQty] = useState(1);

    function addToCart() {
        router.post('/cart/add', {
            product_id: modal.id,
            quantity: qty
        }, { onSuccess: () => { setModal(null); setQty(1); } });
    }

    return (
        <Layout auth={auth}>
            {/* HERO */}
            <section style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 60px',
                display: 'flex',
                alignItems: 'center',
                minHeight: '520px'
            }}>
                <div style={{ maxWidth: '620px' }}>
                    <div style={{
                        display: 'inline-block',
                        background: 'rgba(255,255,255,0.15)',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontSize: '12px',
                        marginBottom: '24px'
                    }}>🌿 Freshly Baked Every Day</div>
                    <h1 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '56px',
                        color: 'white',
                        lineHeight: '1.15',
                        marginBottom: '20px'
                    }}>Nikmati Setiap Gigitan yang Istimewa</h1>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.8', marginBottom: '36px' }}>
                        Dibuat dengan bahan-bahan premium pilihan, setiap produk Sweet Bite menghadirkan pengalaman rasa yang tak terlupakan.
                    </p>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="#products" style={{
                            padding: '14px 32px', background: 'white', color: '#2D5016',
                            borderRadius: '50px', textDecoration: 'none', fontWeight: '600', fontSize: '14px'
                        }}>Lihat Produk</a>
                        <a href="/register" style={{
                            padding: '14px 32px', background: 'transparent', color: 'white',
                            border: '2px solid rgba(255,255,255,0.5)', borderRadius: '50px',
                            textDecoration: 'none', fontWeight: '500', fontSize: '14px'
                        }}>Bergabung Gratis</a>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section style={{ padding: '80px 60px' }} id="products">
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div style={{
                        display: 'inline-block', background: '#eaf3de', color: '#2D5016',
                        padding: '6px 16px', borderRadius: '50px', fontSize: '12px',
                        fontWeight: '500', marginBottom: '16px'
                    }}>Menu Kami</div>
                    <h2 style={{
                        fontFamily: 'Playfair Display, serif', fontSize: '40px',
                        color: '#1a1a1a', marginBottom: '12px'
                    }}>Pilihan Terbaik untuk Kamu</h2>
                    <p style={{ color: '#888', fontSize: '15px' }}>Semua dibuat fresh setiap hari dengan bahan pilihan</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '28px'
                }}>
                    {products.map(product => (
                        <div key={product.id} style={{
                            background: 'white', borderRadius: '20px', overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                            transition: 'transform 0.3s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <img
                                src={`/images/${product.image}`}
                                alt={product.name}
                                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                                onError={e => e.target.style.display = 'none'}
                            />
                            <div style={{ padding: '20px 24px 24px' }}>
                                <div style={{ fontSize: '11px', color: '#2D5016', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                                    {product.category}
                                </div>
                                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', marginBottom: '8px' }}>
                                    {product.name}
                                </div>
                                <div style={{ fontSize: '13px', color: '#888', lineHeight: '1.6', marginBottom: '16px' }}>
                                    {product.description}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2D5016', fontWeight: '700' }}>
                                        Rp {parseInt(product.price).toLocaleString('id-ID')}
                                    </div>
                                    {auth?.user ? (
                                        <button onClick={() => { setModal(product); setQty(1); }} style={{
                                            padding: '10px 20px', background: '#2D5016', color: 'white',
                                            border: 'none', borderRadius: '50px', fontSize: '13px',
                                            fontWeight: '500', cursor: 'pointer'
                                        }}>+ Keranjang</button>
                                    ) : (
                                        <a href="/login" style={{
                                            padding: '10px 20px', background: '#2D5016', color: 'white',
                                            borderRadius: '50px', fontSize: '13px', fontWeight: '500',
                                            textDecoration: 'none'
                                        }}>+ Keranjang</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MODAL */}
            {modal && (
                <div onClick={() => setModal(null)} style={{
                    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                    zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div onClick={e => e.stopPropagation()} style={{
                        background: 'white', borderRadius: '20px', padding: '36px',
                        width: '400px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
                    }}>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', marginBottom: '8px' }}>Tambah ke Keranjang</h3>
                        <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px' }}>Pilih jumlah yang kamu inginkan</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#eaf3de', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>🍰</div>
                            <div>
                                <div style={{ fontWeight: '500', fontSize: '15px' }}>{modal.name}</div>
                                <div style={{ color: '#2D5016', fontSize: '14px' }}>Rp {parseInt(modal.price).toLocaleString('id-ID')}</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{
                                width: '36px', height: '36px', border: '1.5px solid #e0e0e0',
                                background: 'white', borderRadius: '50%', fontSize: '18px', cursor: 'pointer'
                            }}>−</button>
                            <span style={{ fontSize: '20px', fontWeight: '500', minWidth: '32px', textAlign: 'center' }}>{qty}</span>
                            <button onClick={() => setQty(q => q + 1)} style={{
                                width: '36px', height: '36px', border: '1.5px solid #e0e0e0',
                                background: 'white', borderRadius: '50%', fontSize: '18px', cursor: 'pointer'
                            }}>+</button>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => setModal(null)} style={{
                                flex: 1, padding: '12px', border: '1.5px solid #e0e0e0',
                                background: 'white', borderRadius: '10px', cursor: 'pointer', fontSize: '14px'
                            }}>Batal</button>
                            <button onClick={addToCart} style={{
                                flex: 2, padding: '12px', background: '#2D5016', color: 'white',
                                border: 'none', borderRadius: '10px', cursor: 'pointer',
                                fontSize: '14px', fontWeight: '500'
                            }}>Tambahkan 🛒</button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}