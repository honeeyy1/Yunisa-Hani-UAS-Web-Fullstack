<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Sweet Bite</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #f5f5f0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            display: flex;
            width: 900px;
            min-height: 560px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
        .left {
            flex: 1;
            background: #2D5016;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 48px;
            color: white;
        }
        .left h1 {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            margin-bottom: 12px;
        }
        .left p {
            font-size: 14px;
            opacity: 0.8;
            text-align: center;
            line-height: 1.8;
        }
        .leaf { font-size: 64px; margin-bottom: 24px; }
        .right {
            flex: 1;
            background: white;
            padding: 48px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .right h2 {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            color: #1a1a1a;
            margin-bottom: 8px;
        }
        .right p.sub {
            color: #888;
            font-size: 14px;
            margin-bottom: 32px;
        }
        .form-group { margin-bottom: 20px; }
        label {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: #444;
            margin-bottom: 8px;
        }
        input {
            width: 100%;
            padding: 12px 16px;
            border: 1.5px solid #e0e0e0;
            border-radius: 10px;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            transition: border 0.2s;
            outline: none;
        }
        input:focus { border-color: #2D5016; }
        .btn {
            width: 100%;
            padding: 13px;
            background: #2D5016;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            transition: background 0.2s;
            margin-top: 8px;
        }
        .btn:hover { background: #3a6b1e; }
        .link {
            text-align: center;
            margin-top: 20px;
            font-size: 13px;
            color: #888;
        }
        .link a { color: #2D5016; text-decoration: none; font-weight: 500; }
        .error {
            background: #fff0f0;
            color: #c0392b;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 13px;
            margin-bottom: 16px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="left">
        <div class="leaf">🌿</div>
        <h1>Sweet Bite</h1>
        <p>Artisan baked goods<br>made with love & care</p>
    </div>
    <div class="right">
        <h2>Selamat datang!</h2>
        <p class="sub">Masuk ke akun kamu</p>

        @if($errors->any())
            <div class="error">{{ $errors->first() }}</div>
        @endif

        <form method="POST" action="/login">
            @csrf
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" value="{{ old('email') }}" placeholder="email@kamu.com" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn">Masuk</button>
        </form>

        <div class="link">
            Belum punya akun? <a href="/register">Daftar sekarang</a>
        </div>
    </div>
</div>
</body>
</html>