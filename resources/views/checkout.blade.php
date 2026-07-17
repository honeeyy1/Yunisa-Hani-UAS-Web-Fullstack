<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Sweet Bite</title>
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
        .nav-links a { text-decoration: none; color: #444; font-size: 14px; font-weight: 500; }
        .nav-links a:hover { color: #2D5016; }
        .container { max-width: 900px; margin: 48px auto; padding: 0 24px; }
        .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            margin-bottom: 8px;
        }
        .page-sub { color: #888; font-size: 14px; margin-bottom: 36px; }
        .checkout-layout { display: grid; grid-template-columns: 1fr 320px; gap: 24px; }

        .form-card {
            background: white;
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .form-card h3 {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            margin-bottom: 24px;
        }
        .form-group { margin-bottom: 20px; }
        label {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: #444;
            margin-bottom: 8px;
        }
        input, textarea {
            width: 100%;
            padding: 12px 16px;
            border: 1.5px solid #e0e0e0;
            border-radius: 10px;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            transition: border 0.2s;
            outline: none;
        }
        input:focus, textarea:focus { border-color: #2D5016; }
        textarea { resize: vertical; min-height: 100px; }
        .btn-order {
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
            transition: background 0.2s;
            margin-top: 8px;
        }
        .btn-order:hover { background: #3a6b1e; }

        .order-summary {
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
        .summary-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }
        .summary-item-img {
            width: 48px; height: 48px;
            border-radius: 10px;
            background: #eaf3de;
            display: flex; align-items: center; justify-content: center;
            font-size: 22px;
            flex-shrink: 0;
            overflow: hidden;
        }
        .summary-item-img img { width: 100%; height: 100%; object-fit: cover; }
        .summary-item-name { font-size: 14px; font-weight: 500; }
        .summary-item-qty { font-size: 12px; color: #888; }
        .summary-item-price { margin-left: auto; font-size: 14px; font-weight: 500; }
        .divider { border: none; border-top: 1px solid #f0f0f0; margin: 16px 0; }
        .summary-total {
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: 600;
        }
        .error { background: #fff0f0; color: #c0392b; padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 16px; }
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
    <div class="page-title">Checkout</div>
    <div class="page-sub">Lengkapi data pengiriman kamu</div>

    <div class="checkout-layout">
        <div class="form-card">
            <h3>Data Pengiriman</h3>
            @if($errors->any())
                <div class="error">{{ $errors->first() }}</div>
            @endif
            <form method="POST" action="/checkout">
                @csrf
                <div class="form-group">
                    <label>Nomor Telepon</label>
                    <input type="text" name="phone" placeholder="08xxxxxxxxxx" value="{{ old('phone') }}" required>
                </div>
                <div class="form-group">
                    <label>Alamat Lengkap</label>
                    <textarea name="address" placeholder="Jl. Contoh No. 123, Kota, Provinsi" required>{{ old('address') }}</textarea>
                </div>
                <button type="submit" class="btn-order">Buat Pesanan →</button>
            </form>
        </div>

        <div class="order-summary">
            <div class="summary-title">Pesanan Kamu</div>
            @foreach($cartItems as $item)
            <div class="summary-item">
                <div class="summary-item-img">
                    @if(file_exists(public_path('images/' . $item->product->image)))
                        <img src="/images/{{ $item->product->image }}" alt="{{ $item->product->name }}">
                    @else
                        🍰
                    @endif
                </div>
                <div>
                    <div class="summary-item-name">{{ $item->product->name }}</div>
                    <div class="summary-item-qty">x{{ $item->quantity }}</div>
                </div>
                <div class="summary-item-price">Rp {{ number_format($item->product->price * $item->quantity, 0, ',', '.') }}</div>
            </div>
            @endforeach
            <hr class="divider">
            <div class="summary-total">
                <span>Total</span>
                <span>Rp {{ number_format($total, 0, ',', '.') }}</span>
            </div>
        </div>
    </div>
</div>
</body>
</html>