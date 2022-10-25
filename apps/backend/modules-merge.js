import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import { securityResolvers, securityTypes } from "@dracul/user-backend";

import { types as customTypes, resolvers as customResolvers } from "@dracul/customize-backend";
import { types as queueTypes, resolvers as queueResolvers } from "@dracul/queue-backend";
import { types as notificationTypes, resolvers as notificationResolvers } from "@dracul/notification-backend";
// Modules RESOLVERS
import { resolvers as baseResolvers } from "./modules/base/graphql";
import { resolvers as peopleResolvers, types as peopleTypes } from "./modules/people/graphql";
import { resolvers as customFieldsResolvers, types as customFieldsTypes } from "./modules/customFields/graphql";
import { resolvers as campaignResolvers, types as campaignTypes } from "./modules/campaign/graphql";
import { resolvers as envResolvers, types as envTypes } from "./modules/environmentvariables/graphql";
import { resolvers as providersResolvers, types as providersTypes } from "./modules/providers/graphql";
import { resolvers as interactionsResolvers, types as interactionsTypes } from "./modules/interactions/graphql";
import { resolvers as companiesResolvers, types as companiesTypes } from "./modules/companies/graphql";
import { resolvers as notesResolvers, types as notesTypes } from "./modules/notes/graphql";
import { resolvers as auditResolvers, types as auditTypes } from "./modules/audit/graphql";
import { resolvers as apiGoogleResolvers, types as apiGoogleTypes } from "./modules/apigoogle/graphql";

// Modules TYPEDEFS
import { types as baseTypes } from "./modules/base/graphql";

export const resolvers = mergeResolvers([
  baseResolvers,
  securityResolvers,
  customFieldsResolvers,
  customResolvers,
  peopleResolvers,
  campaignResolvers,
  envResolvers,
  companiesResolvers,
  providersResolvers,
  interactionsResolvers,
  notesResolvers,
  notificationResolvers,
  queueResolvers,
  auditResolvers,
  apiGoogleResolvers,
]);

export const typeDefs = mergeTypes([
  baseTypes,
  securityTypes,
  customFieldsTypes,
  customTypes,
  peopleTypes,
  campaignTypes,
  envTypes,
  companiesTypes,
  providersTypes,
  interactionsTypes,
  notesTypes,
  notificationTypes,
  queueTypes,
  auditTypes,
  apiGoogleTypes,
]);
