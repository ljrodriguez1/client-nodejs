# Pipedrive.RolesApi

All URIs are relative to *https://api.pipedrive.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrUpdateRoleSetting**](RolesApi.md#addOrUpdateRoleSetting) | **POST** /roles/{id}/settings | Add or update role setting
[**addRole**](RolesApi.md#addRole) | **POST** /roles | Add a role
[**addRoleAssignment**](RolesApi.md#addRoleAssignment) | **POST** /roles/{id}/assignments | Add role assignment
[**deleteRole**](RolesApi.md#deleteRole) | **DELETE** /roles/{id} | Delete a role
[**deleteRoleAssignment**](RolesApi.md#deleteRoleAssignment) | **DELETE** /roles/{id}/assignments | Delete a role assignment
[**getRole**](RolesApi.md#getRole) | **GET** /roles/{id} | Get one role
[**getRoleAssignments**](RolesApi.md#getRoleAssignments) | **GET** /roles/{id}/assignments | List role assignments
[**getRoleSettings**](RolesApi.md#getRoleSettings) | **GET** /roles/{id}/settings | List role settings
[**getRoleSubRoles**](RolesApi.md#getRoleSubRoles) | **GET** /roles/{id}/roles | List role sub-roles
[**getRoles**](RolesApi.md#getRoles) | **GET** /roles | Get all roles
[**updateRole**](RolesApi.md#updateRole) | **PUT** /roles/{id} | Update role details



## addOrUpdateRoleSetting

> PostRoleSettings addOrUpdateRoleSetting(id, opts)

Add or update role setting

Adds or updates the visibility setting for a role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
let opts = Pipedrive.AddOrUpdateRoleSettingRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addOrUpdateRoleSetting(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **addOrUpdateRoleSettingRequest** | [**AddOrUpdateRoleSettingRequest**](AddOrUpdateRoleSettingRequest.md)|  | [optional] 

### Return type

[**PostRoleSettings**](PostRoleSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addRole

> PostRoles addRole(opts)

Add a role

Adds a new role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let opts = Pipedrive.AddRole.constructFromObject({
  // Properties that you want to update
});
apiInstance.addRole(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addRole** | [**AddRole**](AddRole.md)|  | [optional] 

### Return type

[**PostRoles**](PostRoles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addRoleAssignment

> PostRoleAssignment addRoleAssignment(id, opts)

Add role assignment

Assigns a user to a role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
let opts = Pipedrive.AddRoleAssignmentRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.addRoleAssignment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **addRoleAssignmentRequest** | [**AddRoleAssignmentRequest**](AddRoleAssignmentRequest.md)|  | [optional] 

### Return type

[**PostRoleAssignment**](PostRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRole

> DeleteRole deleteRole(id)

Delete a role

Marks a role as deleted.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
apiInstance.deleteRole(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 

### Return type

[**DeleteRole**](DeleteRole.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRoleAssignment

> DeleteRoleAssignment deleteRoleAssignment(id, opts)

Delete a role assignment

Removes the assigned user from a role and adds to the default role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
let opts = Pipedrive.DeleteRoleAssignmentRequest.constructFromObject({
  // Properties that you want to update
});
apiInstance.deleteRoleAssignment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **deleteRoleAssignmentRequest** | [**DeleteRoleAssignmentRequest**](DeleteRoleAssignmentRequest.md)|  | [optional] 

### Return type

[**DeleteRoleAssignment**](DeleteRoleAssignment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRole

> GetRole getRole(id)

Get one role

Returns the details of a specific role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
apiInstance.getRole(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 

### Return type

[**GetRole**](GetRole.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleAssignments

> GetRoleAssignments getRoleAssignments(id, opts)

List role assignments

Returns all users assigned to a role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getRoleAssignments(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRoleAssignments**](GetRoleAssignments.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleSettings

> GetRoleSettings getRoleSettings(id)

List role settings

Returns the visibility settings of a specific role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
apiInstance.getRoleSettings(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 

### Return type

[**GetRoleSettings**](GetRoleSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoleSubRoles

> GetRoleSubroles getRoleSubRoles(id, opts)

List role sub-roles

Returns the direct children of a specific role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getRoleSubRoles(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRoleSubroles**](GetRoleSubroles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRoles

> GetRoles getRoles(opts)

Get all roles

Returns all the roles within the company.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let opts = {
  'start': 0, // Number | Pagination start
  'limit': 56 // Number | Items shown per page
};
apiInstance.getRoles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| Pagination start | [optional] [default to 0]
 **limit** | **Number**| Items shown per page | [optional] 

### Return type

[**GetRoles**](GetRoles.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRole

> PutRole updateRole(id, opts)

Update role details

Updates the parent role and/or the name of a specific role.

### Example

```javascript
import Pipedrive from 'pipedrive';
let defaultClient = Pipedrive.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new Pipedrive.RolesApi();
let id = 56; // Number | The ID of the role
let opts = Pipedrive.BaseRole.constructFromObject({
  // Properties that you want to update
});
apiInstance.updateRole(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the role | 
 **baseRole** | [**BaseRole**](BaseRole.md)|  | [optional] 

### Return type

[**PutRole**](PutRole.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

