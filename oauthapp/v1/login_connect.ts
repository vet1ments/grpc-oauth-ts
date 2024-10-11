// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file oauthapp/v1/login.proto (package oauthapp.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CallbackRequest, LoginRequest } from "./login_pb.js";
import { HttpBody } from "../../google/api/httpbody_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service oauthapp.v1.LoginService
 */
export const LoginService = {
  typeName: "oauthapp.v1.LoginService",
  methods: {
    /**
     * @generated from rpc oauthapp.v1.LoginService.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: HttpBody,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service oauthapp.v1.SocialCallbackService
 */
export const SocialCallbackService = {
  typeName: "oauthapp.v1.SocialCallbackService",
  methods: {
    /**
     * @generated from rpc oauthapp.v1.SocialCallbackService.Callback
     */
    callback: {
      name: "Callback",
      I: CallbackRequest,
      O: HttpBody,
      kind: MethodKind.Unary,
    },
  }
} as const;

