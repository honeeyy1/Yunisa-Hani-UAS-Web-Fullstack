import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Register({ errors }) {
    const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '' });

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/register', form);
    }

    return (
        <div style={{ fontFamily: 'Inter, sans-serif', background: '#f5f5f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
            <div style={{ display: 'flex', width: '900px', minHeight: '560px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                <div style={{ flex: 1, background: '#2D5016', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px', color: 'white' }}>
                    <div style={{ fontSize: '64px', marginBottom: '24px' }}>🌿</div>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', marginBottom: '12px' }}>Sweet Bite</h1>
                    <p style={{ fontSize: '14px', opacity: 0.8, textAlign: 'center', lineHeight: 1.8 }}>Bergabung bersama kami<br />dan nikmati kelezatan<br />artisan baked goods</p>
                </div>
                <div style={{ flex: 1, background: 'white', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#1a1a1a', marginBottom: '8px' }}>Buat akun baru</h2>
                    <p style={{ color: '#888', fontSize: '14px', marginBottom: '32px' }}>Daftar gratis, mudah & cepat</p>

                    {errors?.email && (
                        <div style={{ background: '#fff0f0', color: '#c0392b', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', marginBottom: '16px' }}>
                            {errors.email}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Nama Lengkap</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                placeholder="Nama kamu"
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                placeholder="email@kamu.com"
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Password</label>
                            <input
                                type="password"
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                placeholder="Minimal 6 karakter"
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#444', marginBottom: '8px' }}>Konfirmasi Password</label>
                            <input
                                type="password"
                                value={form.password_confirmation}
                                onChange={e => setForm({ ...form, password_confirmation: e.target.value })}
                                placeholder="Ulangi password"
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                            />
                        </div>
                        <button type="submit" style={{
                            width: '100%', padding: '13px', background: '#2D5016', color: 'white',
                            border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '500',
                            cursor: 'pointer', marginTop: '8px'
                        }}>Daftar Sekarang</button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#888' }}>
                        Sudah punya akun? <a href="/login" style={{ color: '#2D5016', textDecoration: 'none', fontWeight: '500' }}>Masuk di sini</a>
                    </div>
                </div>
            </div>
        </div>
    );
}