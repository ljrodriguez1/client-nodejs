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
import BulkDeleteResponse from '../model/BulkDeleteResponse';
import DeleteResponse from '../model/DeleteResponse';
import FieldCreateRequest from '../model/FieldCreateRequest';
import FieldResponse from '../model/FieldResponse';
import FieldUpdateRequest from '../model/FieldUpdateRequest';
import FieldsResponse from '../model/FieldsResponse';

/**
* OrganizationFields service.
* @module api/OrganizationFieldsApi
* @version 1.0.0
*/
export default class OrganizationFieldsApi {

    /**
    * Constructs a new OrganizationFieldsApi. 
    * @alias module:api/OrganizationFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new organization field
     * Adds a new organization field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/FieldCreateRequest} opts.fieldCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    addOrganizationFieldWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['fieldCreateRequest'];


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
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/organizationFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new organization field
     * Adds a new organization field. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-new-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">adding a new custom field</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/FieldCreateRequest} opts.fieldCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    addOrganizationField(opts) {
      return this.addOrganizationFieldWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete an organization field
     * Marks a field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
     * @param {Number} id The ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteResponse} and HTTP response
     */
    deleteOrganizationFieldWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOrganizationField");
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
      let returnType = DeleteResponse;
      return this.apiClient.callApi(
        '/organizationFields/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an organization field
     * Marks a field as deleted. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/deleting-a-custom-field\" target=\"_blank\" rel=\"noopener noreferrer\">deleting a custom field</a>.
     * @param {Number} id The ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteResponse}
     */
    deleteOrganizationField(id) {
      return this.deleteOrganizationFieldWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete multiple organization fields in bulk
     * Marks multiple fields as deleted.
     * @param {String} ids The comma-separated field IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BulkDeleteResponse} and HTTP response
     */
    deleteOrganizationFieldsWithHttpInfo(ids) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteOrganizationFields");
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
      let returnType = BulkDeleteResponse;
      return this.apiClient.callApi(
        '/organizationFields', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete multiple organization fields in bulk
     * Marks multiple fields as deleted.
     * @param {String} ids The comma-separated field IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BulkDeleteResponse}
     */
    deleteOrganizationFields(ids) {
      return this.deleteOrganizationFieldsWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one organization field
     * Returns data about a specific organization field.
     * @param {Number} id The ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    getOrganizationFieldWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrganizationField");
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
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/organizationFields/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one organization field
     * Returns data about a specific organization field.
     * @param {Number} id The ID of the field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    getOrganizationField(id) {
      return this.getOrganizationFieldWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all organization fields
     * Returns data about all organization fields.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldsResponse} and HTTP response
     */
    getOrganizationFieldsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;



      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'],
        'limit': opts['limit'],
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
      let returnType = FieldsResponse;
      return this.apiClient.callApi(
        '/organizationFields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all organization fields
     * Returns data about all organization fields.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldsResponse}
     */
    getOrganizationFields(opts) {
      return this.getOrganizationFieldsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update an organization field
     * Updates an organization field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values</a>.
     * @param {Number} id The ID of the field
     * @param {Object} opts Optional parameters
     * @param {module:model/FieldUpdateRequest} opts.fieldUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldResponse} and HTTP response
     */
    updateOrganizationFieldWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['fieldUpdateRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOrganizationField");
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
      let returnType = FieldResponse;
      return this.apiClient.callApi(
        '/organizationFields/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an organization field
     * Updates an organization field. For more information, see the tutorial for <a href=\" https://pipedrive.readme.io/docs/updating-custom-field-value \" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values</a>.
     * @param {Number} id The ID of the field
     * @param {Object} opts Optional parameters
     * @param {module:model/FieldUpdateRequest} opts.fieldUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldResponse}
     */
    updateOrganizationField(id, opts) {
      return this.updateOrganizationFieldWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
