import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { Cart, CartDocument } from './schemas/cart.schema';
import { Product, ProductDocument } from '../products/schemas/product.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async addToCart(addToCartDto: AddToCartDto, user: any): Promise<Cart> {
    const existingCart = await this.cartModel
      .findOne({ userId: user._id })
      .exec();

    const productVerification = await this.productModel.findById(
      addToCartDto.productId,
    );
    if (!productVerification) {
      throw new NotFoundException('Product not found');
    }
    const price = productVerification.price;

    if (existingCart) {
      // Update existing cart
      existingCart.products.push(addToCartDto.productId);
      existingCart.total += price;
      return existingCart.save();
    } else {
      // Create new cart
      const cartData = {
        userId: user._id,
        products: [addToCartDto.productId],
        total: price,
      };
      const createdCart = new this.cartModel(cartData);
      return createdCart.save();
    }
  }

  async getCart(
    userId: string,
  ): Promise<{ userId: string; products: any[]; total: number }> {
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) {
      return { userId, products: [], total: 0 };
    }

    const products = await this.productModel
      .find({
        _id: { $in: cart.products },
      })
      .lean();

    return { userId: cart.userId, products, total: cart.total };
  }

  async removeFromCart(userId: string, productId: string): Promise<Cart> {
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    const updatedProducts = cart.products.filter(
      (pid) => pid.toString() !== productId,
    );
    const updatedTotal = cart.total - product.price;
    cart.products = updatedProducts;
    cart.total = updatedTotal >= 0 ? updatedTotal : 0;
    return cart.save();
  }
}
