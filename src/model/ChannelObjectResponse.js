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

import ApiClient from '../ApiClient';
import ChannelObjectResponseData from './ChannelObjectResponseData';

/**
 * The ChannelObjectResponse model module.
 * @module model/ChannelObjectResponse
 * @version 1.0.0
 */
class ChannelObjectResponse {
    /**
     * Constructs a new <code>ChannelObjectResponse</code>.
     * @alias module:model/ChannelObjectResponse
     */
    constructor() { 
        
        ChannelObjectResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelObjectResponse} obj Optional instance to populate.
     * @return {module:model/ChannelObjectResponse} The populated <code>ChannelObjectResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelObjectResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ChannelObjectResponseData]);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
ChannelObjectResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/ChannelObjectResponseData>} data
 */
ChannelObjectResponse.prototype['data'] = undefined;






export default ChannelObjectResponse;

