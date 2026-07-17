import { useState } from 'react';
import { router } from '@inertiajs/react';
import Layout from './Layout';

export default function Checkout({ cartItems, total, auth }) {
    const [form, setForm] = useState({ address: '', phone: '' });

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/checkout', form);
    }

    return (
        <Layout auth={auth}>
            <div style={{ maxWidth: '900px', margin: '48px auto', padding: '0 24px' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '8px' }}>Checkout</div>
                <div style={{ color: '#888', fontSize: '14px', marginBottom: '36px' }}>Lengkapi data pengiriman kamu</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px' }}>
                    <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', marginBottom: '24px' }}>Data Pengiriman</div>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Nomor Telepon</label>
                                <input
                                    type="text"
                                    value={form.phone}
                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                    placeholder="08xxxxxxxxxx"
                                    required
                                    style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Alamat Lengkap</label>
                                <textarea
                                    value={form.address}
                                    onChange={e => setForm({ ...form, address: e.target.value })}
                                    placeholder="Jl. Contoh No. 123, Kota, Provinsi"
                                    required
                                    rows={4}
                                    style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
                                />
                            </div>
                            <button type="submit" style={{
                                width: '100%', padding: '14px', background: '#2D5016', color: 'white',
                                border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: '500',
                                cursor: 'pointer'
                            }}>Buat Pesanan →</button>
                        </form>
                    </div>

                    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: 'fit-content' }}>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', marginBottom: '20px' }}>Pesanan Kamu</div>
                        {cartItems.map(item => (
                            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#eaf3de', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0, overflow: 'hidden' }}>
                                    <img src={`/images/${item.product.image}`} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display = 'none'} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '14px', fontWeight: '500' }}>{item.product.name}</div>
                                    <div style={{ fontSize: '12px', color: '#888' }}>x{item.quantity}</div>
                                </div>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>
                                    Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                                </div>
                            </div>
                        ))}
                        <div style={{ borderTop: '1px solid #f0f0f0', marginTop: '16px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '600' }}>
                            <span>Total</span>
                            <span>Rp {parseInt(total).toLocaleString('id-ID')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}