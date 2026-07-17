<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    public function index()
    {
        $products = Product::where('is_active', true)->get();

        return response()->json([
            'message' => 'Berhasil mengambil data produk.',
            'data' => $products,
        ]);
    }

    public function show($id)
    {
        $product = Product::where('is_active', true)->find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Produk tidak ditemukan.',
            ], 404);
        }

        return response()->json([
            'message' => 'Berhasil mengambil detail produk.',
            'data' => $product,
        ]);
    }
}