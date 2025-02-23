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

/**
 * The AddWebhookRequest model module.
 * @module model/AddWebhookRequest
 * @version 1.0.0
 */
class AddWebhookRequest {
    /**
     * Constructs a new <code>AddWebhookRequest</code>.
     * @alias module:model/AddWebhookRequest
     * @param subscriptionUrl {String} A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url` and the chosen URL must not redirect to another link.
     * @param eventAction {module:model/AddWebhookRequest.EventActionEnum} The type of action to receive notifications about. Wildcard will match all supported actions.
     * @param eventObject {module:model/AddWebhookRequest.EventObjectEnum} The type of object to receive notifications about. Wildcard will match all supported objects.
     */
    constructor(subscriptionUrl, eventAction, eventObject) { 
        
        AddWebhookRequest.initialize(this, subscriptionUrl, eventAction, eventObject);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subscriptionUrl, eventAction, eventObject) { 
        obj['subscription_url'] = subscriptionUrl;
        obj['event_action'] = eventAction;
        obj['event_object'] = eventObject;
    }

    /**
     * Constructs a <code>AddWebhookRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddWebhookRequest} obj Optional instance to populate.
     * @return {module:model/AddWebhookRequest} The populated <code>AddWebhookRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddWebhookRequest();

            if (data.hasOwnProperty('subscription_url')) {
                obj['subscription_url'] = ApiClient.convertToType(data['subscription_url'], 'String');

                delete data['subscription_url'];
            }
            if (data.hasOwnProperty('event_action')) {
                obj['event_action'] = ApiClient.convertToType(data['event_action'], 'String');

                delete data['event_action'];
            }
            if (data.hasOwnProperty('event_object')) {
                obj['event_object'] = ApiClient.convertToType(data['event_object'], 'String');

                delete data['event_object'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('http_auth_user')) {
                obj['http_auth_user'] = ApiClient.convertToType(data['http_auth_user'], 'String');

                delete data['http_auth_user'];
            }
            if (data.hasOwnProperty('http_auth_password')) {
                obj['http_auth_password'] = ApiClient.convertToType(data['http_auth_password'], 'String');

                delete data['http_auth_password'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * A full, valid, publicly accessible URL which determines where to send the notifications. Please note that you cannot use Pipedrive API endpoints as the `subscription_url` and the chosen URL must not redirect to another link.
 * @member {String} subscription_url
 */
AddWebhookRequest.prototype['subscription_url'] = undefined;

/**
 * The type of action to receive notifications about. Wildcard will match all supported actions.
 * @member {module:model/AddWebhookRequest.EventActionEnum} event_action
 */
AddWebhookRequest.prototype['event_action'] = undefined;

/**
 * The type of object to receive notifications about. Wildcard will match all supported objects.
 * @member {module:model/AddWebhookRequest.EventObjectEnum} event_object
 */
AddWebhookRequest.prototype['event_object'] = undefined;

/**
 * The ID of the user this Webhook will be authorized with. If not set, current authorized user will be used. Note that this does not filter only certain user's events — rather, this specifies the user's permissions under which each event is checked. Events about objects the selected user is not entitled to access are not sent. If you want to receive notifications for all events, a top-level admin user should be used.
 * @member {Number} user_id
 */
AddWebhookRequest.prototype['user_id'] = undefined;

/**
 * The HTTP basic auth username of the subscription URL endpoint (if required)
 * @member {String} http_auth_user
 */
AddWebhookRequest.prototype['http_auth_user'] = undefined;

/**
 * The HTTP basic auth password of the subscription URL endpoint (if required)
 * @member {String} http_auth_password
 */
AddWebhookRequest.prototype['http_auth_password'] = undefined;





/**
 * Allowed values for the <code>event_action</code> property.
 * @enum {String}
 * @readonly
 */
AddWebhookRequest['EventActionEnum'] = {

    /**
     * value: "added"
     * @const
     */
    "added": "added",

    /**
     * value: "updated"
     * @const
     */
    "updated": "updated",

    /**
     * value: "merged"
     * @const
     */
    "merged": "merged",

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "*"
     * @const
     */
    "STAR": "*"
};


/**
 * Allowed values for the <code>event_object</code> property.
 * @enum {String}
 * @readonly
 */
AddWebhookRequest['EventObjectEnum'] = {

    /**
     * value: "activity"
     * @const
     */
    "activity": "activity",

    /**
     * value: "activityType"
     * @const
     */
    "activityType": "activityType",

    /**
     * value: "deal"
     * @const
     */
    "deal": "deal",

    /**
     * value: "note"
     * @const
     */
    "note": "note",

    /**
     * value: "organization"
     * @const
     */
    "organization": "organization",

    /**
     * value: "person"
     * @const
     */
    "person": "person",

    /**
     * value: "pipeline"
     * @const
     */
    "pipeline": "pipeline",

    /**
     * value: "product"
     * @const
     */
    "product": "product",

    /**
     * value: "stage"
     * @const
     */
    "stage": "stage",

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "*"
     * @const
     */
    "STAR": "*"
};



export default AddWebhookRequest;

