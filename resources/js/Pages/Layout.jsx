import { Link } from '@inertiajs/react';

export default function Layout({ children, auth }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif', background: '#f5f5f0', minHeight: '100vh' }}>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
            
            <nav style={{
                background: 'white',
                padding: '0 60px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <Link href="/" style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '24px',
                    color: '#2D5016',
                    fontWeight: '700',
                    textDecoration: 'none'
                }}>
                    Sweet Bite
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <Link href="/" style={{ textDecoration: 'none', color: '#444', fontSize: '14px', fontWeight: '500' }}>Beranda</Link>
                    {auth?.user ? (
                        <>
                            <Link href="/cart" style={{ textDecoration: 'none', color: '#444', fontSize: '14px', fontWeight: '500' }}>🛒 Keranjang</Link>
                            <Link href="/orders" style={{ textDecoration: 'none', color: '#444', fontSize: '14px', fontWeight: '500' }}>Pesanan</Link>
                            <Link href="/logout" method="post" as="button" style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                fontSize: '14px', color: '#444', fontWeight: '500'
                            }}>Keluar</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/login" style={{ textDecoration: 'none', color: '#444', fontSize: '14px', fontWeight: '500' }}>Masuk</Link>
                            <Link href="/register" style={{
                                padding: '9px 22px',
                                background: '#2D5016',
                                color: 'white',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: '500'
                            }}>Daftar</Link>
                        </>
                    )}
                </div>
            </nav>

            <main>{children}</main>

            <footer style={{
                background: '#1a2e0a',
                color: 'rgba(255,255,255,0.7)',
                textAlign: 'center',
                padding: '40px 60px',
                fontSize: '13px',
                marginTop: '80px'
            }}>
                <div style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: '22px', marginBottom: '12px' }}>Sweet Bite</div>
                <p>Artisan baked goods made with love & care</p>
                <p style={{ marginTop: '8px' }}>© 2026 Sweet Bite. All rights reserved.</p>
            </footer>
        </div>
    );
}