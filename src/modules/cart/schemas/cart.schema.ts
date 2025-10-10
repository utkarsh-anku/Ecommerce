import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema({ timestamps: true })
export class Cart {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: false, default: [] })
  products: string[]; // Array of product IDs

  @Prop({ required: true, unique: true })
  total: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
