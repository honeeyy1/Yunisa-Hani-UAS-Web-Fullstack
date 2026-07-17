<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesanan Saya - Sweet Bite</title>
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
        .container { max-width: 800px; margin: 48px auto; padding: 0 24px; }
        .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            margin-bottom: 8px;
        }
        .page-sub { color: #888; font-size: 14px; margin-bottom: 36px; }

        .order-card {
            background: white;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
            margin-bottom: 20px;
        }
        .order-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid #f0f0f0;
        }
        .order-id {
            font-family: 'Playfair Display', serif;
            font-size: 18px;
        }
        .order-date { font-size: 13px; color: #888; margin-top: 4px; }
        .status-badge {
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 500;
        }
        .status-pending { background: #fff8e1; color: #f59e0b; }
        .status-processing { background: #e0f2fe; color: #0284c7; }
        .status-completed { background: #eaf3de; color: #2D5016; }
        .status-cancelled { background: #fff0f0; color: #e74c3c; }

        .order-items { margin-bottom: 16px; }
        .order-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid #f8f8f8;
        }
        .order-item:last-child { border-bottom: none; }
        .item-img {
            width: 44px; height: 44px;
            border-radius: 10px;
            background: #eaf3de;
            display: flex; align-items: center; justify-content: center;
            font-size: 20px;
            flex-shrink: 0;
            overflow: hidden;
        }
        .item-img img { width: 100%; height: 100%; object-fit: cover; }
        .item-name { font-size: 14px; font-weight: 500; flex: 1; }
        .item-qty { font-size: 13px; color: #888; }
        .item-price { font-size: 14px; font-weight: 500; }

        .order-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 16px;
            border-top: 1px solid #f0f0f0;
        }
        .order-address { font-size: 13px; color: #888; }
        .order-total { font-size: 18px; font-weight: 600; color: #2D5016; }

        .empty-orders {
            text-align: center;
            padding: 80px 0;
            color: #888;
        }
        .empty-orders .icon { font-size: 72px; margin-bottom: 20px; }
        .empty-orders h3 {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            color: #1a1a1a;
            margin-bottom: 8px;
        }
        .empty-orders a {
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

    <div class="page-title">Pesanan Saya</div>
    <div class="page-sub">Riwayat semua pesanan kamu</div>

    @if($orders->isEmpty())
        <div class="empty-orders">
            <div class="icon">📦</div>
            <h3>Belum ada pesanan</h3>
            <p>Yuk, mulai belanja produk favoritmu!</p>
            <a href="/">Lihat Produk</a>
        </div>
    @else
        @foreach($orders as $order)
        <div class="order-card">
            <div class="order-header">
                <div>
                    <div class="order-id">Pesanan #{{ $order->id }}</div>
                    <div class="order-date">{{ $order->created_at->format('d M Y, H:i') }}</div>
                </div>
                <div class="status-badge status-{{ $order->status }}">
                    @if($order->status == 'pending') ⏳ Menunggu
                    @elseif($order->status == 'processing') 🔄 Diproses
                    @elseif($order->status == 'completed') ✅ Selesai
                    @else ❌ Dibatalkan
                    @endif
                </div>
            </div>

            <div class="order-items">
                @foreach($order->items as $item)
                <div class="order-item">
                    <div class="item-img">
                        @if($item->product && file_exists(public_path('images/' . $item->product->image)))
                            <img src="/images/{{ $item->product->image }}" alt="{{ $item->product->name }}">
                        @else
                            🍰
                        @endif
                    </div>
                    <div class="item-name">{{ $item->product ? $item->product->name : 'Produk' }}</div>
                    <div class="item-qty">x{{ $item->quantity }}</div>
                    <div class="item-price">Rp {{ number_format($item->price * $item->quantity, 0, ',', '.') }}</div>
                </div>
                @endforeach
            </div>

            <div class="order-footer">
                <div class="order-address">📍 {{ $order->address }}</div>
                <div class="order-total">Rp {{ number_format($order->total_price, 0, ',', '.') }}</div>
            </div>
        </div>
        @endforeach
    @endif
</div>
</body>
</html>