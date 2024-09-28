import * as jspb from 'google-protobuf'



export enum GrantType { 
  GRANT_TYPE_UNSPECIFIED = 0,
  GRANT_TYPE_AUTHORIZATION_CODE = 1,
  GRANT_TYPE_REFRESH_TOKEN = 2,
}
export enum RoleType { 
  ROLE_TYPE_UNSPECIFIED = 0,
  ROLE_TYPE_ADMIN = 1,
  ROLE_TYPE_USER = 2,
}
export enum ResponseType { 
  RESPONSE_TYPE_UNSPECIFIED = 0,
  RESPONSE_TYPE_SUCCESS = 1,
  RESPONSE_TYPE_FAIL = 2,
}
export enum LoginType { 
  LOGIN_TYPE_UNSPECIFIED = 0,
  LOGIN_TYPE_NATIVE = 1,
  LOGIN_TYPE_KAKAO = 2,
  LOGIN_TYPE_NAVER = 3,
}
export enum TokenType { 
  TOKEN_TYPE_UNSPECIFIED = 0,
  TOKEN_TYPE_BEARER = 1,
}
