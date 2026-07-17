<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sweet Bite - Artisan Baked Goods</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #f5f5f0; color: #1a1a1a; }

        /* NAVBAR */
        nav {
            background: white;
            padding: 0 60px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 1px 12px rgba(0,0,0,0.06);
        }
        .nav-logo {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            color: #2D5016;
            font-weight: 700;
        }
        .nav-logo span { font-size: 13px; display: block; font-family: 'Inter', sans-serif; color: #888; font-weight: 400; }
        .nav-links { display: flex; align-items: center; gap: 24px; }
        .nav-links a {
            text-decoration: none;
            color: #444;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s;
        }
        .nav-links a:hover { color: #2D5016; }
        .btn-nav {
            padding: 9px 22px;
            background: #2D5016;
            color: white !important;
            border-radius: 50px;
            font-size: 13px !important;
        }
        .btn-nav:hover { background: #3a6b1e; opacity: 0.9; }

        /* HERO */
        .hero {
            background: linear-gradient(135deg, #2D5016 0%, #3a6b1e 50%, #4a8525 100%);
            padding: 100px 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 520px;
        }
        .hero-text { max-width: 520px; }
        .hero-badge {
            display: inline-block;
            background: rgba(255,255,255,0.15);
            color: white;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 12px;
            letter-spacing: 0.05em;
            margin-bottom: 24px;
        }
        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            color: white;
            line-height: 1.15;
            margin-bottom: 20px;
        }
        .hero p {
            color: rgba(255,255,255,0.8);
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 36px;
        }
        .hero-btns { display: flex; gap: 16px; }
        .btn-primary {
            padding: 14px 32px;
            background: white;
            color: #2D5016;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: transform 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); }
        .btn-secondary {
            padding: 14px 32px;
            background: transparent;
            color: white;
            border: 2px solid rgba(255,255,255,0.5);
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            transition: all 0.2s;
        }
        .btn-secondary:hover { border-color: white; }
        .hero-emoji { font-size: 160px; line-height: 1; }

        /* STATS */
        .stats {
            background: white;
            padding: 32px 60px;
            display: flex;
            gap: 60px;
            border-bottom: 1px solid #f0f0f0;
        }
        .stat-item { text-align: center; }
        .stat-num {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            color: #2D5016;
            font-weight: 700;
        }
        .stat-label { font-size: 12px; color: #888; margin-top: 4px; }

        /* PRODUCTS */
        .products-section { padding: 80px 60px; }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-tag {
            display: inline-block;
            background: #eaf3de;
            color: #2D5016;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 16px;
        }
        .section-header h2 {
            font-family: 'Playfair Display', serif;
            font-size: 40px;
            color: #1a1a1a;
            margin-bottom: 12px;
        }
        .section-header p { color: #888; font-size: 15px; }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 28px;
        }
        .product-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .product-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }
        .product-img-placeholder {
            width: 100%;
            height: 220px;
            background: #eaf3de;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 72px;
        }
        .product-info { padding: 20px 24px 24px; }
        .product-category {
            font-size: 11px;
            color: #2D5016;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 8px;
        }
        .product-name {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            color: #1a1a1a;
            margin-bottom: 8px;
        }
        .product-desc {
            font-size: 13px;
            color: #888;
            line-height: 1.6;
            margin-bottom: 16px;
        }
        .product-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .product-price {
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            color: #2D5016;
            font-weight: 700;
        }
        .btn-add {
            padding: 10px 20px;
            background: #2D5016;
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            transition: background 0.2s;
        }
        .btn-add:hover { background: #3a6b1e; }

        /* FOOTER */
        footer {
            background: #1a2e0a;
            color: rgba(255,255,255,0.7);
            text-align: center;
            padding: 40px 60px;
            font-size: 13px;
        }
        footer .footer-logo {
            font-family: 'Playfair Display', serif;
            color: white;
            font-size: 22px;
            margin-bottom: 12px;
        }

        /* ALERT */
        .alert {
            padding: 12px 20px;
            border-radius: 10px;
            margin: 16px 60px 0;
            font-size: 14px;
        }
        .alert-success { background: #eaf3de; color: #2D5016; }
        .alert-error { background: #fff0f0; color: #c0392b; }

        /* MODAL */
        .modal-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 200;
            align-items: center;
            justify-content: center;
        }
        .modal-overlay.active { display: flex; }
        .modal {
            background: white;
            border-radius: 20px;
            padding: 36px;
            width: 400px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }
        .modal h3 {
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            margin-bottom: 8px;
        }
        .modal p { color: #888; font-size: 14px; margin-bottom: 24px; }
        .modal-product { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
        .modal-product-img {
            width: 60px; height: 60px;
            border-radius: 12px;
            background: #eaf3de;
            display: flex; align-items: center; justify-content: center;
            font-size: 28px;
        }
        .modal-product-name { font-weight: 500; font-size: 15px; }
        .modal-product-price { color: #2D5016; font-size: 14px; }
        .qty-control { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
        .qty-btn {
            width: 36px; height: 36px;
            border: 1.5px solid #e0e0e0;
            background: white;
            border-radius: 50%;
            font-size: 18px;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.2s;
        }
        .qty-btn:hover { border-color: #2D5016; color: #2D5016; }
        .qty-num { font-size: 20px; font-weight: 500; min-width: 32px; text-align: center; }
        .modal-btns { display: flex; gap: 12px; }
        .btn-cancel {
            flex: 1; padding: 12px;
            border: 1.5px solid #e0e0e0;
            background: white;
            border-radius: 10px;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            transition: all 0.2s;
        }
        .btn-cancel:hover { border-color: #ccc; }
        .btn-confirm {
            flex: 2; padding: 12px;
            background: #2D5016;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            font-weight: 500;
            transition: background 0.2s;
        }
        .btn-confirm:hover { background: #3a6b1e; }
    </style>
</head>
<body>

<nav>
    <div class="nav-logo">
        Sweet Bite
        <span>Artisan Baked Goods</span>
    </div>
    <div class="nav-links">
        <a href="/">Beranda</a>
        <a href="#products">Produk</a>
        @auth
            <a href="/cart">🛒 Keranjang</a>
            <a href="/orders">Pesanan Saya</a>
            <form method="POST" action="/logout" style="display:inline;">
                @csrf
                <button type="submit" style="background:none;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:14px;color:#444;font-weight:500;">Keluar</button>
            </form>
        @else
            <a href="/login">Masuk</a>
            <a href="/register" class="btn-nav">Daftar</a>
        @endauth
    </div>
</nav>

@if(session('success'))
    <div class="alert alert-success">{{ session('success') }}</div>
@endif
@if(session('error'))
    <div class="alert alert-error">{{ session('error') }}</div>
@endif

<section class="hero">
    <div class="hero-text">
        <div class="hero-badge">🌿 Freshly Baked Every Day</div>
        <h1>Nikmati Setiap Gigitan yang Istimewa</h1>
        <p>Dibuat dengan bahan-bahan premium pilihan, setiap produk Sweet Bite menghadirkan pengalaman rasa yang tak terlupakan.</p>
        <div class="hero-btns">
            <a href="#products" class="btn-primary">Lihat Produk</a>
            <a href="/register" class="btn-secondary">Bergabung Gratis</a>
        </div>
    </div>
    <div class="hero-emoji">🍰</div>
</section>

<div class="stats">
    <div class="stat-item">
        <div class="stat-num">100+</div>
        <div class="stat-label">Pelanggan Puas</div>
    </div>
    <div class="stat-item">
        <div class="stat-num">{{ $products->count() }}</div>
        <div class="stat-label">Produk Tersedia</div>
    </div>
    <div class="stat-item">
        <div class="stat-num">Fresh</div>
        <div class="stat-label">Dibuat Setiap Hari</div>
    </div>
    <div class="stat-item">
        <div class="stat-num">⭐ 4.9</div>
        <div class="stat-label">Rating Pelanggan</div>
    </div>
</div>

<section class="products-section" id="products">
    <div class="section-header">
        <div class="section-tag">Menu Kami</div>
        <h2>Pilihan Terbaik untuk Kamu</h2>
        <p>Semua dibuat fresh setiap hari dengan bahan pilihan</p>
    </div>
    <div class="products-grid">
        @foreach($products as $product)
        <div class="product-card">
            @if(file_exists(public_path('images/' . $product->image)))
                <img src="/images/{{ $product->image }}" alt="{{ $product->name }}" class="product-img">
            @else
                <div class="product-img-placeholder">🍰</div>
            @endif
            <div class="product-info">
                <div class="product-category">{{ $product->category }}</div>
                <div class="product-name">{{ $product->name }}</div>
                <div class="product-desc">{{ $product->description }}</div>
                <div class="product-footer">
                    <div class="product-price">Rp {{ number_format($product->price, 0, ',', '.') }}</div>
                    @auth
                        <button class="btn-add" onclick="openModal({{ $product->id }}, '{{ $product->name }}', '{{ $product->price }}')">+ Keranjang</button>
                    @else
                        <a href="/login" class="btn-add" style="text-decoration:none;">+ Keranjang</a>
                    @endauth
                </div>
            </div>
        </div>
        @endforeach
    </div>
</section>

<footer>
    <div class="footer-logo">Sweet Bite</div>
    <p>Artisan baked goods made with love & care</p>
    <p style="margin-top:8px;">© 2024 Sweet Bite. All rights reserved.</p>
</footer>

<!-- MODAL ADD TO CART -->
<div class="modal-overlay" id="modalOverlay">
    <div class="modal">
        <h3>Tambah ke Keranjang</h3>
        <p>Pilih jumlah yang kamu inginkan</p>
        <div class="modal-product">
            <div class="modal-product-img">🍰</div>
            <div>
                <div class="modal-product-name" id="modalProductName"></div>
                <div class="modal-product-price" id="modalProductPrice"></div>
            </div>
        </div>
        <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <div class="qty-num" id="qtyNum">1</div>
            <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        <form method="POST" action="/cart/add" id="addToCartForm">
            @csrf
            <input type="hidden" name="product_id" id="modalProductId">
            <input type="hidden" name="quantity" id="modalQty" value="1">
            <div class="modal-btns">
                <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                <button type="submit" class="btn-confirm">Tambahkan 🛒</button>
            </div>
        </form>
    </div>
</div>

<script>
    let qty = 1;
    function openModal(id, name, price) {
        qty = 1;
        document.getElementById('modalProductId').value = id;
        document.getElementById('modalProductName').textContent = name;
        document.getElementById('modalProductPrice').textContent = 'Rp ' + parseInt(price).toLocaleString('id-ID');
        document.getElementById('qtyNum').textContent = qty;
        document.getElementById('modalQty').value = qty;
        document.getElementById('modalOverlay').classList.add('active');
    }
    function closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
    }
    function changeQty(val) {
        qty = Math.max(1, qty + val);
        document.getElementById('qtyNum').textContent = qty;
        document.getElementById('modalQty').value = qty;
    }
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
</script>

</body>
</html>