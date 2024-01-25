
interface EnrolledDevice {
  id: string;
  userId: string;
  deviceToken: string;
  notificationToken: string;
  totp: string;
}

/* eslint-disable @typescript-eslint/no-extraneous-class */
declare module 'react-native-auth0-guardian' {
  export default class Auth0Guardian {
    static constructor(auth0Domain: string): void

    static initialize(auth0Domain: string): Promise<boolean>

    static allow(notificationData: object): Promise<boolean>

    static enroll(enrollmentURI: string, deviceToken: string): Promise<string>

    static getTOTP(): Promise<string>

    static device(): Promise<EnrolledDevice>

    // noinspection SpellCheckingInspection
    static unenroll(): Promise<boolean>

    static reject(notificationData: object): Promise<boolean>
  }
}

export default Auth0Guardian
