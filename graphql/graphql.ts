/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type GetCountryQueryVariables = Exact<{
  code: string | number;
}>;


export type GetCountryQuery = { country: { awsRegion: string, native: string, phone: string, phones: Array<string>, states: Array<{ code: string | null, name: string }>, languages: Array<{ code: string, name: string, native: string }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetCountryDocument = new TypedDocumentString(`
    query GetCountry($code: ID!) {
  country(code: $code) {
    awsRegion
    native
    phone
    phones
    states {
      code
      name
    }
    languages {
      code
      name
      native
    }
  }
}
    `) as unknown as TypedDocumentString<GetCountryQuery, GetCountryQueryVariables>;