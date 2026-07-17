import Layout from './Layout';

export default function Orders({ orders, auth }) {
    return (
        <Layout auth={auth}>
            <div style={{ maxWidth: '800px', margin: '48px auto', padding: '0 24px' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '8px' }}>Pesanan Saya</div>
                <div style={{ color: '#888', fontSize: '14px', marginBottom: '36px' }}>Riwayat semua pesanan kamu</div>

                {orders.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: '#888' }}>
                        <div style={{ fontSize: '72px', marginBottom: '20px' }}>📦</div>
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#1a1a1a', marginBottom: '8px' }}>Belum ada pesanan</div>
                        <p>Yuk, mulai belanja produk favoritmu!</p>
                        <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 28px', background: '#2D5016', color: 'white', borderRadius: '50px', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Lihat Produk</a>
                    </div>
                ) : (
                    orders.map(order => (
                        <div key={order.id} style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #f0f0f0' }}>
                                <div>
                                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px' }}>Pesanan #{order.id}</div>
                                    <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{new Date(order.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                                </div>
                                <div style={{
                                    padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '500',
                                    background: order.status === 'pending' ? '#fff8e1' : order.status === 'completed' ? '#eaf3de' : '#fff0f0',
                                    color: order.status === 'pending' ? '#f59e0b' : order.status === 'completed' ? '#2D5016' : '#e74c3c'
                                }}>
                                    {order.status === 'pending' ? '⏳ Menunggu' : order.status === 'completed' ? '✅ Selesai' : '❌ Dibatalkan'}
                                </div>
                            </div>

                            {order.items.map(item => (
                                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid #f8f8f8' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#eaf3de', overflow: 'hidden', flexShrink: 0 }}>
                                        <img src={`/images/${item.product?.image}`} alt={item.product?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display = 'none'} />
                                    </div>
                                    <div style={{ flex: 1, fontSize: '14px', fontWeight: '500' }}>{item.product?.name}</div>
                                    <div style={{ fontSize: '13px', color: '#888' }}>x{item.quantity}</div>
                                    <div style={{ fontSize: '14px', fontWeight: '500' }}>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</div>
                                </div>
                            ))}

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', marginTop: '8px' }}>
                                <div style={{ fontSize: '13px', color: '#888' }}>📍 {order.address}</div>
                                <div style={{ fontSize: '18px', fontWeight: '600', color: '#2D5016' }}>Rp {parseInt(order.total_price).toLocaleString('id-ID')}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Layout>
    );
}