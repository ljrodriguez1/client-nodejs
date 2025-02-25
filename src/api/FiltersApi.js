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
import AddFilterRequest from '../model/AddFilterRequest';
import FilterType from '../model/FilterType';
import FiltersBulkDeleteResponse from '../model/FiltersBulkDeleteResponse';
import FiltersBulkGetResponse from '../model/FiltersBulkGetResponse';
import FiltersDeleteResponse from '../model/FiltersDeleteResponse';
import FiltersGetResponse from '../model/FiltersGetResponse';
import FiltersPostResponse from '../model/FiltersPostResponse';
import UpdateFilterRequest from '../model/UpdateFilterRequest';

/**
* Filters service.
* @module api/FiltersApi
* @version 1.0.0
*/
export default class FiltersApi {

    /**
    * Constructs a new FiltersApi. 
    * @alias module:api/FiltersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new filter
     * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with 'AND', and only two second level condition groups are supported of which one must be glued with 'AND' and the second with 'OR'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddFilterRequest} opts.addFilterRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FiltersPostResponse} and HTTP response
     */
    addFilterWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addFilterRequest'];

      if (opts['name'] === undefined || opts['name'] === null) {
        throw new Error("Missing the required parameter 'name' when calling addFilter");
      }
      if (opts['conditions'] === undefined || opts['conditions'] === null) {
        throw new Error("Missing the required parameter 'conditions' when calling addFilter");
      }
      if (opts['type'] === undefined || opts['type'] === null) {
        throw new Error("Missing the required parameter 'type' when calling addFilter");
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
      let returnType = FiltersPostResponse;
      return this.apiClient.callApi(
        '/filters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a new filter
     * Adds a new filter, returns the ID upon success. Note that in the conditions JSON object only one first-level condition group is supported, and it must be glued with 'AND', and only two second level condition groups are supported of which one must be glued with 'AND' and the second with 'OR'. Other combinations do not work (yet) but the syntax supports introducing them in future. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddFilterRequest} opts.addFilterRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FiltersPostResponse}
     */
    addFilter(opts) {
      return this.addFilterWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a filter
     * Marks a filter as deleted.
     * @param {Number} id The ID of the filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FiltersDeleteResponse} and HTTP response
     */
    deleteFilterWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFilter");
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
      let returnType = FiltersDeleteResponse;
      return this.apiClient.callApi(
        '/filters/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a filter
     * Marks a filter as deleted.
     * @param {Number} id The ID of the filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FiltersDeleteResponse}
     */
    deleteFilter(id) {
      return this.deleteFilterWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete multiple filters in bulk
     * Marks multiple filters as deleted.
     * @param {String} ids The comma-separated filter IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FiltersBulkDeleteResponse} and HTTP response
     */
    deleteFiltersWithHttpInfo(ids) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteFilters");
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
      let returnType = FiltersBulkDeleteResponse;
      return this.apiClient.callApi(
        '/filters', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete multiple filters in bulk
     * Marks multiple filters as deleted.
     * @param {String} ids The comma-separated filter IDs to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FiltersBulkDeleteResponse}
     */
    deleteFilters(ids) {
      return this.deleteFiltersWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one filter
     * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
     * @param {Number} id The ID of the filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FiltersGetResponse} and HTTP response
     */
    getFilterWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFilter");
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
      let returnType = FiltersGetResponse;
      return this.apiClient.callApi(
        '/filters/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one filter
     * Returns data about a specific filter. Note that this also returns the condition lines of the filter.
     * @param {Number} id The ID of the filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FiltersGetResponse}
     */
    getFilter(id) {
      return this.getFilterWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all filter helpers
     * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. Additionally, an exact date must be inserted in YYYY-MM-DD format and an exact time in HH:MM. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getFilterHelpersWithHttpInfo() {
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

      let authNames = ['api_key', ];
      let accepts = ['application/json', ];
      let returnType = Object;
      return this.apiClient.callApi(
        '/filters/helpers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all filter helpers
     * Returns all supported filter helpers. It helps to know what conditions and helpers are available when you want to <a href=\"/docs/api/v1/Filters#addFilter\">add</a> or <a href=\"/docs/api/v1/Filters#updateFilter\">update</a> filters. Additionally, an exact date must be inserted in YYYY-MM-DD format and an exact time in HH:MM. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-filter\" target=\"_blank\" rel=\"noopener noreferrer\">adding a filter</a>.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getFilterHelpers() {
      return this.getFilterHelpersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all filters
     * Returns data about all filters.
     * @param {Object} opts Optional parameters
     * @param {module:model/FilterType} opts.type The types of filters to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FiltersBulkGetResponse} and HTTP response
     */
    getFiltersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'type': opts['type'],
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
      let returnType = FiltersBulkGetResponse;
      return this.apiClient.callApi(
        '/filters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all filters
     * Returns data about all filters.
     * @param {Object} opts Optional parameters
     * @param {module:model/FilterType} opts.type The types of filters to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FiltersBulkGetResponse}
     */
    getFilters(opts) {
      return this.getFiltersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update filter
     * Updates an existing filter.
     * @param {Number} id The ID of the filter
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateFilterRequest} opts.updateFilterRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FiltersPostResponse} and HTTP response
     */
    updateFilterWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateFilterRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateFilter");
      }

      if (opts['conditions'] === undefined || opts['conditions'] === null) {
        throw new Error("Missing the required parameter 'conditions' when calling updateFilter");
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
      let returnType = FiltersPostResponse;
      return this.apiClient.callApi(
        '/filters/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update filter
     * Updates an existing filter.
     * @param {Number} id The ID of the filter
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateFilterRequest} opts.updateFilterRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FiltersPostResponse}
     */
    updateFilter(id, opts) {
      return this.updateFilterWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
