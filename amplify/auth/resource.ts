import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },

  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false,
    },
    "custom:started_free_trial": {
      dataType: "DateTime",
      mutable: true,
    },
  },

  groups: ["VIEWERS", "EDITORS", "ADMINISTRATORS"],
});
