[@megapiggy/nexus-api](../README.md) › [Globals](../globals.md) › ["Nexus"](../modules/_nexus_.md) › [Nexus](_nexus_.nexus.md)

# Class: Nexus

Main class of the api

## Hierarchy

* **Nexus**

## Index

### Constructors

* [constructor](_nexus_.nexus.md#constructor)

### Properties

* [events](_nexus_.nexus.md#events)

### Methods

* [endorseMod](_nexus_.nexus.md#endorsemod)
* [getChangelogs](_nexus_.nexus.md#getchangelogs)
* [getColorschemes](_nexus_.nexus.md#getcolorschemes)
* [getColourschemes](_nexus_.nexus.md#getcolourschemes)
* [getDownloadURLs](_nexus_.nexus.md#getdownloadurls)
* [getEndorsements](_nexus_.nexus.md#getendorsements)
* [getFileByMD5](_nexus_.nexus.md#getfilebymd5)
* [getFileInfo](_nexus_.nexus.md#getfileinfo)
* [getGameInfo](_nexus_.nexus.md#getgameinfo)
* [getGames](_nexus_.nexus.md#getgames)
* [getLatestAdded](_nexus_.nexus.md#getlatestadded)
* [getLatestUpdated](_nexus_.nexus.md#getlatestupdated)
* [getModFiles](_nexus_.nexus.md#getmodfiles)
* [getModInfo](_nexus_.nexus.md#getmodinfo)
* [getOwnIssues](_nexus_.nexus.md#getownissues)
* [getRateLimits](_nexus_.nexus.md#getratelimits)
* [getRecentlyUpdatedMods](_nexus_.nexus.md#getrecentlyupdatedmods)
* [getTrackedMods](_nexus_.nexus.md#gettrackedmods)
* [getTrending](_nexus_.nexus.md#gettrending)
* [getValidationResult](_nexus_.nexus.md#getvalidationresult)
* [sendFeedback](_nexus_.nexus.md#sendfeedback)
* [setGame](_nexus_.nexus.md#setgame)
* [setKey](_nexus_.nexus.md#setkey)
* [trackMod](_nexus_.nexus.md#trackmod)
* [untrackMod](_nexus_.nexus.md#untrackmod)
* [validateKey](_nexus_.nexus.md#validatekey)
* [create](_nexus_.nexus.md#static-create)
* [createWithOAuth](_nexus_.nexus.md#static-createwithoauth)

## Constructors

###  constructor

\+ **new Nexus**(`appName`: string, `appVersion`: string, `defaultGame`: string, `timeout?`: number): *[Nexus](_nexus_.nexus.md)*

*Defined in [src/Nexus.ts:200](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L200)*

Constructor
please don't use this directly, use Nexus.create

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`appName` | string | Name of the client application |
`appVersion` | string | Version number of the client application (Needs to be semantic format) |
`defaultGame` | string | (nexus) id of the game requests are made for. Can be overridden per request |
`timeout?` | number | Request timeout in milliseconds. Defaults to 30 seconds  |

**Returns:** *[Nexus](_nexus_.nexus.md)*

## Properties

###  events

• **events**: *TypedEmitter‹[INexusEvents](../interfaces/_types_.inexusevents.md)›* = new EventEmitter() as TypedEmitter<types.INexusEvents>

*Defined in [src/Nexus.ts:191](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L191)*

## Methods

###  endorseMod

▸ **endorseMod**(`modId`: number, `modVersion`: string, `endorseStatus`: "endorse" | "abstain", `gameId?`: string): *Promise‹[IEndorseResponse](../interfaces/_types_.iendorseresponse.md)›*

*Defined in [src/Nexus.ts:471](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L471)*

Endorse/Unendorse a mod

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | number | (nexus) id of the mod to endorse |
`modVersion` | string | version of the mod the user has installed (has to correspond to a version that actually exists) |
`endorseStatus` | "endorse" &#124; "abstain" | the new endorsement state |
`gameId?` | string | (nexus) id of the game to endorse  |

**Returns:** *Promise‹[IEndorseResponse](../interfaces/_types_.iendorseresponse.md)›*

___

###  getChangelogs

▸ **getChangelogs**(`modId`: number, `gameId?`: string): *Promise‹[IChangelogs](../interfaces/_types_.ichangelogs.md)›*

*Defined in [src/Nexus.ts:500](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L500)*

retrieve all changelogs for a mod

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | number | (nexus) id of the mod |
`gameId?` | string | (nexus) game id  |

**Returns:** *Promise‹[IChangelogs](../interfaces/_types_.ichangelogs.md)›*

___

###  getColorschemes

▸ **getColorschemes**(): *Promise‹[IColourScheme](../interfaces/_types_.icolourscheme.md)[]›*

*Defined in [src/Nexus.ts:428](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L428)*

get list of colorschemes

**Returns:** *Promise‹[IColourScheme](../interfaces/_types_.icolourscheme.md)[]›*

___

###  getColourschemes

▸ **getColourschemes**(): *Promise‹[IColourScheme](../interfaces/_types_.icolourscheme.md)[]›*

*Defined in [src/Nexus.ts:420](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L420)*

get list of colourschemes

**Returns:** *Promise‹[IColourScheme](../interfaces/_types_.icolourscheme.md)[]›*

___

###  getDownloadURLs

▸ **getDownloadURLs**(`modId`: number, `fileId`: number, `key?`: string, `expires?`: number, `gameId?`: string): *Promise‹[IDownloadURL](../interfaces/_types_.idownloadurl.md)[]›*

*Defined in [src/Nexus.ts:547](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L547)*

generate download links for a file
If the user isn't premium on Nexus Mods, this requires a key that can only
be generated on the website. The key is part of the nxm links that are generated by the "Download with Manager" buttons.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | number | id of the mod |
`fileId` | number | id of the file |
`key?` | string | a download key |
`expires?` | number | expiry time of the key |
`gameId?` | string | id of the game  |

**Returns:** *Promise‹[IDownloadURL](../interfaces/_types_.idownloadurl.md)[]›*

___

###  getEndorsements

▸ **getEndorsements**(): *Promise‹[IEndorsement](../interfaces/_types_.iendorsement.md)[]›*

*Defined in [src/Nexus.ts:412](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L412)*

get list of endorsements the user has given

**Returns:** *Promise‹[IEndorsement](../interfaces/_types_.iendorsement.md)[]›*

___

###  getFileByMD5

▸ **getFileByMD5**(`hash`: string, `gameId?`: string): *Promise‹[IMD5Result](../interfaces/_types_.imd5result.md)[]›*

*Defined in [src/Nexus.ts:572](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L572)*

find information about a file based on its md5 hash
This can be used to find info about a file when you don't have its modid and fileid
Note that technically there may be multiple results for the same md5 hash, either the same
file uploaded in different places or (less likely) different files that just happen to have
the same hash.
This function will return all of them, you will have to sort out from the result which file
you were actually looking for (e.g. by comparing size)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | string | the md5 hash of the file |
`gameId?` | string | the game to search in  |

**Returns:** *Promise‹[IMD5Result](../interfaces/_types_.imd5result.md)[]›*

___

###  getFileInfo

▸ **getFileInfo**(`modId`: number, `fileId`: number, `gameId?`: string): *Promise‹[IFileInfo](../interfaces/_types_.ifileinfo.md)›*

*Defined in [src/Nexus.ts:528](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L528)*

get details about a file

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | number | (nexus) id of the mod |
`fileId` | number | (nexus) id of the file |
`gameId?` | string | (nexus) id of the game  |

**Returns:** *Promise‹[IFileInfo](../interfaces/_types_.ifileinfo.md)›*

___

###  getGameInfo

▸ **getGameInfo**(`gameId?`: string): *Promise‹[IGameInfo](../interfaces/_types_.igameinfo.md)›*

*Defined in [src/Nexus.ts:440](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L440)*

retrieve details about a specific game

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gameId?` | string | (nexus) game id to request  |

**Returns:** *Promise‹[IGameInfo](../interfaces/_types_.igameinfo.md)›*

___

###  getGames

▸ **getGames**(): *Promise‹[IGameListEntry](../interfaces/_types_.igamelistentry.md)[]›*

*Defined in [src/Nexus.ts:371](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L371)*

retrieve a list of all games currently supported by Nexus Mods

**Returns:** *Promise‹[IGameListEntry](../interfaces/_types_.igamelistentry.md)[]›*

list of games

___

###  getLatestAdded

▸ **getLatestAdded**(`gameId?`: string): *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)[]›*

*Defined in [src/Nexus.ts:380](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L380)*

get list of the latest added mods

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gameId?` | string | id of the game to query  |

**Returns:** *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)[]›*

___

###  getLatestUpdated

▸ **getLatestUpdated**(`gameId?`: string): *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)[]›*

*Defined in [src/Nexus.ts:391](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L391)*

get list of the latest updated mods

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gameId?` | string | id of the game to query  |

**Returns:** *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)[]›*

___

###  getModFiles

▸ **getModFiles**(`modId`: number, `gameId?`: string): *Promise‹[IModFiles](../interfaces/_types_.imodfiles.md)›*

*Defined in [src/Nexus.ts:512](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L512)*

get list of all files uploaded for a mod

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | number | (nexus) id of the mod |
`gameId?` | string | (nexus) game id  |

**Returns:** *Promise‹[IModFiles](../interfaces/_types_.imodfiles.md)›*

___

###  getModInfo

▸ **getModInfo**(`modId`: number, `gameId?`: string): *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)›*

*Defined in [src/Nexus.ts:488](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L488)*

retrieve details about a mod

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | number | (nexus) id of the mod |
`gameId?` | string | (nexus) game id  |

**Returns:** *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)›*

___

###  getOwnIssues

▸ **getOwnIssues**(): *Promise‹[IIssue](../interfaces/_types_.iissue.md)[]›*

*Defined in [src/Nexus.ts:598](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L598)*

get list of issues reported by this user
FOR INTERNAL USE ONLY

**Returns:** *Promise‹[IIssue](../interfaces/_types_.iissue.md)[]›*

___

###  getRateLimits

▸ **getRateLimits**(): *object*

*Defined in [src/Nexus.ts:300](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L300)*

**Returns:** *object*

* **daily**: *number*

* **hourly**: *number*

___

###  getRecentlyUpdatedMods

▸ **getRecentlyUpdatedMods**(`period`: types.UpdatePeriod, `gameId?`: string): *Promise‹[IUpdateEntry](../interfaces/_types_.iupdateentry.md)[]›*

*Defined in [src/Nexus.ts:453](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L453)*

retrieve list of mods for a game that has recently been updated

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`period` | types.UpdatePeriod | rough time range to retrieve. This is limited to specific periods                        (1d, 1w, 1m) because the list is cached on the server |
`gameId?` | string | (nexus) game id to request  |

**Returns:** *Promise‹[IUpdateEntry](../interfaces/_types_.iupdateentry.md)[]›*

___

###  getTrackedMods

▸ **getTrackedMods**(): *Promise‹[ITrackedMod](../interfaces/_types_.itrackedmod.md)[]›*

*Defined in [src/Nexus.ts:323](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L323)*

Get list of all mods being tracked by the user

**Returns:** *Promise‹[ITrackedMod](../interfaces/_types_.itrackedmod.md)[]›*

___

###  getTrending

▸ **getTrending**(`gameId?`: string): *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)[]›*

*Defined in [src/Nexus.ts:402](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L402)*

get list of trending mods

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gameId?` | string | id of the game to query  |

**Returns:** *Promise‹[IModInfo](../interfaces/_types_.imodinfo.md)[]›*

___

###  getValidationResult

▸ **getValidationResult**(): *[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)*

*Defined in [src/Nexus.ts:274](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L274)*

retrieve the result of the last key validation.
This is useful primarily after creating the object with Nexus.create

**Returns:** *[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)*

___

###  sendFeedback

▸ **sendFeedback**(`title`: string, `message`: string, `fileBundle`: string, `anonymous`: boolean, `groupingKey?`: string, `id?`: string): *Promise‹[IFeedbackResponse](../interfaces/_types_.ifeedbackresponse.md)›*

*Defined in [src/Nexus.ts:615](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L615)*

send a feedback message
FOR INTERNAL USE ONLY

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | title of the message |
`message` | string | content |
`fileBundle` | string | path to an archive that is sent along |
`anonymous` | boolean | whether the report should be made anonymously |
`groupingKey?` | string | a key that is used to group identical reports |
`id?` | string | reference id  |

**Returns:** *Promise‹[IFeedbackResponse](../interfaces/_types_.ifeedbackresponse.md)›*

___

###  setGame

▸ **setGame**(`gameId`: string): *void*

*Defined in [src/Nexus.ts:266](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L266)*

change the default game id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gameId` | string | game id  |

**Returns:** *void*

___

###  setKey

▸ **setKey**(`apiKey`: string): *Promise‹[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)›*

*Defined in [src/Nexus.ts:283](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L283)*

change the API Key and validate it This can also be used to unset the key

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`apiKey` | string | the new api key to set |

**Returns:** *Promise‹[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)›*

A promise that resolves to the user info on success or null if the apikey was undefined

___

###  trackMod

▸ **trackMod**(`modId`: string, `gameId?`: string): *Promise‹[ITrackResponse](../interfaces/_types_.itrackresponse.md)›*

*Defined in [src/Nexus.ts:334](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L334)*

start tracking a mod

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | string | id of the mod |
`gameId?` | string | id of the game  |

**Returns:** *Promise‹[ITrackResponse](../interfaces/_types_.itrackresponse.md)›*

___

###  untrackMod

▸ **untrackMod**(`modId`: string, `gameId?`: string): *Promise‹[ITrackResponse](../interfaces/_types_.itrackresponse.md)›*

*Defined in [src/Nexus.ts:353](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L353)*

stop tracking a mod

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modId` | string | id of the mod |
`gameId?` | string | id of the game  |

**Returns:** *Promise‹[ITrackResponse](../interfaces/_types_.itrackresponse.md)›*

___

###  validateKey

▸ **validateKey**(`key?`: string): *Promise‹[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)›*

*Defined in [src/Nexus.ts:314](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L314)*

validate a specific API key
This does not update the request quota or the cached validation result so it's
not useful for re-checking the key after a validation error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key?` | string | the API key to validate. Tests the current one if left undefined  |

**Returns:** *Promise‹[IValidateKeyResponse](../interfaces/_types_.ivalidatekeyresponse.md)›*

___

### `Static` create

▸ **create**(`apiKey`: string, `appName`: string, `appVersion`: string, `defaultGame`: string, `timeout?`: number): *Promise‹[Nexus](_nexus_.nexus.md)›*

*Defined in [src/Nexus.ts:248](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L248)*

create a Nexus instance and immediately verify the API Key

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`apiKey` | string | the api key to use for connections |
`appName` | string | name of the client application |
`appVersion` | string | Version number of the client application (Needs to be semantic format) |
`defaultGame` | string | (nexus) id of the game requests are made for. Can be overridden per request |
`timeout?` | number | Request timeout in milliseconds. Defaults to 5000ms  |

**Returns:** *Promise‹[Nexus](_nexus_.nexus.md)›*

___

### `Static` createWithOAuth

▸ **createWithOAuth**(`credentials`: [IOAuthCredentials](../interfaces/_types_.ioauthcredentials.md), `config`: [IOAuthConfig](../interfaces/_types_.ioauthconfig.md), `appName`: string, `appVersion`: string, `defaultGame`: string, `timeout?`: number): *Promise‹[Nexus](_nexus_.nexus.md)›*

*Defined in [src/Nexus.ts:254](https://github.com/Nexus-Mods/node-nexus-api/blob/master/src/Nexus.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`credentials` | [IOAuthCredentials](../interfaces/_types_.ioauthcredentials.md) |
`config` | [IOAuthConfig](../interfaces/_types_.ioauthconfig.md) |
`appName` | string |
`appVersion` | string |
`defaultGame` | string |
`timeout?` | number |

**Returns:** *Promise‹[Nexus](_nexus_.nexus.md)›*
