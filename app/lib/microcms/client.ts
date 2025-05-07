import { createClient } from 'microcms-js-sdk';
import { BookType } from '@/app/types/types';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});
console.log("client", client);

export const getAllBooks = async () => {
    const allBooks = await client.getList<BookType>({
        endpoint: "ebook",
    });

    return allBooks;
};
