<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keranjang - Sweet Bite</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #f5f5f0; color: #1a1a1a; }
        nav {
            background: white;
            padding: 0 60px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 1px 12px rgba(0,0,0,0.06);
        }
        .nav-logo {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            color: #2D5016;
            font-weight: 700;
            text-decoration: none;
        }
        .nav-links { display: flex; align-items: center; gap: 24px; }
        .nav-links a {
            text-decoration: none;
            color: #444;
            font-size: 14px;
            font-weight: 500;
        }
        .nav-links a:hover { color: #2D5016; }
        .container { max-width: 900px; margin: 48px auto; padding: 0 24px; }
        .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            color: #1a1a1a;
            margin-bottom: 8px;
        }
        .page-sub { color: #888; font-size: 14px; margin-bottom: 36px; }
        .cart-layout { display: grid; grid-template-columns: 1fr 320px; gap: 24px; }
        .cart-items { display: flex; flex-direction: column; gap: 16px; }
        .cart-item {
            background: white;
            border-radius: 16px;
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .item-img {
            width: 72px; height: 72px;
            border-radius: 12px;
            background: #eaf3de;
            display: flex; align-items: center; justify-content: center;
            font-size: 32px;
            flex-shrink: 0;
            overflow: hidden;
        }
        .item-img img { width: 100%; height: 100%; object-fit: cover; }
        .item-info { flex: 1; }
        .item-name {
            font-family: 'Playfair Display', serif;
            font-size: 18px;
            margin-bottom: 4px;
        }
        .item-price { color: #2D5016; font-size: 15px; font-weight: 500; }
        .item-qty {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .qty-btn {
            width: 32px; height: 32px;
            border: 1.5px solid #e0e0e0;
            background: white;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.2s;
        }
        .qty-btn:hover { border-color: #2D5016; color: #2D5016; }
        .qty-num { font-size: 16px; font-weight: 500; min-width: 24px; text-align: center; }
        .item-total { font-weight: 600; font-size: 16px; min-width: 100px; text-align: right; }
        .btn-remove {
            background: none;
            border: none;
            color: #ccc;
            cursor: pointer;
            font-size: 18px;
            transition: color 0.2s;
            padding: 4px;
        }
        .btn-remove:hover { color: #e74c3c; }

        /* SUMMARY */
        .cart-summary {
            background: white;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
            height: fit-content;
            position: sticky;
            top: 90px;
        }
        .summary-title {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            margin-bottom: 20px;
        }
        .summary-row {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #666;
            margin-bottom: 12px;
        }
        .summary-total {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #f0f0f0;
        }
        .btn-checkout {
            display: block;
            width: 100%;
            padding: 14px;
            background: #2D5016;
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            text-align: center;
            text-decoration: none;
            margin-top: 20px;
            transition: background 0.2s;
        }
        .btn-checkout:hover { background: #3a6b1e; }
        .empty-cart {
            text-align: center;
            padding: 80px 0;
            color: #888;
        }
        .empty-cart .icon { font-size: 72px; margin-bottom: 20px; }
        .empty-cart h3 {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            color: #1a1a1a;
            margin-bottom: 8px;
        }
        .empty-cart a {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 28px;
            background: #2D5016;
            color: white;
            border-radius: 50px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
        }
        .alert { padding: 12px 20px; border-radius: 10px; margin-bottom: 20px; font-size: 14px; }
        .alert-success { background: #eaf3de; color: #2D5016; }
    </style>
</head>
<body>
<nav>
    <a href="/" class="nav-logo">Sweet Bite</a>
    <div class="nav-links">
        <a href="/">Beranda</a>
        <a href="/cart">🛒 Keranjang</a>
        <a href="/orders">Pesanan Saya</a>
        <form method="POST" action="/logout" style="display:inline;">
            @csrf
            <button type="submit" style="background:none;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:14px;color:#444;font-weight:500;">Keluar</button>
        </form>
    </div>
</nav>

<div class="container">
    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <div class="page-title">Keranjang Belanja</div>
    <div class="page-sub">{{ $cartItems->count() }} produk di keranjang kamu</div>

    @if($cartItems->isEmpty())
        <div class="empty-cart">
            <div class="icon">🛒</div>
            <h3>Keranjang kamu kosong</h3>
            <p>Yuk, tambahkan produk favoritmu!</p>
            <a href="/">Lihat Produk</a>
        </div>
    @else
        <div class="cart-layout">
            <div class="cart-items">
                @foreach($cartItems as $item)
                <div class="cart-item">
                    <div class="item-img">
                        @if(file_exists(public_path('images/' . $item->product->image)))
                            <img src="/images/{{ $item->product->image }}" alt="{{ $item->product->name }}">
                        @else
                            🍰
                        @endif
                    </div>
                    <div class="item-info">
                        <div class="item-name">{{ $item->product->name }}</div>
                        <div class="item-price">Rp {{ number_format($item->product->price, 0, ',', '.') }}</div>
                    </div>
                    <form method="POST" action="/cart/{{ $item->id }}" style="display:flex;align-items:center;gap:12px;">
                        @csrf
                        @method('PATCH')
                        <div class="item-qty">
                            <button type="button" class="qty-btn" onclick="changeQty(this, -1)">−</button>
                            <input type="number" name="quantity" value="{{ $item->quantity }}" min="1" class="qty-num" style="border:none;width:32px;text-align:center;font-size:16px;font-weight:500;" onchange="this.form.submit()">
                            <button type="button" class="qty-btn" onclick="changeQty(this, 1)">+</button>
                        </div>
                    </form>
                    <div class="item-total">Rp {{ number_format($item->product->price * $item->quantity, 0, ',', '.') }}</div>
                    <form method="POST" action="/cart/{{ $item->id }}">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn-remove" title="Hapus">✕</button>
                    </form>
                </div>
                @endforeach
            </div>

            <div class="cart-summary">
                <div class="summary-title">Ringkasan Pesanan</div>
                @foreach($cartItems as $item)
                <div class="summary-row">
                    <span>{{ $item->product->name }} x{{ $item->quantity }}</span>
                    <span>Rp {{ number_format($item->product->price * $item->quantity, 0, ',', '.') }}</span>
                </div>
                @endforeach
                <div class="summary-total">
                    <span>Total</span>
                    <span>Rp {{ number_format($cartItems->sum(fn($i) => $i->product->price * $i->quantity), 0, ',', '.') }}</span>
                </div>
                <a href="/checkout" class="btn-checkout">Checkout Sekarang →</a>
            </div>
        </div>
    @endif
</div>

<script>
function changeQty(btn, val) {
    const input = btn.parentElement.querySelector('input');
    const newVal = Math.max(1, parseInt(input.value) + val);
    input.value = newVal;
    input.form.submit();
}
</script>
</body>
</html>