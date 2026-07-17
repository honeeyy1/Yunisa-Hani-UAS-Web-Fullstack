import { Link } from '@inertiajs/react';

export default function Dashboard({ totalProducts, totalOrders, totalUsers, totalRevenue, recentOrders }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif', background: '#f5f5f0', minHeight: '100vh' }}>
            {/* SIDEBAR */}
            <div style={{ display: 'flex' }}>
                <div style={{
                    width: '240px', background: '#1a2e0a', minHeight: '100vh',
                    padding: '32px 24px', position: 'fixed', top: 0, left: 0
                }}>
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
                            textDecoration: 'none', borderRadius: '10px', marginBottom: '8px',
                            fontSize: '14px', transition: 'background 0.2s'
                        }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >{item.label}</Link>
                    ))}
                </div>

                {/* MAIN */}
                <div style={{ marginLeft: '270px', flex: 1, padding: '40px' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', marginBottom: '8px' }}>Dashboard</div>
                    <div style={{ color: '#888', fontSize: '14px', marginBottom: '36px' }}>Selamat datang di Admin Panel Sweet Bite</div>

                    {/* STATS */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
                        {[
                            { label: 'Total Produk', value: totalProducts, icon: '🍰', color: '#eaf3de' },
                            { label: 'Total Pesanan', value: totalOrders, icon: '📦', color: '#e0f2fe' },
                            { label: 'Total User', value: totalUsers, icon: '👤', color: '#fef9c3' },
                            { label: 'Total Pendapatan', value: `Rp ${parseInt(totalRevenue).toLocaleString('id-ID')}`, icon: '💰', color: '#fce7f3' },
                        ].map((stat, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '48px', height: '48px', background: stat.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>{stat.icon}</div>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#888' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* RECENT ORDERS */}
                    <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', marginBottom: '20px' }}>Pesanan Terbaru</div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#f9fafb' }}>
                                    {['#', 'Customer', 'Total', 'Status', 'Tanggal'].map(h => (
                                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', color: '#666', fontWeight: '500' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map(order => (
                                    <tr key={order.id} style={{ borderTop: '1px solid #f0f0f0' }}>
                                        <td style={{ padding: '12px 16px', fontSize: '14px' }}>#{order.id}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '14px' }}>{order.user?.name}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '14px' }}>Rp {parseInt(order.total_price).toLocaleString('id-ID')}</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <span style={{
                                                padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '500',
                                                background: order.status === 'pending' ? '#fff8e1' : order.status === 'completed' ? '#eaf3de' : '#fff0f0',
                                                color: order.status === 'pending' ? '#f59e0b' : order.status === 'completed' ? '#2D5016' : '#e74c3c'
                                            }}>{order.status}</span>
                                        </td>
                                        <td style={{ padding: '12px 16px', fontSize: '14px', color: '#888' }}>{new Date(order.created_at).toLocaleDateString('id-ID')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}