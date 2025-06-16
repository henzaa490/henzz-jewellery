
<?php
session_start();

// Initialize cart if it doesn't exist
if (!isset($_SESSION['cart']) || empty($_SESSION['cart'])) {
    $_SESSION['message'] = 'Your cart is empty!';
    $_SESSION['message_type'] = 'error';
    header('Location: index.php');
    exit;
}

// Sample jewelry products (same as in other files)
$products = [
    1 => [
        'id' => 1,
        'name' => 'Diamond Engagement Ring',
        'price' => 2500.00,
        'image' => 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
        'description' => '18K white gold with 1ct diamond'
    ],
    2 => [
        'id' => 2,
        'name' => 'Pearl Necklace',
        'price' => 850.00,
        'image' => 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
        'description' => 'Cultured pearl strand necklace'
    ],
    3 => [
        'id' => 3,
        'name' => 'Gold Tennis Bracelet',
        'price' => 1200.00,
        'image' => 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop',
        'description' => '14K gold with diamonds'
    ],
    4 => [
        'id' => 4,
        'name' => 'Sapphire Earrings',
        'price' => 650.00,
        'image' => 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop',
        'description' => 'Blue sapphire stud earrings'
    ],
    5 => [
        'id' => 5,
        'name' => 'Ruby Pendant',
        'price' => 950.00,
        'image' => 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
        'description' => 'Ruby pendant with gold chain'
    ],
    6 => [
        'id' => 6,
        'name' => 'Emerald Ring',
        'price' => 1800.00,
        'image' => 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
        'description' => 'Emerald cut with diamond accents'
    ]
];

function calculateCartTotals($cart, $products) {
    $subtotal = 0;
    foreach ($cart as $item) {
    }
}






//cart//

