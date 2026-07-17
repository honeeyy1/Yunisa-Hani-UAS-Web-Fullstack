import { router } from '@inertiajs/react';
import Layout from './Layout';

export default function Cart({ cartItems, auth, flash }) {
    function removeItem(id) {
        router.delete(`/cart/${id}`);
    }

    function updateQty(id, qty) {
        if (qty < 1) return;
        router.patch(`/cart/${id}`, { quantity: qty });
    }

    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <Layout auth={auth}>
            <div style={{ maxWidth: '900px', margin: '48px auto', padding: '0 24px' }}>
                {flash?.success && (
                    <div style={{ background: '#eaf3de', color: '#2D5016', padding: '12px 20px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' }}>
                        {flash.success}
                    </div>
                )}

                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '8px' }}>Keranjang Belanja</div>
                <div style={{ color: '#888', fontSize: '14px', marginBottom: '36px' }}>{cartItems.length} produk di keranjang kamu</div>

                {cartItems.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: '#888' }}>
                        <div style={{ fontSize: '72px', marginBottom: '20px' }}>🛒</div>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#1a1a1a', marginBottom: '8px' }}>Keranjang kamu kosong</div>
                        <p>Yuk, tambahkan produk favoritmu!</p>
                        <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 28px', background: '#2D5016', color: 'white', borderRadius: '50px', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Lihat Produk</a>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {cartItems.map(item => (
                                <div key={item.id} style={{ background: 'white', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                                    <div style={{ width: '72px', height: '72px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={`/images/${item.product.image}`} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display = 'none'} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', marginBottom: '4px' }}>{item.product.name}</div>
                                        <div style={{ color: '#2D5016', fontSize: '15px', fontWeight: '500' }}>Rp {parseInt(item.product.price).toLocaleString('id-ID')}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <button onClick={() => updateQty(item.id, item.quantity - 1)} style={{ width: '32px', height: '32px', border: '1.5px solid #e0e0e0', background: 'white', borderRadius: '50%', fontSize: '16px', cursor: 'pointer' }}>−</button>
                                        <span style={{ fontSize: '16px', fontWeight: '500', minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
                                        <button onClick={() => updateQty(item.id, item.quantity + 1)} style={{ width: '32px', height: '32px', border: '1.5px solid #e0e0e0', background: 'white', borderRadius: '50%', fontSize: '16px', cursor: 'pointer' }}>+</button>
                                    </div>
                                    <div style={{ fontWeight: '600', fontSize: '16px', minWidth: '100px', textAlign: 'right' }}>
                                        Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                                    </div>
                                    <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '18px' }}>✕</button>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: 'fit-content', position: 'sticky', top: '90px' }}>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', marginBottom: '20px' }}>Ringkasan Pesanan</div>
                            {cartItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#666', marginBottom: '12px' }}>
                                    <span>{item.product.name} x{item.quantity}</span>
                                    <span>Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}</span>
                                </div>
                            ))}
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '600', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
                                <span>Total</span>
                                <span>Rp {total.toLocaleString('id-ID')}</span>
                            </div>
                            <a href="/checkout" style={{ display: 'block', width: '100%', padding: '14px', background: '#2D5016', color: 'white', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', textAlign: 'center', textDecoration: 'none', marginTop: '20px', boxSizing: 'border-box' }}>
                                Checkout Sekarang →
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}