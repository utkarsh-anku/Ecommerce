// filepath: c:\Users\utkar\OneDrive\Desktop\Projects\Ecommerce\src\modules\auth\interfaces\jwt-payload.interface.ts
export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}