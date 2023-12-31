/* eslint-disable @typescript-eslint/no-extraneous-class */
declare module 'react-native-auth0-guardian' {
  export default class Auth0Guardian {
    static constructor(auth0Domain: string): void

    static initialize(auth0Domain: string): Promise<boolean>

    static enroll(enrollmentURI: string, deviceToken: string): Promise<string>

    // noinspection SpellCheckingInspection
    static unenroll(): Promise<boolean>

    static getTOTP(): Promise<string>

    static allow(notificationData: object): Promise<boolean>

    static reject(notificationData: object): Promise<boolean>
  }
}

export default Auth0Guardian
