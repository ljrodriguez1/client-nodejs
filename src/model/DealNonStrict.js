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
import BaseDeal from './BaseDeal';
import DealNonStrictModeFields from './DealNonStrictModeFields';
import DealNonStrictModeFieldsCreatorUserId from './DealNonStrictModeFieldsCreatorUserId';
import DealOrganizationDataWithId from './DealOrganizationDataWithId';
import DealPersonDataWithId from './DealPersonDataWithId';
import DealUserDataWithId from './DealUserDataWithId';

/**
 * The DealNonStrict model module.
 * @module model/DealNonStrict
 * @version 1.0.0
 */
class DealNonStrict {
    /**
     * Constructs a new <code>DealNonStrict</code>.
     * @alias module:model/DealNonStrict
     * @implements module:model/DealNonStrictModeFields
     * @implements module:model/BaseDeal
     */
    constructor() { 
        DealNonStrictModeFields.initialize(this);BaseDeal.initialize(this);
        DealNonStrict.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealNonStrict</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealNonStrict} obj Optional instance to populate.
     * @return {module:model/DealNonStrict} The populated <code>DealNonStrict</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealNonStrict();
            DealNonStrictModeFields.constructFromObject(data, obj);
            BaseDeal.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('creator_user_id')) {
                obj['creator_user_id'] = DealNonStrictModeFieldsCreatorUserId.constructFromObject(data['creator_user_id']);

                delete data['creator_user_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = DealUserDataWithId.constructFromObject(data['user_id']);

                delete data['user_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = DealPersonDataWithId.constructFromObject(data['person_id']);

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = DealOrganizationDataWithId.constructFromObject(data['org_id']);

                delete data['org_id'];
            }
            if (data.hasOwnProperty('stage_id')) {
                obj['stage_id'] = ApiClient.convertToType(data['stage_id'], 'Number');

                delete data['stage_id'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('stage_change_time')) {
                obj['stage_change_time'] = ApiClient.convertToType(data['stage_change_time'], 'String');

                delete data['stage_change_time'];
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');

                delete data['active'];
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');

                delete data['deleted'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');

                delete data['probability'];
            }
            if (data.hasOwnProperty('next_activity_date')) {
                obj['next_activity_date'] = ApiClient.convertToType(data['next_activity_date'], 'String');

                delete data['next_activity_date'];
            }
            if (data.hasOwnProperty('next_activity_time')) {
                obj['next_activity_time'] = ApiClient.convertToType(data['next_activity_time'], 'String');

                delete data['next_activity_time'];
            }
            if (data.hasOwnProperty('next_activity_id')) {
                obj['next_activity_id'] = ApiClient.convertToType(data['next_activity_id'], 'Number');

                delete data['next_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_id')) {
                obj['last_activity_id'] = ApiClient.convertToType(data['last_activity_id'], 'Number');

                delete data['last_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_date')) {
                obj['last_activity_date'] = ApiClient.convertToType(data['last_activity_date'], 'String');

                delete data['last_activity_date'];
            }
            if (data.hasOwnProperty('lost_reason')) {
                obj['lost_reason'] = ApiClient.convertToType(data['lost_reason'], 'String');

                delete data['lost_reason'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'String');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('close_time')) {
                obj['close_time'] = ApiClient.convertToType(data['close_time'], 'String');

                delete data['close_time'];
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'Number');

                delete data['pipeline_id'];
            }
            if (data.hasOwnProperty('won_time')) {
                obj['won_time'] = ApiClient.convertToType(data['won_time'], 'String');

                delete data['won_time'];
            }
            if (data.hasOwnProperty('first_won_time')) {
                obj['first_won_time'] = ApiClient.convertToType(data['first_won_time'], 'String');

                delete data['first_won_time'];
            }
            if (data.hasOwnProperty('lost_time')) {
                obj['lost_time'] = ApiClient.convertToType(data['lost_time'], 'String');

                delete data['lost_time'];
            }
            if (data.hasOwnProperty('products_count')) {
                obj['products_count'] = ApiClient.convertToType(data['products_count'], 'Number');

                delete data['products_count'];
            }
            if (data.hasOwnProperty('files_count')) {
                obj['files_count'] = ApiClient.convertToType(data['files_count'], 'Number');

                delete data['files_count'];
            }
            if (data.hasOwnProperty('notes_count')) {
                obj['notes_count'] = ApiClient.convertToType(data['notes_count'], 'Number');

                delete data['notes_count'];
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');

                delete data['followers_count'];
            }
            if (data.hasOwnProperty('email_messages_count')) {
                obj['email_messages_count'] = ApiClient.convertToType(data['email_messages_count'], 'Number');

                delete data['email_messages_count'];
            }
            if (data.hasOwnProperty('activities_count')) {
                obj['activities_count'] = ApiClient.convertToType(data['activities_count'], 'Number');

                delete data['activities_count'];
            }
            if (data.hasOwnProperty('done_activities_count')) {
                obj['done_activities_count'] = ApiClient.convertToType(data['done_activities_count'], 'Number');

                delete data['done_activities_count'];
            }
            if (data.hasOwnProperty('undone_activities_count')) {
                obj['undone_activities_count'] = ApiClient.convertToType(data['undone_activities_count'], 'Number');

                delete data['undone_activities_count'];
            }
            if (data.hasOwnProperty('participants_count')) {
                obj['participants_count'] = ApiClient.convertToType(data['participants_count'], 'Number');

                delete data['participants_count'];
            }
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }
            if (data.hasOwnProperty('last_incoming_mail_time')) {
                obj['last_incoming_mail_time'] = ApiClient.convertToType(data['last_incoming_mail_time'], 'String');

                delete data['last_incoming_mail_time'];
            }
            if (data.hasOwnProperty('last_outgoing_mail_time')) {
                obj['last_outgoing_mail_time'] = ApiClient.convertToType(data['last_outgoing_mail_time'], 'String');

                delete data['last_outgoing_mail_time'];
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');

                delete data['label'];
            }
            if (data.hasOwnProperty('stage_order_nr')) {
                obj['stage_order_nr'] = ApiClient.convertToType(data['stage_order_nr'], 'Number');

                delete data['stage_order_nr'];
            }
            if (data.hasOwnProperty('person_name')) {
                obj['person_name'] = ApiClient.convertToType(data['person_name'], 'String');

                delete data['person_name'];
            }
            if (data.hasOwnProperty('org_name')) {
                obj['org_name'] = ApiClient.convertToType(data['org_name'], 'String');

                delete data['org_name'];
            }
            if (data.hasOwnProperty('next_activity_subject')) {
                obj['next_activity_subject'] = ApiClient.convertToType(data['next_activity_subject'], 'String');

                delete data['next_activity_subject'];
            }
            if (data.hasOwnProperty('next_activity_type')) {
                obj['next_activity_type'] = ApiClient.convertToType(data['next_activity_type'], 'String');

                delete data['next_activity_type'];
            }
            if (data.hasOwnProperty('next_activity_duration')) {
                obj['next_activity_duration'] = ApiClient.convertToType(data['next_activity_duration'], 'String');

                delete data['next_activity_duration'];
            }
            if (data.hasOwnProperty('next_activity_note')) {
                obj['next_activity_note'] = ApiClient.convertToType(data['next_activity_note'], 'String');

                delete data['next_activity_note'];
            }
            if (data.hasOwnProperty('formatted_value')) {
                obj['formatted_value'] = ApiClient.convertToType(data['formatted_value'], 'String');

                delete data['formatted_value'];
            }
            if (data.hasOwnProperty('weighted_value')) {
                obj['weighted_value'] = ApiClient.convertToType(data['weighted_value'], 'Number');

                delete data['weighted_value'];
            }
            if (data.hasOwnProperty('formatted_weighted_value')) {
                obj['formatted_weighted_value'] = ApiClient.convertToType(data['formatted_weighted_value'], 'String');

                delete data['formatted_weighted_value'];
            }
            if (data.hasOwnProperty('weighted_value_currency')) {
                obj['weighted_value_currency'] = ApiClient.convertToType(data['weighted_value_currency'], 'String');

                delete data['weighted_value_currency'];
            }
            if (data.hasOwnProperty('rotten_time')) {
                obj['rotten_time'] = ApiClient.convertToType(data['rotten_time'], 'String');

                delete data['rotten_time'];
            }
            if (data.hasOwnProperty('owner_name')) {
                obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');

                delete data['owner_name'];
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');

                delete data['cc_email'];
            }
            if (data.hasOwnProperty('org_hidden')) {
                obj['org_hidden'] = ApiClient.convertToType(data['org_hidden'], 'Boolean');

                delete data['org_hidden'];
            }
            if (data.hasOwnProperty('person_hidden')) {
                obj['person_hidden'] = ApiClient.convertToType(data['person_hidden'], 'Boolean');

                delete data['person_hidden'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the deal
 * @member {Number} id
 */
DealNonStrict.prototype['id'] = undefined;

/**
 * @member {module:model/DealNonStrictModeFieldsCreatorUserId} creator_user_id
 */
DealNonStrict.prototype['creator_user_id'] = undefined;

/**
 * @member {module:model/DealUserDataWithId} user_id
 */
DealNonStrict.prototype['user_id'] = undefined;

/**
 * @member {module:model/DealPersonDataWithId} person_id
 */
DealNonStrict.prototype['person_id'] = undefined;

/**
 * @member {module:model/DealOrganizationDataWithId} org_id
 */
DealNonStrict.prototype['org_id'] = undefined;

/**
 * The ID of the deal stage
 * @member {Number} stage_id
 */
DealNonStrict.prototype['stage_id'] = undefined;

/**
 * The title of the deal
 * @member {String} title
 */
DealNonStrict.prototype['title'] = undefined;

/**
 * The value of the deal
 * @member {Number} value
 */
DealNonStrict.prototype['value'] = undefined;

/**
 * The currency associated with the deal
 * @member {String} currency
 */
DealNonStrict.prototype['currency'] = undefined;

/**
 * The creation date and time of the deal
 * @member {String} add_time
 */
DealNonStrict.prototype['add_time'] = undefined;

/**
 * The last updated date and time of the deal
 * @member {String} update_time
 */
DealNonStrict.prototype['update_time'] = undefined;

/**
 * The last updated date and time of the deal stage
 * @member {String} stage_change_time
 */
DealNonStrict.prototype['stage_change_time'] = undefined;

/**
 * Whether the deal is active or not
 * @member {Boolean} active
 */
DealNonStrict.prototype['active'] = undefined;

/**
 * Whether the deal is deleted or not
 * @member {Boolean} deleted
 */
DealNonStrict.prototype['deleted'] = undefined;

/**
 * The status of the deal
 * @member {String} status
 */
DealNonStrict.prototype['status'] = undefined;

/**
 * The success probability percentage of the deal
 * @member {Number} probability
 */
DealNonStrict.prototype['probability'] = undefined;

/**
 * The date of the next activity associated with the deal
 * @member {String} next_activity_date
 */
DealNonStrict.prototype['next_activity_date'] = undefined;

/**
 * The time of the next activity associated with the deal
 * @member {String} next_activity_time
 */
DealNonStrict.prototype['next_activity_time'] = undefined;

/**
 * The ID of the next activity associated with the deal
 * @member {Number} next_activity_id
 */
DealNonStrict.prototype['next_activity_id'] = undefined;

/**
 * The ID of the last activity associated with the deal
 * @member {Number} last_activity_id
 */
DealNonStrict.prototype['last_activity_id'] = undefined;

/**
 * The date of the last activity associated with the deal
 * @member {String} last_activity_date
 */
DealNonStrict.prototype['last_activity_date'] = undefined;

/**
 * The reason for losing the deal
 * @member {String} lost_reason
 */
DealNonStrict.prototype['lost_reason'] = undefined;

/**
 * The visibility of the deal
 * @member {String} visible_to
 */
DealNonStrict.prototype['visible_to'] = undefined;

/**
 * The date and time of closing the deal
 * @member {String} close_time
 */
DealNonStrict.prototype['close_time'] = undefined;

/**
 * The ID of pipeline associated with the deal
 * @member {Number} pipeline_id
 */
DealNonStrict.prototype['pipeline_id'] = undefined;

/**
 * The date and time of changing the deal status as won
 * @member {String} won_time
 */
DealNonStrict.prototype['won_time'] = undefined;

/**
 * The date and time of the first time changing the deal status as won
 * @member {String} first_won_time
 */
DealNonStrict.prototype['first_won_time'] = undefined;

/**
 * The date and time of changing the deal status as lost
 * @member {String} lost_time
 */
DealNonStrict.prototype['lost_time'] = undefined;

/**
 * The number of products associated with the deal
 * @member {Number} products_count
 */
DealNonStrict.prototype['products_count'] = undefined;

/**
 * The number of files associated with the deal
 * @member {Number} files_count
 */
DealNonStrict.prototype['files_count'] = undefined;

/**
 * The number of notes associated with the deal
 * @member {Number} notes_count
 */
DealNonStrict.prototype['notes_count'] = undefined;

/**
 * The number of followers associated with the deal
 * @member {Number} followers_count
 */
DealNonStrict.prototype['followers_count'] = undefined;

/**
 * The number of emails associated with the deal
 * @member {Number} email_messages_count
 */
DealNonStrict.prototype['email_messages_count'] = undefined;

/**
 * The number of activities associated with the deal
 * @member {Number} activities_count
 */
DealNonStrict.prototype['activities_count'] = undefined;

/**
 * The number of completed activities associated with the deal
 * @member {Number} done_activities_count
 */
DealNonStrict.prototype['done_activities_count'] = undefined;

/**
 * The number of incomplete activities associated with the deal
 * @member {Number} undone_activities_count
 */
DealNonStrict.prototype['undone_activities_count'] = undefined;

/**
 * The number of participants associated with the deal
 * @member {Number} participants_count
 */
DealNonStrict.prototype['participants_count'] = undefined;

/**
 * The expected close date of the deal
 * @member {Date} expected_close_date
 */
DealNonStrict.prototype['expected_close_date'] = undefined;

/**
 * The date and time of the last incoming email associated with the deal
 * @member {String} last_incoming_mail_time
 */
DealNonStrict.prototype['last_incoming_mail_time'] = undefined;

/**
 * The date and time of the last outgoing email associated with the deal
 * @member {String} last_outgoing_mail_time
 */
DealNonStrict.prototype['last_outgoing_mail_time'] = undefined;

/**
 * The label assigned to the deal
 * @member {String} label
 */
DealNonStrict.prototype['label'] = undefined;

/**
 * The order number of the deal stage associated with the deal
 * @member {Number} stage_order_nr
 */
DealNonStrict.prototype['stage_order_nr'] = undefined;

/**
 * The name of the person associated with the deal
 * @member {String} person_name
 */
DealNonStrict.prototype['person_name'] = undefined;

/**
 * The name of the organization associated with the deal
 * @member {String} org_name
 */
DealNonStrict.prototype['org_name'] = undefined;

/**
 * The subject of the next activity associated with the deal
 * @member {String} next_activity_subject
 */
DealNonStrict.prototype['next_activity_subject'] = undefined;

/**
 * The type of the next activity associated with the deal
 * @member {String} next_activity_type
 */
DealNonStrict.prototype['next_activity_type'] = undefined;

/**
 * The duration of the next activity associated with the deal
 * @member {String} next_activity_duration
 */
DealNonStrict.prototype['next_activity_duration'] = undefined;

/**
 * The note of the next activity associated with the deal
 * @member {String} next_activity_note
 */
DealNonStrict.prototype['next_activity_note'] = undefined;

/**
 * The deal value formatted with selected currency. E.g. US$500
 * @member {String} formatted_value
 */
DealNonStrict.prototype['formatted_value'] = undefined;

/**
 * Probability times deal value. Probability can either be deal probability or if not set, then stage probability.
 * @member {Number} weighted_value
 */
DealNonStrict.prototype['weighted_value'] = undefined;

/**
 * The weighted_value formatted with selected currency. E.g. US$500
 * @member {String} formatted_weighted_value
 */
DealNonStrict.prototype['formatted_weighted_value'] = undefined;

/**
 * The currency associated with the deal
 * @member {String} weighted_value_currency
 */
DealNonStrict.prototype['weighted_value_currency'] = undefined;

/**
 * The date and time of changing the deal status as rotten
 * @member {String} rotten_time
 */
DealNonStrict.prototype['rotten_time'] = undefined;

/**
 * The name of the deal owner
 * @member {String} owner_name
 */
DealNonStrict.prototype['owner_name'] = undefined;

/**
 * The BCC email of the deal
 * @member {String} cc_email
 */
DealNonStrict.prototype['cc_email'] = undefined;

/**
 * If the organization that is associated with the deal is hidden or not
 * @member {Boolean} org_hidden
 */
DealNonStrict.prototype['org_hidden'] = undefined;

/**
 * If the person that is associated with the deal is hidden or not
 * @member {Boolean} person_hidden
 */
DealNonStrict.prototype['person_hidden'] = undefined;


// Implement DealNonStrictModeFields interface:
/**
 * The ID of the deal
 * @member {Number} id
 */
DealNonStrictModeFields.prototype['id'] = undefined;
/**
 * @member {module:model/DealNonStrictModeFieldsCreatorUserId} creator_user_id
 */
DealNonStrictModeFields.prototype['creator_user_id'] = undefined;
/**
 * @member {module:model/DealUserDataWithId} user_id
 */
DealNonStrictModeFields.prototype['user_id'] = undefined;
/**
 * @member {module:model/DealPersonDataWithId} person_id
 */
DealNonStrictModeFields.prototype['person_id'] = undefined;
/**
 * @member {module:model/DealOrganizationDataWithId} org_id
 */
DealNonStrictModeFields.prototype['org_id'] = undefined;
// Implement BaseDeal interface:
/**
 * The ID of the deal stage
 * @member {Number} stage_id
 */
BaseDeal.prototype['stage_id'] = undefined;
/**
 * The title of the deal
 * @member {String} title
 */
BaseDeal.prototype['title'] = undefined;
/**
 * The value of the deal
 * @member {Number} value
 */
BaseDeal.prototype['value'] = undefined;
/**
 * The currency associated with the deal
 * @member {String} currency
 */
BaseDeal.prototype['currency'] = undefined;
/**
 * The creation date and time of the deal
 * @member {String} add_time
 */
BaseDeal.prototype['add_time'] = undefined;
/**
 * The last updated date and time of the deal
 * @member {String} update_time
 */
BaseDeal.prototype['update_time'] = undefined;
/**
 * The last updated date and time of the deal stage
 * @member {String} stage_change_time
 */
BaseDeal.prototype['stage_change_time'] = undefined;
/**
 * Whether the deal is active or not
 * @member {Boolean} active
 */
BaseDeal.prototype['active'] = undefined;
/**
 * Whether the deal is deleted or not
 * @member {Boolean} deleted
 */
BaseDeal.prototype['deleted'] = undefined;
/**
 * The status of the deal
 * @member {String} status
 */
BaseDeal.prototype['status'] = undefined;
/**
 * The success probability percentage of the deal
 * @member {Number} probability
 */
BaseDeal.prototype['probability'] = undefined;
/**
 * The date of the next activity associated with the deal
 * @member {String} next_activity_date
 */
BaseDeal.prototype['next_activity_date'] = undefined;
/**
 * The time of the next activity associated with the deal
 * @member {String} next_activity_time
 */
BaseDeal.prototype['next_activity_time'] = undefined;
/**
 * The ID of the next activity associated with the deal
 * @member {Number} next_activity_id
 */
BaseDeal.prototype['next_activity_id'] = undefined;
/**
 * The ID of the last activity associated with the deal
 * @member {Number} last_activity_id
 */
BaseDeal.prototype['last_activity_id'] = undefined;
/**
 * The date of the last activity associated with the deal
 * @member {String} last_activity_date
 */
BaseDeal.prototype['last_activity_date'] = undefined;
/**
 * The reason for losing the deal
 * @member {String} lost_reason
 */
BaseDeal.prototype['lost_reason'] = undefined;
/**
 * The visibility of the deal
 * @member {String} visible_to
 */
BaseDeal.prototype['visible_to'] = undefined;
/**
 * The date and time of closing the deal
 * @member {String} close_time
 */
BaseDeal.prototype['close_time'] = undefined;
/**
 * The ID of pipeline associated with the deal
 * @member {Number} pipeline_id
 */
BaseDeal.prototype['pipeline_id'] = undefined;
/**
 * The date and time of changing the deal status as won
 * @member {String} won_time
 */
BaseDeal.prototype['won_time'] = undefined;
/**
 * The date and time of the first time changing the deal status as won
 * @member {String} first_won_time
 */
BaseDeal.prototype['first_won_time'] = undefined;
/**
 * The date and time of changing the deal status as lost
 * @member {String} lost_time
 */
BaseDeal.prototype['lost_time'] = undefined;
/**
 * The number of products associated with the deal
 * @member {Number} products_count
 */
BaseDeal.prototype['products_count'] = undefined;
/**
 * The number of files associated with the deal
 * @member {Number} files_count
 */
BaseDeal.prototype['files_count'] = undefined;
/**
 * The number of notes associated with the deal
 * @member {Number} notes_count
 */
BaseDeal.prototype['notes_count'] = undefined;
/**
 * The number of followers associated with the deal
 * @member {Number} followers_count
 */
BaseDeal.prototype['followers_count'] = undefined;
/**
 * The number of emails associated with the deal
 * @member {Number} email_messages_count
 */
BaseDeal.prototype['email_messages_count'] = undefined;
/**
 * The number of activities associated with the deal
 * @member {Number} activities_count
 */
BaseDeal.prototype['activities_count'] = undefined;
/**
 * The number of completed activities associated with the deal
 * @member {Number} done_activities_count
 */
BaseDeal.prototype['done_activities_count'] = undefined;
/**
 * The number of incomplete activities associated with the deal
 * @member {Number} undone_activities_count
 */
BaseDeal.prototype['undone_activities_count'] = undefined;
/**
 * The number of participants associated with the deal
 * @member {Number} participants_count
 */
BaseDeal.prototype['participants_count'] = undefined;
/**
 * The expected close date of the deal
 * @member {Date} expected_close_date
 */
BaseDeal.prototype['expected_close_date'] = undefined;
/**
 * The date and time of the last incoming email associated with the deal
 * @member {String} last_incoming_mail_time
 */
BaseDeal.prototype['last_incoming_mail_time'] = undefined;
/**
 * The date and time of the last outgoing email associated with the deal
 * @member {String} last_outgoing_mail_time
 */
BaseDeal.prototype['last_outgoing_mail_time'] = undefined;
/**
 * The label assigned to the deal
 * @member {String} label
 */
BaseDeal.prototype['label'] = undefined;
/**
 * The order number of the deal stage associated with the deal
 * @member {Number} stage_order_nr
 */
BaseDeal.prototype['stage_order_nr'] = undefined;
/**
 * The name of the person associated with the deal
 * @member {String} person_name
 */
BaseDeal.prototype['person_name'] = undefined;
/**
 * The name of the organization associated with the deal
 * @member {String} org_name
 */
BaseDeal.prototype['org_name'] = undefined;
/**
 * The subject of the next activity associated with the deal
 * @member {String} next_activity_subject
 */
BaseDeal.prototype['next_activity_subject'] = undefined;
/**
 * The type of the next activity associated with the deal
 * @member {String} next_activity_type
 */
BaseDeal.prototype['next_activity_type'] = undefined;
/**
 * The duration of the next activity associated with the deal
 * @member {String} next_activity_duration
 */
BaseDeal.prototype['next_activity_duration'] = undefined;
/**
 * The note of the next activity associated with the deal
 * @member {String} next_activity_note
 */
BaseDeal.prototype['next_activity_note'] = undefined;
/**
 * The deal value formatted with selected currency. E.g. US$500
 * @member {String} formatted_value
 */
BaseDeal.prototype['formatted_value'] = undefined;
/**
 * Probability times deal value. Probability can either be deal probability or if not set, then stage probability.
 * @member {Number} weighted_value
 */
BaseDeal.prototype['weighted_value'] = undefined;
/**
 * The weighted_value formatted with selected currency. E.g. US$500
 * @member {String} formatted_weighted_value
 */
BaseDeal.prototype['formatted_weighted_value'] = undefined;
/**
 * The currency associated with the deal
 * @member {String} weighted_value_currency
 */
BaseDeal.prototype['weighted_value_currency'] = undefined;
/**
 * The date and time of changing the deal status as rotten
 * @member {String} rotten_time
 */
BaseDeal.prototype['rotten_time'] = undefined;
/**
 * The name of the deal owner
 * @member {String} owner_name
 */
BaseDeal.prototype['owner_name'] = undefined;
/**
 * The BCC email of the deal
 * @member {String} cc_email
 */
BaseDeal.prototype['cc_email'] = undefined;
/**
 * If the organization that is associated with the deal is hidden or not
 * @member {Boolean} org_hidden
 */
BaseDeal.prototype['org_hidden'] = undefined;
/**
 * If the person that is associated with the deal is hidden or not
 * @member {Boolean} person_hidden
 */
BaseDeal.prototype['person_hidden'] = undefined;




export default DealNonStrict;

