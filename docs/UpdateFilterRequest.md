# Pipedrive.UpdateFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the filter | [optional] 
**conditions** | **Object** | The conditions of the filter as a JSON object. Please note that a maximum of 16 conditions is allowed per filter. It requires a minimum structure as follows: &#x60;{\&quot;glue\&quot;:\&quot;and\&quot;,\&quot;conditions\&quot;:[{\&quot;glue\&quot;:\&quot;and\&quot;,\&quot;conditions\&quot;: [CONDITION_OBJECTS]},{\&quot;glue\&quot;:\&quot;or\&quot;,\&quot;conditions\&quot;:[CONDITION_OBJECTS]}]}&#x60;. Replace &#x60;CONDITION_OBJECTS&#x60; with JSON objects of the following structure: &#x60;{\&quot;object\&quot;:\&quot;\&quot;,\&quot;field_id\&quot;:\&quot;\&quot;, \&quot;operator\&quot;:\&quot;\&quot;,\&quot;value\&quot;:\&quot;\&quot;, \&quot;extra_value\&quot;:\&quot;\&quot;}&#x60; or leave the array empty. Depending on the object type you should use another API endpoint to get &#x60;field_id&#x60;. There are five types of objects you can choose from: &#x60;\&quot;person\&quot;&#x60;, &#x60;\&quot;deal\&quot;&#x60;, &#x60;\&quot;organization\&quot;&#x60;, &#x60;\&quot;product\&quot;&#x60;, &#x60;\&quot;activity\&quot;&#x60; and you can use these types of operators depending on what type of a field you have: &#x60;\&quot;IS NOT NULL\&quot;&#x60;, &#x60;\&quot;IS NULL\&quot;&#x60;, &#x60;\&quot;&lt;&#x3D;\&quot;&#x60;, &#x60;\&quot;&gt;&#x3D;\&quot;&#x60;, &#x60;\&quot;&lt;\&quot;&#x60;, &#x60;\&quot;&gt;\&quot;&#x60;, &#x60;\&quot;!&#x3D;\&quot;&#x60;, &#x60;\&quot;&#x3D;\&quot;&#x60;, &#x60;\&quot;LIKE &#39;$%&#39;\&quot;&#x60;, &#x60;\&quot;LIKE &#39;%$%&#39;\&quot;&#x60;, &#x60;\&quot;NOT LIKE &#39;$%&#39;\&quot;&#x60;. To get a better understanding of how filters work try creating them directly from the Pipedrive application. | 


