import instance from '../config/axios';

export function getProducts() {
    return instance.get("sites/MLA/search?q=ipod");
}

export function getProductById(id) {
    return instance.get(`items/${id}`);
}