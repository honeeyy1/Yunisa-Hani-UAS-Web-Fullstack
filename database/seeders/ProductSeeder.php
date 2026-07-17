<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Brownies Cokelat',
                'description' => 'Brownies lembut dengan cokelat premium, tekstur fudgy yang bikin nagih.',
                'price' => 45000,
                'stock' => 50,
                'image' => 'brownies.jpg',
                'category' => 'Brownies',
                'is_active' => true,
            ],
            [
                'name' => 'Cookies Chocochip',
                'description' => 'Cookies renyah dengan chocochip melimpah, dipanggang sempurna setiap hari.',
                'price' => 35000,
                'stock' => 60,
                'image' => 'Cookies.jpg',
                'category' => 'Cookies',
                'is_active' => true,
            ],
            [
                'name' => 'Donat Glazed',
                'description' => 'Donat fluffy dengan glazed manis, tersedia berbagai topping pilihan.',
                'price' => 25000,
                'stock' => 40,
                'image' => 'donat.jpg',
                'category' => 'Donat',
                'is_active' => true,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}