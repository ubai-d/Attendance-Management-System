import {
    boolean,
    integer,
    pgTable,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

import { InferModel } from "drizzle-orm";


// export const Otp = pgTable('userotp', {
//     id: text('id').primaryKey().notNull(),
//     email: text('email').notNull(),
//     Otp: integer('otp').notNull(),
// });

// export type Otp = InferModel<typeof Otp>;
// export type Newotp = InferModel<typeof Otp, 'insert'>;
export const Otpschema = pgTable('userotp', {
    email: text('email').notNull(),
    otp: integer('otp').notNull(),
    id: text('id').primaryKey().notNull(),
});


export type Otp = InferModel<typeof Otpschema>;
export type NewOtp = InferModel<typeof Otpschema, 'insert'>;