import type { PrismaClient } from '@prisma/client';
export declare function createRandomUser(): Omit<import("@prisma/client/runtime/index.js").GetResult<{
    id: number;
    createdAt: Date;
    email: string;
    username: string;
    lastActiveTimestamp: Date;
    isAdmin: boolean;
    stripeId: string;
    checkoutSessionId: string;
    subscriptionTier: string;
    subscriptionStatus: string;
    sendEmail: boolean;
    datePaid: Date;
    credits: number;
}, unknown> & {}, "id">;
export declare function devSeedUsers(prismaClient: PrismaClient): Promise<void>;
