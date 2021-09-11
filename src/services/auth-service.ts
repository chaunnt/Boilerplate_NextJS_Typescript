import { MUserProfile } from "../models/userProfile";

export default class AuthService {
  static loginUser(username: string, password: string) { 
    return new MUserProfile(null); 
  }
  static loginGoogle(googleId: string, googleEmail: string, googleAvatar: string, facebookName: string) { 
    return new MUserProfile(null); 
  }
  static loginFacebook(facebookId: string, facebookEmail: string, facebookAvatar: string, facebookName: string) { 
    return new MUserProfile(null);
  }
}