/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ActivityTypeBulkDeleteResponse from '../model/ActivityTypeBulkDeleteResponse';
import ActivityTypeCreateRequest from '../model/ActivityTypeCreateRequest';
import ActivityTypeCreateUpdateDeleteResponse from '../model/ActivityTypeCreateUpdateDeleteResponse';
import ActivityTypeListResponse from '../model/ActivityTypeListResponse';
import ActivityTypeUpdateRequest from '../model/ActivityTypeUpdateRequest';

/**
* ActivityTypes service.
* @module api/ActivityTypesApi
* @version 1.0.0
*/
export default class ActivityTypesApi {

    /**
    * Constructs a new ActivityTypesApi. 
    * @alias module:api/ActivityTypesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add new activity type
     * Adds a new activity type.
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityTypeCreateRequest} opts.activityTypeCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivityTypeCreateUpdateDeleteResponse} and HTTP response
     */
    addActivityTypeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['activityTypeCreateRequest'];

      if (opts['name'] === undefined || opts['name'] === null) {
        throw new Error("Missing the required parameter 'name' when calling addActivityType");
      }
      if (opts['icon_key'] === undefined || opts['icon_key'] === null) {
        throw new Error("Missing the required parameter 'icon_key' when calling addActivityType");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = ActivityTypeCreateUpdateDeleteResponse;
      return this.apiClient.callApi(
        '/activityTypes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add new activity type
     * Adds a new activity type.
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityTypeCreateRequest} opts.activityTypeCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivityTypeCreateUpdateDeleteResponse}
     */
    addActivityType(opts) {
      return this.addActivityTypeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete an activity type
     * Marks an activity type as deleted.
     * @param {Number} id The ID of the activity type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivityTypeCreateUpdateDeleteResponse} and HTTP response
     */
    deleteActivityTypeWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteActivityType");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = ActivityTypeCreateUpdateDeleteResponse;
      return this.apiClient.callApi(
        '/activityTypes/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an activity type
     * Marks an activity type as deleted.
     * @param {Number} id The ID of the activity type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivityTypeCreateUpdateDeleteResponse}
     */
    deleteActivityType(id) {
      return this.deleteActivityTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete multiple activity types in bulk
     * Marks multiple activity types as deleted.
     * @param {String} ids The comma-separated activity type IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivityTypeBulkDeleteResponse} and HTTP response
     */
    deleteActivityTypesWithHttpInfo(ids) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteActivityTypes");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': ids,
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = ActivityTypeBulkDeleteResponse;
      return this.apiClient.callApi(
        '/activityTypes', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete multiple activity types in bulk
     * Marks multiple activity types as deleted.
     * @param {String} ids The comma-separated activity type IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivityTypeBulkDeleteResponse}
     */
    deleteActivityTypes(ids) {
      return this.deleteActivityTypesWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all activity types
     * Returns all activity types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivityTypeListResponse} and HTTP response
     */
    getActivityTypesWithHttpInfo() {
      const opts = {}
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = ActivityTypeListResponse;
      return this.apiClient.callApi(
        '/activityTypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all activity types
     * Returns all activity types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivityTypeListResponse}
     */
    getActivityTypes() {
      return this.getActivityTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update an activity type
     * Updates an activity type.
     * @param {Number} id The ID of the activity type
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityTypeUpdateRequest} opts.activityTypeUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivityTypeCreateUpdateDeleteResponse} and HTTP response
     */
    updateActivityTypeWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['activityTypeUpdateRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateActivityType");
      }


      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = ActivityTypeCreateUpdateDeleteResponse;
      return this.apiClient.callApi(
        '/activityTypes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an activity type
     * Updates an activity type.
     * @param {Number} id The ID of the activity type
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityTypeUpdateRequest} opts.activityTypeUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivityTypeCreateUpdateDeleteResponse}
     */
    updateActivityType(id, opts) {
      return this.updateActivityTypeWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
