import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('cart')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @Roles('user', 'admin')
  addToCart(@Body() addToCartDto: AddToCartDto, @CurrentUser() user: any) {
    return this.cartService.addToCart(addToCartDto, user);
  }

  @Get()
  @Roles('user', 'admin')
  getCart(@CurrentUser() user: any) {
    return this.cartService.getCart(user._id);
  }

  @Patch('remove-product')
  @Roles('user', 'admin')
  removeFromCart(
    @Query('productId') productId: string,
    @CurrentUser() user: any,
  ) {
    return this.cartService.removeFromCart(user._id, productId);
  }
}
