[@megapiggy/nexus-api](../README.md) › [Globals](../globals.md) › ["Nexus"](_nexus_.md)

# Module: "Nexus"

## Index

### Classes

* [Nexus](../classes/_nexus_.nexus.md)

### Interfaces

* [IRequestArgs](../interfaces/_nexus_.irequestargs.md)

### Type aliases

* [REST_METHOD](_nexus_.md#rest_method)

### Variables

* [format](_nexus_.md#format)
* [jwt](_nexus_.md#jwt)
* [request](_nexus_.md#request)
* [setCookieParser](_nexus_.md#setcookieparser)

### Functions

* [handleRestResult](_nexus_.md#handlerestresult)
* [parseRequestCookies](_nexus_.md#parserequestcookies)
* [rest](_nexus_.md#rest)
* [restGet](_nexus_.md#restget)
* [restPost](_nexus_.md#restpost)
* [transformJwtToValidationResult](_nexus_.md#transformjwttovalidationresult)

## Type aliases

###  REST_METHOD

Ƭ **REST_METHOD**: *"DELETE" | "POST"*

*Defined in [src/Nexus.ts:16](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L16)*

## Variables

###  format

• **format**: *any*

*Defined in [src/Nexus.ts:9](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L9)*

___

###  jwt

• **jwt**: *any*

*Defined in [src/Nexus.ts:11](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L11)*

___

###  request

• **request**: *RequestAPI‹Request‹›, CoreOptions, UriOptions | UrlOptions›*

*Defined in [src/Nexus.ts:8](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L8)*

___

###  setCookieParser

• **setCookieParser**: *any*

*Defined in [src/Nexus.ts:10](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L10)*

## Functions

###  handleRestResult

▸ **handleRestResult**(`resolve`: any, `reject`: any, `url`: string, `error`: any, `response`: request.RequestResponse, `body`: any, `onUpdateLimit`: function): *any*

*Defined in [src/Nexus.ts:35](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L35)*

**Parameters:**

▪ **resolve**: *any*

▪ **reject**: *any*

▪ **url**: *string*

▪ **error**: *any*

▪ **response**: *request.RequestResponse*

▪ **body**: *any*

▪ **onUpdateLimit**: *function*

▸ (`daily`: number, `hourly`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`daily` | number |
`hourly` | number |

**Returns:** *any*

___

###  parseRequestCookies

▸ **parseRequestCookies**(`args`: [IRequestArgs](../interfaces/_nexus_.irequestargs.md)): *[IRequestArgs](../interfaces/_nexus_.irequestargs.md)*

*Defined in [src/Nexus.ts:155](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [IRequestArgs](../interfaces/_nexus_.irequestargs.md) |

**Returns:** *[IRequestArgs](../interfaces/_nexus_.irequestargs.md)*

___

###  rest

▸ **rest**(`url`: string, `args`: [IRequestArgs](../interfaces/_nexus_.irequestargs.md), `onUpdateLimit`: function, `method?`: [REST_METHOD](_nexus_.md#rest_method)): *Promise‹any›*

*Defined in [src/Nexus.ts:164](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L164)*

**Parameters:**

▪ **url**: *string*

▪ **args**: *[IRequestArgs](../interfaces/_nexus_.irequestargs.md)*

▪ **onUpdateLimit**: *function*

▸ (`daily`: number, `hourly`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`daily` | number |
`hourly` | number |

▪`Optional`  **method**: *[REST_METHOD](_nexus_.md#rest_method)*

**Returns:** *Promise‹any›*

___

###  restGet

▸ **restGet**(`url`: string, `args`: [IRequestArgs](../interfaces/_nexus_.irequestargs.md), `onUpdateLimit`: function): *Promise‹any›*

*Defined in [src/Nexus.ts:107](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L107)*

**Parameters:**

▪ **url**: *string*

▪ **args**: *[IRequestArgs](../interfaces/_nexus_.irequestargs.md)*

▪ **onUpdateLimit**: *function*

▸ (`daily`: number, `hourly`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`daily` | number |
`hourly` | number |

**Returns:** *Promise‹any›*

___

###  restPost

▸ **restPost**(`method`: [REST_METHOD](_nexus_.md#rest_method), `url`: string, `args`: [IRequestArgs](../interfaces/_nexus_.irequestargs.md), `onUpdateLimit`: function): *Promise‹any›*

*Defined in [src/Nexus.ts:130](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L130)*

**Parameters:**

▪ **method**: *[REST_METHOD](_nexus_.md#rest_method)*

▪ **url**: *string*

▪ **args**: *[IRequestArgs](../interfaces/_nexus_.irequestargs.md)*

▪ **onUpdateLimit**: *function*

▸ (`daily`: number, `hourly`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`daily` | number |
`hourly` | number |

**Returns:** *Promise‹any›*

___

###  transformJwtToValidationResult

▸ **transformJwtToValidationResult**(`oAuthCredentials`: [IOAuthCredentials](../interfaces/_types_.ioauthcredentials.md)): *[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)*

*Defined in [src/Nexus.ts:170](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`oAuthCredentials` | [IOAuthCredentials](../interfaces/_types_.ioauthcredentials.md) |

**Returns:** *[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)*
