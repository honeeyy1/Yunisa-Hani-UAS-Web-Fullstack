import { useState } from 'react';
import { Link, router } from '@inertiajs/react';

export default function Orders({ orders, flash }) {
    function updateStatus(id, status) {
        router.patch(`/admin/orders/${id}`, { status });
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
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', marginBottom: '8px' }}>Kelola Pesanan</div>
                <div style={{ color: '#888', fontSize: '14px', marginBottom: '36px' }}>{orders.length} pesanan masuk</div>

                {flash?.success && (
                    <div style={{ background: '#eaf3de', color: '#2D5016', padding: '12px 20px', borderRadius: '10px', marginBottom: '20px', fontSize: '14px' }}>
                        {flash.success}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {orders.map(order => (
                        <div key={order.id} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #f0f0f0' }}>
                                <div>
                                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px' }}>Pesanan #{order.id}</div>
                                    <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
                                        {order.user?.name} • {new Date(order.created_at).toLocaleDateString('id-ID')}
                                    </div>
                                    <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>📍 {order.address} • 📞 {order.phone}</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <select
                                        value={order.status}
                                        onChange={e => updateStatus(order.id, e.target.value)}
                                        style={{ padding: '8px 12px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '13px', outline: 'none', cursor: 'pointer' }}
                                    >
                                        <option value="pending">⏳ Menunggu</option>
                                        <option value="processing">🔄 Diproses</option>
                                        <option value="completed">✅ Selesai</option>
                                        <option value="cancelled">❌ Dibatalkan</option>
                                    </select>
                                    <div style={{ fontWeight: '600', fontSize: '16px', color: '#2D5016' }}>
                                        Rp {parseInt(order.total_price).toLocaleString('id-ID')}
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                {order.items.map(item => (
                                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f9fafb', padding: '8px 12px', borderRadius: '8px' }}>
                                        <img src={`/images/${item.product?.image}`} alt={item.product?.name} style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '6px' }} onError={e => e.target.style.display = 'none'} />
                                        <span style={{ fontSize: '13px' }}>{item.product?.name} x{item.quantity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}