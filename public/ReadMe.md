Here's a description of each environment variable:

OPTIMIZELY_API_URL: The base URL for the Optimizely Content Graph API. This is typically set to "https://cg.optimizely.com/content/v2".
OPTIMIZELY_SINGLE_KEY: Your Optimizely Content Graph API key. This is used to authenticate your requests to the API.
OPTIMIZELY_PREVIEW_SECRET: Generated base64 string based on your AppKey and AppSecret credentials. For more details I recommend you to take a look at Kunal’s article.`
OPTIMIZELY_REVALIDATE_SECRET: A secret key used for revalidating cached content. This should also be a secure, randomly generated string.
OPTIMIZELY_START_PAGE_URL: Defines the full route URL of the Start Page in Optimizely CMS. When using hierarchical routing, Optimizely does not assign the root path / to the Start Page by default. Instead, the Start Page must have an explicit URL like "/start-page". This impacts the overall routing logic and cache revalidation mechanisms. Therefore, this variable must be set manually to indicate the correct URL of the Start Page.
NEXT_PUBLIC_CMS_URL: The URL of the SaaS CMS instance, will be used to add the communicationinjector.js script for the preview mode.
