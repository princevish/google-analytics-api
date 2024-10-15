## Follow the instructions in the [API Quickstart Link](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries#node.js)


API Quickstart 
================

Stay organized with collections   Save and categorize content based on your preferences.   - On this page
- [API Quickstart](#api-quickstart)
  - [Step 1. Enable the API](#step-1-enable-the-api)
  - [Step 2. Add service account to the Google Analytics property](#step-2-add-service-account-to-the-google-analytics-property)
  - [Step 3. Configure authentication](#step-3-configure-authentication)

 Step 1. Enable the API
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Click the following button to create a new Google Cloud project, automatically enable the Google Analytics Data API v1 and create the service account needed for this tutorial:

Enable the Google Analytics Data API v1In resulting dialog click **DOWNLOAD CLIENT CONFIGURATION** and save the file `credentials.json` to your working directory.

Step 2. Add service account to the Google Analytics property
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Using a text editor, open the `credentials.json` file downloaded in the previous step and search for `client_email` field to obtain the service account email address, such as "quickstart@PROJECT-ID.iam.gserviceaccount.com".

Use this email address to [add a user](//support.google.com/analytics/answer/1009702) to the Google Analytics property you want to access using the Google Analytics Data API v1. For this tutorial, only [Viewer](//support.google.com/analytics/answer/9305587) permissions are needed.

Step 3. Configure authentication
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This application demonstrates the usage of the Google Analytics Data API v1 using [service account credentials](//cloud.google.com/iam/docs/understanding-service-accounts).

[Read more](//cloud.google.com/docs/authentication/production) for instructions on creating and setting service account credentials for your application.

One way to provide service account credentials is by setting the [GOOGLE\_APPLICATION\_CREDENTIALS environment variable](https://cloud.google.com/docs/authentication/production#setting_the_environment_variable), the API client will use the value of this variable to find the service account key JSON file.

To set the application credentials in this example, run the following command and use the path to the service account JSON file downloaded
