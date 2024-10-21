'use server';

import { ID } from 'node-appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';
import { createAdminClient, createSessionClient } from '../appwrite';

export const signIn = async () => {
   try {
   } catch (error) {
      console.log(error);
   }
};

export const signUp = async (userData: SignUpParams) => {
   try {
      const { email, password, firstName, lastName } = userData;
      const { account } = await createAdminClient();

      const newUserAccount = await account.create(
         ID.unique(),
         email,
         password,
         `${firstName} ${lastName}`
      );

      if (!newUserAccount) throw new Error('Error creating user');

      const session = await account.createEmailPasswordSession(email, password);

      cookies().set('bankify-appwrite-session', session.secret, {
         path: '/',
         httpOnly: true,
         sameSite: 'strict',
         secure: true,
      });

      return parseStringify(newUserAccount);
   } catch (error) {
      console.log(error);
   }
};

export async function getLoggedInUser() {
   try {
      const { account } = await createSessionClient();
      return await account.get();
   } catch (error) {
      console.log(error);
      return null;
   }
}
