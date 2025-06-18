export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: { input: any; output: any; }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Account = BaseModelInterface & Node & {
  __typename?: 'Account';
  bank: Bank;
  bankId: Scalars['ID']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isConfirm?: Maybe<Scalars['Boolean']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
  owner: AccountOwner;
  ownerId: Scalars['ID']['output'];
  ownerType: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  regionId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Account. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** A list of edges. */
  edges: Array<AccountEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Account>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Account. */
export type AccountConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Account. */
export type AccountConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Account;
};

export type AccountFilter = {
  bank?: InputMaybe<BankFilter>;
  bankId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  iban?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isConfirm?: InputMaybe<BoolFilter>;
  isDefault?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<IdFilter>;
  ownerType?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  region?: InputMaybe<RegionFilter>;
  regionId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

/** Account owner type */
export type AccountOwner = Merchant | User;

export type Address = BaseModelInterface & Node & {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  district?: Maybe<District>;
  districtId?: Maybe<Scalars['ID']['output']>;
  districtName?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  owner?: Maybe<Node>;
  ownerId: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['String']['output']>;
  quarter?: Maybe<Quarter>;
  quarterId?: Maybe<Scalars['ID']['output']>;
  quarterName?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  stateId?: Maybe<Scalars['ID']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  village?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  coordinate?: InputMaybe<Scalars['JSON']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  districtName?: InputMaybe<Scalars['String']['input']>;
  /** ID */
  id?: InputMaybe<Scalars['ID']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  quarterId?: InputMaybe<Scalars['ID']['input']>;
  quarterName?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['ID']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  village?: InputMaybe<Scalars['String']['input']>;
  what3words?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Agreements for users & merchants */
export type Agreement = BaseModelInterface & Node & {
  __typename?: 'Agreement';
  audienceKind: AgreementAudienceKind;
  category: AgreementCategory;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isForce: Scalars['Boolean']['output'];
  preferences: Scalars['JSON']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  version: Scalars['Int']['output'];
};

export enum AgreementAudienceKind {
  /** admin */
  Admin = 'admin',
  /** everyone */
  Everyone = 'everyone',
  /** merchant */
  Merchant = 'merchant',
  /** user */
  User = 'user'
}

export enum AgreementCategory {
  /** contract */
  Contract = 'contract',
  /** term */
  Term = 'term'
}

/** The connection type for Agreement. */
export type AgreementConnection = {
  __typename?: 'AgreementConnection';
  /** A list of edges. */
  edges: Array<AgreementEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Agreement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Agreement. */
export type AgreementConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Agreement. */
export type AgreementConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type AgreementEdge = {
  __typename?: 'AgreementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Agreement;
};

export type AgreementFilter = {
  audienceKind?: InputMaybe<EnumStringFilter>;
  category?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ApiLog = BaseModelInterface & Node & {
  __typename?: 'ApiLog';
  createdAt: Scalars['ISO8601DateTime']['output'];
  headers?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  request?: Maybe<Scalars['String']['output']>;
  requestAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  requestMethod?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  responseAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  targetId?: Maybe<Scalars['Int']['output']>;
  targetType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

/** The connection type for ApiLog. */
export type ApiLogConnection = {
  __typename?: 'ApiLogConnection';
  /** A list of edges. */
  edges: Array<ApiLogEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<ApiLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for ApiLog. */
export type ApiLogConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for ApiLog. */
export type ApiLogConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type ApiLogEdge = {
  __typename?: 'ApiLogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ApiLog;
};

export type ApiLogFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  requestAt?: InputMaybe<DateFilter>;
  requestMethod?: InputMaybe<StringFilter>;
  responseAt?: InputMaybe<DateFilter>;
  targetId?: InputMaybe<IntFilter>;
  targetType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  url?: InputMaybe<StringFilter>;
};

export type AppVersion = BaseModelInterface & Node & {
  __typename?: 'AppVersion';
  createdAt: Scalars['ISO8601DateTime']['output'];
  deepLink?: Maybe<Scalars['JSON']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  os?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

/** The connection type for AppVersion. */
export type AppVersionConnection = {
  __typename?: 'AppVersionConnection';
  /** A list of edges. */
  edges: Array<AppVersionEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<AppVersion>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for AppVersion. */
export type AppVersionConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for AppVersion. */
export type AppVersionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type AppVersionEdge = {
  __typename?: 'AppVersionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AppVersion;
};

export type AppVersionFilter = {
  createdAt?: InputMaybe<DateFilter>;
  deepLink?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  os?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  version?: InputMaybe<StringFilter>;
};

export type Article = BaseModelInterface & Node & {
  __typename?: 'Article';
  authorId?: Maybe<Scalars['ID']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ArticleCategory>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  images: Array<Image>;
  isExternal: Scalars['Boolean']['output'];
  isGlobal: Scalars['Boolean']['output'];
  link?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  regionId?: Maybe<Scalars['ID']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status: ArticleArticleStatuses;
  thumbnail?: Maybe<Image>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  videos: Array<Attachment>;
};


export type ArticleBodyArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ArticleTitleArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleArticleFilter = {
  author?: InputMaybe<UserFilter>;
  authorId?: InputMaybe<IdFilter>;
  category?: InputMaybe<ArticleCategoryFilter>;
  categoryId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  region?: InputMaybe<RegionFilter>;
  regionId?: InputMaybe<IdFilter>;
  source?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum ArticleArticleStatuses {
  /** archived */
  Archived = 'archived',
  /** draft */
  Draft = 'draft',
  /** published */
  Published = 'published'
}

export type ArticleCategory = BaseModelInterface & Node & {
  __typename?: 'ArticleCategory';
  /** Returns list of Article::Article */
  articles?: Maybe<ArticleConnection>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isGlobal: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type ArticleCategoryArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type ArticleCategoryNameArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for ArticleCategory. */
export type ArticleCategoryConnection = {
  __typename?: 'ArticleCategoryConnection';
  /** A list of edges. */
  edges: Array<ArticleCategoryEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<ArticleCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for ArticleCategory. */
export type ArticleCategoryConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for ArticleCategory. */
export type ArticleCategoryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type ArticleCategoryEdge = {
  __typename?: 'ArticleCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ArticleCategory;
};

export type ArticleCategoryFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isGlobal?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  region?: InputMaybe<RegionFilter>;
  regionId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** The connection type for Article. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Article>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Article. */
export type ArticleConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Article. */
export type ArticleConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Article;
};

export type Asset = BaseModelInterface & Node & {
  __typename?: 'Asset';
  asset?: Maybe<Node>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  roles?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
};

/** The connection type for Asset. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Asset>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Asset. */
export type AssetConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Asset. */
export type AssetConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** File attachment */
export type Attachment = {
  __typename?: 'Attachment';
  attachmentContentType?: Maybe<Scalars['String']['output']>;
  attachmentFileName?: Maybe<Scalars['String']['output']>;
  attachmentFileSize?: Maybe<Scalars['Float']['output']>;
  attachmentId?: Maybe<Scalars['ID']['output']>;
  blob?: Maybe<Blob>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  signedId?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** File attachment */
export type AttachmentAttachmentFileSizeArgs = {
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Attachment. */
export type AttachmentConnection = {
  __typename?: 'AttachmentConnection';
  /** A list of edges. */
  edges: Array<AttachmentEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Attachment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Attachment. */
export type AttachmentConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Attachment. */
export type AttachmentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type AttachmentEdge = {
  __typename?: 'AttachmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Attachment;
};

export type AttachmentFilter = {
  blob?: InputMaybe<BlobFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  recordId?: InputMaybe<IdFilter>;
  recordType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Audit = {
  __typename?: 'Audit';
  action?: Maybe<Scalars['String']['output']>;
  associatedId?: Maybe<Scalars['Int']['output']>;
  associatedType?: Maybe<Scalars['String']['output']>;
  auditableId?: Maybe<Scalars['Int']['output']>;
  auditableType?: Maybe<Scalars['String']['output']>;
  auditedChanges?: Maybe<Scalars['JSON']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  remoteAddress?: Maybe<Scalars['String']['output']>;
  requestUuid?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userType?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

/** The connection type for Audit. */
export type AuditConnection = {
  __typename?: 'AuditConnection';
  /** A list of edges. */
  edges: Array<AuditEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Audit>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Audit. */
export type AuditConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Audit. */
export type AuditConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type AuditEdge = {
  __typename?: 'AuditEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Audit;
};

export type Bank = BaseModelInterface & Node & {
  __typename?: 'Bank';
  code: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  icon?: Maybe<Image>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  regionId: Scalars['ID']['output'];
  swiftCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum BankCgwStatus {
  /** active */
  Active = 'active',
  /** failed */
  Failed = 'failed',
  /** inactive */
  Inactive = 'inactive',
  /** out_of_balance */
  OutOfBalance = 'out_of_balance'
}

/** The connection type for Bank. */
export type BankConnection = {
  __typename?: 'BankConnection';
  /** A list of edges. */
  edges: Array<BankEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Bank>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Bank. */
export type BankConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Bank. */
export type BankConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type BankEdge = {
  __typename?: 'BankEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Bank;
};

export type BankFilter = {
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  swiftCode?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type BankTransaction = BaseModelInterface & Node & {
  __typename?: 'BankTransaction';
  account?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  cgw?: Maybe<Cgw>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  customDescription?: Maybe<Scalars['String']['output']>;
  customerAccount?: Maybe<Scalars['String']['output']>;
  customerBank?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isCaptured?: Maybe<Scalars['Boolean']['output']>;
  isCredit: Scalars['Boolean']['output'];
  number?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Node>;
  targetId?: Maybe<Scalars['ID']['output']>;
  targetType?: Maybe<Scalars['String']['output']>;
  transactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for BankTransaction. */
export type BankTransactionConnection = {
  __typename?: 'BankTransactionConnection';
  /** A list of edges. */
  edges: Array<BankTransactionEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<BankTransaction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for BankTransaction. */
export type BankTransactionConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for BankTransaction. */
export type BankTransactionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type BankTransactionEdge = {
  __typename?: 'BankTransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BankTransaction;
};

export type BankTransactionFilter = {
  account?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  customDescription?: InputMaybe<StringFilter>;
  customerAccount?: InputMaybe<StringFilter>;
  customerBank?: InputMaybe<StringFilter>;
  customerName?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isCaptured?: InputMaybe<BoolFilter>;
  ref?: InputMaybe<StringFilter>;
  targetId?: InputMaybe<IntFilter>;
  targetType?: InputMaybe<StringFilter>;
  transactionDate?: InputMaybe<DateFilter>;
  typeCode?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type BankTransfer = BaseModelInterface & Node & {
  __typename?: 'BankTransfer';
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  bankCode?: Maybe<Scalars['String']['output']>;
  cgw?: Maybe<Cgw>;
  cgwId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<BankTransferStatus>;
  targetId?: Maybe<Scalars['Int']['output']>;
  targetType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for BankTransfer. */
export type BankTransferConnection = {
  __typename?: 'BankTransferConnection';
  /** A list of edges. */
  edges: Array<BankTransferEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<BankTransfer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for BankTransfer. */
export type BankTransferConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for BankTransfer. */
export type BankTransferConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type BankTransferEdge = {
  __typename?: 'BankTransferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BankTransfer;
};

export type BankTransferFilter = {
  accountName?: InputMaybe<StringFilter>;
  accountNumber?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  bankCode?: InputMaybe<StringFilter>;
  cgwId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  targetId?: InputMaybe<IdFilter>;
  targetType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum BankTransferStatus {
  /** failed */
  Failed = 'failed',
  /** pending */
  Pending = 'pending',
  /** sending */
  Sending = 'sending',
  /** sent */
  Sent = 'sent'
}

export type Banner = BaseModelInterface & Node & {
  __typename?: 'Banner';
  createdAt: Scalars['ISO8601DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  page?: Maybe<Scalars['String']['output']>;
  /** Associated region */
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  showArrow?: Maybe<Scalars['Boolean']['output']>;
  showIndicators?: Maybe<Scalars['Boolean']['output']>;
  showThumbnail?: Maybe<Scalars['Boolean']['output']>;
  status: Scalars['Boolean']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Banner. */
export type BannerConnection = {
  __typename?: 'BannerConnection';
  /** A list of edges. */
  edges: Array<BannerEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Banner>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Banner. */
export type BannerConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Banner. */
export type BannerConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type BannerEdge = {
  __typename?: 'BannerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Banner;
};

export type BannerFilter = {
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  page?: InputMaybe<StringFilter>;
  region?: InputMaybe<RegionFilter>;
  regionId?: InputMaybe<IdFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** An object with an ID. */
export type BaseModelInterface = {
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Biometric = BaseModelInterface & Node & {
  __typename?: 'Biometric';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  publicKey: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

/** File attachment blob */
export type Blob = {
  __typename?: 'Blob';
  byteSize?: Maybe<Scalars['Int']['output']>;
  checkSum?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
};

export type BlobFilter = {
  byteSize?: InputMaybe<IntFilter>;
  contentType?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  filename?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type BoolFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cgw = BaseModelInterface & Node & {
  __typename?: 'CGW';
  balance?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isCredit: Scalars['Boolean']['output'];
  minBalance?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  status: BankCgwStatus;
  transferAccount?: Maybe<Scalars['String']['output']>;
  transferPassword?: Maybe<Scalars['String']['output']>;
  transferUsername?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for CGW. */
export type CgwConnection = {
  __typename?: 'CGWConnection';
  /** A list of edges. */
  edges: Array<CgwEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Cgw>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for CGW. */
export type CgwConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for CGW. */
export type CgwConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type CgwEdge = {
  __typename?: 'CGWEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Cgw;
};

export type CgwFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isCredit?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  transferAccount?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Category = BaseModelInterface & Node & {
  __typename?: 'Category';
  children?: Maybe<Array<Category>>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  icon?: Maybe<Image>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  /** Merchant associated with the category */
  merchants?: Maybe<MerchantConnection>;
  /** Merchants and categories relation */
  merchantsCategories?: Maybe<MerchantsCategoryConnection>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Category>;
  position: Scalars['Int']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type CategoryMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type CategoryMerchantsCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantsCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type CategoryNameArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Category. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Category>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Category. */
export type CategoryConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Category. */
export type CategoryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
};

export type CategoryFilter = {
  ancestry?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type ConfirmableToken = BaseModelInterface & Node & {
  __typename?: 'ConfirmableToken';
  /** App redirect screen for mail OTP confirmation */
  appScreen?: Maybe<Scalars['String']['output']>;
  attempts: Scalars['Int']['output'];
  confirmable?: Maybe<Node>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  expireAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  expired: Scalars['Boolean']['output'];
  generatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum ContactRelation {
  /** Child */
  Child = 'child',
  /** Colleague */
  Colleague = 'colleague',
  /** Family */
  Family = 'family',
  /** Friend */
  Friend = 'friend',
  /** Husband or wife */
  HusbandOrWife = 'husband_or_wife',
  /** Neighbour */
  Neighbour = 'neighbour',
  /** Other */
  Other = 'other',
  /** Other Family Members */
  OtherFamilyMembers = 'other_family_members',
  /** Partner */
  Partner = 'partner',
  /** Sibling */
  Sibling = 'sibling'
}

export enum ContactRelationTwo {
  /** Child */
  Child = 'child',
  /** Colleague */
  Colleague = 'colleague',
  /** Family */
  Family = 'family',
  /** Friend */
  Friend = 'friend',
  /** Husband or wife */
  HusbandOrWife = 'husband_or_wife',
  /** Neighbour */
  Neighbour = 'neighbour',
  /** Other */
  Other = 'other',
  /** Other Family Members */
  OtherFamilyMembers = 'other_family_members',
  /** Partner */
  Partner = 'partner',
  /** Sibling */
  Sibling = 'sibling'
}

export enum Contract {
  /** company */
  Company = 'company',
  /** individual */
  Individual = 'individual'
}

export type ContractFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  documentTemplateId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  regionId?: InputMaybe<IdFilter>;
  signedAt?: InputMaybe<DateFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userId?: InputMaybe<IdFilter>;
};

export enum ContractStatus {
  /** active */
  Active = 'active',
  /** inactive */
  Inactive = 'inactive'
}

export type Country = BaseModelInterface & Node & {
  __typename?: 'Country';
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  geoJson?: Maybe<Scalars['JSON']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  iso?: Maybe<Scalars['String']['output']>;
  iso3?: Maybe<Scalars['String']['output']>;
  isoName?: Maybe<Scalars['String']['output']>;
  isoNumeric?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numCode?: Maybe<Scalars['Int']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  states: Array<State>;
  statesRequired: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  zipCodeRequired: Scalars['Boolean']['output'];
};

/** The connection type for Country. */
export type CountryConnection = {
  __typename?: 'CountryConnection';
  /** A list of edges. */
  edges: Array<CountryEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Country>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Country. */
export type CountryConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Country. */
export type CountryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type CountryEdge = {
  __typename?: 'CountryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Country;
};

export type CountryFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isoName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type CreditScore = BaseModelInterface & Node & {
  __typename?: 'CreditScore';
  createdAt: Scalars['ISO8601DateTime']['output'];
  creditScoreProduct?: Maybe<CreditScoreProduct>;
  creditScoreProductId?: Maybe<Scalars['ID']['output']>;
  currency: CreditScoreCurrency;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  regionId?: Maybe<Scalars['ID']['output']>;
  score: Scalars['Float']['output'];
  statementId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Owner of the credit score */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for CreditScore. */
export type CreditScoreConnection = {
  __typename?: 'CreditScoreConnection';
  /** A list of edges. */
  edges: Array<CreditScoreEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<CreditScore>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for CreditScore. */
export type CreditScoreConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for CreditScore. */
export type CreditScoreConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export enum CreditScoreCurrency {
  CurrencyIdr = 'CURRENCY_IDR',
  CurrencyMnt = 'CURRENCY_MNT'
}

/** An edge in a connection. */
export type CreditScoreEdge = {
  __typename?: 'CreditScoreEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CreditScore;
};

export type CreditScoreProduct = BaseModelInterface & Node & {
  __typename?: 'CreditScoreProduct';
  createdAt: Scalars['ISO8601DateTime']['output'];
  creditScore?: Maybe<CreditScore>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  maxLimit?: Maybe<Scalars['Float']['output']>;
  minLimit?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  productCurrency: CreditScoreProductCurrency;
  productMaxLimit?: Maybe<Scalars['Float']['output']>;
  productMinLimit?: Maybe<Scalars['Float']['output']>;
  regionId?: Maybe<Scalars['ID']['output']>;
  scoreMax?: Maybe<Scalars['Int']['output']>;
  scoreMin?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for CreditScoreProduct. */
export type CreditScoreProductConnection = {
  __typename?: 'CreditScoreProductConnection';
  /** A list of edges. */
  edges: Array<CreditScoreProductEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<CreditScoreProduct>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for CreditScoreProduct. */
export type CreditScoreProductConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for CreditScoreProduct. */
export type CreditScoreProductConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export enum CreditScoreProductCurrency {
  Idr = 'IDR',
  Mnt = 'MNT',
  Usd = 'USD'
}

/** An edge in a connection. */
export type CreditScoreProductEdge = {
  __typename?: 'CreditScoreProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CreditScoreProduct;
};

export type CreditScoreTransaction = BaseModelInterface & Node & {
  __typename?: 'CreditScoreTransaction';
  amount: Scalars['Float']['output'];
  balance: Scalars['Float']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  typeCode: CreditScoreTransactionTypeCode;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Owner of the credit score */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for CreditScoreTransaction. */
export type CreditScoreTransactionConnection = {
  __typename?: 'CreditScoreTransactionConnection';
  /** A list of edges. */
  edges: Array<CreditScoreTransactionEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<CreditScoreTransaction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for CreditScoreTransaction. */
export type CreditScoreTransactionConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for CreditScoreTransaction. */
export type CreditScoreTransactionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type CreditScoreTransactionEdge = {
  __typename?: 'CreditScoreTransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CreditScoreTransaction;
};

export enum CreditScoreTransactionTypeCode {
  Credit = 'CREDIT',
  Debit = 'DEBIT'
}

export type CurrencyRate = BaseModelInterface & Node & {
  __typename?: 'CurrencyRate';
  baseCurrency: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  rate?: Maybe<Scalars['Float']['output']>;
  rateDate: Scalars['ISO8601DateTime']['output'];
  source?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  updatedDate: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
};

/** The connection type for CurrencyRate. */
export type CurrencyRateConnection = {
  __typename?: 'CurrencyRateConnection';
  /** A list of edges. */
  edges: Array<CurrencyRateEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<CurrencyRate>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for CurrencyRate. */
export type CurrencyRateConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for CurrencyRate. */
export type CurrencyRateConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type CurrencyRateEdge = {
  __typename?: 'CurrencyRateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CurrencyRate;
};

export type CurrencyRateFilter = {
  baseCurrency?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  rate?: InputMaybe<IntFilter>;
  rateDate?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export type DanCitizenSalary = BaseModelInterface & Node & {
  __typename?: 'DanCitizenSalary';
  createdAt: Scalars['ISO8601DateTime']['output'];
  domName?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  orgName?: Maybe<Scalars['String']['output']>;
  orgSiId?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  salaryAmount?: Maybe<Scalars['Float']['output']>;
  salaryFee?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** The connection type for DanCitizenSalary. */
export type DanCitizenSalaryConnection = {
  __typename?: 'DanCitizenSalaryConnection';
  /** A list of edges. */
  edges: Array<DanCitizenSalaryEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<DanCitizenSalary>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for DanCitizenSalary. */
export type DanCitizenSalaryConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for DanCitizenSalary. */
export type DanCitizenSalaryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type DanCitizenSalaryEdge = {
  __typename?: 'DanCitizenSalaryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DanCitizenSalary;
};

export type DateFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['String']['input']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['String']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DebtorCode {
  /** BANK BANGKOK BANK LTD */
  BankBangkokBankLtd = 'bank_bangkok_bank_ltd',
  /** BANK MANDIRI SHANGHAI */
  BankMandiriShanghai = 'bank_mandiri_shanghai',
  /** Non Residents Central Government */
  NonResidentsCentralGovernment = 'non_residents_central_government',
  /** Non Residents Foreign State Owned Enterprises BUMN */
  NonResidentsForeignStateOwnedEnterprisesBumn = 'non_residents_foreign_state_owned_enterprises_bumn',
  /** Non Residents Individuals */
  NonResidentsIndividuals = 'non_residents_individuals',
  /** Non Residents Inter Bank Institutions Multi Asian Development Bank ADB */
  NonResidentsInterBankInstitutionsMultiAsianDevelopmentBankAdb = 'non_residents_inter_bank_institutions_multi_asian_development_bank_adb',
  /** Non Residents Inter Bank Institutions Multi Islamic Development Bank IDB */
  NonResidentsInterBankInstitutionsMultiIslamicDevelopmentBankIdb = 'non_residents_inter_bank_institutions_multi_islamic_development_bank_idb',
  /** Non Residents Inter Bank Institutions Multi Others */
  NonResidentsInterBankInstitutionsMultiOthers = 'non_residents_inter_bank_institutions_multi_others',
  /** Non Residents Inter Bank Institutions Multi World Bank */
  NonResidentsInterBankInstitutionsMultiWorldBank = 'non_residents_inter_bank_institutions_multi_world_bank',
  /** Non Residents International Institutions Others */
  NonResidentsInternationalInstitutionsOthers = 'non_residents_international_institutions_others',
  /** Non Residents Non Bank Financial Institutions Operating Outside Indonesia */
  NonResidentsNonBankFinancialInstitutionsOperatingOutsideIndonesia = 'non_residents_non_bank_financial_institutions_operating_outside_indonesia',
  /** Non Residents Other Private Sectors Indonesian Owned Private Sectors */
  NonResidentsOtherPrivateSectorsIndonesianOwnedPrivateSectors = 'non_residents_other_private_sectors_indonesian_owned_private_sectors',
  /** Non Residents Other Private Sectors Joint Venture between Indonesia and Foreign Countries */
  NonResidentsOtherPrivateSectorsJointVentureBetweenIndonesiaAndForeignCountries = 'non_residents_other_private_sectors_joint_venture_between_indonesia_and_foreign_countries',
  /** Non Residents Other Private Sectors Others */
  NonResidentsOtherPrivateSectorsOthers = 'non_residents_other_private_sectors_others',
  /** Non Residents Representatives of Foreign Countries and their Staff */
  NonResidentsRepresentativesOfForeignCountriesAndTheirStaff = 'non_residents_representatives_of_foreign_countries_and_their_staff',
  /** Residents Government Sector Central Government Mining and Energy */
  ResidentsGovernmentSectorCentralGovernmentMiningAndEnergy = 'residents_government_sector_central_government_mining_and_energy',
  /** Residents Government Sector Central Government Ministry of Defense */
  ResidentsGovernmentSectorCentralGovernmentMinistryOfDefense = 'residents_government_sector_central_government_ministry_of_defense',
  /** Residents Government Sector Central Government Ministry of Finance */
  ResidentsGovernmentSectorCentralGovernmentMinistryOfFinance = 'residents_government_sector_central_government_ministry_of_finance',
  /** Residents Government Sector Central Government Ministry of Religious Affairs */
  ResidentsGovernmentSectorCentralGovernmentMinistryOfReligiousAffairs = 'residents_government_sector_central_government_ministry_of_religious_affairs',
  /** Residents Government Sector Central Government Ministry of State Owned Enterprises BUMN */
  ResidentsGovernmentSectorCentralGovernmentMinistryOfStateOwnedEnterprisesBumn = 'residents_government_sector_central_government_ministry_of_state_owned_enterprises_bumn',
  /** Residents Government Sector Central Government Other Departments */
  ResidentsGovernmentSectorCentralGovernmentOtherDepartments = 'residents_government_sector_central_government_other_departments',
  /** Residents Government Sector Central Government State Treasury and Cash Office KPKN */
  ResidentsGovernmentSectorCentralGovernmentStateTreasuryAndCashOfficeKpkn = 'residents_government_sector_central_government_state_treasury_and_cash_office_kpkn',
  /** Residents Government Sector Government Agencies and Institutions Deposit Insurance Corporation */
  ResidentsGovernmentSectorGovernmentAgenciesAndInstitutionsDepositInsuranceCorporation = 'residents_government_sector_government_agencies_and_institutions_deposit_insurance_corporation',
  /** Residents Government Sector Government Agencies and Institutions Logistics Affairs Agency */
  ResidentsGovernmentSectorGovernmentAgenciesAndInstitutionsLogisticsAffairsAgency = 'residents_government_sector_government_agencies_and_institutions_logistics_affairs_agency',
  /** Residents Government Sector Government Agencies and Institutions Others */
  ResidentsGovernmentSectorGovernmentAgenciesAndInstitutionsOthers = 'residents_government_sector_government_agencies_and_institutions_others',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Financing Companies */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsFinancingCompanies = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_financing_companies',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Others */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsOthers = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_others',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Pension Fund */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsPensionFund = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_pension_fund',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Pension Fund Insurance Companies */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsPensionFundInsuranceCompanies = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_pension_fund_insurance_companies',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Securities Companies Investment Managers */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsSecuritiesCompaniesInvestmentManagers = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_securities_companies_investment_managers',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Securities Companies Mutual Fund Companies */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsSecuritiesCompaniesMutualFundCompanies = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_securities_companies_mutual_fund_companies',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Securities Companies Others */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsSecuritiesCompaniesOthers = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_securities_companies_others',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Securities Companies Securities Companies conducting Mutual Fund business activities */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsSecuritiesCompaniesSecuritiesCompaniesConductingMutualFundBusinessActivities = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_securities_companies_securities_companies_conducting_mutual_fund_business_activities',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Securities Companies Securities Companies not conducting Mutual Fund business activities */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsSecuritiesCompaniesSecuritiesCompaniesNotConductingMutualFundBusinessActivities = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_securities_companies_securities_companies_not_conducting_mutual_fund_business_activities',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Bank Financial Institutions Venture Capital */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonBankFinancialInstitutionsVentureCapital = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_bank_financial_institutions_venture_capital',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Financial Institutions Others */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonFinancialInstitutionsOthers = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_financial_institutions_others',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Financial Institutions Regional Market Companies */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonFinancialInstitutionsRegionalMarketCompanies = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_financial_institutions_regional_market_companies',
  /** Residents Government Sector Regional Government Owned Enterprises BUMD Non Financial Institutions Regional Water Companies */
  ResidentsGovernmentSectorRegionalGovernmentOwnedEnterprisesBumdNonFinancialInstitutionsRegionalWaterCompanies = 'residents_government_sector_regional_government_owned_enterprises_bumd_non_financial_institutions_regional_water_companies',
  /** Residents Government Sector Regional Government Pemda City Government */
  ResidentsGovernmentSectorRegionalGovernmentPemdaCityGovernment = 'residents_government_sector_regional_government_pemda_city_government',
  /** Residents Government Sector Regional Government Pemda Province */
  ResidentsGovernmentSectorRegionalGovernmentPemdaProvince = 'residents_government_sector_regional_government_pemda_province',
  /** Residents Government Sector Regional Government Pemda Regency Government */
  ResidentsGovernmentSectorRegionalGovernmentPemdaRegencyGovernment = 'residents_government_sector_regional_government_pemda_regency_government',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Construction Services Companies */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsConstructionServicesCompanies = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_construction_services_companies',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Financing Companies */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsFinancingCompanies = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_financing_companies',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Indonesian Export Financing Agency */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsIndonesianExportFinancingAgency = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_indonesian_export_financing_agency',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Others */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsOthers = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_others',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Others Others */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsOthersOthers = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_others_others',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Others PT Pos Indonesia */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsOthersPtPosIndonesia = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_others_pt_pos_indonesia',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Others State Pawnshop Perum Pegadaian */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsOthersStatePawnshopPerumPegadaian = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_others_state_pawnshop_perum_pegadaian',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFund = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund Armed Forces Social Insurance ASABRI */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFundArmedForcesSocialInsuranceAsabri = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund_armed_forces_social_insurance_asabri',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund Civil Servants Savings and Insurance Taspen */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFundCivilServantsSavingsAndInsuranceTaspen = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund_civil_servants_savings_and_insurance_taspen',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund Jasa Raharja Insurance */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFundJasaRaharjaInsurance = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund_jasa_raharja_insurance',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund Jasindo Insurance */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFundJasindoInsurance = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund_jasindo_insurance',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund Jiwasraya Insurance */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFundJiwasrayaInsurance = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund_jiwasraya_insurance',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund Other Insurance Companies */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFundOtherInsuranceCompanies = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund_other_insurance_companies',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Pension Fund Social Security Jamsostek */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPensionFundSocialSecurityJamsostek = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pension_fund_social_security_jamsostek',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Aneka Tambang */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtAnekaTambang = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_aneka_tambang',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Angkasa Pura */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtAngkasaPura = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_angkasa_pura',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Angkutan Sungai DanauPenyeberangan */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtAngkutanSungaiDanaupenyeberangan = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_angkutan_sungai_danaupenyeberangan',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Garuda Indonesia */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtGarudaIndonesia = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_garuda_indonesia',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Indosat */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtIndosat = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_indosat',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Jasa Marga */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtJasaMarga = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_jasa_marga',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Kereta Api Indonesia KAI */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtKeretaApiIndonesiaKai = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_kereta_api_indonesia_kai',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Krakatau Steel */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtKrakatauSteel = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_krakatau_steel',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Pelabuhan Laut Indonesia PELINDO */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtPelabuhanLautIndonesiaPelindo = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_pelabuhan_laut_indonesia_pelindo',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Pelayaran Nasional Indonesia PELNI */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtPelayaranNasionalIndonesiaPelni = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_pelayaran_nasional_indonesia_pelni',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Perkebunan Nusantara */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtPerkebunanNusantara = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_perkebunan_nusantara',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Pertamina */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtPertamina = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_pertamina',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Perusahaan Listrik Negara PLN */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtPerusahaanListrikNegaraPln = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_perusahaan_listrik_negara_pln',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Telkom */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtTelkom = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_telkom',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions PT Timah */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsPtTimah = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_pt_timah',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Securities Companies Investment Managers */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsSecuritiesCompaniesInvestmentManagers = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_securities_companies_investment_managers',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Securities Companies Mutual Fund Companies */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsSecuritiesCompaniesMutualFundCompanies = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_securities_companies_mutual_fund_companies',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Securities Companies Others */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsSecuritiesCompaniesOthers = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_securities_companies_others',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Securities Companies PT Danareksa */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsSecuritiesCompaniesPtDanareksa = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_securities_companies_pt_danareksa',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Securities Companies Securities Companies conducting Mutual Fund business activities */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsSecuritiesCompaniesSecuritiesCompaniesConductingMutualFundBusinessActivities = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_securities_companies_securities_companies_conducting_mutual_fund_business_activities',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Securities Companies Securities Companies not conducting Mutual Fund business activities */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsSecuritiesCompaniesSecuritiesCompaniesNotConductingMutualFundBusinessActivities = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_securities_companies_securities_companies_not_conducting_mutual_fund_business_activities',
  /** Residents Government Sector State Owned Enterprises Mixed Government Non Bank Financial Institutions Venture Capital */
  ResidentsGovernmentSectorStateOwnedEnterprisesMixedGovernmentNonBankFinancialInstitutionsVentureCapital = 'residents_government_sector_state_owned_enterprises_mixed_government_non_bank_financial_institutions_venture_capital',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Financing Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateFinancingCompanies = 'residents_private_sector_non_bank_financial_institutions_foreign_private_financing_companies',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Other Non Bank Financial Institutions Baitul Maal Wa Tamwil BMT */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateOtherNonBankFinancialInstitutionsBaitulMaalWaTamwilBmt = 'residents_private_sector_non_bank_financial_institutions_foreign_private_other_non_bank_financial_institutions_baitul_maal_wa_tamwil_bmt',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Other Non Bank Financial Institutions Other Foreign Owned Institutions in Indonesia */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateOtherNonBankFinancialInstitutionsOtherForeignOwnedInstitutionsInIndonesia = 'residents_private_sector_non_bank_financial_institutions_foreign_private_other_non_bank_financial_institutions_other_foreign_owned_institutions_in_indonesia',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Other Non Bank Financial Institutions Others */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateOtherNonBankFinancialInstitutionsOthers = 'residents_private_sector_non_bank_financial_institutions_foreign_private_other_non_bank_financial_institutions_others',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Pension Fund */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivatePensionFund = 'residents_private_sector_non_bank_financial_institutions_foreign_private_pension_fund',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Pension Fund Insurance Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivatePensionFundInsuranceCompanies = 'residents_private_sector_non_bank_financial_institutions_foreign_private_pension_fund_insurance_companies',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Securities Companies Investment Managers */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateSecuritiesCompaniesInvestmentManagers = 'residents_private_sector_non_bank_financial_institutions_foreign_private_securities_companies_investment_managers',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Securities Companies Mutual Fund Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateSecuritiesCompaniesMutualFundCompanies = 'residents_private_sector_non_bank_financial_institutions_foreign_private_securities_companies_mutual_fund_companies',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Securities Companies Others */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateSecuritiesCompaniesOthers = 'residents_private_sector_non_bank_financial_institutions_foreign_private_securities_companies_others',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Securities Companies Securities Companies conducting Mutual Fund business activities */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateSecuritiesCompaniesSecuritiesCompaniesConductingMutualFundBusinessActivities = 'residents_private_sector_non_bank_financial_institutions_foreign_private_securities_companies_securities_companies_conducting_mutual_fund_business_activities',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Securities Companies Securities Companies not conducting Mutual Fund business activities */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateSecuritiesCompaniesSecuritiesCompaniesNotConductingMutualFundBusinessActivities = 'residents_private_sector_non_bank_financial_institutions_foreign_private_securities_companies_securities_companies_not_conducting_mutual_fund_business_activities',
  /** Residents Private Sector Non Bank Financial Institutions Foreign Private Venture Capital */
  ResidentsPrivateSectorNonBankFinancialInstitutionsForeignPrivateVentureCapital = 'residents_private_sector_non_bank_financial_institutions_foreign_private_venture_capital',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Financing Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateFinancingCompanies = 'residents_private_sector_non_bank_financial_institutions_mixed_private_financing_companies',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Other Non Bank Financial Institutions Baitul Maal Wa Tamwil BMT */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateOtherNonBankFinancialInstitutionsBaitulMaalWaTamwilBmt = 'residents_private_sector_non_bank_financial_institutions_mixed_private_other_non_bank_financial_institutions_baitul_maal_wa_tamwil_bmt',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Other Non Bank Financial Institutions Other Foreign Owned Institutions in Indonesia */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateOtherNonBankFinancialInstitutionsOtherForeignOwnedInstitutionsInIndonesia = 'residents_private_sector_non_bank_financial_institutions_mixed_private_other_non_bank_financial_institutions_other_foreign_owned_institutions_in_indonesia',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Other Non Bank Financial Institutions Others */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateOtherNonBankFinancialInstitutionsOthers = 'residents_private_sector_non_bank_financial_institutions_mixed_private_other_non_bank_financial_institutions_others',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Pension Fund */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivatePensionFund = 'residents_private_sector_non_bank_financial_institutions_mixed_private_pension_fund',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Pension Fund Insurance Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivatePensionFundInsuranceCompanies = 'residents_private_sector_non_bank_financial_institutions_mixed_private_pension_fund_insurance_companies',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Securities Companies Investment Managers */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateSecuritiesCompaniesInvestmentManagers = 'residents_private_sector_non_bank_financial_institutions_mixed_private_securities_companies_investment_managers',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Securities Companies Mutual Fund Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateSecuritiesCompaniesMutualFundCompanies = 'residents_private_sector_non_bank_financial_institutions_mixed_private_securities_companies_mutual_fund_companies',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Securities Companies Others */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateSecuritiesCompaniesOthers = 'residents_private_sector_non_bank_financial_institutions_mixed_private_securities_companies_others',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Securities Companies Securities Companies conducting Mutual Fund business activities */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateSecuritiesCompaniesSecuritiesCompaniesConductingMutualFundBusinessActivities = 'residents_private_sector_non_bank_financial_institutions_mixed_private_securities_companies_securities_companies_conducting_mutual_fund_business_activities',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Securities Companies Securities Companies not conducting Mutual Fund business activities */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateSecuritiesCompaniesSecuritiesCompaniesNotConductingMutualFundBusinessActivities = 'residents_private_sector_non_bank_financial_institutions_mixed_private_securities_companies_securities_companies_not_conducting_mutual_fund_business_activities',
  /** Residents Private Sector Non Bank Financial Institutions Mixed Private Venture Capital */
  ResidentsPrivateSectorNonBankFinancialInstitutionsMixedPrivateVentureCapital = 'residents_private_sector_non_bank_financial_institutions_mixed_private_venture_capital',
  /** Residents Private Sector Non Bank Financial Institutions National Private Financing Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateFinancingCompanies = 'residents_private_sector_non_bank_financial_institutions_national_private_financing_companies',
  /** Residents Private Sector Non Bank Financial Institutions National Private Other Non Bank Financial Institutions Baitul Maal Wa Tamwil BMT */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateOtherNonBankFinancialInstitutionsBaitulMaalWaTamwilBmt = 'residents_private_sector_non_bank_financial_institutions_national_private_other_non_bank_financial_institutions_baitul_maal_wa_tamwil_bmt',
  /** Residents Private Sector Non Bank Financial Institutions National Private Other Non Bank Financial Institutions Other Cooperatives */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateOtherNonBankFinancialInstitutionsOtherCooperatives = 'residents_private_sector_non_bank_financial_institutions_national_private_other_non_bank_financial_institutions_other_cooperatives',
  /** Residents Private Sector Non Bank Financial Institutions National Private Other Non Bank Financial Institutions Others */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateOtherNonBankFinancialInstitutionsOthers = 'residents_private_sector_non_bank_financial_institutions_national_private_other_non_bank_financial_institutions_others',
  /** Residents Private Sector Non Bank Financial Institutions National Private Other Non Bank Financial Institutions Primary Cooperatives */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateOtherNonBankFinancialInstitutionsPrimaryCooperatives = 'residents_private_sector_non_bank_financial_institutions_national_private_other_non_bank_financial_institutions_primary_cooperatives',
  /** Residents Private Sector Non Bank Financial Institutions National Private Pension Fund */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivatePensionFund = 'residents_private_sector_non_bank_financial_institutions_national_private_pension_fund',
  /** Residents Private Sector Non Bank Financial Institutions National Private Pension Fund Insurance Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivatePensionFundInsuranceCompanies = 'residents_private_sector_non_bank_financial_institutions_national_private_pension_fund_insurance_companies',
  /** Residents Private Sector Non Bank Financial Institutions National Private Securities Companies Investment Managers */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateSecuritiesCompaniesInvestmentManagers = 'residents_private_sector_non_bank_financial_institutions_national_private_securities_companies_investment_managers',
  /** Residents Private Sector Non Bank Financial Institutions National Private Securities Companies Mutual Fund Companies */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateSecuritiesCompaniesMutualFundCompanies = 'residents_private_sector_non_bank_financial_institutions_national_private_securities_companies_mutual_fund_companies',
  /** Residents Private Sector Non Bank Financial Institutions National Private Securities Companies Others */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateSecuritiesCompaniesOthers = 'residents_private_sector_non_bank_financial_institutions_national_private_securities_companies_others',
  /** Residents Private Sector Non Bank Financial Institutions National Private Securities Companies Securities Companies conducting Mutual Fund business activities */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateSecuritiesCompaniesSecuritiesCompaniesConductingMutualFundBusinessActivities = 'residents_private_sector_non_bank_financial_institutions_national_private_securities_companies_securities_companies_conducting_mutual_fund_business_activities',
  /** Residents Private Sector Non Bank Financial Institutions National Private Securities Companies Securities Companies not conducting Mutual Fund business activities */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateSecuritiesCompaniesSecuritiesCompaniesNotConductingMutualFundBusinessActivities = 'residents_private_sector_non_bank_financial_institutions_national_private_securities_companies_securities_companies_not_conducting_mutual_fund_business_activities',
  /** Residents Private Sector Non Bank Financial Institutions National Private Venture Capital */
  ResidentsPrivateSectorNonBankFinancialInstitutionsNationalPrivateVentureCapital = 'residents_private_sector_non_bank_financial_institutions_national_private_venture_capital',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Agribusiness Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesAgribusinessCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_agribusiness_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Automotive Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesAutomotiveCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_automotive_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Cigarette Industry Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesCigaretteIndustryCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_cigarette_industry_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Construction Services Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesConstructionServicesCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_construction_services_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Food Industry Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesFoodIndustryCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_food_industry_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Logging Companies HPH */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesLoggingCompaniesHph = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_logging_companies_hph',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Oil Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesOilCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_oil_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Other Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesOtherCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_other_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Other Companies Textile Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateOtherCompaniesTextileCompanies = 'residents_private_sector_non_financial_institutions_foreign_private_other_companies_textile_companies',
  /** Residents Private Sector Non Financial Institutions Foreign Private Religious Social and Educational Organizations Educational Institutions */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateReligiousSocialAndEducationalOrganizationsEducationalInstitutions = 'residents_private_sector_non_financial_institutions_foreign_private_religious_social_and_educational_organizations_educational_institutions',
  /** Residents Private Sector Non Financial Institutions Foreign Private Religious Social and Educational Organizations Others */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateReligiousSocialAndEducationalOrganizationsOthers = 'residents_private_sector_non_financial_institutions_foreign_private_religious_social_and_educational_organizations_others',
  /** Residents Private Sector Non Financial Institutions Foreign Private Religious Social and Educational Organizations Zakat Infaq and Shadaqah Collection Agency */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateReligiousSocialAndEducationalOrganizationsZakatInfaqAndShadaqahCollectionAgency = 'residents_private_sector_non_financial_institutions_foreign_private_religious_social_and_educational_organizations_zakat_infaq_and_shadaqah_collection_agency',
  /** Residents Private Sector Non Financial Institutions Foreign Private Representative Offices of Foreign Owned Institutions in Indonesia */
  ResidentsPrivateSectorNonFinancialInstitutionsForeignPrivateRepresentativeOfficesOfForeignOwnedInstitutionsInIndonesia = 'residents_private_sector_non_financial_institutions_foreign_private_representative_offices_of_foreign_owned_institutions_in_indonesia',
  /** Residents Private Sector Non Financial Institutions Individuals */
  ResidentsPrivateSectorNonFinancialInstitutionsIndividuals = 'residents_private_sector_non_financial_institutions_individuals',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Agribusiness Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesAgribusinessCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_agribusiness_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Automotive Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesAutomotiveCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_automotive_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Cigarette Industry Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesCigaretteIndustryCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_cigarette_industry_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Construction Services Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesConstructionServicesCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_construction_services_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Food Industry Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesFoodIndustryCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_food_industry_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Logging Companies HPH */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesLoggingCompaniesHph = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_logging_companies_hph',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Oil Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesOilCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_oil_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Other Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesOtherCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_other_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Other Companies Textile Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateOtherCompaniesTextileCompanies = 'residents_private_sector_non_financial_institutions_mixed_private_other_companies_textile_companies',
  /** Residents Private Sector Non Financial Institutions Mixed Private Religious Social and Educational Organizations Educational Institutions */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateReligiousSocialAndEducationalOrganizationsEducationalInstitutions = 'residents_private_sector_non_financial_institutions_mixed_private_religious_social_and_educational_organizations_educational_institutions',
  /** Residents Private Sector Non Financial Institutions Mixed Private Religious Social and Educational Organizations Others */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateReligiousSocialAndEducationalOrganizationsOthers = 'residents_private_sector_non_financial_institutions_mixed_private_religious_social_and_educational_organizations_others',
  /** Residents Private Sector Non Financial Institutions Mixed Private Religious Social and Educational Organizations Zakat Infaq and Shadaqah Collection Agency */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateReligiousSocialAndEducationalOrganizationsZakatInfaqAndShadaqahCollectionAgency = 'residents_private_sector_non_financial_institutions_mixed_private_religious_social_and_educational_organizations_zakat_infaq_and_shadaqah_collection_agency',
  /** Residents Private Sector Non Financial Institutions Mixed Private Representative Offices of Foreign Owned Institutions in Indonesia */
  ResidentsPrivateSectorNonFinancialInstitutionsMixedPrivateRepresentativeOfficesOfForeignOwnedInstitutionsInIndonesia = 'residents_private_sector_non_financial_institutions_mixed_private_representative_offices_of_foreign_owned_institutions_in_indonesia',
  /** Residents Private Sector Non Financial Institutions National Private Non Savings and Loans Cooperatives Other Cooperatives */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateNonSavingsAndLoansCooperativesOtherCooperatives = 'residents_private_sector_non_financial_institutions_national_private_non_savings_and_loans_cooperatives_other_cooperatives',
  /** Residents Private Sector Non Financial Institutions National Private Non Savings and Loans Cooperatives Primary Cooperatives */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateNonSavingsAndLoansCooperativesPrimaryCooperatives = 'residents_private_sector_non_financial_institutions_national_private_non_savings_and_loans_cooperatives_primary_cooperatives',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Agribusiness Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesAgribusinessCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_agribusiness_companies',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Automotive Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesAutomotiveCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_automotive_companies',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Cigarette Industry Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesCigaretteIndustryCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_cigarette_industry_companies',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Construction Services Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesConstructionServicesCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_construction_services_companies',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Food Industry Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesFoodIndustryCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_food_industry_companies',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Logging Companies HPH */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesLoggingCompaniesHph = 'residents_private_sector_non_financial_institutions_national_private_other_companies_logging_companies_hph',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Oil Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesOilCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_oil_companies',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Other Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesOtherCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_other_companies',
  /** Residents Private Sector Non Financial Institutions National Private Other Companies Textile Companies */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateOtherCompaniesTextileCompanies = 'residents_private_sector_non_financial_institutions_national_private_other_companies_textile_companies',
  /** Residents Private Sector Non Financial Institutions National Private Religious Social and Educational Organizations Educational Institutions */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateReligiousSocialAndEducationalOrganizationsEducationalInstitutions = 'residents_private_sector_non_financial_institutions_national_private_religious_social_and_educational_organizations_educational_institutions',
  /** Residents Private Sector Non Financial Institutions National Private Religious Social and Educational Organizations Others */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateReligiousSocialAndEducationalOrganizationsOthers = 'residents_private_sector_non_financial_institutions_national_private_religious_social_and_educational_organizations_others',
  /** Residents Private Sector Non Financial Institutions National Private Religious Social and Educational Organizations Zakat Infaq and Shadaqah Collection Agency */
  ResidentsPrivateSectorNonFinancialInstitutionsNationalPrivateReligiousSocialAndEducationalOrganizationsZakatInfaqAndShadaqahCollectionAgency = 'residents_private_sector_non_financial_institutions_national_private_religious_social_and_educational_organizations_zakat_infaq_and_shadaqah_collection_agency',
  /** Residents Private Sector Other Private Sectors */
  ResidentsPrivateSectorOtherPrivateSectors = 'residents_private_sector_other_private_sectors',
  /** STANDARD CHARTERED BANK */
  StandardCharteredBank = 'standard_chartered_bank'
}

export enum DeviceChannel {
  /** email */
  Email = 'email',
  /** phone */
  Phone = 'phone',
  /** viber */
  Viber = 'viber'
}

export type DeviceFilter = {
  channel?: InputMaybe<EnumStringFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  confirmedAt?: InputMaybe<DateFilter>;
  createdAt?: InputMaybe<DateFilter>;
  deviceId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

export type District = BaseModelInterface & Node & {
  __typename?: 'District';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  geoJson?: Maybe<Scalars['JSON']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  quarters: Array<Quarter>;
  state?: Maybe<State>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type DocumentTemplate = BaseModelInterface & Node & {
  __typename?: 'DocumentTemplate';
  classification: DocumentTemplateClassifications;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  regionId: Scalars['ID']['output'];
  status: DocumentTemplateStatuses;
  template: Attachment;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum DocumentTemplateClassifications {
  /** MERCHANT_CONTRACT */
  MerchantContract = 'merchant_contract',
  /** USER_CONTRACT */
  UserContract = 'user_contract'
}

/** The connection type for DocumentTemplate. */
export type DocumentTemplateConnection = {
  __typename?: 'DocumentTemplateConnection';
  /** A list of edges. */
  edges: Array<DocumentTemplateEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<DocumentTemplate>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for DocumentTemplate. */
export type DocumentTemplateConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for DocumentTemplate. */
export type DocumentTemplateConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type DocumentTemplateEdge = {
  __typename?: 'DocumentTemplateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DocumentTemplate;
};

export type DocumentTemplateFilter = {
  classifications?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum DocumentTemplateStatuses {
  /** ACTIVE */
  Active = 'active',
  /** INACTIVE */
  Inactive = 'inactive'
}

export enum DurationUnit {
  /** days */
  Days = 'days',
  /** months */
  Months = 'months',
  /** weeks */
  Weeks = 'weeks',
  /** years */
  Years = 'years'
}

export enum EconomicSector {
  /** ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES Accommodation Provision Non Star Hotels */
  AccommodationAndFoodAndBeverageServiceActivitiesAccommodationAndFoodAndBeverageServiceActivitiesAccommodationProvisionNonStarHotels = 'accommodation_and_food_and_beverage_service_activities_accommodation_and_food_and_beverage_service_activities_accommodation_provision_non_star_hotels',
  /** ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES Accommodation Provision Other Accommodation Services */
  AccommodationAndFoodAndBeverageServiceActivitiesAccommodationAndFoodAndBeverageServiceActivitiesAccommodationProvisionOtherAccommodationServices = 'accommodation_and_food_and_beverage_service_activities_accommodation_and_food_and_beverage_service_activities_accommodation_provision_other_accommodation_services',
  /** ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES Accommodation Provision Star Hotels */
  AccommodationAndFoodAndBeverageServiceActivitiesAccommodationAndFoodAndBeverageServiceActivitiesAccommodationProvisionStarHotels = 'accommodation_and_food_and_beverage_service_activities_accommodation_and_food_and_beverage_service_activities_accommodation_provision_star_hotels',
  /** ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES Restaurants Food Stalls Bars and Catering Services Other Food and Beverage Provision */
  AccommodationAndFoodAndBeverageServiceActivitiesAccommodationAndFoodAndBeverageServiceActivitiesRestaurantsFoodStallsBarsAndCateringServicesOtherFoodAndBeverageProvision = 'accommodation_and_food_and_beverage_service_activities_accommodation_and_food_and_beverage_service_activities_restaurants_food_stalls_bars_and_catering_services_other_food_and_beverage_provision',
  /** ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES ACCOMMODATION AND FOOD AND BEVERAGE SERVICE ACTIVITIES Restaurants Food Stalls Bars and Catering Services Restaurants Food Stalls */
  AccommodationAndFoodAndBeverageServiceActivitiesAccommodationAndFoodAndBeverageServiceActivitiesRestaurantsFoodStallsBarsAndCateringServicesRestaurantsFoodStalls = 'accommodation_and_food_and_beverage_service_activities_accommodation_and_food_and_beverage_service_activities_restaurants_food_stalls_bars_and_catering_services_restaurants_food_stalls',
  /** ACTIVITIES WITH UNCLEAR BOUNDARIES ACTIVITIES WITH UNCLEAR BOUNDARIES Activities with Unclear Boundaries Business Entities */
  ActivitiesWithUnclearBoundariesActivitiesWithUnclearBoundariesActivitiesWithUnclearBoundariesBusinessEntities = 'activities_with_unclear_boundaries_activities_with_unclear_boundaries_activities_with_unclear_boundaries_business_entities',
  /** ACTIVITIES WITH UNCLEAR BOUNDARIES ACTIVITIES WITH UNCLEAR BOUNDARIES Activities with Unclear Boundaries Individuals */
  ActivitiesWithUnclearBoundariesActivitiesWithUnclearBoundariesActivitiesWithUnclearBoundariesIndividuals = 'activities_with_unclear_boundaries_activities_with_unclear_boundaries_activities_with_unclear_boundaries_individuals',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Agriculture or Plantation Combination with Livestock Mixed Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingAgricultureOrPlantationCombinationWithLivestockMixedFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_agriculture_or_plantation_combination_with_livestock_mixed_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Agriculture Plantation and Livestock Services */
  AgricultureHuntingAndForestryAgricultureAndHuntingAgriculturePlantationAndLivestockServices = 'agriculture_hunting_and_forestry_agriculture_and_hunting_agriculture_plantation_and_livestock_services',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Essential Oil Crops Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureEssentialOilCropsPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_essential_oil_crops_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Medicinal Pharmaceutical Crops Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureMedicinalPharmaceuticalCropsPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_medicinal_pharmaceutical_crops_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Other Crops Plantation Not Elsewhere Classified */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureOtherCropsPlantationNotElsewhereClassified = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_other_crops_plantation_not_elsewhere_classified',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Palawija Farming Cassava Palawija Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgriculturePalawijaFarmingCassavaPalawijaFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_palawija_farming_cassava_palawija_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Palawija Farming Corn Palawija Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgriculturePalawijaFarmingCornPalawijaFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_palawija_farming_corn_palawija_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Palawija Farming Other Legumes Palawija Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgriculturePalawijaFarmingOtherLegumesPalawijaFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_palawija_farming_other_legumes_palawija_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Palawija Farming Other Tubers Palawija Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgriculturePalawijaFarmingOtherTubersPalawijaFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_palawija_farming_other_tubers_palawija_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Palawija Farming Peanut Palawija Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgriculturePalawijaFarmingPeanutPalawijaFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_palawija_farming_peanut_palawija_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Palawija Farming Soybean Palawija Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgriculturePalawijaFarmingSoybeanPalawijaFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_palawija_farming_soybean_palawija_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Palawija Farming Sweet Potato Palawija Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgriculturePalawijaFarmingSweetPotatoPalawijaFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_palawija_farming_sweet_potato_palawija_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Rice Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureRiceFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_rice_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Rubber and Other Sap Producers Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureRubberAndOtherSapProducersPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_rubber_and_other_sap_producers_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Sugarcane and Other Sweetener Crops Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureSugarcaneAndOtherSweetenerCropsPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_sugarcane_and_other_sweetener_crops_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Textile Raw Materials and Similar Crops Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureTextileRawMaterialsAndSimilarCropsPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_textile_raw_materials_and_similar_crops_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Food Crops and Estate Crops Agriculture Tobacco Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFoodCropsAndEstateCropsAgricultureTobaccoPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_food_crops_and_estate_crops_agriculture_tobacco_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Beverage Crops Plantations Cocoa Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsBeverageCropsPlantationsCocoaPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_beverage_crops_plantations_cocoa_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Beverage Crops Plantations Coffee Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsBeverageCropsPlantationsCoffeePlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_beverage_crops_plantations_coffee_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Beverage Crops Plantations Tea Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsBeverageCropsPlantationsTeaPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_beverage_crops_plantations_tea_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Cashew Nut Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsCashewNutPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_cashew_nut_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Clove Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsClovePlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_clove_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Coconut Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsCoconutPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_coconut_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Oil Palm Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsOilPalmPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_oil_palm_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Other Spice Crops Plantations Nutmeg Spice Crops Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsOtherSpiceCropsPlantationsNutmegSpiceCropsPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_other_spice_crops_plantations_nutmeg_spice_crops_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Other Spice Crops Plantations Other Spice Crops Plantation Not Elsewhere Classified */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsOtherSpiceCropsPlantationsOtherSpiceCropsPlantationNotElsewhereClassified = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_other_spice_crops_plantations_other_spice_crops_plantation_not_elsewhere_classified',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Other Spice Crops Plantations Vanilla Spice Crops Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsOtherSpiceCropsPlantationsVanillaSpiceCropsPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_other_spice_crops_plantations_vanilla_spice_crops_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Pepper Plantation */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsPepperPlantation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_pepper_plantation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Seasonal Fruits Farming Other Seasonal Fruits Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsSeasonalFruitsFarmingOtherSeasonalFruitsFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_seasonal_fruits_farming_other_seasonal_fruits_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Seasonal Fruits Farming Seasonal Fruits Farming Citrus */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsSeasonalFruitsFarmingSeasonalFruitsFarmingCitrus = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_seasonal_fruits_farming_seasonal_fruits_farming_citrus',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Year Round Fruits Farming Other Year Round Fruits Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsYearRoundFruitsFarmingOtherYearRoundFruitsFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_year_round_fruits_farming_other_year_round_fruits_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Fruits Coconut Plantations Oil Palm Plantations Beverage Crops Plantations Cashew Nut Plantations and Spice Crops Plantations Year Round Fruits Farming Year Round Fruits Farming Bananas */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureFruitsCoconutPlantationsOilPalmPlantationsBeverageCropsPlantationsCashewNutPlantationsAndSpiceCropsPlantationsYearRoundFruitsFarmingYearRoundFruitsFarmingBananas = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_fruits_coconut_plantations_oil_palm_plantations_beverage_crops_plantations_cashew_nut_plantations_and_spice_crops_plantations_year_round_fruits_farming_year_round_fruits_farming_bananas',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Horticulture Vegetables and Flowers */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureHorticultureVegetablesAndFlowers = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_horticulture_vegetables_and_flowers',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Horticulture Vegetables and Flowers Farming Horticulture Flowers Horticulture Flowers Orchid */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureHorticultureVegetablesAndFlowersFarmingHorticultureFlowersHorticultureFlowersOrchid = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_horticulture_vegetables_and_flowers_farming_horticulture_flowers_horticulture_flowers_orchid',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Horticulture Vegetables and Flowers Farming Horticulture Flowers Other Horticulture Flowers */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureHorticultureVegetablesAndFlowersFarmingHorticultureFlowersOtherHorticultureFlowers = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_horticulture_vegetables_and_flowers_farming_horticulture_flowers_other_horticulture_flowers',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Horticulture Vegetables and Flowers Farming Horticulture Vegetables Harvested More Than Once */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureHorticultureVegetablesAndFlowersFarmingHorticultureVegetablesHarvestedMoreThanOnce = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_horticulture_vegetables_and_flowers_farming_horticulture_vegetables_harvested_more_than_once',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Horticulture Vegetables and Flowers Farming Horticulture Vegetables Harvested Once Horticulture Vegetables Harvested Once Shallots */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureHorticultureVegetablesAndFlowersFarmingHorticultureVegetablesHarvestedOnceHorticultureVegetablesHarvestedOnceShallots = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_horticulture_vegetables_and_flowers_farming_horticulture_vegetables_harvested_once_horticulture_vegetables_harvested_once_shallots',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Horticulture Vegetables and Flowers Farming Nursery and Seedlings for Horticulture Vegetables and Flowers */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureHorticultureVegetablesAndFlowersFarmingNurseryAndSeedlingsForHorticultureVegetablesAndFlowers = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_horticulture_vegetables_and_flowers_farming_nursery_and_seedlings_for_horticulture_vegetables_and_flowers',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Food Crops Estate Crops and Horticulture Agriculture Other Ornamental Plants Farming */
  AgricultureHuntingAndForestryAgricultureAndHuntingFoodCropsEstateCropsAndHorticultureAgricultureOtherOrnamentalPlantsFarming = 'agriculture_hunting_and_forestry_agriculture_and_hunting_food_crops_estate_crops_and_horticulture_agriculture_other_ornamental_plants_farming',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Hunting Capture and Captivity of Wildlife */
  AgricultureHuntingAndForestryAgricultureAndHuntingHuntingCaptureAndCaptivityOfWildlife = 'agriculture_hunting_and_forestry_agriculture_and_hunting_hunting_capture_and_captivity_of_wildlife',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Livestock Livestock Breeding and Cultivation Beef Cattle Breeding and Cultivation */
  AgricultureHuntingAndForestryAgricultureAndHuntingLivestockLivestockBreedingAndCultivationBeefCattleBreedingAndCultivation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_livestock_livestock_breeding_and_cultivation_beef_cattle_breeding_and_cultivation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Livestock Livestock Breeding and Cultivation Dairy Cattle Breeding and Cultivation */
  AgricultureHuntingAndForestryAgricultureAndHuntingLivestockLivestockBreedingAndCultivationDairyCattleBreedingAndCultivation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_livestock_livestock_breeding_and_cultivation_dairy_cattle_breeding_and_cultivation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Livestock Livestock Breeding and Cultivation Sheep and Goat Breeding and Cultivation */
  AgricultureHuntingAndForestryAgricultureAndHuntingLivestockLivestockBreedingAndCultivationSheepAndGoatBreedingAndCultivation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_livestock_livestock_breeding_and_cultivation_sheep_and_goat_breeding_and_cultivation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Livestock Other Livestock Breeding and Cultivation Pig Breeding and Cultivation */
  AgricultureHuntingAndForestryAgricultureAndHuntingLivestockOtherLivestockBreedingAndCultivationPigBreedingAndCultivation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_livestock_other_livestock_breeding_and_cultivation_pig_breeding_and_cultivation',
  /** AGRICULTURE HUNTING AND FORESTRY AGRICULTURE AND HUNTING Livestock Other Livestock Breeding and Cultivation Poultry Breeding and Cultivation */
  AgricultureHuntingAndForestryAgricultureAndHuntingLivestockOtherLivestockBreedingAndCultivationPoultryBreedingAndCultivation = 'agriculture_hunting_and_forestry_agriculture_and_hunting_livestock_other_livestock_breeding_and_cultivation_poultry_breeding_and_cultivation',
  /** AGRICULTURE HUNTING AND FORESTRY FORESTRY Forestry Forestry Services */
  AgricultureHuntingAndForestryForestryForestryForestryServices = 'agriculture_hunting_and_forestry_forestry_forestry_forestry_services',
  /** AGRICULTURE HUNTING AND FORESTRY FORESTRY Forestry Natural Forest Management */
  AgricultureHuntingAndForestryForestryForestryNaturalForestManagement = 'agriculture_hunting_and_forestry_forestry_forestry_natural_forest_management',
  /** AGRICULTURE HUNTING AND FORESTRY FORESTRY Forestry Non Timber Forest Products Management */
  AgricultureHuntingAndForestryForestryForestryNonTimberForestProductsManagement = 'agriculture_hunting_and_forestry_forestry_forestry_non_timber_forest_products_management',
  /** AGRICULTURE HUNTING AND FORESTRY FORESTRY Forestry Other Forestry Activities */
  AgricultureHuntingAndForestryForestryForestryOtherForestryActivities = 'agriculture_hunting_and_forestry_forestry_forestry_other_forestry_activities',
  /** AGRICULTURE HUNTING AND FORESTRY FORESTRY Forestry Plantation Forest Management */
  AgricultureHuntingAndForestryForestryForestryPlantationForestManagement = 'agriculture_hunting_and_forestry_forestry_forestry_plantation_forest_management',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES ACTIVITIES OF ORGANIZATIONS NOT ELSEWHERE CLASSIFIED Business Employers and Professional Organizations */
  CommunitySocialAndPersonalServicesActivitiesOfOrganizationsNotElsewhereClassifiedBusinessEmployersAndProfessionalOrganizations = 'community_social_and_personal_services_activities_of_organizations_not_elsewhere_classified_business_employers_and_professional_organizations',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES ACTIVITIES OF ORGANIZATIONS NOT ELSEWHERE CLASSIFIED Labor Organizations */
  CommunitySocialAndPersonalServicesActivitiesOfOrganizationsNotElsewhereClassifiedLaborOrganizations = 'community_social_and_personal_services_activities_of_organizations_not_elsewhere_classified_labor_organizations',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES ACTIVITIES OF ORGANIZATIONS NOT ELSEWHERE CLASSIFIED Other Organizations */
  CommunitySocialAndPersonalServicesActivitiesOfOrganizationsNotElsewhereClassifiedOtherOrganizations = 'community_social_and_personal_services_activities_of_organizations_not_elsewhere_classified_other_organizations',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES OTHER ACTIVITIES Other Activities */
  CommunitySocialAndPersonalServicesOtherActivitiesOtherActivities = 'community_social_and_personal_services_other_activities_other_activities',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES RECREATIONAL CULTURAL AND SPORTING ACTIVITIES Libraries Archives Museums and Other Cultural Activities */
  CommunitySocialAndPersonalServicesRecreationalCulturalAndSportingActivitiesLibrariesArchivesMuseumsAndOtherCulturalActivities = 'community_social_and_personal_services_recreational_cultural_and_sporting_activities_libraries_archives_museums_and_other_cultural_activities',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES RECREATIONAL CULTURAL AND SPORTING ACTIVITIES Motion Picture Radio Television and Other Entertainment Activities */
  CommunitySocialAndPersonalServicesRecreationalCulturalAndSportingActivitiesMotionPictureRadioTelevisionAndOtherEntertainmentActivities = 'community_social_and_personal_services_recreational_cultural_and_sporting_activities_motion_picture_radio_television_and_other_entertainment_activities',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES RECREATIONAL CULTURAL AND SPORTING ACTIVITIES News Agency Activities */
  CommunitySocialAndPersonalServicesRecreationalCulturalAndSportingActivitiesNewsAgencyActivities = 'community_social_and_personal_services_recreational_cultural_and_sporting_activities_news_agency_activities',
  /** COMMUNITY SOCIAL AND PERSONAL SERVICES SANITATION SERVICES Sanitation Services */
  CommunitySocialAndPersonalServicesSanitationServicesSanitationServices = 'community_social_and_personal_services_sanitation_services_sanitation_services',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction */
  ConstructionConstructionBuildingAndCivilConstruction = 'construction_construction_building_and_civil_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Industrial Building Construction */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionIndustrialBuildingConstruction = 'construction_construction_building_and_civil_construction_building_construction_industrial_building_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Office Building Construction */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionOfficeBuildingConstruction = 'construction_construction_building_and_civil_construction_building_construction_office_building_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Other Building Construction */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionOtherBuildingConstruction = 'construction_construction_building_and_civil_construction_building_construction_other_building_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Residential Building Construction Medium Large Luxury Housing Type Above 70 */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionResidentialBuildingConstructionMediumLargeLuxuryHousingTypeAbove_70 = 'construction_construction_building_and_civil_construction_building_construction_residential_building_construction_medium_large_luxury_housing_type_above_70',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Residential Building Construction Simple Housing Construction Others Type 22 to 70 */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionResidentialBuildingConstructionSimpleHousingConstructionOthersType_22To_70 = 'construction_construction_building_and_civil_construction_building_construction_residential_building_construction_simple_housing_construction_others_type_22_to_70',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Residential Building Construction Simple Housing Construction Others Type up to 21 */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionResidentialBuildingConstructionSimpleHousingConstructionOthersTypeUpTo_21 = 'construction_construction_building_and_civil_construction_building_construction_residential_building_construction_simple_housing_construction_others_type_up_to_21',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Residential Building Construction Simple Housing Construction Perumnas */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionResidentialBuildingConstructionSimpleHousingConstructionPerumnas = 'construction_construction_building_and_civil_construction_building_construction_residential_building_construction_simple_housing_construction_perumnas',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Residential Building Construction Simple Housing Construction State Savings Bank */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionResidentialBuildingConstructionSimpleHousingConstructionStateSavingsBank = 'construction_construction_building_and_civil_construction_building_construction_residential_building_construction_simple_housing_construction_state_savings_bank',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Shopping Building Construction Inpres Market Shopping Building Construction */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionShoppingBuildingConstructionInpresMarketShoppingBuildingConstruction = 'construction_construction_building_and_civil_construction_building_construction_shopping_building_construction_inpres_market_shopping_building_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Building Construction Shopping Building Construction Other Shopping Building Construction */
  ConstructionConstructionBuildingAndCivilConstructionBuildingConstructionShoppingBuildingConstructionOtherShoppingBuildingConstruction = 'construction_construction_building_and_civil_construction_building_construction_shopping_building_construction_other_shopping_building_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Civil Construction Irrigation Construction */
  ConstructionConstructionBuildingAndCivilConstructionCivilConstructionIrrigationConstruction = 'construction_construction_building_and_civil_construction_civil_construction_irrigation_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Civil Construction Other Civil Construction */
  ConstructionConstructionBuildingAndCivilConstructionCivilConstructionOtherCivilConstruction = 'construction_construction_building_and_civil_construction_civil_construction_other_civil_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Civil Construction Railway Road and Bridge Construction */
  ConstructionConstructionBuildingAndCivilConstructionCivilConstructionRailwayRoadAndBridgeConstruction = 'construction_construction_building_and_civil_construction_civil_construction_railway_road_and_bridge_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Civil Construction Road Bridge and Runway Construction Highway Construction */
  ConstructionConstructionBuildingAndCivilConstructionCivilConstructionRoadBridgeAndRunwayConstructionHighwayConstruction = 'construction_construction_building_and_civil_construction_civil_construction_road_bridge_and_runway_construction_highway_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Civil Construction Road Bridge and Runway Construction Road Bridge and Runway Construction */
  ConstructionConstructionBuildingAndCivilConstructionCivilConstructionRoadBridgeAndRunwayConstructionRoadBridgeAndRunwayConstruction = 'construction_construction_building_and_civil_construction_civil_construction_road_bridge_and_runway_construction_road_bridge_and_runway_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Civil Construction Road Bridge and Runway Construction Toll Road Construction */
  ConstructionConstructionBuildingAndCivilConstructionCivilConstructionRoadBridgeAndRunwayConstructionTollRoadConstruction = 'construction_construction_building_and_civil_construction_civil_construction_road_bridge_and_runway_construction_toll_road_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Electrical and Communication Construction Other Electrical and Communication Construction */
  ConstructionConstructionBuildingAndCivilConstructionElectricalAndCommunicationConstructionOtherElectricalAndCommunicationConstruction = 'construction_construction_building_and_civil_construction_electrical_and_communication_construction_other_electrical_and_communication_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Electrical and Communication Construction Rural Electrical Construction */
  ConstructionConstructionBuildingAndCivilConstructionElectricalAndCommunicationConstructionRuralElectricalConstruction = 'construction_construction_building_and_civil_construction_electrical_and_communication_construction_rural_electrical_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Construction Special Construction */
  ConstructionConstructionBuildingAndCivilConstructionSpecialConstruction = 'construction_construction_building_and_civil_construction_special_construction',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Installation Building Installation */
  ConstructionConstructionBuildingAndCivilInstallationBuildingInstallation = 'construction_construction_building_and_civil_installation_building_installation',
  /** CONSTRUCTION CONSTRUCTION Building and Civil Installation Civil Installation */
  ConstructionConstructionBuildingAndCivilInstallationCivilInstallation = 'construction_construction_building_and_civil_installation_civil_installation',
  /** CONSTRUCTION CONSTRUCTION Building Construction Completion */
  ConstructionConstructionBuildingConstructionCompletion = 'construction_construction_building_construction_completion',
  /** CONSTRUCTION CONSTRUCTION Building Demolition With Operator */
  ConstructionConstructionBuildingDemolitionWithOperator = 'construction_construction_building_demolition_with_operator',
  /** CONSTRUCTION CONSTRUCTION Land Preparation Other Land Preparation */
  ConstructionConstructionLandPreparationOtherLandPreparation = 'construction_construction_land_preparation_other_land_preparation',
  /** CONSTRUCTION CONSTRUCTION Land Preparation Paddy Field Land Preparation */
  ConstructionConstructionLandPreparationPaddyFieldLandPreparation = 'construction_construction_land_preparation_paddy_field_land_preparation',
  /** CONSTRUCTION CONSTRUCTION Land Preparation Transmigration Settlement Land Preparation PTPT */
  ConstructionConstructionLandPreparationTransmigrationSettlementLandPreparationPtpt = 'construction_construction_land_preparation_transmigration_settlement_land_preparation_ptpt',
  /** EDUCATION SERVICES EDUCATION SERVICES Higher Education Services */
  EducationServicesEducationServicesHigherEducationServices = 'education_services_education_services_higher_education_services',
  /** EDUCATION SERVICES EDUCATION SERVICES Other Education Services */
  EducationServicesEducationServicesOtherEducationServices = 'education_services_education_services_other_education_services',
  /** EDUCATION SERVICES EDUCATION SERVICES Primary Education Services */
  EducationServicesEducationServicesPrimaryEducationServices = 'education_services_education_services_primary_education_services',
  /** EDUCATION SERVICES EDUCATION SERVICES Secondary Education Services */
  EducationServicesEducationServicesSecondaryEducationServices = 'education_services_education_services_secondary_education_services',
  /** ELECTRICITY GAS AND WATER CLEAN WATER SUPPLY AND DISTRIBUTION Clean Water Supply and Distribution */
  ElectricityGasAndWaterCleanWaterSupplyAndDistributionCleanWaterSupplyAndDistribution = 'electricity_gas_and_water_clean_water_supply_and_distribution_clean_water_supply_and_distribution',
  /** ELECTRICITY GAS AND WATER ELECTRICITY GAS AND HOT WATER Electricity Other Electricity */
  ElectricityGasAndWaterElectricityGasAndHotWaterElectricityOtherElectricity = 'electricity_gas_and_water_electricity_gas_and_hot_water_electricity_other_electricity',
  /** ELECTRICITY GAS AND WATER ELECTRICITY GAS AND HOT WATER Electricity Rural Electricity */
  ElectricityGasAndWaterElectricityGasAndHotWaterElectricityRuralElectricity = 'electricity_gas_and_water_electricity_gas_and_hot_water_electricity_rural_electricity',
  /** ELECTRICITY GAS AND WATER ELECTRICITY GAS AND HOT WATER Gas */
  ElectricityGasAndWaterElectricityGasAndHotWaterGas = 'electricity_gas_and_water_electricity_gas_and_hot_water_gas',
  /** ELECTRICITY GAS AND WATER ELECTRICITY GAS AND HOT WATER Steam and Hot Water */
  ElectricityGasAndWaterElectricityGasAndHotWaterSteamAndHotWater = 'electricity_gas_and_water_electricity_gas_and_hot_water_steam_and_hot_water',
  /** FINANCIAL INTERMEDIATION FINANCIAL INTERMEDIATION EXCEPT INSURANCE AND PENSION FUNDING ACTIVITIES AUXILIARY TO FINANCIAL INTERMEDIATION Currency Exchange Services or Foreign Exchange Dealers Money Changers */
  FinancialIntermediationFinancialIntermediationExceptInsuranceAndPensionFundingActivitiesAuxiliaryToFinancialIntermediationCurrencyExchangeServicesOrForeignExchangeDealersMoneyChangers = 'financial_intermediation_financial_intermediation_except_insurance_and_pension_funding_activities_auxiliary_to_financial_intermediation_currency_exchange_services_or_foreign_exchange_dealers_money_changers',
  /** FINANCIAL INTERMEDIATION FINANCIAL INTERMEDIATION EXCEPT INSURANCE AND PENSION FUNDING ACTIVITIES AUXILIARY TO FINANCIAL INTERMEDIATION Other Activities Auxiliary to Financial Intermediation */
  FinancialIntermediationFinancialIntermediationExceptInsuranceAndPensionFundingActivitiesAuxiliaryToFinancialIntermediationOtherActivitiesAuxiliaryToFinancialIntermediation = 'financial_intermediation_financial_intermediation_except_insurance_and_pension_funding_activities_auxiliary_to_financial_intermediation_other_activities_auxiliary_to_financial_intermediation',
  /** FINANCIAL INTERMEDIATION FINANCIAL INTERMEDIATION EXCEPT INSURANCE AND PENSION FUNDING Activities Auxiliary to Insurance and Pension Funding */
  FinancialIntermediationFinancialIntermediationExceptInsuranceAndPensionFundingActivitiesAuxiliaryToInsuranceAndPensionFunding = 'financial_intermediation_financial_intermediation_except_insurance_and_pension_funding_activities_auxiliary_to_insurance_and_pension_funding',
  /** FINANCIAL INTERMEDIATION FINANCIAL INTERMEDIATION EXCEPT INSURANCE AND PENSION FUNDING Insurance and Pension Funds */
  FinancialIntermediationFinancialIntermediationExceptInsuranceAndPensionFundingInsuranceAndPensionFunds = 'financial_intermediation_financial_intermediation_except_insurance_and_pension_funding_insurance_and_pension_funds',
  /** FINANCIAL INTERMEDIATION FINANCIAL INTERMEDIATION EXCEPT INSURANCE AND PENSION FUNDING Monetary Intermediation Banks */
  FinancialIntermediationFinancialIntermediationExceptInsuranceAndPensionFundingMonetaryIntermediationBanks = 'financial_intermediation_financial_intermediation_except_insurance_and_pension_funding_monetary_intermediation_banks',
  /** FINANCIAL INTERMEDIATION FINANCIAL INTERMEDIATION EXCEPT INSURANCE AND PENSION FUNDING Other Financial Intermediation Non Bank Other Financial Intermediation Non Bank Leasing */
  FinancialIntermediationFinancialIntermediationExceptInsuranceAndPensionFundingOtherFinancialIntermediationNonBankOtherFinancialIntermediationNonBankLeasing = 'financial_intermediation_financial_intermediation_except_insurance_and_pension_funding_other_financial_intermediation_non_bank_other_financial_intermediation_non_bank_leasing',
  /** FINANCIAL INTERMEDIATION FINANCIAL INTERMEDIATION EXCEPT INSURANCE AND PENSION FUNDING Other Financial Intermediation Non Bank Other Financial Intermediation Non Bank Other Than Leasing */
  FinancialIntermediationFinancialIntermediationExceptInsuranceAndPensionFundingOtherFinancialIntermediationNonBankOtherFinancialIntermediationNonBankOtherThanLeasing = 'financial_intermediation_financial_intermediation_except_insurance_and_pension_funding_other_financial_intermediation_non_bank_other_financial_intermediation_non_bank_other_than_leasing',
  /** FISHERIES FISHERIES Capture of Biota in General Waters Capture of Crustacea Mollusca and Other Biota in General Waters */
  FisheriesFisheriesCaptureOfBiotaInGeneralWatersCaptureOfCrustaceaMolluscaAndOtherBiotaInGeneralWaters = 'fisheries_fisheries_capture_of_biota_in_general_waters_capture_of_crustacea_mollusca_and_other_biota_in_general_waters',
  /** FISHERIES FISHERIES Capture of Biota in General Waters Fish Capture in General Waters */
  FisheriesFisheriesCaptureOfBiotaInGeneralWatersFishCaptureInGeneralWaters = 'fisheries_fisheries_capture_of_biota_in_general_waters_fish_capture_in_general_waters',
  /** FISHERIES FISHERIES Fisheries Capture of Biota in the Sea Sea Crustacea Capture Other Sea Crustacea Capture */
  FisheriesFisheriesFisheriesCaptureOfBiotaInTheSeaSeaCrustaceaCaptureOtherSeaCrustaceaCapture = 'fisheries_fisheries_fisheries_capture_of_biota_in_the_sea_sea_crustacea_capture_other_sea_crustacea_capture',
  /** FISHERIES FISHERIES Fisheries Capture of Biota in the Sea Sea Crustacea Capture Sea Shrimp Capture */
  FisheriesFisheriesFisheriesCaptureOfBiotaInTheSeaSeaCrustaceaCaptureSeaShrimpCapture = 'fisheries_fisheries_fisheries_capture_of_biota_in_the_sea_sea_crustacea_capture_sea_shrimp_capture',
  /** FISHERIES FISHERIES Fisheries Capture of Biota in the Sea Sea Fish Capture Other Fish Capture */
  FisheriesFisheriesFisheriesCaptureOfBiotaInTheSeaSeaFishCaptureOtherFishCapture = 'fisheries_fisheries_fisheries_capture_of_biota_in_the_sea_sea_fish_capture_other_fish_capture',
  /** FISHERIES FISHERIES Fisheries Capture of Biota in the Sea Sea Fish Capture Tuna Fishing */
  FisheriesFisheriesFisheriesCaptureOfBiotaInTheSeaSeaFishCaptureTunaFishing = 'fisheries_fisheries_fisheries_capture_of_biota_in_the_sea_sea_fish_capture_tuna_fishing',
  /** FISHERIES FISHERIES Fisheries Others */
  FisheriesFisheriesFisheriesOthers = 'fisheries_fisheries_fisheries_others',
  /** FISHERIES FISHERIES Fishery Services Inland Fishery Production Facility Services */
  FisheriesFisheriesFisheryServicesInlandFisheryProductionFacilityServices = 'fisheries_fisheries_fishery_services_inland_fishery_production_facility_services',
  /** FISHERIES FISHERIES Fishery Services Marine Fishery Production Facility Services */
  FisheriesFisheriesFisheryServicesMarineFisheryProductionFacilityServices = 'fisheries_fisheries_fishery_services_marine_fishery_production_facility_services',
  /** FISHERIES FISHERIES Fishery Services Other Fishery Services */
  FisheriesFisheriesFisheryServicesOtherFisheryServices = 'fisheries_fisheries_fishery_services_other_fishery_services',
  /** FISHERIES FISHERIES Freshwater and Brackish Water Biota Cultivation Brackish Water Biota Cultivation Brackish Water Shrimp Cultivation */
  FisheriesFisheriesFreshwaterAndBrackishWaterBiotaCultivationBrackishWaterBiotaCultivationBrackishWaterShrimpCultivation = 'fisheries_fisheries_freshwater_and_brackish_water_biota_cultivation_brackish_water_biota_cultivation_brackish_water_shrimp_cultivation',
  /** FISHERIES FISHERIES Freshwater and Brackish Water Biota Cultivation Brackish Water Biota Cultivation Other Brackish Water Biota Cultivation */
  FisheriesFisheriesFreshwaterAndBrackishWaterBiotaCultivationBrackishWaterBiotaCultivationOtherBrackishWaterBiotaCultivation = 'fisheries_fisheries_freshwater_and_brackish_water_biota_cultivation_brackish_water_biota_cultivation_other_brackish_water_biota_cultivation',
  /** FISHERIES FISHERIES Freshwater and Brackish Water Biota Cultivation Freshwater and Brackish Water Biota Seeding */
  FisheriesFisheriesFreshwaterAndBrackishWaterBiotaCultivationFreshwaterAndBrackishWaterBiotaSeeding = 'fisheries_fisheries_freshwater_and_brackish_water_biota_cultivation_freshwater_and_brackish_water_biota_seeding',
  /** FISHERIES FISHERIES Freshwater and Brackish Water Biota Cultivation Freshwater Biota Cultivation Freshwater Shrimp Cultivation */
  FisheriesFisheriesFreshwaterAndBrackishWaterBiotaCultivationFreshwaterBiotaCultivationFreshwaterShrimpCultivation = 'fisheries_fisheries_freshwater_and_brackish_water_biota_cultivation_freshwater_biota_cultivation_freshwater_shrimp_cultivation',
  /** FISHERIES FISHERIES Freshwater and Brackish Water Biota Cultivation Freshwater Biota Cultivation Other Freshwater Biota Cultivation */
  FisheriesFisheriesFreshwaterAndBrackishWaterBiotaCultivationFreshwaterBiotaCultivationOtherFreshwaterBiotaCultivation = 'fisheries_fisheries_freshwater_and_brackish_water_biota_cultivation_freshwater_biota_cultivation_other_freshwater_biota_cultivation',
  /** FISHERIES FISHERIES Sea Biota Cultivation Sea Biota Cultivation Other Sea Biota Cultivation */
  FisheriesFisheriesSeaBiotaCultivationSeaBiotaCultivationOtherSeaBiotaCultivation = 'fisheries_fisheries_sea_biota_cultivation_sea_biota_cultivation_other_sea_biota_cultivation',
  /** FISHERIES FISHERIES Sea Biota Cultivation Sea Biota Cultivation Sea Seaweed Cultivation */
  FisheriesFisheriesSeaBiotaCultivationSeaBiotaCultivationSeaSeaweedCultivation = 'fisheries_fisheries_sea_biota_cultivation_sea_biota_cultivation_sea_seaweed_cultivation',
  /** FISHERIES FISHERIES Sea Biota Cultivation Sea Biota Cultivation Sea Shrimp Cultivation */
  FisheriesFisheriesSeaBiotaCultivationSeaBiotaCultivationSeaShrimpCultivation = 'fisheries_fisheries_sea_biota_cultivation_sea_biota_cultivation_sea_shrimp_cultivation',
  /** FISHERIES FISHERIES Sea Biota Cultivation Sea Biota Cultivation Sea Tuna Cultivation */
  FisheriesFisheriesSeaBiotaCultivationSeaBiotaCultivationSeaTunaCultivation = 'fisheries_fisheries_sea_biota_cultivation_sea_biota_cultivation_sea_tuna_cultivation',
  /** FISHERIES FISHERIES Sea Biota Cultivation Sea Biota Seeding */
  FisheriesFisheriesSeaBiotaCultivationSeaBiotaSeeding = 'fisheries_fisheries_sea_biota_cultivation_sea_biota_seeding',
  /** HEALTH AND SOCIAL WORK HEALTH AND SOCIAL WORK Human Health Services Hospitals and Other Medical Practices Human Health Services Hospitals */
  HealthAndSocialWorkHealthAndSocialWorkHumanHealthServicesHospitalsAndOtherMedicalPracticesHumanHealthServicesHospitals = 'health_and_social_work_health_and_social_work_human_health_services_hospitals_and_other_medical_practices_human_health_services_hospitals',
  /** HEALTH AND SOCIAL WORK HEALTH AND SOCIAL WORK Human Health Services Hospitals and Other Medical Practices Human Health Services Medical Profession */
  HealthAndSocialWorkHealthAndSocialWorkHumanHealthServicesHospitalsAndOtherMedicalPracticesHumanHealthServicesMedicalProfession = 'health_and_social_work_health_and_social_work_human_health_services_hospitals_and_other_medical_practices_human_health_services_medical_profession',
  /** HEALTH AND SOCIAL WORK HEALTH AND SOCIAL WORK Human Health Services Hospitals and Other Medical Practices Human Health Services Polyclinics Maternity Homes */
  HealthAndSocialWorkHealthAndSocialWorkHumanHealthServicesHospitalsAndOtherMedicalPracticesHumanHealthServicesPolyclinicsMaternityHomes = 'health_and_social_work_health_and_social_work_human_health_services_hospitals_and_other_medical_practices_human_health_services_polyclinics_maternity_homes',
  /** HEALTH AND SOCIAL WORK HEALTH AND SOCIAL WORK Human Health Services Hospitals and Other Medical Practices Human Health Services Treatment Therapy Centers */
  HealthAndSocialWorkHealthAndSocialWorkHumanHealthServicesHospitalsAndOtherMedicalPracticesHumanHealthServicesTreatmentTherapyCenters = 'health_and_social_work_health_and_social_work_human_health_services_hospitals_and_other_medical_practices_human_health_services_treatment_therapy_centers',
  /** HEALTH AND SOCIAL WORK HEALTH AND SOCIAL WORK Social Work Services */
  HealthAndSocialWorkHealthAndSocialWorkSocialWorkServices = 'health_and_social_work_health_and_social_work_social_work_services',
  /** HEALTH AND SOCIAL WORK HEALTH AND SOCIAL WORK Veterinary Services */
  HealthAndSocialWorkHealthAndSocialWorkVeterinaryServices = 'health_and_social_work_health_and_social_work_veterinary_services',
  /** HOUSEHOLD Household for Flat or Apartment Ownership Household for Flat or Apartment Ownership Type 22 to 70 */
  HouseholdHouseholdForFlatOrApartmentOwnershipHouseholdForFlatOrApartmentOwnershipType_22To_70 = 'household_household_for_flat_or_apartment_ownership_household_for_flat_or_apartment_ownership_type_22_to_70',
  /** HOUSEHOLD Household for Flat or Apartment Ownership Household for Flat or Apartment Ownership Type Above 70 */
  HouseholdHouseholdForFlatOrApartmentOwnershipHouseholdForFlatOrApartmentOwnershipTypeAbove_70 = 'household_household_for_flat_or_apartment_ownership_household_for_flat_or_apartment_ownership_type_above_70',
  /** HOUSEHOLD Household for Flat or Apartment Ownership Household for Flat or Apartment Ownership up to Type 21 */
  HouseholdHouseholdForFlatOrApartmentOwnershipHouseholdForFlatOrApartmentOwnershipUpToType_21 = 'household_household_for_flat_or_apartment_ownership_household_for_flat_or_apartment_ownership_up_to_type_21',
  /** HOUSEHOLD Household for Housing Ownership Household for Residential House Ownership Household for Residential House Ownership Type 22 to 70 */
  HouseholdHouseholdForHousingOwnershipHouseholdForResidentialHouseOwnershipHouseholdForResidentialHouseOwnershipType_22To_70 = 'household_household_for_housing_ownership_household_for_residential_house_ownership_household_for_residential_house_ownership_type_22_to_70',
  /** HOUSEHOLD Household for Housing Ownership Household for Residential House Ownership Household for Residential House Ownership Type Above 70 */
  HouseholdHouseholdForHousingOwnershipHouseholdForResidentialHouseOwnershipHouseholdForResidentialHouseOwnershipTypeAbove_70 = 'household_household_for_housing_ownership_household_for_residential_house_ownership_household_for_residential_house_ownership_type_above_70',
  /** HOUSEHOLD Household for Housing Ownership Household for Residential House Ownership Household for Residential House Ownership up to Type 21 */
  HouseholdHouseholdForHousingOwnershipHouseholdForResidentialHouseOwnershipHouseholdForResidentialHouseOwnershipUpToType_21 = 'household_household_for_housing_ownership_household_for_residential_house_ownership_household_for_residential_house_ownership_up_to_type_21',
  /** HOUSEHOLD Household for Motor Vehicle Ownership Household for Four Wheeled Car Ownership */
  HouseholdHouseholdForMotorVehicleOwnershipHouseholdForFourWheeledCarOwnership = 'household_household_for_motor_vehicle_ownership_household_for_four_wheeled_car_ownership',
  /** HOUSEHOLD Household for Motor Vehicle Ownership Household for Motorcycle Ownership */
  HouseholdHouseholdForMotorVehicleOwnershipHouseholdForMotorcycleOwnership = 'household_household_for_motor_vehicle_ownership_household_for_motorcycle_ownership',
  /** HOUSEHOLD Household for Motor Vehicle Ownership Household for Other Motor Vehicle Ownership */
  HouseholdHouseholdForMotorVehicleOwnershipHouseholdForOtherMotorVehicleOwnership = 'household_household_for_motor_vehicle_ownership_household_for_other_motor_vehicle_ownership',
  /** HOUSEHOLD Household for Motor Vehicle Ownership Household for Truck and Six Wheeled or More Motor Vehicle Ownership */
  HouseholdHouseholdForMotorVehicleOwnershipHouseholdForTruckAndSixWheeledOrMoreMotorVehicleOwnership = 'household_household_for_motor_vehicle_ownership_household_for_truck_and_six_wheeled_or_more_motor_vehicle_ownership',
  /** HOUSEHOLD Household for Other Household Equipment Ownership Household for Computer and Communication Equipment Ownership */
  HouseholdHouseholdForOtherHouseholdEquipmentOwnershipHouseholdForComputerAndCommunicationEquipmentOwnership = 'household_household_for_other_household_equipment_ownership_household_for_computer_and_communication_equipment_ownership',
  /** HOUSEHOLD Household for Other Household Equipment Ownership Household for Furniture and Household Equipment Ownership */
  HouseholdHouseholdForOtherHouseholdEquipmentOwnershipHouseholdForFurnitureAndHouseholdEquipmentOwnership = 'household_household_for_other_household_equipment_ownership_household_for_furniture_and_household_equipment_ownership',
  /** HOUSEHOLD Household for Other Household Equipment Ownership Household for Other Equipment Ownership */
  HouseholdHouseholdForOtherHouseholdEquipmentOwnershipHouseholdForOtherEquipmentOwnership = 'household_household_for_other_household_equipment_ownership_household_for_other_equipment_ownership',
  /** HOUSEHOLD Household for Other Household Equipment Ownership Household for Television Radio and Electronic Equipment Ownership */
  HouseholdHouseholdForOtherHouseholdEquipmentOwnershipHouseholdForTelevisionRadioAndElectronicEquipmentOwnership = 'household_household_for_other_household_equipment_ownership_household_for_television_radio_and_electronic_equipment_ownership',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Apartment Type 22 to 70 */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByApartmentType_22To_70 = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_apartment_type_22_to_70',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Apartment Type Above 70 */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByApartmentTypeAbove_70 = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_apartment_type_above_70',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Apartment up to Type 21 */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByApartmentUpToType_21 = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_apartment_up_to_type_21',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Residential House Type 22 to 70 */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByResidentialHouseType_22To_70 = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_residential_house_type_22_to_70',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Residential House Type Above 70 */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByResidentialHouseTypeAbove_70 = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_residential_house_type_above_70',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Residential House up to Type 21 */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByResidentialHouseUpToType_21 = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_residential_house_up_to_type_21',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Shop House Office House */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByShopHouseOfficeHouse = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_shop_house_office_house',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Multipurpose Purposes Secured by Shop House Office House 2nd */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForMultipurposePurposesSecuredByShopHouseOfficeHouse_2nd = 'household_household_for_purposes_not_elsewhere_classified_household_for_multipurpose_purposes_secured_by_shop_house_office_house_2nd',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Other Multipurpose Purposes */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForOtherMultipurposePurposes = 'household_household_for_purposes_not_elsewhere_classified_household_for_other_multipurpose_purposes',
  /** HOUSEHOLD Household for Purposes Not Elsewhere Classified Household for Purposes Not Elsewhere Classified */
  HouseholdHouseholdForPurposesNotElsewhereClassifiedHouseholdForPurposesNotElsewhereClassified = 'household_household_for_purposes_not_elsewhere_classified_household_for_purposes_not_elsewhere_classified',
  /** HOUSEHOLD Household for Shop House Ruko or Office House Rukan Ownership Household for Shop House Ruko or Office House Rukan Ownership */
  HouseholdHouseholdForShopHouseRukoOrOfficeHouseRukanOwnershipHouseholdForShopHouseRukoOrOfficeHouseRukanOwnership = 'household_household_for_shop_house_ruko_or_office_house_rukan_ownership_household_for_shop_house_ruko_or_office_house_rukan_ownership',
  /** HOUSEHOLD NOT OTHER BUSINESS FIELDS Not Other Business Fields Not Other Business Fields */
  HouseholdNotOtherBusinessFieldsNotOtherBusinessFieldsNotOtherBusinessFields = 'household_not_other_business_fields_not_other_business_fields_not_other_business_fields',
  /** INTERNATIONAL BODIES AND OTHER EXTRA INTERNATIONAL BODIES INTERNATIONAL BODIES AND OTHER EXTRA INTERNATIONAL BODIES International Bodies and Other Extra International Bodies */
  InternationalBodiesAndOtherExtraInternationalBodiesInternationalBodiesAndOtherExtraInternationalBodiesInternationalBodiesAndOtherExtraInternationalBodies = 'international_bodies_and_other_extra_international_bodies_international_bodies_and_other_extra_international_bodies_international_bodies_and_other_extra_international_bodies',
  /** MANUFACTURING INDUSTRY BASIC METAL INDUSTRY Basic Iron and Steel Industry */
  ManufacturingIndustryBasicMetalIndustryBasicIronAndSteelIndustry = 'manufacturing_industry_basic_metal_industry_basic_iron_and_steel_industry',
  /** MANUFACTURING INDUSTRY BASIC METAL INDUSTRY Basic Non Ferrous Metal Industry */
  ManufacturingIndustryBasicMetalIndustryBasicNonFerrousMetalIndustry = 'manufacturing_industry_basic_metal_industry_basic_non_ferrous_metal_industry',
  /** MANUFACTURING INDUSTRY BASIC METAL INDUSTRY Metal Casting Industry Iron and Steel Casting Industry */
  ManufacturingIndustryBasicMetalIndustryMetalCastingIndustryIronAndSteelCastingIndustry = 'manufacturing_industry_basic_metal_industry_metal_casting_industry_iron_and_steel_casting_industry',
  /** MANUFACTURING INDUSTRY BASIC METAL INDUSTRY Metal Casting Industry Non Ferrous Metal Casting Industry */
  ManufacturingIndustryBasicMetalIndustryMetalCastingIndustryNonFerrousMetalCastingIndustry = 'manufacturing_industry_basic_metal_industry_metal_casting_industry_non_ferrous_metal_casting_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Industrial Chemical Industry Basic Chemical Industry Except Fertilizers */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryIndustrialChemicalIndustryBasicChemicalIndustryExceptFertilizers = 'manufacturing_industry_chemicals_and_chemical_goods_industry_industrial_chemical_industry_basic_chemical_industry_except_fertilizers',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Industrial Chemical Industry Fertilizer Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryIndustrialChemicalIndustryFertilizerIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_industrial_chemical_industry_fertilizer_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Industrial Chemical Industry Plastic and Synthetic Rubber Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryIndustrialChemicalIndustryPlasticAndSyntheticRubberIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_industrial_chemical_industry_plastic_and_synthetic_rubber_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Other Chemical Goods Industry Chemical Materials and Chemical Goods Industry Not Elsewhere Classified Essential Oil Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryOtherChemicalGoodsIndustryChemicalMaterialsAndChemicalGoodsIndustryNotElsewhereClassifiedEssentialOilIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_other_chemical_goods_industry_chemical_materials_and_chemical_goods_industry_not_elsewhere_classified_essential_oil_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Other Chemical Goods Industry Chemical Materials and Chemical Goods Industry Not Elsewhere Classified Other Chemical Materials and Chemical Goods Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryOtherChemicalGoodsIndustryChemicalMaterialsAndChemicalGoodsIndustryNotElsewhereClassifiedOtherChemicalMaterialsAndChemicalGoodsIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_other_chemical_goods_industry_chemical_materials_and_chemical_goods_industry_not_elsewhere_classified_other_chemical_materials_and_chemical_goods_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Other Chemical Goods Industry Paint Varnish and Lacquer Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryOtherChemicalGoodsIndustryPaintVarnishAndLacquerIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_other_chemical_goods_industry_paint_varnish_and_lacquer_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Other Chemical Goods Industry Pesticide Raw Materials and Pesticide Industry Including Growth Regulators */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryOtherChemicalGoodsIndustryPesticideRawMaterialsAndPesticideIndustryIncludingGrowthRegulators = 'manufacturing_industry_chemicals_and_chemical_goods_industry_other_chemical_goods_industry_pesticide_raw_materials_and_pesticide_industry_including_growth_regulators',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Other Chemical Goods Industry Pharmaceutical and Herbal Medicine Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryOtherChemicalGoodsIndustryPharmaceuticalAndHerbalMedicineIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_other_chemical_goods_industry_pharmaceutical_and_herbal_medicine_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Other Chemical Goods Industry Soap and Household Cleaning Materials Cosmetics and Similar Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustryOtherChemicalGoodsIndustrySoapAndHouseholdCleaningMaterialsCosmeticsAndSimilarIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_other_chemical_goods_industry_soap_and_household_cleaning_materials_cosmetics_and_similar_industry',
  /** MANUFACTURING INDUSTRY CHEMICALS AND CHEMICAL GOODS INDUSTRY Synthetic Fiber Industry */
  ManufacturingIndustryChemicalsAndChemicalGoodsIndustrySyntheticFiberIndustry = 'manufacturing_industry_chemicals_and_chemical_goods_industry_synthetic_fiber_industry',
  /** MANUFACTURING INDUSTRY COAL GOODS PETROLEUM REFINING AND NATURAL GAS PROCESSING PETROLEUM REFINING PRODUCTS AND NUCLEAR FUEL INDUSTRY Coal Goods Industry */
  ManufacturingIndustryCoalGoodsPetroleumRefiningAndNaturalGasProcessingPetroleumRefiningProductsAndNuclearFuelIndustryCoalGoodsIndustry = 'manufacturing_industry_coal_goods_petroleum_refining_and_natural_gas_processing_petroleum_refining_products_and_nuclear_fuel_industry_coal_goods_industry',
  /** MANUFACTURING INDUSTRY COAL GOODS PETROLEUM REFINING AND NATURAL GAS PROCESSING PETROLEUM REFINING PRODUCTS AND NUCLEAR FUEL INDUSTRY Nuclear Fuel Processing */
  ManufacturingIndustryCoalGoodsPetroleumRefiningAndNaturalGasProcessingPetroleumRefiningProductsAndNuclearFuelIndustryNuclearFuelProcessing = 'manufacturing_industry_coal_goods_petroleum_refining_and_natural_gas_processing_petroleum_refining_products_and_nuclear_fuel_industry_nuclear_fuel_processing',
  /** MANUFACTURING INDUSTRY COAL GOODS PETROLEUM REFINING AND NATURAL GAS PROCESSING PETROLEUM REFINING PRODUCTS AND NUCLEAR FUEL INDUSTRY Petroleum Refining Natural Gas Processing and Petroleum Refining Products Industry */
  ManufacturingIndustryCoalGoodsPetroleumRefiningAndNaturalGasProcessingPetroleumRefiningProductsAndNuclearFuelIndustryPetroleumRefiningNaturalGasProcessingAndPetroleumRefiningProductsIndustry = 'manufacturing_industry_coal_goods_petroleum_refining_and_natural_gas_processing_petroleum_refining_products_and_nuclear_fuel_industry_petroleum_refining_natural_gas_processing_and_petroleum_refining_products_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Beverage Industry */
  ManufacturingIndustryFoodAndBeverageIndustryBeverageIndustry = 'manufacturing_industry_food_and_beverage_industry_beverage_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Dairy and Dairy Product Industry */
  ManufacturingIndustryFoodAndBeverageIndustryDairyAndDairyProductIndustry = 'manufacturing_industry_food_and_beverage_industry_dairy_and_dairy_product_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Grain Flour and Animal Feed Milling Industry Animal Feed Industry */
  ManufacturingIndustryFoodAndBeverageIndustryGrainFlourAndAnimalFeedMillingIndustryAnimalFeedIndustry = 'manufacturing_industry_food_and_beverage_industry_grain_flour_and_animal_feed_milling_industry_animal_feed_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Grain Flour and Animal Feed Milling Industry Flour and Starch Industry */
  ManufacturingIndustryFoodAndBeverageIndustryGrainFlourAndAnimalFeedMillingIndustryFlourAndStarchIndustry = 'manufacturing_industry_food_and_beverage_industry_grain_flour_and_animal_feed_milling_industry_flour_and_starch_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Grain Flour and Animal Feed Milling Industry Grain Seed and Nut Milling Peeling and Cleaning Industry Including Copra Production Copra Industry */
  ManufacturingIndustryFoodAndBeverageIndustryGrainFlourAndAnimalFeedMillingIndustryGrainSeedAndNutMillingPeelingAndCleaningIndustryIncludingCopraProductionCopraIndustry = 'manufacturing_industry_food_and_beverage_industry_grain_flour_and_animal_feed_milling_industry_grain_seed_and_nut_milling_peeling_and_cleaning_industry_including_copra_production_copra_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Grain Flour and Animal Feed Milling Industry Grain Seed and Nut Milling Peeling and Cleaning Industry Including Copra Production Other Milling Industry */
  ManufacturingIndustryFoodAndBeverageIndustryGrainFlourAndAnimalFeedMillingIndustryGrainSeedAndNutMillingPeelingAndCleaningIndustryIncludingCopraProductionOtherMillingIndustry = 'manufacturing_industry_food_and_beverage_industry_grain_flour_and_animal_feed_milling_industry_grain_seed_and_nut_milling_peeling_and_cleaning_industry_including_copra_production_other_milling_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Grain Flour and Animal Feed Milling Industry Grain Seed and Nut Milling Peeling and Cleaning Industry Including Copra Production Rice Milling and Polishing Industry */
  ManufacturingIndustryFoodAndBeverageIndustryGrainFlourAndAnimalFeedMillingIndustryGrainSeedAndNutMillingPeelingAndCleaningIndustryIncludingCopraProductionRiceMillingAndPolishingIndustry = 'manufacturing_industry_food_and_beverage_industry_grain_flour_and_animal_feed_milling_industry_grain_seed_and_nut_milling_peeling_and_cleaning_industry_including_copra_production_rice_milling_and_polishing_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Bread and Similar Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryBreadAndSimilarIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_bread_and_similar_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Chocolate and Confectionery Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryChocolateAndConfectioneryIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_chocolate_and_confectionery_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Macaroni Noodles Spaghetti Vermicelli Bean Thread and Similar Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryMacaroniNoodlesSpaghettiVermicelliBeanThreadAndSimilarIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_macaroni_noodles_spaghetti_vermicelli_bean_thread_and_similar_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Other Food Industry Not Elsewhere Classified Coffee Processing Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryOtherFoodIndustryNotElsewhereClassifiedCoffeeProcessingIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_other_food_industry_not_elsewhere_classified_coffee_processing_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Other Food Industry Not Elsewhere Classified Food Industry Not Elsewhere Classified */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryOtherFoodIndustryNotElsewhereClassifiedFoodIndustryNotElsewhereClassified = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_other_food_industry_not_elsewhere_classified_food_industry_not_elsewhere_classified',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Other Food Industry Not Elsewhere Classified Soy Sauce Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryOtherFoodIndustryNotElsewhereClassifiedSoySauceIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_other_food_industry_not_elsewhere_classified_soy_sauce_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Other Food Industry Not Elsewhere Classified Tea and Coffee Processing Industry Tea Processing Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryOtherFoodIndustryNotElsewhereClassifiedTeaAndCoffeeProcessingIndustryTeaProcessingIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_other_food_industry_not_elsewhere_classified_tea_and_coffee_processing_industry_tea_processing_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Other Food Industry Not Elsewhere Classified Tempeh and Tofu Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustryOtherFoodIndustryNotElsewhereClassifiedTempehAndTofuIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_other_food_industry_not_elsewhere_classified_tempeh_and_tofu_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Other Food Industry Sugar and Sugar Processing Industry */
  ManufacturingIndustryFoodAndBeverageIndustryOtherFoodIndustrySugarAndSugarProcessingIndustry = 'manufacturing_industry_food_and_beverage_industry_other_food_industry_sugar_and_sugar_processing_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preserving of Meat Fish Fruits Vegetables Oils and Fats Fish and Other Aquatic Biota Processing and Preservation Industry */
  ManufacturingIndustryFoodAndBeverageIndustryProcessingAndPreservingOfMeatFishFruitsVegetablesOilsAndFatsFishAndOtherAquaticBiotaProcessingAndPreservationIndustry = 'manufacturing_industry_food_and_beverage_industry_processing_and_preserving_of_meat_fish_fruits_vegetables_oils_and_fats_fish_and_other_aquatic_biota_processing_and_preservation_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preserving of Meat Fish Fruits Vegetables Oils and Fats Fruit and Vegetable Processing and Preservation Industry */
  ManufacturingIndustryFoodAndBeverageIndustryProcessingAndPreservingOfMeatFishFruitsVegetablesOilsAndFatsFruitAndVegetableProcessingAndPreservationIndustry = 'manufacturing_industry_food_and_beverage_industry_processing_and_preserving_of_meat_fish_fruits_vegetables_oils_and_fats_fruit_and_vegetable_processing_and_preservation_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preserving of Meat Fish Fruits Vegetables Oils and Fats Slaughtering and Meat Preservation Animal Slaughtering Industry */
  ManufacturingIndustryFoodAndBeverageIndustryProcessingAndPreservingOfMeatFishFruitsVegetablesOilsAndFatsSlaughteringAndMeatPreservationAnimalSlaughteringIndustry = 'manufacturing_industry_food_and_beverage_industry_processing_and_preserving_of_meat_fish_fruits_vegetables_oils_and_fats_slaughtering_and_meat_preservation_animal_slaughtering_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preserving of Meat Fish Fruits Vegetables Oils and Fats Slaughtering and Meat Preservation Meat Processing and Preservation Industry */
  ManufacturingIndustryFoodAndBeverageIndustryProcessingAndPreservingOfMeatFishFruitsVegetablesOilsAndFatsSlaughteringAndMeatPreservationMeatProcessingAndPreservationIndustry = 'manufacturing_industry_food_and_beverage_industry_processing_and_preserving_of_meat_fish_fruits_vegetables_oils_and_fats_slaughtering_and_meat_preservation_meat_processing_and_preservation_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preserving of Meat Fish Fruits Vegetables Oils and Fats Vegetable and Animal Oils and Fats Industry Crude Palm Oil Cooking Oil Industry */
  ManufacturingIndustryFoodAndBeverageIndustryProcessingAndPreservingOfMeatFishFruitsVegetablesOilsAndFatsVegetableAndAnimalOilsAndFatsIndustryCrudePalmOilCookingOilIndustry = 'manufacturing_industry_food_and_beverage_industry_processing_and_preserving_of_meat_fish_fruits_vegetables_oils_and_fats_vegetable_and_animal_oils_and_fats_industry_crude_palm_oil_cooking_oil_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preserving of Meat Fish Fruits Vegetables Oils and Fats Vegetable and Animal Oils and Fats Industry Palm Kernel Oil Cooking Oil Industry */
  ManufacturingIndustryFoodAndBeverageIndustryProcessingAndPreservingOfMeatFishFruitsVegetablesOilsAndFatsVegetableAndAnimalOilsAndFatsIndustryPalmKernelOilCookingOilIndustry = 'manufacturing_industry_food_and_beverage_industry_processing_and_preserving_of_meat_fish_fruits_vegetables_oils_and_fats_vegetable_and_animal_oils_and_fats_industry_palm_kernel_oil_cooking_oil_industry',
  /** MANUFACTURING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preserving of Meat Fish Fruits Vegetables Oils and Fats Vegetable and Animal Oils and Fats Industry Vegetable and Animal Crude Oil Edible Oil Industry */
  ManufacturingIndustryFoodAndBeverageIndustryProcessingAndPreservingOfMeatFishFruitsVegetablesOilsAndFatsVegetableAndAnimalOilsAndFatsIndustryVegetableAndAnimalCrudeOilEdibleOilIndustry = 'manufacturing_industry_food_and_beverage_industry_processing_and_preserving_of_meat_fish_fruits_vegetables_oils_and_fats_vegetable_and_animal_oils_and_fats_industry_vegetable_and_animal_crude_oil_edible_oil_industry',
  /** MANUFACTURING INDUSTRY FURNITURE AND OTHER MANUFACTURING INDUSTRY Furniture Industry */
  ManufacturingIndustryFurnitureAndOtherManufacturingIndustryFurnitureIndustry = 'manufacturing_industry_furniture_and_other_manufacturing_industry_furniture_industry',
  /** MANUFACTURING INDUSTRY FURNITURE AND OTHER MANUFACTURING INDUSTRY Other Manufacturing Industry */
  ManufacturingIndustryFurnitureAndOtherManufacturingIndustryOtherManufacturingIndustry = 'manufacturing_industry_furniture_and_other_manufacturing_industry_other_manufacturing_industry',
  /** MANUFACTURING INDUSTRY LEATHER LEATHER GOODS AND FOOTWEAR INDUSTRY Footwear Industry */
  ManufacturingIndustryLeatherLeatherGoodsAndFootwearIndustryFootwearIndustry = 'manufacturing_industry_leather_leather_goods_and_footwear_industry_footwear_industry',
  /** MANUFACTURING INDUSTRY LEATHER LEATHER GOODS AND FOOTWEAR INDUSTRY Leather and Leather Goods Industry Including Artificial Leather */
  ManufacturingIndustryLeatherLeatherGoodsAndFootwearIndustryLeatherAndLeatherGoodsIndustryIncludingArtificialLeather = 'manufacturing_industry_leather_leather_goods_and_footwear_industry_leather_and_leather_goods_industry_including_artificial_leather',
  /** MANUFACTURING INDUSTRY MACHINERY AND EQUIPMENT INDUSTRY General Machinery Industry */
  ManufacturingIndustryMachineryAndEquipmentIndustryGeneralMachineryIndustry = 'manufacturing_industry_machinery_and_equipment_industry_general_machinery_industry',
  /** MANUFACTURING INDUSTRY MACHINERY AND EQUIPMENT INDUSTRY Household Appliances Industry Not Elsewhere Classified */
  ManufacturingIndustryMachineryAndEquipmentIndustryHouseholdAppliancesIndustryNotElsewhereClassified = 'manufacturing_industry_machinery_and_equipment_industry_household_appliances_industry_not_elsewhere_classified',
  /** MANUFACTURING INDUSTRY MACHINERY AND EQUIPMENT INDUSTRY Special Purpose Machinery Industry Agricultural and Forestry Machinery Industry and Maintenance and */
  ManufacturingIndustryMachineryAndEquipmentIndustrySpecialPurposeMachineryIndustryAgriculturalAndForestryMachineryIndustryAndMaintenanceAnd = 'manufacturing_industry_machinery_and_equipment_industry_special_purpose_machinery_industry_agricultural_and_forestry_machinery_industry_and_maintenance_and',
  /** MANUFACTURING INDUSTRY MACHINERY AND EQUIPMENT INDUSTRY Special Purpose Machinery Industry Food Beverage and Tobacco Processing Machinery Industry */
  ManufacturingIndustryMachineryAndEquipmentIndustrySpecialPurposeMachineryIndustryFoodBeverageAndTobaccoProcessingMachineryIndustry = 'manufacturing_industry_machinery_and_equipment_industry_special_purpose_machinery_industry_food_beverage_and_tobacco_processing_machinery_industry',
  /** MANUFACTURING INDUSTRY MACHINERY AND EQUIPMENT INDUSTRY Special Purpose Machinery Industry Mining Quarrying and Construction Machinery Industry */
  ManufacturingIndustryMachineryAndEquipmentIndustrySpecialPurposeMachineryIndustryMiningQuarryingAndConstructionMachineryIndustry = 'manufacturing_industry_machinery_and_equipment_industry_special_purpose_machinery_industry_mining_quarrying_and_construction_machinery_industry',
  /** MANUFACTURING INDUSTRY MACHINERY AND EQUIPMENT INDUSTRY Special Purpose Machinery Industry Other Special Purpose Machinery Industry */
  ManufacturingIndustryMachineryAndEquipmentIndustrySpecialPurposeMachineryIndustryOtherSpecialPurposeMachineryIndustry = 'manufacturing_industry_machinery_and_equipment_industry_special_purpose_machinery_industry_other_special_purpose_machinery_industry',
  /** MANUFACTURING INDUSTRY MACHINERY AND EQUIPMENT INDUSTRY Special Purpose Machinery Industry Textile Textile Product and Leather Goods Machinery Industry */
  ManufacturingIndustryMachineryAndEquipmentIndustrySpecialPurposeMachineryIndustryTextileTextileProductAndLeatherGoodsMachineryIndustry = 'manufacturing_industry_machinery_and_equipment_industry_special_purpose_machinery_industry_textile_textile_product_and_leather_goods_machinery_industry',
  /** MANUFACTURING INDUSTRY MEDICAL EQUIPMENT MEASURING INSTRUMENTS NAVIGATION EQUIPMENT OPTICAL EQUIPMENT CLOCKS AND WATCHES INDUSTRY Clock Bell and Similar Industry */
  ManufacturingIndustryMedicalEquipmentMeasuringInstrumentsNavigationEquipmentOpticalEquipmentClocksAndWatchesIndustryClockBellAndSimilarIndustry = 'manufacturing_industry_medical_equipment_measuring_instruments_navigation_equipment_optical_equipment_clocks_and_watches_industry_clock_bell_and_similar_industry',
  /** MANUFACTURING INDUSTRY MEDICAL EQUIPMENT MEASURING INSTRUMENTS NAVIGATION EQUIPMENT OPTICAL EQUIPMENT CLOCKS AND WATCHES INDUSTRY Medical Equipment and Equipment for Measuring Checking Testing and Other Parts Industry Except Optical Equipment */
  ManufacturingIndustryMedicalEquipmentMeasuringInstrumentsNavigationEquipmentOpticalEquipmentClocksAndWatchesIndustryMedicalEquipmentAndEquipmentForMeasuringCheckingTestingAndOtherPartsIndustryExceptOpticalEquipment = 'manufacturing_industry_medical_equipment_measuring_instruments_navigation_equipment_optical_equipment_clocks_and_watches_industry_medical_equipment_and_equipment_for_measuring_checking_testing_and_other_parts_industry_except_optical_equipment',
  /** MANUFACTURING INDUSTRY MEDICAL EQUIPMENT MEASURING INSTRUMENTS NAVIGATION EQUIPMENT OPTICAL EQUIPMENT CLOCKS AND WATCHES INDUSTRY Optical Instrument and Photographic Equipment Industry */
  ManufacturingIndustryMedicalEquipmentMeasuringInstrumentsNavigationEquipmentOpticalEquipmentClocksAndWatchesIndustryOpticalInstrumentAndPhotographicEquipmentIndustry = 'manufacturing_industry_medical_equipment_measuring_instruments_navigation_equipment_optical_equipment_clocks_and_watches_industry_optical_instrument_and_photographic_equipment_industry',
  /** MANUFACTURING INDUSTRY METAL GOODS INDUSTRY EXCEPT MACHINERY AND EQUIPMENT Other Metal Goods Industry and Metal Goods Manufacturing Service Activities Agricultural Carpentry Cutting Tools and Other Metal Equipment Industry */
  ManufacturingIndustryMetalGoodsIndustryExceptMachineryAndEquipmentOtherMetalGoodsIndustryAndMetalGoodsManufacturingServiceActivitiesAgriculturalCarpentryCuttingToolsAndOtherMetalEquipmentIndustry = 'manufacturing_industry_metal_goods_industry_except_machinery_and_equipment_other_metal_goods_industry_and_metal_goods_manufacturing_service_activities_agricultural_carpentry_cutting_tools_and_other_metal_equipment_industry',
  /** MANUFACTURING INDUSTRY METAL GOODS INDUSTRY EXCEPT MACHINERY AND EQUIPMENT Other Metal Goods Industry and Metal Goods Manufacturing Service Activities Metal Goods Industry Not Elsewhere Classified */
  ManufacturingIndustryMetalGoodsIndustryExceptMachineryAndEquipmentOtherMetalGoodsIndustryAndMetalGoodsManufacturingServiceActivitiesMetalGoodsIndustryNotElsewhereClassified = 'manufacturing_industry_metal_goods_industry_except_machinery_and_equipment_other_metal_goods_industry_and_metal_goods_manufacturing_service_activities_metal_goods_industry_not_elsewhere_classified',
  /** MANUFACTURING INDUSTRY METAL GOODS INDUSTRY EXCEPT MACHINERY AND EQUIPMENT Prefabricated Metal Building Industry Tank Manufacturing and Steam Generator Industry */
  ManufacturingIndustryMetalGoodsIndustryExceptMachineryAndEquipmentPrefabricatedMetalBuildingIndustryTankManufacturingAndSteamGeneratorIndustry = 'manufacturing_industry_metal_goods_industry_except_machinery_and_equipment_prefabricated_metal_building_industry_tank_manufacturing_and_steam_generator_industry',
  /** MANUFACTURING INDUSTRY MOTOR VEHICLE INDUSTRY Four Wheeled or More Motor Vehicle Body Industry */
  ManufacturingIndustryMotorVehicleIndustryFourWheeledOrMoreMotorVehicleBodyIndustry = 'manufacturing_industry_motor_vehicle_industry_four_wheeled_or_more_motor_vehicle_body_industry',
  /** MANUFACTURING INDUSTRY MOTOR VEHICLE INDUSTRY Four Wheeled or More Motor Vehicle Equipment and Component Industry */
  ManufacturingIndustryMotorVehicleIndustryFourWheeledOrMoreMotorVehicleEquipmentAndComponentIndustry = 'manufacturing_industry_motor_vehicle_industry_four_wheeled_or_more_motor_vehicle_equipment_and_component_industry',
  /** MANUFACTURING INDUSTRY MOTOR VEHICLE INDUSTRY Four Wheeled or More Motor Vehicle Industry */
  ManufacturingIndustryMotorVehicleIndustryFourWheeledOrMoreMotorVehicleIndustry = 'manufacturing_industry_motor_vehicle_industry_four_wheeled_or_more_motor_vehicle_industry',
  /** MANUFACTURING INDUSTRY NON METALLIC MINERAL GOODS INDUSTRY Asbestos Goods Industry */
  ManufacturingIndustryNonMetallicMineralGoodsIndustryAsbestosGoodsIndustry = 'manufacturing_industry_non_metallic_mineral_goods_industry_asbestos_goods_industry',
  /** MANUFACTURING INDUSTRY NON METALLIC MINERAL GOODS INDUSTRY Cement Lime and Gypsum and Cement and Lime Goods Industry */
  ManufacturingIndustryNonMetallicMineralGoodsIndustryCementLimeAndGypsumAndCementAndLimeGoodsIndustry = 'manufacturing_industry_non_metallic_mineral_goods_industry_cement_lime_and_gypsum_and_cement_and_lime_goods_industry',
  /** MANUFACTURING INDUSTRY NON METALLIC MINERAL GOODS INDUSTRY Clay Ceramic Processing Industry */
  ManufacturingIndustryNonMetallicMineralGoodsIndustryClayCeramicProcessingIndustry = 'manufacturing_industry_non_metallic_mineral_goods_industry_clay_ceramic_processing_industry',
  /** MANUFACTURING INDUSTRY NON METALLIC MINERAL GOODS INDUSTRY Glass and Glass Goods Industry */
  ManufacturingIndustryNonMetallicMineralGoodsIndustryGlassAndGlassGoodsIndustry = 'manufacturing_industry_non_metallic_mineral_goods_industry_glass_and_glass_goods_industry',
  /** MANUFACTURING INDUSTRY NON METALLIC MINERAL GOODS INDUSTRY Other Non Metallic Mineral Goods Industry */
  ManufacturingIndustryNonMetallicMineralGoodsIndustryOtherNonMetallicMineralGoodsIndustry = 'manufacturing_industry_non_metallic_mineral_goods_industry_other_non_metallic_mineral_goods_industry',
  /** MANUFACTURING INDUSTRY NON METALLIC MINERAL GOODS INDUSTRY Porcelain Goods Industry */
  ManufacturingIndustryNonMetallicMineralGoodsIndustryPorcelainGoodsIndustry = 'manufacturing_industry_non_metallic_mineral_goods_industry_porcelain_goods_industry',
  /** MANUFACTURING INDUSTRY NON METALLIC MINERAL GOODS INDUSTRY Stone Goods Industry */
  ManufacturingIndustryNonMetallicMineralGoodsIndustryStoneGoodsIndustry = 'manufacturing_industry_non_metallic_mineral_goods_industry_stone_goods_industry',
  /** MANUFACTURING INDUSTRY OFFICE ACCOUNTING AND DATA PROCESSING MACHINERY AND EQUIPMENT INDUSTRY Office Accounting and Data Processing Machinery and Equipment Industry */
  ManufacturingIndustryOfficeAccountingAndDataProcessingMachineryAndEquipmentIndustryOfficeAccountingAndDataProcessingMachineryAndEquipmentIndustry = 'manufacturing_industry_office_accounting_and_data_processing_machinery_and_equipment_industry_office_accounting_and_data_processing_machinery_and_equipment_industry',
  /** MANUFACTURING INDUSTRY OTHER ELECTRICAL MACHINERY AND EQUIPMENT INDUSTRY Electric Accumulator and Battery Industry */
  ManufacturingIndustryOtherElectricalMachineryAndEquipmentIndustryElectricAccumulatorAndBatteryIndustry = 'manufacturing_industry_other_electrical_machinery_and_equipment_industry_electric_accumulator_and_battery_industry',
  /** MANUFACTURING INDUSTRY OTHER ELECTRICAL MACHINERY AND EQUIPMENT INDUSTRY Electric and Telephone Cable Industry */
  ManufacturingIndustryOtherElectricalMachineryAndEquipmentIndustryElectricAndTelephoneCableIndustry = 'manufacturing_industry_other_electrical_machinery_and_equipment_industry_electric_and_telephone_cable_industry',
  /** MANUFACTURING INDUSTRY OTHER ELECTRICAL MACHINERY AND EQUIPMENT INDUSTRY Electric Motor Generator and Transformer Industry */
  ManufacturingIndustryOtherElectricalMachineryAndEquipmentIndustryElectricMotorGeneratorAndTransformerIndustry = 'manufacturing_industry_other_electrical_machinery_and_equipment_industry_electric_motor_generator_and_transformer_industry',
  /** MANUFACTURING INDUSTRY OTHER ELECTRICAL MACHINERY AND EQUIPMENT INDUSTRY Electrical Control and Distribution Equipment Industry */
  ManufacturingIndustryOtherElectricalMachineryAndEquipmentIndustryElectricalControlAndDistributionEquipmentIndustry = 'manufacturing_industry_other_electrical_machinery_and_equipment_industry_electrical_control_and_distribution_equipment_industry',
  /** MANUFACTURING INDUSTRY OTHER ELECTRICAL MACHINERY AND EQUIPMENT INDUSTRY Electrical Equipment Industry Not Elsewhere Classified */
  ManufacturingIndustryOtherElectricalMachineryAndEquipmentIndustryElectricalEquipmentIndustryNotElsewhereClassified = 'manufacturing_industry_other_electrical_machinery_and_equipment_industry_electrical_equipment_industry_not_elsewhere_classified',
  /** MANUFACTURING INDUSTRY OTHER ELECTRICAL MACHINERY AND EQUIPMENT INDUSTRY Incandescent Light Bulb and Lighting Lamp Industry */
  ManufacturingIndustryOtherElectricalMachineryAndEquipmentIndustryIncandescentLightBulbAndLightingLampIndustry = 'manufacturing_industry_other_electrical_machinery_and_equipment_industry_incandescent_light_bulb_and_lighting_lamp_industry',
  /** MANUFACTURING INDUSTRY PAPER PAPER GOODS AND THE LIKE INDUSTRY Paper and Paperboard Goods Industry Not Elsewhere Classified */
  ManufacturingIndustryPaperPaperGoodsAndTheLikeIndustryPaperAndPaperboardGoodsIndustryNotElsewhereClassified = 'manufacturing_industry_paper_paper_goods_and_the_like_industry_paper_and_paperboard_goods_industry_not_elsewhere_classified',
  /** MANUFACTURING INDUSTRY PAPER PAPER GOODS AND THE LIKE INDUSTRY Paper and Paperboard Packaging and Box Industry */
  ManufacturingIndustryPaperPaperGoodsAndTheLikeIndustryPaperAndPaperboardPackagingAndBoxIndustry = 'manufacturing_industry_paper_paper_goods_and_the_like_industry_paper_and_paperboard_packaging_and_box_industry',
  /** MANUFACTURING INDUSTRY PAPER PAPER GOODS AND THE LIKE INDUSTRY Pulp Paper and Paper Board Industry */
  ManufacturingIndustryPaperPaperGoodsAndTheLikeIndustryPulpPaperAndPaperBoardIndustry = 'manufacturing_industry_paper_paper_goods_and_the_like_industry_pulp_paper_and_paper_board_industry',
  /** MANUFACTURING INDUSTRY PUBLISHING PRINTING AND REPRODUCTION OF RECORDED MEDIA INDUSTRY Printing Industry and Activities Related to Printing Including Reproduction Reprinting */
  ManufacturingIndustryPublishingPrintingAndReproductionOfRecordedMediaIndustryPrintingIndustryAndActivitiesRelatedToPrintingIncludingReproductionReprinting = 'manufacturing_industry_publishing_printing_and_reproduction_of_recorded_media_industry_printing_industry_and_activities_related_to_printing_including_reproduction_reprinting',
  /** MANUFACTURING INDUSTRY PUBLISHING PRINTING AND REPRODUCTION OF RECORDED MEDIA INDUSTRY Publishing Industry */
  ManufacturingIndustryPublishingPrintingAndReproductionOfRecordedMediaIndustryPublishingIndustry = 'manufacturing_industry_publishing_printing_and_reproduction_of_recorded_media_industry_publishing_industry',
  /** MANUFACTURING INDUSTRY PUBLISHING PRINTING AND REPRODUCTION OF RECORDED MEDIA INDUSTRY Reproduction of Recorded Media Film and Video */
  ManufacturingIndustryPublishingPrintingAndReproductionOfRecordedMediaIndustryReproductionOfRecordedMediaFilmAndVideo = 'manufacturing_industry_publishing_printing_and_reproduction_of_recorded_media_industry_reproduction_of_recorded_media_film_and_video',
  /** MANUFACTURING INDUSTRY RADIO TELEVISION AND COMMUNICATION EQUIPMENT AND ACCESSORIES INDUSTRY Communication Transmission Equipment Industry */
  ManufacturingIndustryRadioTelevisionAndCommunicationEquipmentAndAccessoriesIndustryCommunicationTransmissionEquipmentIndustry = 'manufacturing_industry_radio_television_and_communication_equipment_and_accessories_industry_communication_transmission_equipment_industry',
  /** MANUFACTURING INDUSTRY RADIO TELEVISION AND COMMUNICATION EQUIPMENT AND ACCESSORIES INDUSTRY Electronic Tube and Valve and Other Electronic Component Industry */
  ManufacturingIndustryRadioTelevisionAndCommunicationEquipmentAndAccessoriesIndustryElectronicTubeAndValveAndOtherElectronicComponentIndustry = 'manufacturing_industry_radio_television_and_communication_equipment_and_accessories_industry_electronic_tube_and_valve_and_other_electronic_component_industry',
  /** MANUFACTURING INDUSTRY RADIO TELEVISION AND COMMUNICATION EQUIPMENT AND ACCESSORIES INDUSTRY Radio Television Sound and Image Recording Equipment and Similar Industry */
  ManufacturingIndustryRadioTelevisionAndCommunicationEquipmentAndAccessoriesIndustryRadioTelevisionSoundAndImageRecordingEquipmentAndSimilarIndustry = 'manufacturing_industry_radio_television_and_communication_equipment_and_accessories_industry_radio_television_sound_and_image_recording_equipment_and_similar_industry',
  /** MANUFACTURING INDUSTRY READY MADE CLOTHING INDUSTRY Fur Leather Finished Goods and Fur Dyeing Ready made Clothing Industry */
  ManufacturingIndustryReadyMadeClothingIndustryFurLeatherFinishedGoodsAndFurDyeingReadyMadeClothingIndustry = 'manufacturing_industry_ready_made_clothing_industry_fur_leather_finished_goods_and_fur_dyeing_ready_made_clothing_industry',
  /** MANUFACTURING INDUSTRY READY MADE CLOTHING INDUSTRY Ready made Clothing and Accessories Industry Except Fur Clothing */
  ManufacturingIndustryReadyMadeClothingIndustryReadyMadeClothingAndAccessoriesIndustryExceptFurClothing = 'manufacturing_industry_ready_made_clothing_industry_ready_made_clothing_and_accessories_industry_except_fur_clothing',
  /** MANUFACTURING INDUSTRY RECYCLING Metal Goods Recycling */
  ManufacturingIndustryRecyclingMetalGoodsRecycling = 'manufacturing_industry_recycling_metal_goods_recycling',
  /** MANUFACTURING INDUSTRY RECYCLING Non Metal Goods Recycling */
  ManufacturingIndustryRecyclingNonMetalGoodsRecycling = 'manufacturing_industry_recycling_non_metal_goods_recycling',
  /** MANUFACTURING INDUSTRY RUBBER RUBBER GOODS AND PLASTIC GOODS INDUSTRY Plastic Goods Industry */
  ManufacturingIndustryRubberRubberGoodsAndPlasticGoodsIndustryPlasticGoodsIndustry = 'manufacturing_industry_rubber_rubber_goods_and_plastic_goods_industry_plastic_goods_industry',
  /** MANUFACTURING INDUSTRY RUBBER RUBBER GOODS AND PLASTIC GOODS INDUSTRY Rubber and Rubber Goods Industry Other Rubber Goods Industry */
  ManufacturingIndustryRubberRubberGoodsAndPlasticGoodsIndustryRubberAndRubberGoodsIndustryOtherRubberGoodsIndustry = 'manufacturing_industry_rubber_rubber_goods_and_plastic_goods_industry_rubber_and_rubber_goods_industry_other_rubber_goods_industry',
  /** MANUFACTURING INDUSTRY RUBBER RUBBER GOODS AND PLASTIC GOODS INDUSTRY Rubber and Rubber Goods Industry Rubber Industry Crumb Rubber Industry */
  ManufacturingIndustryRubberRubberGoodsAndPlasticGoodsIndustryRubberAndRubberGoodsIndustryRubberIndustryCrumbRubberIndustry = 'manufacturing_industry_rubber_rubber_goods_and_plastic_goods_industry_rubber_and_rubber_goods_industry_rubber_industry_crumb_rubber_industry',
  /** MANUFACTURING INDUSTRY RUBBER RUBBER GOODS AND PLASTIC GOODS INDUSTRY Rubber and Rubber Goods Industry Rubber Industry Rubber Remilling Industry */
  ManufacturingIndustryRubberRubberGoodsAndPlasticGoodsIndustryRubberAndRubberGoodsIndustryRubberIndustryRubberRemillingIndustry = 'manufacturing_industry_rubber_rubber_goods_and_plastic_goods_industry_rubber_and_rubber_goods_industry_rubber_industry_rubber_remilling_industry',
  /** MANUFACTURING INDUSTRY RUBBER RUBBER GOODS AND PLASTIC GOODS INDUSTRY Rubber and Rubber Goods Industry Rubber Industry Rubber Smoking Industry */
  ManufacturingIndustryRubberRubberGoodsAndPlasticGoodsIndustryRubberAndRubberGoodsIndustryRubberIndustryRubberSmokingIndustry = 'manufacturing_industry_rubber_rubber_goods_and_plastic_goods_industry_rubber_and_rubber_goods_industry_rubber_industry_rubber_smoking_industry',
  /** MANUFACTURING INDUSTRY TEXTILE INDUSTRY Kapok Industry */
  ManufacturingIndustryTextileIndustryKapokIndustry = 'manufacturing_industry_textile_industry_kapok_industry',
  /** MANUFACTURING INDUSTRY TEXTILE INDUSTRY Spinning Weaving and Textile Finishing Industry */
  ManufacturingIndustryTextileIndustrySpinningWeavingAndTextileFinishingIndustry = 'manufacturing_industry_textile_industry_spinning_weaving_and_textile_finishing_industry',
  /** MANUFACTURING INDUSTRY TEXTILE INDUSTRY Textile and Carpet Finished Goods Industry */
  ManufacturingIndustryTextileIndustryTextileAndCarpetFinishedGoodsIndustry = 'manufacturing_industry_textile_industry_textile_and_carpet_finished_goods_industry',
  /** MANUFACTURING INDUSTRY TOBACCO PROCESSING INDUSTRY Tobacco Processing Industry Tobacco Processing Industry Cigarette Industry */
  ManufacturingIndustryTobaccoProcessingIndustryTobaccoProcessingIndustryTobaccoProcessingIndustryCigaretteIndustry = 'manufacturing_industry_tobacco_processing_industry_tobacco_processing_industry_tobacco_processing_industry_cigarette_industry',
  /** MANUFACTURING INDUSTRY TOBACCO PROCESSING INDUSTRY Tobacco Processing Industry Tobacco Processing Industry Cigarette Seasoning and Other Cigarette Accessories Industry */
  ManufacturingIndustryTobaccoProcessingIndustryTobaccoProcessingIndustryTobaccoProcessingIndustryCigaretteSeasoningAndOtherCigaretteAccessoriesIndustry = 'manufacturing_industry_tobacco_processing_industry_tobacco_processing_industry_tobacco_processing_industry_cigarette_seasoning_and_other_cigarette_accessories_industry',
  /** MANUFACTURING INDUSTRY TOBACCO PROCESSING INDUSTRY Tobacco Processing Industry Tobacco Processing Industry Tobacco Drying and Processing Industry */
  ManufacturingIndustryTobaccoProcessingIndustryTobaccoProcessingIndustryTobaccoProcessingIndustryTobaccoDryingAndProcessingIndustry = 'manufacturing_industry_tobacco_processing_industry_tobacco_processing_industry_tobacco_processing_industry_tobacco_drying_and_processing_industry',
  /** MANUFACTURING INDUSTRY TRANSPORTATION EQUIPMENT INDUSTRY OTHER THAN FOUR WHEELED OR MORE MOTOR VEHICLES Aircraft and Accessories and Aircraft Repair Industry */
  ManufacturingIndustryTransportationEquipmentIndustryOtherThanFourWheeledOrMoreMotorVehiclesAircraftAndAccessoriesAndAircraftRepairIndustry = 'manufacturing_industry_transportation_equipment_industry_other_than_four_wheeled_or_more_motor_vehicles_aircraft_and_accessories_and_aircraft_repair_industry',
  /** MANUFACTURING INDUSTRY TRANSPORTATION EQUIPMENT INDUSTRY OTHER THAN FOUR WHEELED OR MORE MOTOR VEHICLES Other Transportation Equipment Industry Transportation Equipment Industry Not Elsewhere Classified */
  ManufacturingIndustryTransportationEquipmentIndustryOtherThanFourWheeledOrMoreMotorVehiclesOtherTransportationEquipmentIndustryTransportationEquipmentIndustryNotElsewhereClassified = 'manufacturing_industry_transportation_equipment_industry_other_than_four_wheeled_or_more_motor_vehicles_other_transportation_equipment_industry_transportation_equipment_industry_not_elsewhere_classified',
  /** MANUFACTURING INDUSTRY TRANSPORTATION EQUIPMENT INDUSTRY OTHER THAN FOUR WHEELED OR MORE MOTOR VEHICLES Other Transportation Equipment Industry Two and Three Wheeled Motor Vehicle and Component and Accessory Industry */
  ManufacturingIndustryTransportationEquipmentIndustryOtherThanFourWheeledOrMoreMotorVehiclesOtherTransportationEquipmentIndustryTwoAndThreeWheeledMotorVehicleAndComponentAndAccessoryIndustry = 'manufacturing_industry_transportation_equipment_industry_other_than_four_wheeled_or_more_motor_vehicles_other_transportation_equipment_industry_two_and_three_wheeled_motor_vehicle_and_component_and_accessory_industry',
  /** MANUFACTURING INDUSTRY TRANSPORTATION EQUIPMENT INDUSTRY OTHER THAN FOUR WHEELED OR MORE MOTOR VEHICLES Railway Parts and Accessories and Railway Repair Industry */
  ManufacturingIndustryTransportationEquipmentIndustryOtherThanFourWheeledOrMoreMotorVehiclesRailwayPartsAndAccessoriesAndRailwayRepairIndustry = 'manufacturing_industry_transportation_equipment_industry_other_than_four_wheeled_or_more_motor_vehicles_railway_parts_and_accessories_and_railway_repair_industry',
  /** MANUFACTURING INDUSTRY TRANSPORTATION EQUIPMENT INDUSTRY OTHER THAN FOUR WHEELED OR MORE MOTOR VEHICLES Ship and Boat Building and Repair Industry */
  ManufacturingIndustryTransportationEquipmentIndustryOtherThanFourWheeledOrMoreMotorVehiclesShipAndBoatBuildingAndRepairIndustry = 'manufacturing_industry_transportation_equipment_industry_other_than_four_wheeled_or_more_motor_vehicles_ship_and_boat_building_and_repair_industry',
  /** MANUFACTURING INDUSTRY WOOD WOOD PRODUCTS EXCLUDING FURNITURE AND WOVEN GOODS FROM RATTAN BAMBOO AND THE LIKE INDUSTRY Sawmilling and Preservation of Wood Rattan Bamboo and the Like Industry */
  ManufacturingIndustryWoodWoodProductsExcludingFurnitureAndWovenGoodsFromRattanBambooAndTheLikeIndustrySawmillingAndPreservationOfWoodRattanBambooAndTheLikeIndustry = 'manufacturing_industry_wood_wood_products_excluding_furniture_and_woven_goods_from_rattan_bamboo_and_the_like_industry_sawmilling_and_preservation_of_wood_rattan_bamboo_and_the_like_industry',
  /** MANUFACTURING INDUSTRY WOOD WOOD PRODUCTS EXCLUDING FURNITURE AND WOVEN GOODS FROM RATTAN BAMBOO AND THE LIKE INDUSTRY Wood Goods and Woven Goods from Rattan Bamboo and the Like Industry Plywood Veneer and the Like Industry */
  ManufacturingIndustryWoodWoodProductsExcludingFurnitureAndWovenGoodsFromRattanBambooAndTheLikeIndustryWoodGoodsAndWovenGoodsFromRattanBambooAndTheLikeIndustryPlywoodVeneerAndTheLikeIndustry = 'manufacturing_industry_wood_wood_products_excluding_furniture_and_woven_goods_from_rattan_bamboo_and_the_like_industry_wood_goods_and_woven_goods_from_rattan_bamboo_and_the_like_industry_plywood_veneer_and_the_like_industry',
  /** MANUFACTURING INDUSTRY WOOD WOOD PRODUCTS EXCLUDING FURNITURE AND WOVEN GOODS FROM RATTAN BAMBOO AND THE LIKE INDUSTRY Wood Goods and Woven Goods from Rattan Bamboo and the Like Industry Weaving Handicraft Wood Carving and Other Wood Goods Industry */
  ManufacturingIndustryWoodWoodProductsExcludingFurnitureAndWovenGoodsFromRattanBambooAndTheLikeIndustryWoodGoodsAndWovenGoodsFromRattanBambooAndTheLikeIndustryWeavingHandicraftWoodCarvingAndOtherWoodGoodsIndustry = 'manufacturing_industry_wood_wood_products_excluding_furniture_and_woven_goods_from_rattan_bamboo_and_the_like_industry_wood_goods_and_woven_goods_from_rattan_bamboo_and_the_like_industry_weaving_handicraft_wood_carving_and_other_wood_goods_industry',
  /** MINING AND QUARRYING COAL MINING PEAT EXTRACTION COAL GASIFICATION AND COAL BRIQUETTE MANUFACTURING Coal Briquette Manufacturing */
  MiningAndQuarryingCoalMiningPeatExtractionCoalGasificationAndCoalBriquetteManufacturingCoalBriquetteManufacturing = 'mining_and_quarrying_coal_mining_peat_extraction_coal_gasification_and_coal_briquette_manufacturing_coal_briquette_manufacturing',
  /** MINING AND QUARRYING COAL MINING PEAT EXTRACTION COAL GASIFICATION AND COAL BRIQUETTE MANUFACTURING Coal Mining Peat Extraction and Coal Gasification */
  MiningAndQuarryingCoalMiningPeatExtractionCoalGasificationAndCoalBriquetteManufacturingCoalMiningPeatExtractionAndCoalGasification = 'mining_and_quarrying_coal_mining_peat_extraction_coal_gasification_and_coal_briquette_manufacturing_coal_mining_peat_extraction_and_coal_gasification',
  /** MINING AND QUARRYING CRUDE PETROLEUM AND NATURAL GAS MINING AND MINING SERVICES Crude Petroleum and Natural Gas Mining and Geothermal Energy Exploitation Crude Petroleum and Natural Gas Mining and Geothermal Energy Exploitation */
  MiningAndQuarryingCrudePetroleumAndNaturalGasMiningAndMiningServicesCrudePetroleumAndNaturalGasMiningAndGeothermalEnergyExploitationCrudePetroleumAndNaturalGasMiningAndGeothermalEnergyExploitation = 'mining_and_quarrying_crude_petroleum_and_natural_gas_mining_and_mining_services_crude_petroleum_and_natural_gas_mining_and_geothermal_energy_exploitation_crude_petroleum_and_natural_gas_mining_and_geothermal_energy_exploitation',
  /** MINING AND QUARRYING CRUDE PETROLEUM AND NATURAL GAS MINING AND MINING SERVICES Crude Petroleum and Natural Gas Mining and Geothermal Energy Exploitation Crude Petroleum and Natural Gas Mining and Geothermal Energy Exploitation  */
  MiningAndQuarryingCrudePetroleumAndNaturalGasMiningAndMiningServicesCrudePetroleumAndNaturalGasMiningAndGeothermalEnergyExploitationCrudePetroleumAndNaturalGasMiningAndGeothermalEnergyExploitation = 'mining_and_quarrying_crude_petroleum_and_natural_gas_mining_and_mining_services_crude_petroleum_and_natural_gas_mining_and_geothermal_energy_exploitation_crude_petroleum_and_natural_gas_mining_and_geothermal_energy_exploitation_',
  /** MINING AND QUARRYING CRUDE PETROLEUM AND NATURAL GAS MINING AND MINING SERVICES Crude Petroleum and Natural Gas Mining and Geothermal Energy Exploitation Crude Petroleum and Natural Gas Mining and Geothermal Energy Exploitation Crude Petroleum and Natural Gas Mining */
  MiningAndQuarryingCrudePetroleumAndNaturalGasMiningAndMiningServicesCrudePetroleumAndNaturalGasMiningAndGeothermalEnergyExploitationCrudePetroleumAndNaturalGasMiningAndGeothermalEnergyExploitationCrudePetroleumAndNaturalGasMining = 'mining_and_quarrying_crude_petroleum_and_natural_gas_mining_and_mining_services_crude_petroleum_and_natural_gas_mining_and_geothermal_energy_exploitation_crude_petroleum_and_natural_gas_mining_and_geothermal_energy_exploitation_crude_petroleum_and_natural_gas_mining',
  /** MINING AND QUARRYING METAL ORE MINING Iron Sand and Iron Ore Mining */
  MiningAndQuarryingMetalOreMiningIronSandAndIronOreMining = 'mining_and_quarrying_metal_ore_mining_iron_sand_and_iron_ore_mining',
  /** MINING AND QUARRYING METAL ORE MINING Metal and Tin Ore Mining Metal and Tin Ore MiningBauxite Ore Mining */
  MiningAndQuarryingMetalOreMiningMetalAndTinOreMiningMetalAndTinOreMiningbauxiteOreMining = 'mining_and_quarrying_metal_ore_mining_metal_and_tin_ore_mining_metal_and_tin_ore_miningbauxite_ore_mining',
  /** MINING AND QUARRYING METAL ORE MINING Metal and Tin Ore Mining Metal and Tin Ore MiningCopper Ore Mining */
  MiningAndQuarryingMetalOreMiningMetalAndTinOreMiningMetalAndTinOreMiningcopperOreMining = 'mining_and_quarrying_metal_ore_mining_metal_and_tin_ore_mining_metal_and_tin_ore_miningcopper_ore_mining',
  /** MINING AND QUARRYING METAL ORE MINING Metal and Tin Ore Mining Metal and Tin Ore MiningGold and Silver Mining Gold Mining */
  MiningAndQuarryingMetalOreMiningMetalAndTinOreMiningMetalAndTinOreMininggoldAndSilverMiningGoldMining = 'mining_and_quarrying_metal_ore_mining_metal_and_tin_ore_mining_metal_and_tin_ore_mininggold_and_silver_mining_gold_mining',
  /** MINING AND QUARRYING METAL ORE MINING Metal and Tin Ore Mining Metal and Tin Ore MiningGold and Silver Mining Silver Mining */
  MiningAndQuarryingMetalOreMiningMetalAndTinOreMiningMetalAndTinOreMininggoldAndSilverMiningSilverMining = 'mining_and_quarrying_metal_ore_mining_metal_and_tin_ore_mining_metal_and_tin_ore_mininggold_and_silver_mining_silver_mining',
  /** MINING AND QUARRYING METAL ORE MINING Metal and Tin Ore Mining Metal and Tin Ore MiningNickel Ore Mining */
  MiningAndQuarryingMetalOreMiningMetalAndTinOreMiningMetalAndTinOreMiningnickelOreMining = 'mining_and_quarrying_metal_ore_mining_metal_and_tin_ore_mining_metal_and_tin_ore_miningnickel_ore_mining',
  /** MINING AND QUARRYING METAL ORE MINING Metal and Tin Ore Mining Metal and Tin Ore MiningOther Minerals Not Containing Iron Ore */
  MiningAndQuarryingMetalOreMiningMetalAndTinOreMiningMetalAndTinOreMiningotherMineralsNotContainingIronOre = 'mining_and_quarrying_metal_ore_mining_metal_and_tin_ore_mining_metal_and_tin_ore_miningother_minerals_not_containing_iron_ore',
  /** MINING AND QUARRYING METAL ORE MINING Metal and Tin Ore Mining Metal and Tin Ore MiningTin Ore Mining */
  MiningAndQuarryingMetalOreMiningMetalAndTinOreMiningMetalAndTinOreMiningtinOreMining = 'mining_and_quarrying_metal_ore_mining_metal_and_tin_ore_mining_metal_and_tin_ore_miningtin_ore_mining',
  /** MINING AND QUARRYING QUARRYING OF STONE CLAY AND SAND AND MINING OF MINERALS AND CHEMICAL MATERIALS Mining and Quarrying Not Elsewhere Classified Mining of Minerals Chemical Materials and Fertilizers */
  MiningAndQuarryingQuarryingOfStoneClayAndSandAndMiningOfMineralsAndChemicalMaterialsMiningAndQuarryingNotElsewhereClassifiedMiningOfMineralsChemicalMaterialsAndFertilizers = 'mining_and_quarrying_quarrying_of_stone_clay_and_sand_and_mining_of_minerals_and_chemical_materials_mining_and_quarrying_not_elsewhere_classified_mining_of_minerals_chemical_materials_and_fertilizers',
  /** MINING AND QUARRYING QUARRYING OF STONE CLAY AND SAND AND MINING OF MINERALS AND CHEMICAL MATERIALS Mining and Quarrying Not Elsewhere Classified Other Mining and Quarrying */
  MiningAndQuarryingQuarryingOfStoneClayAndSandAndMiningOfMineralsAndChemicalMaterialsMiningAndQuarryingNotElsewhereClassifiedOtherMiningAndQuarrying = 'mining_and_quarrying_quarrying_of_stone_clay_and_sand_and_mining_of_minerals_and_chemical_materials_mining_and_quarrying_not_elsewhere_classified_other_mining_and_quarrying',
  /** MINING AND QUARRYING QUARRYING OF STONE CLAY AND SAND AND MINING OF MINERALS AND CHEMICAL MATERIALS Mining and Quarrying Not Elsewhere Classified Salt Extraction */
  MiningAndQuarryingQuarryingOfStoneClayAndSandAndMiningOfMineralsAndChemicalMaterialsMiningAndQuarryingNotElsewhereClassifiedSaltExtraction = 'mining_and_quarrying_quarrying_of_stone_clay_and_sand_and_mining_of_minerals_and_chemical_materials_mining_and_quarrying_not_elsewhere_classified_salt_extraction',
  /** MINING AND QUARRYING QUARRYING OF STONE CLAY AND SAND AND MINING OF MINERALS AND CHEMICAL MATERIALS Quarrying of Stone Clay and Sand Quarrying of Stone Clay and Sand */
  MiningAndQuarryingQuarryingOfStoneClayAndSandAndMiningOfMineralsAndChemicalMaterialsQuarryingOfStoneClayAndSandQuarryingOfStoneClayAndSand = 'mining_and_quarrying_quarrying_of_stone_clay_and_sand_and_mining_of_minerals_and_chemical_materials_quarrying_of_stone_clay_and_sand_quarrying_of_stone_clay_and_sand',
  /** MINING AND QUARRYING URANIUM AND THORIUM ORE MINING */
  MiningAndQuarryingUraniumAndThoriumOreMining = 'mining_and_quarrying_uranium_and_thorium_ore_mining',
  /** Other Livestock Breeding and Cultivation */
  OtherLivestockBreedingAndCultivation = 'other_livestock_breeding_and_cultivation',
  /** PRIVATE HOUSEHOLDS WITH EMPLOYED PERSONS PRIVATE HOUSEHOLDS WITH EMPLOYED PERSONS Private Households with Employed Persons 4 */
  PrivateHouseholdsWithEmployedPersonsPrivateHouseholdsWithEmployedPersonsPrivateHouseholdsWithEmployedPersons_4 = 'private_households_with_employed_persons_private_households_with_employed_persons_private_households_with_employed_persons_4',
  /** PROCESSING INDUSTRY FOOD AND BEVERAGE INDUSTRY Processing and Preservation of Meat Fish Fruits Vegetables Oils and Fats Vegetable and Animal Edible Oil and Fat Industry Coconut Cooking Oil Industry */
  ProcessingIndustryFoodAndBeverageIndustryProcessingAndPreservationOfMeatFishFruitsVegetablesOilsAndFatsVegetableAndAnimalEdibleOilAndFatIndustryCoconutCookingOilIndustry = 'processing_industry_food_and_beverage_industry_processing_and_preservation_of_meat_fish_fruits_vegetables_oils_and_fats_vegetable_and_animal_edible_oil_and_fat_industry_coconut_cooking_oil_industry',
  /** PROCESSING INDUSTRY TEXTILE INDUSTRY Knitting Industry Knitting Industry */
  ProcessingIndustryTextileIndustryKnittingIndustryKnittingIndustry = 'processing_industry_textile_industry_knitting_industry_knitting_industry',
  /** PUBLIC ADMINISTRATION DEFENCE AND COMPULSORY SOCIAL SECURITY PUBLIC ADMINISTRATION DEFENCE AND COMPULSORY SOCIAL SECURITY 1  Public Administration and Economic and Social Policy */
  PublicAdministrationDefenceAndCompulsorySocialSecurityPublicAdministrationDefenceAndCompulsorySocialSecurity_1PublicAdministrationAndEconomicAndSocialPolicy = 'public_administration_defence_and_compulsory_social_security_public_administration_defence_and_compulsory_social_security_1__public_administration_and_economic_and_social_policy',
  /** PUBLIC ADMINISTRATION DEFENCE AND COMPULSORY SOCIAL SECURITY PUBLIC ADMINISTRATION DEFENCE AND COMPULSORY SOCIAL SECURITY 2  Foreign Affairs Defence and Security */
  PublicAdministrationDefenceAndCompulsorySocialSecurityPublicAdministrationDefenceAndCompulsorySocialSecurity_2ForeignAffairsDefenceAndSecurity = 'public_administration_defence_and_compulsory_social_security_public_administration_defence_and_compulsory_social_security_2__foreign_affairs_defence_and_security',
  /** PUBLIC ADMINISTRATION DEFENCE AND COMPULSORY SOCIAL SECURITY PUBLIC ADMINISTRATION DEFENCE AND COMPULSORY SOCIAL SECURITY 3  Compulsory Social Security */
  PublicAdministrationDefenceAndCompulsorySocialSecurityPublicAdministrationDefenceAndCompulsorySocialSecurity_3CompulsorySocialSecurity = 'public_administration_defence_and_compulsory_social_security_public_administration_defence_and_compulsory_social_security_3__compulsory_social_security',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES COMPUTER AND RELATED ACTIVITIES Data Processing */
  RealEstateRentingAndBusinessActivitiesComputerAndRelatedActivitiesDataProcessing = 'real_estate_renting_and_business_activities_computer_and_related_activities_data_processing',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES COMPUTER AND RELATED ACTIVITIES Database Activities */
  RealEstateRentingAndBusinessActivitiesComputerAndRelatedActivitiesDatabaseActivities = 'real_estate_renting_and_business_activities_computer_and_related_activities_database_activities',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES COMPUTER AND RELATED ACTIVITIES Hardware Consulting Services */
  RealEstateRentingAndBusinessActivitiesComputerAndRelatedActivitiesHardwareConsultingServices = 'real_estate_renting_and_business_activities_computer_and_related_activities_hardware_consulting_services',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES COMPUTER AND RELATED ACTIVITIES Maintenance and Repair of Office Accounting and Computing Machinery */
  RealEstateRentingAndBusinessActivitiesComputerAndRelatedActivitiesMaintenanceAndRepairOfOfficeAccountingAndComputingMachinery = 'real_estate_renting_and_business_activities_computer_and_related_activities_maintenance_and_repair_of_office_accounting_and_computing_machinery',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES COMPUTER AND RELATED ACTIVITIES Other Computer Related Activities */
  RealEstateRentingAndBusinessActivitiesComputerAndRelatedActivitiesOtherComputerRelatedActivities = 'real_estate_renting_and_business_activities_computer_and_related_activities_other_computer_related_activities',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES COMPUTER AND RELATED ACTIVITIES Software Consulting Services */
  RealEstateRentingAndBusinessActivitiesComputerAndRelatedActivitiesSoftwareConsultingServices = 'real_estate_renting_and_business_activities_computer_and_related_activities_software_consulting_services',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES OTHER BUSINESS ACTIVITIES Advertising Services */
  RealEstateRentingAndBusinessActivitiesOtherBusinessActivitiesAdvertisingServices = 'real_estate_renting_and_business_activities_other_business_activities_advertising_services',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES OTHER BUSINESS ACTIVITIES Architectural Consulting Services Engineering and Technical Activities and Analysis and Testing */
  RealEstateRentingAndBusinessActivitiesOtherBusinessActivitiesArchitecturalConsultingServicesEngineeringAndTechnicalActivitiesAndAnalysisAndTesting = 'real_estate_renting_and_business_activities_other_business_activities_architectural_consulting_services_engineering_and_technical_activities_and_analysis_and_testing',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES OTHER BUSINESS ACTIVITIES Legal Accounting and Bookkeeping Tax Consulting Market Research and Business and Management Consulting Services */
  RealEstateRentingAndBusinessActivitiesOtherBusinessActivitiesLegalAccountingAndBookkeepingTaxConsultingMarketResearchAndBusinessAndManagementConsultingServices = 'real_estate_renting_and_business_activities_other_business_activities_legal_accounting_and_bookkeeping_tax_consulting_market_research_and_business_and_management_consulting_services',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES OTHER BUSINESS ACTIVITIES Other Business Services Not Elsewhere Classified */
  RealEstateRentingAndBusinessActivitiesOtherBusinessActivitiesOtherBusinessServicesNotElsewhereClassified = 'real_estate_renting_and_business_activities_other_business_activities_other_business_services_not_elsewhere_classified',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate on a Fee or Contract Basis */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOnAFeeOrContractBasis = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_on_a_fee_or_contract_basis',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Flat Apartment Residential Real Estate */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesFlatApartmentResidentialRealEstate = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_flat_apartment_residential_real_estate',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Medium Large or Luxury Residential Real Estate Type Above 70 */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesMediumLargeOrLuxuryResidentialRealEstateTypeAbove_70 = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_medium_large_or_luxury_residential_real_estate_type_above_70',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Office Building Real Estate */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesOfficeBuildingRealEstate = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_office_building_real_estate',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Other Real Estate */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesOtherRealEstate = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_other_real_estate',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Shop Houses Ruko or Office Houses Rukan Building Real Estate */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesShopHousesRukoOrOfficeHousesRukanBuildingRealEstate = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_shop_houses_ruko_or_office_houses_rukan_building_real_estate',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Shopping Center Real Estate Malls Plazas */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesShoppingCenterRealEstateMallsPlazas = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_shopping_center_real_estate_malls_plazas',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Simple Residential Real Estate Other Than Perumnas Up to Type 21 */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesSimpleResidentialRealEstateOtherThanPerumnasUpToType_21 = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_simple_residential_real_estate_other_than_perumnas_up_to_type_21',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Simple Residential Real Estate Other Than Perumnas Up to Type 22 to 70 */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesSimpleResidentialRealEstateOtherThanPerumnasUpToType_22To_70 = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_simple_residential_real_estate_other_than_perumnas_up_to_type_22_to_70',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Real Estate Owned or Leased and Dormitories Simple Residential Real Estate Perumnas */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesRealEstateOwnedOrLeasedAndDormitoriesSimpleResidentialRealEstatePerumnas = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_real_estate_owned_or_leased_and_dormitories_simple_residential_real_estate_perumnas',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES REAL ESTATE RENTING AND BUSINESS ACTIVITIES Tourism Area and Provision of Water Tourism Facilities Tourism Area */
  RealEstateRentingAndBusinessActivitiesRealEstateRentingAndBusinessActivitiesTourismAreaAndProvisionOfWaterTourismFacilitiesTourismArea = 'real_estate_renting_and_business_activities_real_estate_renting_and_business_activities_tourism_area_and_provision_of_water_tourism_facilities_tourism_area',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Household and Personal Goods Not Elsewhere Classified */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfHouseholdAndPersonalGoodsNotElsewhereClassified = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_household_and_personal_goods_not_elsewhere_classified',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Other Machinery and Equipment Rental of Agricultural Machinery and Equipment */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfOtherMachineryAndEquipmentRentalOfAgriculturalMachineryAndEquipment = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_other_machinery_and_equipment_rental_of_agricultural_machinery_and_equipment',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Other Machinery and Equipment Rental of Construction and Civil Engineering Machinery and Equipment */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfOtherMachineryAndEquipmentRentalOfConstructionAndCivilEngineeringMachineryAndEquipment = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_other_machinery_and_equipment_rental_of_construction_and_civil_engineering_machinery_and_equipment',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Other Machinery and Equipment Rental of Office Machinery and Equipment Including Computers */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfOtherMachineryAndEquipmentRentalOfOfficeMachineryAndEquipmentIncludingComputers = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_other_machinery_and_equipment_rental_of_office_machinery_and_equipment_including_computers',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Other Machinery and Equipment Rental of Other Machinery and Equipment Not Elsewhere Classified */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfOtherMachineryAndEquipmentRentalOfOtherMachineryAndEquipmentNotElsewhereClassified = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_other_machinery_and_equipment_rental_of_other_machinery_and_equipment_not_elsewhere_classified',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Transport Equipment Rental of Air Transport Equipment */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfTransportEquipmentRentalOfAirTransportEquipment = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_transport_equipment_rental_of_air_transport_equipment',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Transport Equipment Rental of Land Transport Equipment */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfTransportEquipmentRentalOfLandTransportEquipment = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_transport_equipment_rental_of_land_transport_equipment',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RENTAL OF MACHINERY AND EQUIPMENT WITHOUT OPERATOR HOUSEHOLD AND PERSONAL GOODS Rental of Transport Equipment Rental of Water Transport Equipment */
  RealEstateRentingAndBusinessActivitiesRentalOfMachineryAndEquipmentWithoutOperatorHouseholdAndPersonalGoodsRentalOfTransportEquipmentRentalOfWaterTransportEquipment = 'real_estate_renting_and_business_activities_rental_of_machinery_and_equipment_without_operator_household_and_personal_goods_rental_of_transport_equipment_rental_of_water_transport_equipment',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RESEARCH AND DEVELOPMENT PRIVATE Research and Development of Natural Sciences and Technology */
  RealEstateRentingAndBusinessActivitiesResearchAndDevelopmentPrivateResearchAndDevelopmentOfNaturalSciencesAndTechnology = 'real_estate_renting_and_business_activities_research_and_development_private_research_and_development_of_natural_sciences_and_technology',
  /** REAL ESTATE RENTING AND BUSINESS ACTIVITIES RESEARCH AND DEVELOPMENT PRIVATE Research and Development of Social Sciences and Humanities */
  RealEstateRentingAndBusinessActivitiesResearchAndDevelopmentPrivateResearchAndDevelopmentOfSocialSciencesAndHumanities = 'real_estate_renting_and_business_activities_research_and_development_private_research_and_development_of_social_sciences_and_humanities',
  /** RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Used Goods */
  RetailTradeExceptCarsAndMotorcyclesRetailTradeOfUsedGoods = 'retail_trade_except_cars_and_motorcycles_retail_trade_of_used_goods',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS AIR TRANSPORT Non Scheduled Air Transport */
  TransportationStorageAndCommunicationsAirTransportNonScheduledAirTransport = 'transportation_storage_and_communications_air_transport_non_scheduled_air_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS AIR TRANSPORT Scheduled Air Transport */
  TransportationStorageAndCommunicationsAirTransportScheduledAirTransport = 'transportation_storage_and_communications_air_transport_scheduled_air_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS AIR TRANSPORT Special Air Transport */
  TransportationStorageAndCommunicationsAirTransportSpecialAirTransport = 'transportation_storage_and_communications_air_transport_special_air_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS LAND TRANSPORT AND TRANSPORT VIA PIPELINES Rail Transport */
  TransportationStorageAndCommunicationsLandTransportAndTransportViaPipelinesRailTransport = 'transportation_storage_and_communications_land_transport_and_transport_via_pipelines_rail_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS LAND TRANSPORT AND TRANSPORT VIA PIPELINES Road Transport Non Scheduled Road Passenger Transport */
  TransportationStorageAndCommunicationsLandTransportAndTransportViaPipelinesRoadTransportNonScheduledRoadPassengerTransport = 'transportation_storage_and_communications_land_transport_and_transport_via_pipelines_road_transport_non_scheduled_road_passenger_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS LAND TRANSPORT AND TRANSPORT VIA PIPELINES Road Transport Road Freight Transport */
  TransportationStorageAndCommunicationsLandTransportAndTransportViaPipelinesRoadTransportRoadFreightTransport = 'transportation_storage_and_communications_land_transport_and_transport_via_pipelines_road_transport_road_freight_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS LAND TRANSPORT AND TRANSPORT VIA PIPELINES Road Transport Scheduled Road Passenger Transport */
  TransportationStorageAndCommunicationsLandTransportAndTransportViaPipelinesRoadTransportScheduledRoadPassengerTransport = 'transportation_storage_and_communications_land_transport_and_transport_via_pipelines_road_transport_scheduled_road_passenger_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS LAND TRANSPORT AND TRANSPORT VIA PIPELINES Transport Via Pipelines */
  TransportationStorageAndCommunicationsLandTransportAndTransportViaPipelinesTransportViaPipelines = 'transportation_storage_and_communications_land_transport_and_transport_via_pipelines_transport_via_pipelines',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS POST AND TELECOMMUNICATIONS National Post Postal Service Units and Courier Services */
  TransportationStorageAndCommunicationsPostAndTelecommunicationsNationalPostPostalServiceUnitsAndCourierServices = 'transportation_storage_and_communications_post_and_telecommunications_national_post_postal_service_units_and_courier_services',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS POST AND TELECOMMUNICATIONS Special Telecommunications */
  TransportationStorageAndCommunicationsPostAndTelecommunicationsSpecialTelecommunications = 'transportation_storage_and_communications_post_and_telecommunications_special_telecommunications',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS POST AND TELECOMMUNICATIONS Telecommunication Networks */
  TransportationStorageAndCommunicationsPostAndTelecommunicationsTelecommunicationNetworks = 'transportation_storage_and_communications_post_and_telecommunications_telecommunication_networks',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS POST AND TELECOMMUNICATIONS Telecommunication Services */
  TransportationStorageAndCommunicationsPostAndTelecommunicationsTelecommunicationServices = 'transportation_storage_and_communications_post_and_telecommunications_telecommunication_services',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS SUPPORT AND AUXILIARY TRANSPORT ACTIVITIES AND TRAVEL AGENCY ACTIVITIES Cargo Handling Services */
  TransportationStorageAndCommunicationsSupportAndAuxiliaryTransportActivitiesAndTravelAgencyActivitiesCargoHandlingServices = 'transportation_storage_and_communications_support_and_auxiliary_transport_activities_and_travel_agency_activities_cargo_handling_services',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS SUPPORT AND AUXILIARY TRANSPORT ACTIVITIES AND TRAVEL AGENCY ACTIVITIES Other Support Transport Activities Except Cargo Handling and Warehousing */
  TransportationStorageAndCommunicationsSupportAndAuxiliaryTransportActivitiesAndTravelAgencyActivitiesOtherSupportTransportActivitiesExceptCargoHandlingAndWarehousing = 'transportation_storage_and_communications_support_and_auxiliary_transport_activities_and_travel_agency_activities_other_support_transport_activities_except_cargo_handling_and_warehousing',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS SUPPORT AND AUXILIARY TRANSPORT ACTIVITIES AND TRAVEL AGENCY ACTIVITIES Shipping and Packaging Services */
  TransportationStorageAndCommunicationsSupportAndAuxiliaryTransportActivitiesAndTravelAgencyActivitiesShippingAndPackagingServices = 'transportation_storage_and_communications_support_and_auxiliary_transport_activities_and_travel_agency_activities_shipping_and_packaging_services',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS SUPPORT AND AUXILIARY TRANSPORT ACTIVITIES AND TRAVEL AGENCY ACTIVITIES Travel Agency Activities */
  TransportationStorageAndCommunicationsSupportAndAuxiliaryTransportActivitiesAndTravelAgencyActivitiesTravelAgencyActivities = 'transportation_storage_and_communications_support_and_auxiliary_transport_activities_and_travel_agency_activities_travel_agency_activities',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS SUPPORT AND AUXILIARY TRANSPORT ACTIVITIES AND TRAVEL AGENCY ACTIVITIES Warehousing Cold Storage Services and Bonded Zone Services */
  TransportationStorageAndCommunicationsSupportAndAuxiliaryTransportActivitiesAndTravelAgencyActivitiesWarehousingColdStorageServicesAndBondedZoneServices = 'transportation_storage_and_communications_support_and_auxiliary_transport_activities_and_travel_agency_activities_warehousing_cold_storage_services_and_bonded_zone_services',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS WATER TRANSPORT Inland Water Transport and Ferry Transport Domestic Ferry Transport */
  TransportationStorageAndCommunicationsWaterTransportInlandWaterTransportAndFerryTransportDomesticFerryTransport = 'transportation_storage_and_communications_water_transport_inland_water_transport_and_ferry_transport_domestic_ferry_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS WATER TRANSPORT Inland Water Transport and Ferry Transport Inland Water Transport */
  TransportationStorageAndCommunicationsWaterTransportInlandWaterTransportAndFerryTransportInlandWaterTransport = 'transportation_storage_and_communications_water_transport_inland_water_transport_and_ferry_transport_inland_water_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS WATER TRANSPORT Sea Transport Domestic Sea Transport */
  TransportationStorageAndCommunicationsWaterTransportSeaTransportDomesticSeaTransport = 'transportation_storage_and_communications_water_transport_sea_transport_domestic_sea_transport',
  /** TRANSPORTATION STORAGE AND COMMUNICATIONS WATER TRANSPORT Sea Transport International Sea Transport */
  TransportationStorageAndCommunicationsWaterTransportSeaTransportInternationalSeaTransport = 'transportation_storage_and_communications_water_transport_sea_transport_international_sea_transport',
  /** WHOLESALE AND RETAIL TRADE CAR MOTORCYCLE SALES AND VEHICLE FUEL RETAIL SALES Car Sales */
  WholesaleAndRetailTradeCarMotorcycleSalesAndVehicleFuelRetailSalesCarSales = 'wholesale_and_retail_trade_car_motorcycle_sales_and_vehicle_fuel_retail_sales_car_sales',
  /** WHOLESALE AND RETAIL TRADE CAR MOTORCYCLE SALES AND VEHICLE FUEL RETAIL SALES Car Spare Parts and Accessories Sales */
  WholesaleAndRetailTradeCarMotorcycleSalesAndVehicleFuelRetailSalesCarSparePartsAndAccessoriesSales = 'wholesale_and_retail_trade_car_motorcycle_sales_and_vehicle_fuel_retail_sales_car_spare_parts_and_accessories_sales',
  /** WHOLESALE AND RETAIL TRADE CAR MOTORCYCLE SALES AND VEHICLE FUEL RETAIL SALES Motorcycle and Spare Parts and Accessories Sales Motorcycle Sales */
  WholesaleAndRetailTradeCarMotorcycleSalesAndVehicleFuelRetailSalesMotorcycleAndSparePartsAndAccessoriesSalesMotorcycleSales = 'wholesale_and_retail_trade_car_motorcycle_sales_and_vehicle_fuel_retail_sales_motorcycle_and_spare_parts_and_accessories_sales_motorcycle_sales',
  /** WHOLESALE AND RETAIL TRADE CAR MOTORCYCLE SALES AND VEHICLE FUEL RETAIL SALES Motorcycle and Spare Parts and Accessories Sales Motorcycle Spare Parts and Accessories Sales */
  WholesaleAndRetailTradeCarMotorcycleSalesAndVehicleFuelRetailSalesMotorcycleAndSparePartsAndAccessoriesSalesMotorcycleSparePartsAndAccessoriesSales = 'wholesale_and_retail_trade_car_motorcycle_sales_and_vehicle_fuel_retail_sales_motorcycle_and_spare_parts_and_accessories_sales_motorcycle_spare_parts_and_accessories_sales',
  /** WHOLESALE AND RETAIL TRADE CAR MOTORCYCLE SALES AND VEHICLE FUEL RETAIL SALES Vehicle Fuel Retail Trade */
  WholesaleAndRetailTradeCarMotorcycleSalesAndVehicleFuelRetailSalesVehicleFuelRetailTrade = 'wholesale_and_retail_trade_car_motorcycle_sales_and_vehicle_fuel_retail_sales_vehicle_fuel_retail_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Clove Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsCloveTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_clove_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Corn Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsCornTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_corn_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Cotton Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsCottonTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_cotton_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Other Domestic Wholesale Trade of Agricultural Products */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsOtherDomesticWholesaleTradeOfAgriculturalProducts = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_other_domestic_wholesale_trade_of_agricultural_products',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Pepper Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsPepperTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_pepper_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Rubber Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsRubberTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_rubber_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Tobacco Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsTobaccoTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_tobacco_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Fishery Products */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfFisheryProducts = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_fishery_products',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Forestry and Hunting Products Other Domestic Wholesale Trade of Forestry and Hunting Products */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfForestryAndHuntingProductsOtherDomesticWholesaleTradeOfForestryAndHuntingProducts = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_forestry_and_hunting_products_other_domestic_wholesale_trade_of_forestry_and_hunting_products',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Forestry and Hunting Products Wood Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfForestryAndHuntingProductsWoodTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_forestry_and_hunting_products_wood_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Live Animals */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfLiveAnimals = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_live_animals',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Other Wholesale Trade of Household Goods */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoOtherWholesaleTradeOfHouseholdGoods = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_other_wholesale_trade_of_household_goods',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Domestic Cigarette Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoDomesticCigaretteTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_domestic_cigarette_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Domestic Coffee Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoDomesticCoffeeTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_domestic_coffee_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Domestic Copra Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoDomesticCopraTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_domestic_copra_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Domestic Rice Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoDomesticRiceTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_domestic_rice_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Domestic Salt Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoDomesticSaltTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_domestic_salt_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Domestic Sugar Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoDomesticSugarTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_domestic_sugar_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Domestic Tea Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoDomesticTeaTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_domestic_tea_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food Beverages and Tobacco Other Domestic Food Beverages and Tobacco Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFoodBeveragesAndTobaccoOtherDomesticFoodBeveragesAndTobaccoTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food_beverages_and_tobacco_other_domestic_food_beverages_and_tobacco_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Textiles Ready made Clothing and Leather */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfTextilesReadyMadeClothingAndLeather = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_textiles_ready_made_clothing_and_leather',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Other Wholesale Domestic Trade Not Elsewhere Classified */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeOtherWholesaleDomesticTradeNotElsewhereClassified = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_other_wholesale_domestic_trade_not_elsewhere_classified',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Other Wholesale Domestic Trade of Newsprint */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeOtherWholesaleDomesticTradeOfNewsprint = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_other_wholesale_domestic_trade_of_newsprint',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale of Machinery Spare Parts and Accessories */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleOfMachinerySparePartsAndAccessories = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_of_machinery_spare_parts_and_accessories',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade Based on Fees or Contracts */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeBasedOnFeesOrContracts = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_based_on_fees_or_contracts',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Domestic Cement Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapDomesticCementTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_domestic_cement_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Domestic Concrete Iron Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapDomesticConcreteIronTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_domestic_concrete_iron_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Other Domestic Construction Materials Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapOtherDomesticConstructionMaterialsTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_other_domestic_construction_materials_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Wholesale Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapWholesaleTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_wholesale_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Wholesale Trade of Gaseous Liquid and Solid Fuels and Similar Products */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapWholesaleTradeOfGaseousLiquidAndSolidFuelsAndSimilarProducts = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_wholesale_trade_of_gaseous_liquid_and_solid_fuels_and_similar_products',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Wholesale Trade of Intermediate Products Used Goods and Unused Waste Scrap Domestic Fertilizer and Pesticide Trade */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapWholesaleTradeOfIntermediateProductsUsedGoodsAndUnusedWasteScrapDomesticFertilizerAndPesticideTrade = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_wholesale_trade_of_intermediate_products_used_goods_and_unused_waste_scrap_domestic_fertilizer_and_pesticide_trade',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT CAR AND MOTORCYCLE TRADE Wholesale Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Wholesale Trade of Metals and Metal Ores */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptCarAndMotorcycleTradeWholesaleTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapWholesaleTradeOfMetalsAndMetalOres = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_car_and_motorcycle_trade_wholesale_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_wholesale_trade_of_metals_and_metal_ores',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT TRADE OF CARS AND MOTORCYCLES Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Domestic Wholesale Trade of Agricultural Products Live Animals Domestic Wholesale Trade of Agricultural Products Per */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptTradeOfCarsAndMotorcyclesDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsDomesticWholesaleTradeOfAgriculturalProductsPer = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_trade_of_cars_and_motorcycles_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_domestic_wholesale_trade_of_agricultural_products_live_animals_domestic_wholesale_trade_of_agricultural_products_per',
  /** WHOLESALE AND RETAIL TRADE DOMESTIC WHOLESALE TRADE OTHER THAN EXPORT AND IMPORT EXCEPT TRADE OF CARS AND MOTORCYCLES Domestic Wholesale Trade of Agricultural Products Live Animals Food Beverages and Tobacco Wholesale Trade of Food */
  WholesaleAndRetailTradeDomesticWholesaleTradeOtherThanExportAndImportExceptTradeOfCarsAndMotorcyclesDomesticWholesaleTradeOfAgriculturalProductsLiveAnimalsFoodBeveragesAndTobaccoWholesaleTradeOfFood = 'wholesale_and_retail_trade_domestic_wholesale_trade_other_than_export_and_import_except_trade_of_cars_and_motorcycles_domestic_wholesale_trade_of_agricultural_products_live_animals_food_beverages_and_tobacco_wholesale_trade_of_food',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade Based on Fees or Contracts */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeBasedOnFeesOrContracts = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_based_on_fees_or_contracts',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Household Goods Export Trade of Textiles Ready made Clothing and Leather Export Trade of Leather */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfHouseholdGoodsExportTradeOfTextilesReadyMadeClothingAndLeatherExportTradeOfLeather = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_household_goods_export_trade_of_textiles_ready_made_clothing_and_leather_export_trade_of_leather',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Household Goods Export Trade of Textiles Ready made Clothing and Leather Export Trade of Ready made Clothing */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfHouseholdGoodsExportTradeOfTextilesReadyMadeClothingAndLeatherExportTradeOfReadyMadeClothing = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_household_goods_export_trade_of_textiles_ready_made_clothing_and_leather_export_trade_of_ready_made_clothing',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Household Goods Export Trade of Textiles Ready made Clothing and Leather Export Trade of Textiles */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfHouseholdGoodsExportTradeOfTextilesReadyMadeClothingAndLeatherExportTradeOfTextiles = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_household_goods_export_trade_of_textiles_ready_made_clothing_and_leather_export_trade_of_textiles',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Export Trade of Construction Materials Except Mining Products Export Trade of Plywood */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapExportTradeOfConstructionMaterialsExceptMiningProductsExportTradeOfPlywood = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_export_trade_of_construction_materials_except_mining_products_export_trade_of_plywood',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Export Trade of Construction Materials Except Mining Products Other Export Trade of Construction Materials Except Mining Products */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapExportTradeOfConstructionMaterialsExceptMiningProductsOtherExportTradeOfConstructionMaterialsExceptMiningProducts = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_export_trade_of_construction_materials_except_mining_products_other_export_trade_of_construction_materials_except_mining_products',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Export Trade of Intermediate Products Used Goods and Unused Waste Scrap */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapExportTradeOfIntermediateProductsUsedGoodsAndUnusedWasteScrap = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_export_trade_of_intermediate_products_used_goods_and_unused_waste_scrap',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Export Trade of Metals and Metal Ores Mining and Quarrying Products Export Trade of Coal */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapExportTradeOfMetalsAndMetalOresMiningAndQuarryingProductsExportTradeOfCoal = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_export_trade_of_metals_and_metal_ores_mining_and_quarrying_products_export_trade_of_coal',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Export Trade of Metals and Metal Ores Mining and Quarrying Products Export Trade of Metal Ores Other Than Tin */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapExportTradeOfMetalsAndMetalOresMiningAndQuarryingProductsExportTradeOfMetalOresOtherThanTin = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_export_trade_of_metals_and_metal_ores_mining_and_quarrying_products_export_trade_of_metal_ores_other_than_tin',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Export Trade of Metals and Metal Ores Mining and Quarrying Products Export Trade of Tin Ore */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapExportTradeOfMetalsAndMetalOresMiningAndQuarryingProductsExportTradeOfTinOre = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_export_trade_of_metals_and_metal_ores_mining_and_quarrying_products_export_trade_of_tin_ore',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Export Trade of Metals and Metal Ores Mining and Quarrying Products Other Export Trade of Metals and Metal Ores Mining and Quarrying Products */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapExportTradeOfMetalsAndMetalOresMiningAndQuarryingProductsOtherExportTradeOfMetalsAndMetalOresMiningAndQuarryingProducts = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_export_trade_of_metals_and_metal_ores_mining_and_quarrying_products_other_export_trade_of_metals_and_metal_ores_mining_and_quarrying_products',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Machinery Spare Parts and Accessories */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfMachinerySparePartsAndAccessories = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_machinery_spare_parts_and_accessories',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Food Beverages and Tobacco Export Trade of Ground Coffee */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfFoodBeveragesAndTobaccoExportTradeOfGroundCoffee = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_food_beverages_and_tobacco_export_trade_of_ground_coffee',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Food Beverages and Tobacco Export Trade of Processed Shrimp */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfFoodBeveragesAndTobaccoExportTradeOfProcessedShrimp = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_food_beverages_and_tobacco_export_trade_of_processed_shrimp',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Food Beverages and Tobacco Export Trade of Tea */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfFoodBeveragesAndTobaccoExportTradeOfTea = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_food_beverages_and_tobacco_export_trade_of_tea',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Food Beverages and Tobacco Export Trade of Tobacco */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfFoodBeveragesAndTobaccoExportTradeOfTobacco = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_food_beverages_and_tobacco_export_trade_of_tobacco',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Food Beverages and Tobacco Other Export Trade of Food and Beverages */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfFoodBeveragesAndTobaccoOtherExportTradeOfFoodAndBeverages = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_food_beverages_and_tobacco_other_export_trade_of_food_and_beverages',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Raw Materials from Agriculture and Live Animals Export Trade of Fishery Products */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsExportTradeOfFisheryProducts = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_raw_materials_from_agriculture_and_live_animals_export_trade_of_fishery_products',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Raw Materials from Agriculture and Live Animals Export Trade of Forestry and Hunting Export Trade of Forest Products Other Than Wood and Rattan */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsExportTradeOfForestryAndHuntingExportTradeOfForestProductsOtherThanWoodAndRattan = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_raw_materials_from_agriculture_and_live_animals_export_trade_of_forestry_and_hunting_export_trade_of_forest_products_other_than_wood_and_rattan',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Raw Materials from Agriculture and Live Animals Export Trade of Forestry and Hunting Export Trade of Rattan */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsExportTradeOfForestryAndHuntingExportTradeOfRattan = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_raw_materials_from_agriculture_and_live_animals_export_trade_of_forestry_and_hunting_export_trade_of_rattan',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Raw Materials from Agriculture and Live Animals Export Trade of Forestry and Hunting Export Trade of Wood */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsExportTradeOfForestryAndHuntingExportTradeOfWood = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_raw_materials_from_agriculture_and_live_animals_export_trade_of_forestry_and_hunting_export_trade_of_wood',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Raw Materials from Agriculture and Live Animals Export Trade of Raw Materials from Agriculture Export Trade of Food Crops and Plantation Products */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsExportTradeOfRawMaterialsFromAgricultureExportTradeOfFoodCropsAndPlantationProducts = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_raw_materials_from_agriculture_and_live_animals_export_trade_of_raw_materials_from_agriculture_export_trade_of_food_crops_and_plantation_products',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Raw Materials from Agriculture and Live Animals Export Trade of Raw Materials from Agriculture Export Trade of Palm Oil Seeds */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsExportTradeOfRawMaterialsFromAgricultureExportTradeOfPalmOilSeeds = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_raw_materials_from_agriculture_and_live_animals_export_trade_of_raw_materials_from_agriculture_export_trade_of_palm_oil_seeds',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Export Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Export Trade of Raw Materials from Agriculture and Live Animals Export Trade of Raw Materials from Agriculture Other Export Trade of Raw Materials from Agriculture */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesExportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsExportTradeOfRawMaterialsFromAgricultureOtherExportTradeOfRawMaterialsFromAgriculture = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_export_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_export_trade_of_raw_materials_from_agriculture_and_live_animals_export_trade_of_raw_materials_from_agriculture_other_export_trade_of_raw_materials_from_agriculture',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Export Trade of Coffee Beans */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryExportTradeOfCoffeeBeans = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_export_trade_of_coffee_beans',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Export Trade of Copra Meal */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryExportTradeOfCopraMeal = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_export_trade_of_copra_meal',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Export Trade of Palm Kernel Oil */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryExportTradeOfPalmKernelOil = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_export_trade_of_palm_kernel_oil',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Export Trade of Pepper */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryExportTradeOfPepper = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_export_trade_of_pepper',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Export Trade of Rubber */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryExportTradeOfRubber = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_export_trade_of_rubber',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Export Trade of Sawn Timber */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryExportTradeOfSawnTimber = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_export_trade_of_sawn_timber',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Export Trade of Tobacco */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryExportTradeOfTobacco = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_export_trade_of_tobacco',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantation and Forestry Other Export Trade of Agricultural Plantation and Forestry Products */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationAndForestryOtherExportTradeOfAgriculturalPlantationAndForestryProducts = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantation_and_forestry_other_export_trade_of_agricultural_plantation_and_forestry_products',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade of Household Goods Other Export Trade of Household Goods */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOfHouseholdGoodsOtherExportTradeOfHouseholdGoods = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_of_household_goods_other_export_trade_of_household_goods',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade Export Trade Not Elsewhere Classified */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeExportTradeNotElsewhereClassified = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_export_trade_not_elsewhere_classified',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade Export Trade of Construction Services */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeExportTradeOfConstructionServices = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_export_trade_of_construction_services',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade Export Trade of Handicrafts from Wood and Rattan */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeExportTradeOfHandicraftsFromWoodAndRattan = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_export_trade_of_handicrafts_from_wood_and_rattan',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade Export Trade of Handicrafts Other Than Wood and Rattan */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeExportTradeOfHandicraftsOtherThanWoodAndRattan = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_export_trade_of_handicrafts_other_than_wood_and_rattan',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade of Semi Finished Goods Export Trade of Processed Animals */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeOfSemiFinishedGoodsExportTradeOfProcessedAnimals = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_of_semi_finished_goods_export_trade_of_processed_animals',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade of Semi Finished Goods Export Trade of Semi Finished Mining Products */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeOfSemiFinishedGoodsExportTradeOfSemiFinishedMiningProducts = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_of_semi_finished_goods_export_trade_of_semi_finished_mining_products',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade of Semi Finished Goods Other Export Trade of Food Ingredients */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeOfSemiFinishedGoodsOtherExportTradeOfFoodIngredients = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_of_semi_finished_goods_other_export_trade_of_food_ingredients',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Export Trade Other Export Trade of Semi Finished Goods Other Export Trade of Semi Finished Goods */
  WholesaleAndRetailTradeExportTradeExceptCarsAndMotorcyclesOtherExportTradeOtherExportTradeOfSemiFinishedGoodsOtherExportTradeOfSemiFinishedGoods = 'wholesale_and_retail_trade_export_trade_except_cars_and_motorcycles_other_export_trade_other_export_trade_of_semi_finished_goods_other_export_trade_of_semi_finished_goods',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT TRADE OF CARS AND MOTORCYCLES Export Trade of Agricultural Raw Materials Live Animals Food Beverages and Tobacco Export Trade of Agricultural Raw Materials and Live Animals Export Trade of Live Animals */
  WholesaleAndRetailTradeExportTradeExceptTradeOfCarsAndMotorcyclesExportTradeOfAgriculturalRawMaterialsLiveAnimalsFoodBeveragesAndTobaccoExportTradeOfAgriculturalRawMaterialsAndLiveAnimalsExportTradeOfLiveAnimals = 'wholesale_and_retail_trade_export_trade_except_trade_of_cars_and_motorcycles_export_trade_of_agricultural_raw_materials_live_animals_food_beverages_and_tobacco_export_trade_of_agricultural_raw_materials_and_live_animals_export_trade_of_live_animals',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT TRADE OF CARS AND MOTORCYCLES Export Trade of Intermediate Products Non Agricultural Products Used Goods and Unused Remains Scrap Export Trade of Gas Liquid and Solid Fuels and Similar Products */
  WholesaleAndRetailTradeExportTradeExceptTradeOfCarsAndMotorcyclesExportTradeOfIntermediateProductsNonAgriculturalProductsUsedGoodsAndUnusedRemainsScrapExportTradeOfGasLiquidAndSolidFuelsAndSimilarProducts = 'wholesale_and_retail_trade_export_trade_except_trade_of_cars_and_motorcycles_export_trade_of_intermediate_products_non_agricultural_products_used_goods_and_unused_remains_scrap_export_trade_of_gas_liquid_and_solid_fuels_and_similar_products',
  /** WHOLESALE AND RETAIL TRADE EXPORT TRADE EXCEPT TRADE OF CARS AND MOTORCYCLES Other Export Trade Export Trade of Semi Finished Goods from Agriculture Plantations and Forestry Export Trade of Crude Palm Oil */
  WholesaleAndRetailTradeExportTradeExceptTradeOfCarsAndMotorcyclesOtherExportTradeExportTradeOfSemiFinishedGoodsFromAgriculturePlantationsAndForestryExportTradeOfCrudePalmOil = 'wholesale_and_retail_trade_export_trade_except_trade_of_cars_and_motorcycles_other_export_trade_export_trade_of_semi_finished_goods_from_agriculture_plantations_and_forestry_export_trade_of_crude_palm_oil',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade Based on Fees or Contracts */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeBasedOnFeesOrContracts = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_based_on_fees_or_contracts',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Household Goods Import Trade of Textiles Ready made Clothing and Leather */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfHouseholdGoodsImportTradeOfTextilesReadyMadeClothingAndLeather = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_household_goods_import_trade_of_textiles_ready_made_clothing_and_leather',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Household Goods Other Import Trade of Household Goods */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfHouseholdGoodsOtherImportTradeOfHouseholdGoods = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_household_goods_other_import_trade_of_household_goods',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Import Trade of Construction Materials Import Trade of Reinforced Concrete Iron */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapImportTradeOfConstructionMaterialsImportTradeOfReinforcedConcreteIron = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_import_trade_of_construction_materials_import_trade_of_reinforced_concrete_iron',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Import Trade of Construction Materials Other Import Trade of Construction Materials */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapImportTradeOfConstructionMaterialsOtherImportTradeOfConstructionMaterials = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_import_trade_of_construction_materials_other_import_trade_of_construction_materials',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Import Trade of Gaseous Liquid and Solid Fuels and Similar Products */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapImportTradeOfGaseousLiquidAndSolidFuelsAndSimilarProducts = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_import_trade_of_gaseous_liquid_and_solid_fuels_and_similar_products',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Import Trade of Intermediate Goods Used Goods and Unused Waste Scrap Import Trade of Fertilizers and Pesticides */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapImportTradeOfIntermediateGoodsUsedGoodsAndUnusedWasteScrapImportTradeOfFertilizersAndPesticides = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_import_trade_of_intermediate_goods_used_goods_and_unused_waste_scrap_import_trade_of_fertilizers_and_pesticides',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Import Trade of Intermediate Goods Used Goods and Unused Waste Scrap Import Trade of Pharmaceuticals */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapImportTradeOfIntermediateGoodsUsedGoodsAndUnusedWasteScrapImportTradeOfPharmaceuticals = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_import_trade_of_intermediate_goods_used_goods_and_unused_waste_scrap_import_trade_of_pharmaceuticals',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Import Trade of Intermediate Goods Used Goods and Unused Waste Scrap Other Import Trade of Intermediate Goods */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapImportTradeOfIntermediateGoodsUsedGoodsAndUnusedWasteScrapOtherImportTradeOfIntermediateGoods = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_import_trade_of_intermediate_goods_used_goods_and_unused_waste_scrap_other_import_trade_of_intermediate_goods',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Intermediate Products Other Than Agricultural Products Used Goods and Unused Waste Scrap Import Trade of Metals and Metal Ores */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfIntermediateProductsOtherThanAgriculturalProductsUsedGoodsAndUnusedWasteScrapImportTradeOfMetalsAndMetalOres = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_intermediate_products_other_than_agricultural_products_used_goods_and_unused_waste_scrap_import_trade_of_metals_and_metal_ores',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Machinery Spare Parts and Accessories Import Trade of Industrial Spare Parts */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfMachinerySparePartsAndAccessoriesImportTradeOfIndustrialSpareParts = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_machinery_spare_parts_and_accessories_import_trade_of_industrial_spare_parts',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Machinery Spare Parts and Accessories Other Import Trade */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfMachinerySparePartsAndAccessoriesOtherImportTrade = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_machinery_spare_parts_and_accessories_other_import_trade',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Import Trade of Food Beverages and Tobacco Import Trade of Rice */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfFoodBeveragesAndTobaccoImportTradeOfRice = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_import_trade_of_food_beverages_and_tobacco_import_trade_of_rice',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Import Trade of Food Beverages and Tobacco Import Trade of Sugar */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfFoodBeveragesAndTobaccoImportTradeOfSugar = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_import_trade_of_food_beverages_and_tobacco_import_trade_of_sugar',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Import Trade of Food Beverages and Tobacco Other Import Trade of Food Beverages and Tobacco */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfFoodBeveragesAndTobaccoOtherImportTradeOfFoodBeveragesAndTobacco = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_import_trade_of_food_beverages_and_tobacco_other_import_trade_of_food_beverages_and_tobacco',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Import Trade of Raw Materials from Agriculture and Live Animals Import Trade of Cloves */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsImportTradeOfCloves = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_import_trade_of_raw_materials_from_agriculture_and_live_animals_import_trade_of_cloves',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Import Trade of Raw Materials from Agriculture and Live Animals Import Trade of Corn */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsImportTradeOfCorn = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_import_trade_of_raw_materials_from_agriculture_and_live_animals_import_trade_of_corn',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Import Trade of Raw Materials from Agriculture and Live Animals Import Trade of Soybeans */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsImportTradeOfSoybeans = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_import_trade_of_raw_materials_from_agriculture_and_live_animals_import_trade_of_soybeans',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Import Trade of Raw Materials from Agriculture Live Animals Food Beverages and Tobacco Import Trade of Raw Materials from Agriculture and Live Animals Import Trade of Wheat Seeds */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesImportTradeOfRawMaterialsFromAgricultureLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfRawMaterialsFromAgricultureAndLiveAnimalsImportTradeOfWheatSeeds = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_import_trade_of_raw_materials_from_agriculture_live_animals_food_beverages_and_tobacco_import_trade_of_raw_materials_from_agriculture_and_live_animals_import_trade_of_wheat_seeds',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT CARS AND MOTORCYCLES Other Import Trade */
  WholesaleAndRetailTradeImportTradeExceptCarsAndMotorcyclesOtherImportTrade = 'wholesale_and_retail_trade_import_trade_except_cars_and_motorcycles_other_import_trade',
  /** WHOLESALE AND RETAIL TRADE IMPORT TRADE EXCEPT TRADE OF CARS AND MOTORCYCLES Import Trade of Agricultural Raw Materials Live Animals Food Beverages and Tobacco Import Trade of Agricultural Raw Materials and Live Animals Import Trade of Agricultural Raw Materials and Other Live Animals */
  WholesaleAndRetailTradeImportTradeExceptTradeOfCarsAndMotorcyclesImportTradeOfAgriculturalRawMaterialsLiveAnimalsFoodBeveragesAndTobaccoImportTradeOfAgriculturalRawMaterialsAndLiveAnimalsImportTradeOfAgriculturalRawMaterialsAndOtherLiveAnimals = 'wholesale_and_retail_trade_import_trade_except_trade_of_cars_and_motorcycles_import_trade_of_agricultural_raw_materials_live_animals_food_beverages_and_tobacco_import_trade_of_agricultural_raw_materials_and_live_animals_import_trade_of_agricultural_raw_materials_and_other_live_animals',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Other Retail Trade Retail Trade by Peddling */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesOtherRetailTradeRetailTradeByPeddling = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_other_retail_trade_retail_trade_by_peddling',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Other Retail Trade Retail Trade Through Media */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesOtherRetailTradeRetailTradeThroughMedia = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_other_retail_trade_retail_trade_through_media',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Other Sidewalk Retail Trade */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesOtherSidewalkRetailTrade = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_other_sidewalk_retail_trade',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Food Beverages or Tobacco Commodities Retail Trade of Food Beverages or Tobacco Commodities from Processing Industry Products */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfFoodBeveragesOrTobaccoCommoditiesRetailTradeOfFoodBeveragesOrTobaccoCommoditiesFromProcessingIndustryProducts = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_food_beverages_or_tobacco_commodities_retail_trade_of_food_beverages_or_tobacco_commodities_from_processing_industry_products',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Food Beverages or Tobacco Commodities Retail Trade of Food Commodities from Agricultural Products */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfFoodBeveragesOrTobaccoCommoditiesRetailTradeOfFoodCommoditiesFromAgriculturalProducts = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_food_beverages_or_tobacco_commodities_retail_trade_of_food_commodities_from_agricultural_products',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Other Retail Trade of Commodities Non */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesOtherRetailTradeOfCommoditiesNon = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_other_retail_trade_of_commodities_non',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Chemicals Pharmaceuticals Cosmetics and Laboratory Equipment */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfChemicalsPharmaceuticalsCosmeticsAndLaboratoryEquipment = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_chemicals_pharmaceuticals_cosmetics_and_laboratory_equipment',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Construction Materials */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfConstructionMaterials = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_construction_materials',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Fuels and Lubricating Oils */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfFuelsAndLubricatingOils = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_fuels_and_lubricating_oils',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Handicrafts Children Toys and Paintings */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfHandicraftsChildrenToysAndPaintings = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_handicrafts_children_toys_and_paintings',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Household Equipment and Kitchenware */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfHouseholdEquipmentAndKitchenware = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_household_equipment_and_kitchenware',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Machinery Except Cars and Motorcycles and Spare Parts Parts Including Transportation Equipment */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfMachineryExceptCarsAndMotorcyclesAndSparePartsPartsIncludingTransportationEquipment = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_machinery_except_cars_and_motorcycles_and_spare_parts_parts_including_transportation_equipment',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Paper Paper Goods Stationery Printed Matter Sports Equipment Musical Instruments Photographic Equipment Computers */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfPaperPaperGoodsStationeryPrintedMatterSportsEquipmentMusicalInstrumentsPhotographicEquipmentComputers = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_paper_paper_goods_stationery_printed_matter_sports_equipment_musical_instruments_photographic_equipment_computers',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Non Food Beverages or Tobacco Commodities Retail Trade of Textiles Ready made Clothing Footwear and Personal Goods */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfNonFoodBeveragesOrTobaccoCommoditiesRetailTradeOfTextilesReadyMadeClothingFootwearAndPersonalGoods = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_non_food_beverages_or_tobacco_commodities_retail_trade_of_textiles_ready_made_clothing_footwear_and_personal_goods',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Various Goods Retail Trade of Various Goods Dominated by Food Beverages and Tobacco */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfVariousGoodsRetailTradeOfVariousGoodsDominatedByFoodBeveragesAndTobacco = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_various_goods_retail_trade_of_various_goods_dominated_by_food_beverages_and_tobacco',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Retail Trade of Various Goods Retail Trade of Various Goods Dominated by Non Food Beverages and Tobacco Goods */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesRetailTradeOfVariousGoodsRetailTradeOfVariousGoodsDominatedByNonFoodBeveragesAndTobaccoGoods = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_retail_trade_of_various_goods_retail_trade_of_various_goods_dominated_by_non_food_beverages_and_tobacco_goods',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Chemicals Pharmaceuticals Cosmetics and Laboratory Equipment */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfChemicalsPharmaceuticalsCosmeticsAndLaboratoryEquipment = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_chemicals_pharmaceuticals_cosmetics_and_laboratory_equipment',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Commodities from Agricultural Products */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfCommoditiesFromAgriculturalProducts = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_commodities_from_agricultural_products',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Fuels and Lubricants */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfFuelsAndLubricants = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_fuels_and_lubricants',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Handicrafts Children Toys and Paintings */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfHandicraftsChildrenToysAndPaintings = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_handicrafts_children_toys_and_paintings',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Household Equipment and Kitchenware */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfHouseholdEquipmentAndKitchenware = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_household_equipment_and_kitchenware',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Paper Paper Goods Stationery Printed Matter Sports Equipment Musical Instruments Photographic Equipment and Computers */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfPaperPaperGoodsStationeryPrintedMatterSportsEquipmentMusicalInstrumentsPhotographicEquipmentAndComputers = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_paper_paper_goods_stationery_printed_matter_sports_equipment_musical_instruments_photographic_equipment_and_computers',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Processed Food and Beverage Commodities */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfProcessedFoodAndBeverageCommodities = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_processed_food_and_beverage_commodities',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Textiles Ready made Clothing Footwear and Personal Goods */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfTextilesReadyMadeClothingFootwearAndPersonalGoods = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_textiles_ready_made_clothing_footwear_and_personal_goods',
  /** WHOLESALE AND RETAIL TRADE RETAIL TRADE EXCEPT CARS AND MOTORCYCLES Sidewalk Retail Trade Sidewalk Retail Trade of Used Goods */
  WholesaleAndRetailTradeRetailTradeExceptCarsAndMotorcyclesSidewalkRetailTradeSidewalkRetailTradeOfUsedGoods = 'wholesale_and_retail_trade_retail_trade_except_cars_and_motorcycles_sidewalk_retail_trade_sidewalk_retail_trade_of_used_goods'
}

export enum Education {
  /** Bachelors or Equivalent Level */
  BachelorsOrEquivalentLevel = 'bachelors_or_equivalent_level',
  /** Doctoral or Equivalent Level */
  DoctoralOrEquivalentLevel = 'doctoral_or_equivalent_level',
  /** Early Childhood Education */
  EarlyChildhoodEducation = 'early_childhood_education',
  /** Lower Secondary Education */
  LowerSecondaryEducation = 'lower_secondary_education',
  /** Masters or Equivalent Level */
  MastersOrEquivalentLevel = 'masters_or_equivalent_level',
  /** No Schooling */
  NoSchooling = 'no_schooling',
  /** Not Elsewhere Classified */
  NotElsewhereClassified = 'not_elsewhere_classified',
  /** Primary Education */
  PrimaryEducation = 'primary_education',
  /** Upper Secondary Education */
  UpperSecondaryEducation = 'upper_secondary_education'
}

export type Employee = BaseModelInterface & InvitationInterface & Node & {
  __typename?: 'Employee';
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  invitable?: Maybe<Node>;
  invitableId?: Maybe<Scalars['ID']['output']>;
  invitableName?: Maybe<Scalars['String']['output']>;
  invitee?: Maybe<Node>;
  inviter?: Maybe<Node>;
  inviterName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  preferences: Scalars['JSON']['output'];
  role?: Maybe<Scalars['String']['output']>;
  status: InvitationStatus;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userStatus?: Maybe<Scalars['String']['output']>;
};

/** The connection type for Employee. */
export type EmployeeConnection = {
  __typename?: 'EmployeeConnection';
  /** A list of edges. */
  edges: Array<EmployeeEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Employee>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Employee. */
export type EmployeeConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Employee. */
export type EmployeeConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type EmployeeEdge = {
  __typename?: 'EmployeeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Employee;
};

export type EnumStringFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Faq = BaseModelInterface & Node & {
  __typename?: 'Faq';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  question?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type FaqAnswerArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FaqQuestionArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Faq. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  /** A list of edges. */
  edges: Array<FaqEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Faq>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Faq. */
export type FaqConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Faq. */
export type FaqConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Faq;
};

export type FaqFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  question?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** Feedback from users & merchants */
export type Feedback = BaseModelInterface & Node & {
  __typename?: 'Feedback';
  category: FeedbackCategory;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  followUpConsent: Scalars['Boolean']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId?: Maybe<Scalars['ID']['output']>;
  number: Scalars['String']['output'];
  preferences: Scalars['JSON']['output'];
  respondAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  responder?: Maybe<User>;
  response?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<User>;
  status: FeedbackStatus;
  systemType: FeedbackSystem;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum FeedbackCategory {
  /** about_cooperation */
  AboutCooperation = 'about_cooperation',
  /** bug_report */
  BugReport = 'bug_report',
  /** complaint */
  Complaint = 'complaint',
  /** other */
  Other = 'other',
  /** suggestion */
  Suggestion = 'suggestion'
}

/** The connection type for Feedback. */
export type FeedbackConnection = {
  __typename?: 'FeedbackConnection';
  /** A list of edges. */
  edges: Array<FeedbackEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Feedback>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Feedback. */
export type FeedbackConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Feedback. */
export type FeedbackConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type FeedbackEdge = {
  __typename?: 'FeedbackEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Feedback;
};

export type FeedbackFilter = {
  category?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchantId?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  respondAt?: InputMaybe<DateFilter>;
  responder?: InputMaybe<UserFilter>;
  responderId?: InputMaybe<IdFilter>;
  sender?: InputMaybe<UserFilter>;
  senderId?: InputMaybe<IdFilter>;
  status?: InputMaybe<EnumStringFilter>;
  systemType?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum FeedbackStatus {
  /** pending */
  Pending = 'pending',
  /** resolved */
  Resolved = 'resolved'
}

export enum FeedbackSystem {
  /** backoffice_web */
  BackofficeWeb = 'backoffice_web',
  /** merchant_web */
  MerchantWeb = 'merchant_web',
  /** mobile */
  Mobile = 'mobile'
}

export type Gamification = BaseModelInterface & Node & {
  __typename?: 'Gamification';
  actions?: Maybe<Array<GamificationAction>>;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  goalPolicy: Scalars['String']['output'];
  goals?: Maybe<Array<GamificationGoal>>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  /** Returns list of loyalty categories */
  loyaltyCategories?: Maybe<UserLoyaltyCategoryConnection>;
  loyaltyCategoryIds?: Maybe<Array<Scalars['ID']['output']>>;
  name: Scalars['String']['output'];
  participatingCount: Scalars['Int']['output'];
  preferences: Scalars['JSON']['output'];
  /** Returns list of progresses */
  progresses?: Maybe<ProgressConnection>;
  startsAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  visible: Scalars['Boolean']['output'];
};


export type GamificationLoyaltyCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoyaltyCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type GamificationProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** An object with an ID. */
export type GamificationAction = {
  createdAt: Scalars['ISO8601DateTime']['output'];
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


/** An object with an ID. */
export type GamificationActionProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationActionChangeCreditScore = BaseModelInterface & GamificationAction & Node & {
  __typename?: 'GamificationActionChangeCreditScore';
  createdAt: Scalars['ISO8601DateTime']['output'];
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationActionChangeCreditScoreProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationActionChangeCryptoWallet = BaseModelInterface & GamificationAction & Node & {
  __typename?: 'GamificationActionChangeCryptoWallet';
  amount?: Maybe<Scalars['Float']['output']>;
  changeType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  type: Scalars['String']['output'];
  typeCode?: Maybe<WalletTransactionTypeCode>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationActionChangeCryptoWalletProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationActionChangeLoyaltyLevel = BaseModelInterface & GamificationAction & Node & {
  __typename?: 'GamificationActionChangeLoyaltyLevel';
  createdAt: Scalars['ISO8601DateTime']['output'];
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationActionChangeLoyaltyLevelProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for Gamification. */
export type GamificationConnection = {
  __typename?: 'GamificationConnection';
  /** A list of edges. */
  edges: Array<GamificationEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Gamification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Gamification. */
export type GamificationConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Gamification. */
export type GamificationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type GamificationEdge = {
  __typename?: 'GamificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Gamification;
};

export type GamificationFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  region?: InputMaybe<RegionFilter>;
  startsAt?: InputMaybe<DateFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  visible?: InputMaybe<BoolFilter>;
};

/** An object with an ID. */
export type GamificationGoal = {
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  currentProgress?: Maybe<Progress>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  repeat: GoalRepeat;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


/** An object with an ID. */
export type GamificationGoalPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};


/** An object with an ID. */
export type GamificationGoalProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationGoalLoanProduct = BaseModelInterface & GamificationGoal & Node & {
  __typename?: 'GamificationGoalLoanProduct';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  currentProgress?: Maybe<Progress>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  productsIds: Array<Scalars['ID']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  repeat: GoalRepeat;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationGoalLoanProductPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};


export type GamificationGoalLoanProductProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationGoalLoanQuality = BaseModelInterface & GamificationGoal & Node & {
  __typename?: 'GamificationGoalLoanQuality';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  currentProgress?: Maybe<Progress>;
  day1: Scalars['Int']['output'];
  day2?: Maybe<Scalars['Int']['output']>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  quality: Scalars['String']['output'];
  repeat: GoalRepeat;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationGoalLoanQualityPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};


export type GamificationGoalLoanQualityProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationGoalMerchant = BaseModelInterface & GamificationGoal & Node & {
  __typename?: 'GamificationGoalMerchant';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  currentProgress?: Maybe<Progress>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  merchantIds: Array<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  repeat: GoalRepeat;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationGoalMerchantPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};


export type GamificationGoalMerchantProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export enum GamificationGoalPolicy {
  /** all */
  All = 'all',
  /** any */
  Any = 'any',
  /** each */
  Each = 'each'
}

export type GamificationGoalPurchaseAmount = BaseModelInterface & GamificationGoal & Node & {
  __typename?: 'GamificationGoalPurchaseAmount';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  currentProgress?: Maybe<Progress>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  repeat: GoalRepeat;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationGoalPurchaseAmountPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};


export type GamificationGoalPurchaseAmountProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationGoalPurchaseCount = BaseModelInterface & GamificationGoal & Node & {
  __typename?: 'GamificationGoalPurchaseCount';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  currentProgress?: Maybe<Progress>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  repeat: GoalRepeat;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationGoalPurchaseCountPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};


export type GamificationGoalPurchaseCountProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationGoalTotalAmount = BaseModelInterface & GamificationGoal & Node & {
  __typename?: 'GamificationGoalTotalAmount';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentCycle: Scalars['String']['output'];
  currentProgress?: Maybe<Progress>;
  gamificationId: Scalars['ID']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nextCycle: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  prevCycle: Scalars['String']['output'];
  prevCycles: Array<Scalars['String']['output']>;
  /** Returns list of progresses */
  progresses: ProgressConnection;
  repeat: GoalRepeat;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type GamificationGoalTotalAmountPrevCyclesArgs = {
  size: Scalars['Int']['input'];
};


export type GamificationGoalTotalAmountProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type GamificationProgressFilter = {
  amount?: InputMaybe<IntFilter>;
  amountChange?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  cycle?: InputMaybe<StringFilter>;
  date?: InputMaybe<DateFilter>;
  gamification?: InputMaybe<GamificationFilter>;
  gamificationId?: InputMaybe<IdFilter>;
  id?: InputMaybe<IdFilter>;
  percentage?: InputMaybe<IntFilter>;
  percentageChange?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum Gender {
  /** female */
  Female = 'female',
  /** male */
  Male = 'male',
  /** undefined */
  Undefined = 'undefined'
}

export enum GoalRepeat {
  /** daily */
  Daily = 'daily',
  /** goal */
  Goal = 'goal',
  /** monthly */
  Monthly = 'monthly',
  /** no_repeat */
  NoRepeat = 'no_repeat',
  /** per_perform */
  PerPerform = 'per_perform',
  /** quarterly */
  Quarterly = 'quarterly',
  /** weekly */
  Weekly = 'weekly',
  /** yearly */
  Yearly = 'yearly'
}

/** GuideType for users & merchants */
export type Guide = BaseModelInterface & Node & {
  __typename?: 'Guide';
  audienceKind: GuideAudienceKind;
  category: GuideCategory;
  createdAt: Scalars['ISO8601DateTime']['output'];
  file?: Maybe<Attachment>;
  filePreview?: Maybe<Image>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  preferences: Scalars['JSON']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum GuideAudienceKind {
  /** admin */
  Admin = 'admin',
  /** everyone */
  Everyone = 'everyone',
  /** merchant */
  Merchant = 'merchant',
  /** user */
  User = 'user'
}

export enum GuideCategory {
  /** article */
  Article = 'article',
  /** faq */
  Faq = 'faq',
  /** file */
  File = 'file',
  /** video */
  Video = 'video'
}

/** The connection type for Guide. */
export type GuideConnection = {
  __typename?: 'GuideConnection';
  /** A list of edges. */
  edges: Array<GuideEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Guide>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Guide. */
export type GuideConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Guide. */
export type GuideConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type GuideEdge = {
  __typename?: 'GuideEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Guide;
};

export type GuideFilter = {
  audienceKind?: InputMaybe<EnumStringFilter>;
  category?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type IdFilter = {
  /** is null ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  /** equals to */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['Int']['input']>;
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['Int']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['ID']['input']>;
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Starts with */
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  __typename?: 'Image';
  attachmentContentType?: Maybe<Scalars['String']['output']>;
  attachmentFileName?: Maybe<Scalars['String']['output']>;
  attachmentFileSize?: Maybe<Scalars['Float']['output']>;
  attachmentId?: Maybe<Scalars['ID']['output']>;
  blob?: Maybe<Blob>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  signedId?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ImageAttachmentFileSizeArgs = {
  unit?: InputMaybe<Scalars['String']['input']>;
};


export type ImageUrlArgs = {
  crop?: InputMaybe<Array<Scalars['Int']['input']>>;
  format?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  resizeAndPad?: InputMaybe<Array<Scalars['Int']['input']>>;
  resizeToFill?: InputMaybe<Array<Scalars['Int']['input']>>;
  resizeToFit?: InputMaybe<Array<Scalars['Int']['input']>>;
  resizeToLimit?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFilter = {
  /** is blank ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  /** equals to */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['Float']['input']>;
  /** in: Matches none of values in giver array */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['Float']['input']>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['Float']['input']>;
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Interest = BaseModelInterface & Node & {
  __typename?: 'Interest';
  amount: Scalars['Float']['output'];
  balance: Scalars['Float']['output'];
  capitalizedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  category: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  dueDate: Scalars['ISO8601Date']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  interestDate: Scalars['ISO8601Date']['output'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['ID']['output']>;
  loan: LoanRegular;
  loanId: Scalars['ID']['output'];
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  principal: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  rate: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

/** The connection type for Interest. */
export type InterestConnection = {
  __typename?: 'InterestConnection';
  /** A list of edges. */
  edges: Array<InterestEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Interest>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Interest. */
export type InterestConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Interest. */
export type InterestConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type InterestEdge = {
  __typename?: 'InterestEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Interest;
};

export type InterestFilter = {
  amount?: InputMaybe<IntFilter>;
  balance?: InputMaybe<IntFilter>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  interestDate?: InputMaybe<DateFilter>;
  loan?: InputMaybe<LoanFilter>;
  loanId?: InputMaybe<IdFilter>;
  principal?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  productId?: InputMaybe<IdFilter>;
  rate?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

export type Invitation = BaseModelInterface & InvitationInterface & Node & {
  __typename?: 'Invitation';
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  invitable?: Maybe<Node>;
  invitee?: Maybe<Node>;
  inviter?: Maybe<Node>;
  preferences: Scalars['JSON']['output'];
  status: InvitationStatus;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type InvitationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  invitableId?: InputMaybe<IdFilter>;
  invitableType?: InputMaybe<StringFilter>;
  inviteeId?: InputMaybe<IdFilter>;
  inviteeType?: InputMaybe<StringFilter>;
  inviterId?: InputMaybe<IdFilter>;
  inviterType?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumStringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** An object with an ID. */
export type InvitationInterface = {
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  invitable?: Maybe<Node>;
  invitee?: Maybe<Node>;
  inviter?: Maybe<Node>;
  preferences: Scalars['JSON']['output'];
  status: InvitationStatus;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum InvitationStatus {
  /** accepted */
  Accepted = 'accepted',
  /** expired */
  Expired = 'expired',
  /** pending */
  Pending = 'pending',
  /** rejected */
  Rejected = 'rejected'
}

export type Invoice = BaseModelInterface & Node & {
  __typename?: 'Invoice';
  amount?: Maybe<Scalars['Float']['output']>;
  balance: Scalars['Float']['output'];
  canRefund: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  initialAmount: Scalars['Float']['output'];
  intAmount: Scalars['Float']['output'];
  loan?: Maybe<LoanInterface>;
  loanId?: Maybe<Scalars['ID']['output']>;
  merchant?: Maybe<Merchant>;
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** loan amount decreased amount diff */
  modifyDiffAmount?: Maybe<Scalars['Float']['output']>;
  number: Scalars['String']['output'];
  overdueDays?: Maybe<Scalars['Int']['output']>;
  paidAmount?: Maybe<Scalars['Float']['output']>;
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  paidInterest: Scalars['Float']['output'];
  paidPenalty: Scalars['Float']['output'];
  payDate: Scalars['ISO8601DateTime']['output'];
  payments: Array<Payment>;
  penAmount: Scalars['Float']['output'];
  penalties: Array<Penalty>;
  percentage?: Maybe<Scalars['Float']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['ID']['output']>;
  /** Region associated with the user */
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  scheduledIntAmount: Scalars['Float']['output'];
  status?: Maybe<InvoiceStatus>;
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['ID']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalPaid?: Maybe<Scalars['Float']['output']>;
  totalPaidAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidPenalty?: Maybe<Scalars['Float']['output']>;
  totalPenalty?: Maybe<Scalars['Float']['output']>;
  totalPendingPenaltyAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidPenalty?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for Invoice. */
export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  /** A list of edges. */
  edges: Array<InvoiceEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Invoice>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Invoice. */
export type InvoiceConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Invoice. */
export type InvoiceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Invoice;
};

export type InvoiceFilter = {
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  loan?: InputMaybe<LoanFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  number?: InputMaybe<StringFilter>;
  overdueDays?: InputMaybe<IntFilter>;
  payDate?: InputMaybe<DateFilter>;
  product?: InputMaybe<ProductFilter>;
  status?: InputMaybe<EnumStringFilter>;
  store?: InputMaybe<StoreFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export enum InvoiceStatus {
  /** cancelled */
  Cancelled = 'cancelled',
  /** overdue */
  Overdue = 'overdue',
  /** paid */
  Paid = 'paid',
  /** pending */
  Pending = 'pending'
}

export enum JobId {
  /** Accounting Finance Officer */
  AccountingFinanceOfficer = 'accounting_finance_officer',
  /** Air Transportation */
  AirTransportation = 'air_transportation',
  /** Architect */
  Architect = 'architect',
  /** Artist */
  Artist = 'artist',
  /** Broker */
  Broker = 'broker',
  /** Consultant Analyst */
  ConsultantAnalyst = 'consultant_analyst',
  /** Craftsmanship Artisan */
  CraftsmanshipArtisan = 'craftsmanship_artisan',
  /** Customer Service */
  CustomerService = 'customer_service',
  /** Designer */
  Designer = 'designer',
  /** Distributor */
  Distributor = 'distributor',
  /** Doctor */
  Doctor = 'doctor',
  /** Educator */
  Educator = 'educator',
  /** Employee */
  Employee = 'employee',
  /** Engineering */
  Engineering = 'engineering',
  /** Entrepreneur */
  Entrepreneur = 'entrepreneur',
  /** Executive */
  Executive = 'executive',
  /** Farmer */
  Farmer = 'farmer',
  /** Fisherman */
  Fisherman = 'fisherman',
  /** General Administration */
  GeneralAdministration = 'general_administration',
  /** Government Official Public Administrator */
  GovernmentOfficialPublicAdministrator = 'government_official_public_administrator',
  /** Hospitality Restaurant */
  HospitalityRestaurant = 'hospitality_restaurant',
  /** Housewife */
  Housewife = 'housewife',
  /** Informal Worker */
  InformalWorker = 'informal_worker',
  /** Information Technology */
  InformationTechnology = 'information_technology',
  /** Laborer */
  Laborer = 'laborer',
  /** Land Transportation */
  LandTransportation = 'land_transportation',
  /** Legal Lawyer Notary */
  LegalLawyerNotary = 'legal_lawyer_notary',
  /** Livestock Farmer */
  LivestockFarmer = 'livestock_farmer',
  /** Maritime Transportation */
  MaritimeTransportation = 'maritime_transportation',
  /** Marketing */
  Marketing = 'marketing',
  /** Medical Personnel */
  MedicalPersonnel = 'medical_personnel',
  /** Military */
  Military = 'military',
  /** Others */
  Others = 'others',
  /** Police Officer */
  PoliceOfficer = 'police_officer',
  /** Researcher */
  Researcher = 'researcher',
  /** Retired */
  Retired = 'retired',
  /** Security */
  Security = 'security',
  /** Student */
  Student = 'student'
}

export type JobStatus = BaseModelInterface & Node & {
  __typename?: 'JobStatus';
  arguments?: Maybe<Scalars['JSON']['output']>;
  at?: Maybe<Scalars['Int']['output']>;
  completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  errorMessage?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  jobId?: Maybe<Scalars['String']['output']>;
  jobType?: Maybe<Scalars['String']['output']>;
  merchantId?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  percentComplete?: Maybe<Scalars['Int']['output']>;
  regionId?: Maybe<Scalars['ID']['output']>;
  result?: Maybe<Scalars['JSON']['output']>;
  startedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status: Scalars['String']['output'];
  storeId?: Maybe<Scalars['ID']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for JobStatus. */
export type JobStatusConnection = {
  __typename?: 'JobStatusConnection';
  /** A list of edges. */
  edges: Array<JobStatusEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<JobStatus>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for JobStatus. */
export type JobStatusConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for JobStatus. */
export type JobStatusConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type JobStatusEdge = {
  __typename?: 'JobStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: JobStatus;
};

export type JobStatusFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  jobId?: InputMaybe<StringFilter>;
  jobType?: InputMaybe<StringFilter>;
  regionId?: InputMaybe<IdFilter>;
  status?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userId?: InputMaybe<IdFilter>;
};

export enum JobTitleId {
  /** MANAGEMENT NON OWNER */
  ManagementNonOwner = 'management_non_owner',
  /** MANAGEMENT OWNER */
  ManagementOwner = 'management_owner',
  /** NON OWNER Authorized Representative of the Board */
  NonOwnerAuthorizedRepresentativeOfTheBoard = 'non_owner_authorized_representative_of_the_board',
  /** NON OWNER Chairman */
  NonOwnerChairman = 'non_owner_chairman',
  /** NON OWNER Commissioner */
  NonOwnerCommissioner = 'non_owner_commissioner',
  /** NON OWNER Director */
  NonOwnerDirector = 'non_owner_director',
  /** NON OWNER General Chairman */
  NonOwnerGeneralChairman = 'non_owner_general_chairman',
  /** NON OWNER Others */
  NonOwnerOthers = 'non_owner_others',
  /** NON OWNER President Commissioner */
  NonOwnerPresidentCommissioner = 'non_owner_president_commissioner',
  /** NON OWNER President Director */
  NonOwnerPresidentDirector = 'non_owner_president_director',
  /** NON OWNER Secretary */
  NonOwnerSecretary = 'non_owner_secretary',
  /** NON OWNER Treasurer */
  NonOwnerTreasurer = 'non_owner_treasurer',
  /** OWNER Authorized Representative of the Board */
  OwnerAuthorizedRepresentativeOfTheBoard = 'owner_authorized_representative_of_the_board',
  /** OWNER Chairman */
  OwnerChairman = 'owner_chairman',
  /** OWNER Commissioner */
  OwnerCommissioner = 'owner_commissioner',
  /** OWNER Director */
  OwnerDirector = 'owner_director',
  /** OWNER General Chairman */
  OwnerGeneralChairman = 'owner_general_chairman',
  /** OWNER Non Management Owner */
  OwnerNonManagementOwner = 'owner_non_management_owner',
  /** OWNER Others */
  OwnerOthers = 'owner_others',
  /** OWNER President Commissioner */
  OwnerPresidentCommissioner = 'owner_president_commissioner',
  /** OWNER President Director */
  OwnerPresidentDirector = 'owner_president_director',
  /** OWNER Public Shareholder */
  OwnerPublicShareholder = 'owner_public_shareholder',
  /** OWNER Secretary */
  OwnerSecretary = 'owner_secretary',
  /** OWNER Treasurer */
  OwnerTreasurer = 'owner_treasurer'
}

export type Kyc = BaseModelInterface & Node & {
  __typename?: 'Kyc';
  bloodType?: Maybe<Scalars['String']['output']>;
  companyAddress?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  compareDetail?: Maybe<Scalars['JSON']['output']>;
  contactRelation?: Maybe<ContactRelation>;
  contactRelationTwo?: Maybe<ContactRelationTwo>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  department?: Maybe<Scalars['String']['output']>;
  education?: Maybe<Education>;
  emergencyContactName?: Maybe<Scalars['String']['output']>;
  emergencyContactNameTwo?: Maybe<Scalars['String']['output']>;
  emergencyContactPhone?: Maybe<Scalars['String']['output']>;
  emergencyContactPhoneTwo?: Maybe<Scalars['String']['output']>;
  emergencyContactSurname?: Maybe<Scalars['String']['output']>;
  emergencyContactSurnameTwo?: Maybe<Scalars['String']['output']>;
  faceRekognition?: Maybe<Scalars['JSON']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  ktp?: Maybe<Image>;
  kycReferenceNo?: Maybe<Scalars['String']['output']>;
  kycVerifyStatus: Scalars['String']['output'];
  maritalStatus?: Maybe<MaritalStatus>;
  nationality?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  numberOfChildren?: Maybe<NumberOfChildren>;
  partnerReferenceNo?: Maybe<Scalars['String']['output']>;
  passportAddress: Scalars['String']['output'];
  passportBack?: Maybe<Image>;
  passportFront?: Maybe<Image>;
  passportImage?: Maybe<Image>;
  placeOfBirth?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  preferences: Scalars['JSON']['output'];
  preferredDebtorCode?: Maybe<DebtorCode>;
  preferredEconomicSector?: Maybe<EconomicSector>;
  preferredHomePostalCode?: Maybe<PostalCode>;
  preferredJobId?: Maybe<JobId>;
  preferredJobTitleId?: Maybe<JobTitleId>;
  preferredLastEducation?: Maybe<LastEducation>;
  preferredPlaceOfBirthPostalCode?: Maybe<PostalCode>;
  reason: Scalars['String']['output'];
  regionId: Scalars['ID']['output'];
  religion?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['JSON']['output']>;
  rtRw?: Maybe<Scalars['String']['output']>;
  salaryIncome?: Maybe<Scalars['Float']['output']>;
  selfie?: Maybe<Image>;
  signature?: Maybe<Image>;
  startingPeriod?: Maybe<StartingPeriod>;
  targetPath?: Maybe<Scalars['String']['output']>;
  thirdPartyCode?: Maybe<Scalars['String']['output']>;
  thirdPartyId?: Maybe<Scalars['String']['output']>;
  thirdPartyStatus?: Maybe<Scalars['String']['output']>;
  transactionId: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export enum KycState {
  AutoRejected = 'AUTO_REJECTED',
  Blacklisted = 'BLACKLISTED',
  ContactInfoApproved = 'CONTACT_INFO_APPROVED',
  EsignatureVerified = 'ESIGNATURE_VERIFIED',
  FaceCompareFailed = 'FACE_COMPARE_FAILED',
  FaceCompareManual = 'FACE_COMPARE_MANUAL',
  FaceCompareVerified = 'FACE_COMPARE_VERIFIED',
  FaceLivenessFailed = 'FACE_LIVENESS_FAILED',
  FaceLivenessVerified = 'FACE_LIVENESS_VERIFIED',
  Freeze = 'FREEZE',
  IdentityFailed = 'IDENTITY_FAILED',
  IdentitySignatureFailed = 'IDENTITY_SIGNATURE_FAILED',
  InfoApproved = 'INFO_APPROVED',
  InPersonSignatureVerified = 'IN_PERSON_SIGNATURE_VERIFIED',
  KycProcessing = 'KYC_PROCESSING',
  KycRejected = 'KYC_REJECTED',
  KycVerified = 'KYC_VERIFIED',
  PassportRejected = 'PASSPORT_REJECTED',
  Pending = 'PENDING',
  Refused = 'REFUSED',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED',
  ReCreditScoreCalculated = 'RE_CREDIT_SCORE_CALCULATED',
  SignatureFailed = 'SIGNATURE_FAILED',
  Verified = 'VERIFIED',
  WaitingSignatureVerification = 'WAITING_SIGNATURE_VERIFICATION',
  WorkingInfoApproved = 'WORKING_INFO_APPROVED'
}

export type Label = {
  __typename?: 'Label';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum LastEducation {
  /** Bachelor Degree S1 */
  BachelorDegreeS1 = 'bachelor_degree_s1',
  /** Diploma 1 D1 */
  Diploma_1D1 = 'diploma_1_d1',
  /** Diploma 2 D2 */
  Diploma_2D2 = 'diploma_2_d2',
  /** Diploma 3 D3 */
  Diploma_3D3 = 'diploma_3_d3',
  /** Doctorate S3 */
  DoctorateS3 = 'doctorate_s3',
  /** Master Degree S2 */
  MasterDegreeS2 = 'master_degree_s2',
  /** No Degree */
  NoDegree = 'no_degree',
  /** Others */
  Others = 'others'
}

export type LoanCar = BaseModelInterface & LoanInterface & Node & {
  __typename?: 'LoanCar';
  amount: Scalars['Float']['output'];
  /** Returns list of Audit logs. */
  audits?: Maybe<Scalars['JSON']['output']>;
  balance: Scalars['Float']['output'];
  bankTransactions?: Maybe<Array<BankTransaction>>;
  canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  category: Category;
  categoryId?: Maybe<Scalars['ID']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  difAmount: Scalars['Float']['output'];
  endDate: Scalars['ISO8601DateTime']['output'];
  expiredAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  externalId?: Maybe<Scalars['ID']['output']>;
  fareAmount: Scalars['Float']['output'];
  firstPaymentDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  initialAmount: Scalars['Float']['output'];
  intAmount: Scalars['Float']['output'];
  interestRate: Scalars['Float']['output'];
  interests: InterestConnection;
  invoices: Array<Invoice>;
  loanModifications: Array<LoanModification>;
  loanOverdueTerms?: Maybe<Scalars['String']['output']>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  merchantUser: MerchantUser;
  merchantUserId?: Maybe<Scalars['ID']['output']>;
  modifiedAmount: Scalars['Float']['output'];
  number: Scalars['String']['output'];
  overdueDays?: Maybe<Scalars['Int']['output']>;
  paidAmount: Scalars['Float']['output'];
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  payMaxAmount?: Maybe<Scalars['Float']['output']>;
  payMinAmount?: Maybe<Scalars['Float']['output']>;
  payments?: Maybe<Array<Payment>>;
  paymentsPerMonth: Scalars['Int']['output'];
  penAmount: Scalars['Float']['output'];
  penalties: Array<Penalty>;
  penaltyRate: Scalars['Float']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  principalBalance: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  quality: LoanQuality;
  refundedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  registerNum: Scalars['String']['output'];
  rejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  salesTransactions: Array<Transaction>;
  serviceName: Scalars['String']['output'];
  settled: Scalars['Boolean']['output'];
  settlementId?: Maybe<Scalars['ID']['output']>;
  startDate: Scalars['ISO8601DateTime']['output'];
  status: LoanStatus;
  store: Store;
  storeContractNumber?: Maybe<Scalars['String']['output']>;
  storeFeePercent: Scalars['Float']['output'];
  storeId: Scalars['ID']['output'];
  taxAmount: Scalars['Float']['output'];
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidPenalty?: Maybe<Scalars['Float']['output']>;
  totalPenalty?: Maybe<Scalars['Float']['output']>;
  totalPendingInvoiceAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidBalance: Scalars['Float']['output'];
  totalUnpaidPenalty?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  v3Payments?: Maybe<Scalars['JSON']['output']>;
  verifications: Array<Verification>;
  walletTransactions?: Maybe<Array<Transaction>>;
};


export type LoanCarInterestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InterestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type LoanFilter = {
  amount?: InputMaybe<IntFilter>;
  balance?: InputMaybe<IntFilter>;
  canceledAt?: InputMaybe<DateFilter>;
  category?: InputMaybe<CategoryFilter>;
  closedAt?: InputMaybe<DateFilter>;
  confirmedAt?: InputMaybe<DateFilter>;
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  endDate?: InputMaybe<DateFilter>;
  expiredAt?: InputMaybe<DateFilter>;
  externalId?: InputMaybe<StringFilter>;
  fareAmount?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  merchantUser?: InputMaybe<MerchantUserFilter>;
  number?: InputMaybe<StringFilter>;
  overdueDays?: InputMaybe<IntFilter>;
  paidAmount?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  productId?: InputMaybe<IdFilter>;
  quality?: InputMaybe<EnumStringFilter>;
  refundedAt?: InputMaybe<DateFilter>;
  registerNum?: InputMaybe<StringFilter>;
  rejectedAt?: InputMaybe<DateFilter>;
  settled?: InputMaybe<BoolFilter>;
  settlementId?: InputMaybe<IdFilter>;
  startDate?: InputMaybe<DateFilter>;
  status?: InputMaybe<EnumStringFilter>;
  store?: InputMaybe<StoreFilter>;
  storeContractNumber?: InputMaybe<StringFilter>;
  storeFeePercent?: InputMaybe<IntFilter>;
  storeId?: InputMaybe<IdFilter>;
  taxAmount?: InputMaybe<IntFilter>;
  totalPenalty?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

/** An object with an ID. */
export type LoanInterface = {
  amount: Scalars['Float']['output'];
  /** Returns list of Audit logs. */
  audits?: Maybe<Scalars['JSON']['output']>;
  balance: Scalars['Float']['output'];
  bankTransactions?: Maybe<Array<BankTransaction>>;
  canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  category: Category;
  categoryId?: Maybe<Scalars['ID']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  difAmount: Scalars['Float']['output'];
  endDate: Scalars['ISO8601DateTime']['output'];
  expiredAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  externalId?: Maybe<Scalars['ID']['output']>;
  fareAmount: Scalars['Float']['output'];
  firstPaymentDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  initialAmount: Scalars['Float']['output'];
  intAmount: Scalars['Float']['output'];
  interestRate: Scalars['Float']['output'];
  interests: InterestConnection;
  invoices: Array<Invoice>;
  loanModifications: Array<LoanModification>;
  loanOverdueTerms?: Maybe<Scalars['String']['output']>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  merchantUser: MerchantUser;
  merchantUserId?: Maybe<Scalars['ID']['output']>;
  modifiedAmount: Scalars['Float']['output'];
  number: Scalars['String']['output'];
  overdueDays?: Maybe<Scalars['Int']['output']>;
  paidAmount: Scalars['Float']['output'];
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  payMaxAmount?: Maybe<Scalars['Float']['output']>;
  payMinAmount?: Maybe<Scalars['Float']['output']>;
  payments?: Maybe<Array<Payment>>;
  paymentsPerMonth: Scalars['Int']['output'];
  penAmount: Scalars['Float']['output'];
  penalties: Array<Penalty>;
  penaltyRate: Scalars['Float']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  principalBalance: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  quality: LoanQuality;
  refundedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  registerNum: Scalars['String']['output'];
  rejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  salesTransactions: Array<Transaction>;
  serviceName: Scalars['String']['output'];
  settled: Scalars['Boolean']['output'];
  settlementId?: Maybe<Scalars['ID']['output']>;
  startDate: Scalars['ISO8601DateTime']['output'];
  status: LoanStatus;
  store: Store;
  storeContractNumber?: Maybe<Scalars['String']['output']>;
  storeFeePercent: Scalars['Float']['output'];
  storeId: Scalars['ID']['output'];
  taxAmount: Scalars['Float']['output'];
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidPenalty?: Maybe<Scalars['Float']['output']>;
  totalPenalty?: Maybe<Scalars['Float']['output']>;
  totalPendingInvoiceAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidBalance: Scalars['Float']['output'];
  totalUnpaidPenalty?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  v3Payments?: Maybe<Scalars['JSON']['output']>;
  verifications: Array<Verification>;
  walletTransactions?: Maybe<Array<Transaction>>;
};


/** An object with an ID. */
export type LoanInterfaceInterestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InterestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for LoanInterface. */
export type LoanInterfaceConnection = {
  __typename?: 'LoanInterfaceConnection';
  /** A list of edges. */
  edges: Array<LoanInterfaceEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<LoanInterface>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for LoanInterface. */
export type LoanInterfaceConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for LoanInterface. */
export type LoanInterfaceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type LoanInterfaceEdge = {
  __typename?: 'LoanInterfaceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LoanInterface;
};

export type LoanLong = BaseModelInterface & LoanInterface & Node & {
  __typename?: 'LoanLong';
  amount: Scalars['Float']['output'];
  /** Returns list of Audit logs. */
  audits?: Maybe<Scalars['JSON']['output']>;
  balance: Scalars['Float']['output'];
  bankTransactions?: Maybe<Array<BankTransaction>>;
  canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  category: Category;
  categoryId?: Maybe<Scalars['ID']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  configureSchedule?: Maybe<Scalars['Boolean']['output']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  difAmount: Scalars['Float']['output'];
  endDate: Scalars['ISO8601DateTime']['output'];
  expiredAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  externalId?: Maybe<Scalars['ID']['output']>;
  fareAmount: Scalars['Float']['output'];
  firstPaymentDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  initialAmount: Scalars['Float']['output'];
  intAmount: Scalars['Float']['output'];
  interestRate: Scalars['Float']['output'];
  interests: InterestConnection;
  invoices: Array<Invoice>;
  loanModifications: Array<LoanModification>;
  loanOverdueTerms?: Maybe<Scalars['String']['output']>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  merchantUser: MerchantUser;
  merchantUserId?: Maybe<Scalars['ID']['output']>;
  modifiedAmount: Scalars['Float']['output'];
  number: Scalars['String']['output'];
  onlineCalcResponse?: Maybe<Scalars['JSON']['output']>;
  overdueDays?: Maybe<Scalars['Int']['output']>;
  paidAmount: Scalars['Float']['output'];
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  payMaxAmount?: Maybe<Scalars['Float']['output']>;
  payMinAmount?: Maybe<Scalars['Float']['output']>;
  payments?: Maybe<Array<Payment>>;
  paymentsPerMonth: Scalars['Int']['output'];
  penAmount: Scalars['Float']['output'];
  penalties: Array<Penalty>;
  penaltyRate: Scalars['Float']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  principalBalance: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  quality: LoanQuality;
  refundedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  registerNum: Scalars['String']['output'];
  rejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  salesTransactions: Array<Transaction>;
  serviceName: Scalars['String']['output'];
  settled: Scalars['Boolean']['output'];
  settlementId?: Maybe<Scalars['ID']['output']>;
  startDate: Scalars['ISO8601DateTime']['output'];
  status: LoanStatus;
  store: Store;
  storeContractNumber?: Maybe<Scalars['String']['output']>;
  storeFeePercent: Scalars['Float']['output'];
  storeId: Scalars['ID']['output'];
  taxAmount: Scalars['Float']['output'];
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidPenalty?: Maybe<Scalars['Float']['output']>;
  totalPenalty?: Maybe<Scalars['Float']['output']>;
  totalPendingInvoiceAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidBalance: Scalars['Float']['output'];
  totalUnpaidPenalty?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  v3Payments?: Maybe<Scalars['JSON']['output']>;
  verifications: Array<Verification>;
  walletTransactions?: Maybe<Array<Transaction>>;
  xacAccount?: Maybe<Scalars['String']['output']>;
  xacClosingBalance?: Maybe<Scalars['Float']['output']>;
  xacCreditAccount?: Maybe<Scalars['String']['output']>;
  xacCreditScore?: Maybe<XacCreditScore>;
  xacFeeAmount?: Maybe<Scalars['Float']['output']>;
  xacInterest?: Maybe<Scalars['Float']['output']>;
  xacMessage?: Maybe<Scalars['String']['output']>;
  xacPenaltyAmount?: Maybe<Scalars['Float']['output']>;
  xacSchedule?: Maybe<Scalars['JSON']['output']>;
  xacStatus?: Maybe<Scalars['String']['output']>;
};


export type LoanLongInterestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InterestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for LoanLong. */
export type LoanLongConnection = {
  __typename?: 'LoanLongConnection';
  /** A list of edges. */
  edges: Array<LoanLongEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<LoanLong>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for LoanLong. */
export type LoanLongConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for LoanLong. */
export type LoanLongConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type LoanLongEdge = {
  __typename?: 'LoanLongEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LoanLong;
};

export type LoanModification = BaseModelInterface & Node & {
  __typename?: 'LoanModification';
  amount: Scalars['Float']['output'];
  /** Returns list of bank transfers */
  bankTransfers: BankTransferConnection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description: Scalars['String']['output'];
  diffAmount?: Maybe<Scalars['Float']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isTransferInitiated?: Maybe<Scalars['Boolean']['output']>;
  loan: LoanRegular;
  loanId: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  modifyType: LoanModificationModifyType;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  settled: Scalars['Boolean']['output'];
  store: Store;
  storeId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
  verification: LoanModificationVerification;
  verificationId?: Maybe<Scalars['ID']['output']>;
  walletTransactions: Array<Transaction>;
  withdrawStatus: LoanModificationWithdrawStatus;
};


export type LoanModificationBankTransfersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BankTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for LoanModification. */
export type LoanModificationConnection = {
  __typename?: 'LoanModificationConnection';
  /** A list of edges. */
  edges: Array<LoanModificationEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<LoanModification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for LoanModification. */
export type LoanModificationConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for LoanModification. */
export type LoanModificationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type LoanModificationEdge = {
  __typename?: 'LoanModificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LoanModification;
};

export enum LoanModificationModifyType {
  /** decrease */
  Decrease = 'decrease',
  /** increase */
  Increase = 'increase',
  /** refund */
  Refund = 'refund'
}

export type LoanModificationVerification = BaseModelInterface & Node & VerificationInterface & {
  __typename?: 'LoanModificationVerification';
  airlineFareAmount?: Maybe<Scalars['Float']['output']>;
  airlinePassengers?: Maybe<Scalars['JSON']['output']>;
  airlineTaxAmount?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  loan?: Maybe<LoanInterface>;
  loanAmount: Scalars['Float']['output'];
  loanId?: Maybe<Scalars['Int']['output']>;
  loanNumber: Scalars['String']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  merchantId?: Maybe<Scalars['ID']['output']>;
  merchantName: Scalars['String']['output'];
  modifyType?: Maybe<LoanModificationModifyType>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  purchaseDate: Scalars['String']['output'];
  requestReason: LoanModifyRequestReason;
  requester?: Maybe<User>;
  respondAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  responder?: Maybe<User>;
  status: VerificationStatus;
  storeName: Scalars['String']['output'];
  target?: Maybe<Node>;
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for LoanModificationVerification. */
export type LoanModificationVerificationConnection = {
  __typename?: 'LoanModificationVerificationConnection';
  /** A list of edges. */
  edges: Array<LoanModificationVerificationEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<LoanModificationVerification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for LoanModificationVerification. */
export type LoanModificationVerificationConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for LoanModificationVerification. */
export type LoanModificationVerificationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type LoanModificationVerificationEdge = {
  __typename?: 'LoanModificationVerificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LoanModificationVerification;
};

export type LoanModificationVerificationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  loanMerchantId?: InputMaybe<StringFilter>;
  loanNumber?: InputMaybe<StringFilter>;
  loanStoreId?: InputMaybe<StringFilter>;
  merchantId?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  requester?: InputMaybe<UserFilter>;
  requesterId?: InputMaybe<IdFilter>;
  respondAt?: InputMaybe<DateFilter>;
  responder?: InputMaybe<UserFilter>;
  responderId?: InputMaybe<IdFilter>;
  status?: InputMaybe<EnumStringFilter>;
  targetId?: InputMaybe<IdFilter>;
  targetType?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum LoanModificationWithdrawStatus {
  /** failed */
  Failed = 'failed',
  /** pending */
  Pending = 'pending',
  /** success */
  Success = 'success'
}

export enum LoanModifyRequestReason {
  /** Defective or Faulty */
  DefectiveOrFaulty = 'defective_or_faulty',
  /** Other */
  Other = 'other',
  /** Product or Service Changed */
  ProductOrServiceChanged = 'product_or_service_changed',
  /** Quantity Mismatch */
  QuantityMismatch = 'quantity_mismatch'
}

export enum LoanQuality {
  /** normal */
  Normal = 'normal',
  /** overdue */
  Overdue = 'overdue'
}

export type LoanRegular = BaseModelInterface & LoanInterface & Node & {
  __typename?: 'LoanRegular';
  amount: Scalars['Float']['output'];
  /** Returns list of Audit logs. */
  audits?: Maybe<Scalars['JSON']['output']>;
  balance: Scalars['Float']['output'];
  bankTransactions?: Maybe<Array<BankTransaction>>;
  canceledAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  category: Category;
  categoryId?: Maybe<Scalars['ID']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  difAmount: Scalars['Float']['output'];
  endDate: Scalars['ISO8601DateTime']['output'];
  expiredAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  externalId?: Maybe<Scalars['ID']['output']>;
  fareAmount: Scalars['Float']['output'];
  firstPaymentDate?: Maybe<Scalars['ISO8601Date']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  initialAmount: Scalars['Float']['output'];
  intAmount: Scalars['Float']['output'];
  interestRate: Scalars['Float']['output'];
  interests: InterestConnection;
  invoices: Array<Invoice>;
  loanModifications: Array<LoanModification>;
  loanOverdueTerms?: Maybe<Scalars['String']['output']>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  merchantUser: MerchantUser;
  merchantUserId?: Maybe<Scalars['ID']['output']>;
  modifiedAmount: Scalars['Float']['output'];
  number: Scalars['String']['output'];
  overdueDays?: Maybe<Scalars['Int']['output']>;
  paidAmount: Scalars['Float']['output'];
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  payMaxAmount?: Maybe<Scalars['Float']['output']>;
  payMinAmount?: Maybe<Scalars['Float']['output']>;
  payments?: Maybe<Array<Payment>>;
  paymentsPerMonth: Scalars['Int']['output'];
  penAmount: Scalars['Float']['output'];
  penalties: Array<Penalty>;
  penaltyRate: Scalars['Float']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  principalBalance: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  quality: LoanQuality;
  refundedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  registerNum: Scalars['String']['output'];
  rejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  salesTransactions: Array<Transaction>;
  serviceName: Scalars['String']['output'];
  settled: Scalars['Boolean']['output'];
  settlementId?: Maybe<Scalars['ID']['output']>;
  startDate: Scalars['ISO8601DateTime']['output'];
  status: LoanStatus;
  store: Store;
  storeContractNumber?: Maybe<Scalars['String']['output']>;
  storeFeePercent: Scalars['Float']['output'];
  storeId: Scalars['ID']['output'];
  taxAmount: Scalars['Float']['output'];
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidAmount?: Maybe<Scalars['Float']['output']>;
  totalPaidPenalty?: Maybe<Scalars['Float']['output']>;
  totalPenalty?: Maybe<Scalars['Float']['output']>;
  totalPendingInvoiceAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidAmount?: Maybe<Scalars['Float']['output']>;
  totalUnpaidBalance: Scalars['Float']['output'];
  totalUnpaidPenalty?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  v3Payments?: Maybe<Scalars['JSON']['output']>;
  verifications: Array<Verification>;
  walletTransactions?: Maybe<Array<Transaction>>;
};


export type LoanRegularInterestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InterestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for LoanRegular. */
export type LoanRegularConnection = {
  __typename?: 'LoanRegularConnection';
  /** A list of edges. */
  edges: Array<LoanRegularEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<LoanRegular>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for LoanRegular. */
export type LoanRegularConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for LoanRegular. */
export type LoanRegularConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type LoanRegularEdge = {
  __typename?: 'LoanRegularEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LoanRegular;
};

export enum LoanStatus {
  Active = 'active',
  Canceled = 'canceled',
  Closed = 'closed',
  Expired = 'expired',
  Pending = 'pending',
  Refunded = 'refunded',
  Rejected = 'rejected',
  SystemRejected = 'system_rejected'
}

export type LoanSummary = {
  __typename?: 'LoanSummary';
  activeLoan?: Maybe<Scalars['Int']['output']>;
  canceledLoan?: Maybe<Scalars['Int']['output']>;
  closedLoan?: Maybe<Scalars['Int']['output']>;
  pendingLoan?: Maybe<Scalars['Int']['output']>;
  totalLoan?: Maybe<Scalars['Int']['output']>;
  totalLoanAmount?: Maybe<Scalars['Float']['output']>;
  totalQualityNormal?: Maybe<Scalars['Int']['output']>;
  totalQualityOverdue?: Maybe<Scalars['Int']['output']>;
};

export type LoyaltyCategoryFilter = {
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  isB2b?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  users?: InputMaybe<UserFilter>;
};

export enum MaritalStatus {
  /** Divorced */
  Divorced = 'divorced',
  /** In Certain Cases */
  InCertainCases = 'in_certain_cases',
  /** Married */
  Married = 'married',
  /** Registered Partnership */
  RegisteredPartnership = 'registered_partnership',
  /** Separated */
  Separated = 'separated',
  /** Single */
  Single = 'single',
  /** Widowed */
  Widowed = 'widowed'
}

/** StorePay Merchant. */
export type Merchant = BaseModelInterface & Node & {
  __typename?: 'Merchant';
  address: Scalars['String']['output'];
  /** Average value of all loans associated with the merchant */
  averageLoansValue?: Maybe<Scalars['Int']['output']>;
  /** List of bank accounts associated with the merchant */
  bankAccounts?: Maybe<AccountConnection>;
  brandName?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  contacts?: Maybe<Array<Scalars['String']['output']>>;
  contract?: Maybe<Attachment>;
  contractCreateDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  contractEndDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  contractExtensionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  contractNumber?: Maybe<Scalars['String']['output']>;
  contractStatus?: Maybe<ContractStatus>;
  contractType?: Maybe<Contract>;
  contractorName?: Maybe<Scalars['String']['output']>;
  /** Count of all active loans associated with the merchant */
  countOfActiveLoans?: Maybe<Scalars['Int']['output']>;
  /** Count of all closed loans associated with the merchant */
  countOfClosedLoans?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  dashboard: Scalars['JSON']['output'];
  description: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  feePercent?: Maybe<Scalars['Float']['output']>;
  /** Return fiat wallet */
  fiatWallet?: Maybe<WalletFiat>;
  icon?: Maybe<Image>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  /** Returns list of invoices */
  invoices?: Maybe<InvoiceConnection>;
  isLockSpc?: Maybe<Scalars['Boolean']['output']>;
  isOnlyPremium?: Maybe<Scalars['Boolean']['output']>;
  isShow?: Maybe<Scalars['Boolean']['output']>;
  /** Count of all loans associated with the merchant by last year */
  lastYearLoansCount?: Maybe<Scalars['Int']['output']>;
  /** List of loan requests associated with the merchant */
  loanModifications?: Maybe<LoanModificationConnection>;
  /** Volume of all loans associated with the merchant */
  loanVolume?: Maybe<Scalars['Float']['output']>;
  /** Returns list of loans */
  loans?: Maybe<LoanInterfaceConnection>;
  /** Count of all loans associated with the merchant by day */
  loansCountByDay?: Maybe<Array<Scalars['JSON']['output']>>;
  logo?: Maybe<Image>;
  merchantSystemFee?: Maybe<Scalars['Float']['output']>;
  /** List of users associated with the store */
  merchantUsers?: Maybe<MerchantUserConnection>;
  name: Scalars['String']['output'];
  /** Total loans net sales amount */
  netSalesAmount?: Maybe<Scalars['Float']['output']>;
  /** Non-performing loans percentage of all loans associated with the merchant */
  nplPercentage?: Maybe<Scalars['Float']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  receivables: Scalars['JSON']['output'];
  /** Region associated with the user */
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  register?: Maybe<Scalars['String']['output']>;
  relatedCategories?: Maybe<Array<Category>>;
  settlementDay?: Maybe<Scalars['Int']['output']>;
  settlementTransferType?: Maybe<SettlementTransferType>;
  settlementType?: Maybe<Scalars['String']['output']>;
  /** Returns list of settlement transactions */
  settlements: TransactionConnection;
  signatureAddress?: Maybe<Scalars['String']['output']>;
  signatureEmail?: Maybe<Scalars['String']['output']>;
  signatureName?: Maybe<Scalars['String']['output']>;
  signaturePhone?: Maybe<Scalars['String']['output']>;
  signaturePosition?: Maybe<Scalars['String']['output']>;
  /** Optional slider images */
  sliderImages?: Maybe<Array<Scalars['JSON']['output']>>;
  socialProfiles?: Maybe<Scalars['JSON']['output']>;
  /** List of stores associated with the merchant */
  stores: StoreConnection;
  /** Sum of all stores associated with the merchant */
  storesCount?: Maybe<Scalars['Int']['output']>;
  /** Sum of amounts of all loans associated with the merchant */
  sumOfLoansAmounts?: Maybe<Scalars['Float']['output']>;
  /** Return a merchant's stats summary by day */
  summaryByDay?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Array<Tag>>;
  timetable?: Maybe<Scalars['String']['output']>;
  /** Count of all loans associated with the merchant */
  totalLoansCount?: Maybe<Scalars['Int']['output']>;
  /** Count of all active and closed loans */
  totalSalesCount?: Maybe<Scalars['Int']['output']>;
  /** Total loans amount */
  totalSalesLoanAmount?: Maybe<Scalars['BigInt']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** List of users associated with the merchant */
  users?: Maybe<UserConnection>;
  webhook?: Maybe<Scalars['String']['output']>;
  /** Count of all loans associated with the merchant by week */
  weeklyLoansCount?: Maybe<Scalars['JSON']['output']>;
  /** Returns list of xac_loans */
  xacLoans?: Maybe<LoanLongConnection>;
  /** Amount of all loans associated with the merchant by year */
  yearlyLoansAmounts?: Maybe<Scalars['JSON']['output']>;
  /** Average amount of all loans associated with the merchant by year */
  yearlyLoansAverageAmounts?: Maybe<Scalars['JSON']['output']>;
  /** Count of all loans associated with the merchant by year */
  yearlyLoansCounts?: Maybe<Scalars['JSON']['output']>;
};


/** StorePay Merchant. */
export type MerchantBankAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantDashboardArgs = {
  dateFrom: Scalars['ISO8601Date']['input'];
  dateTo: Scalars['ISO8601Date']['input'];
};


/** StorePay Merchant. */
export type MerchantInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InvoiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantLoanModificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModificationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantMerchantUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantSettlementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantSummaryByDayArgs = {
  dayOfSummary: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Merchant. */
export type MerchantUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant. */
export type MerchantXacLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for Merchant. */
export type MerchantConnection = {
  __typename?: 'MerchantConnection';
  /** A list of edges. */
  edges: Array<MerchantEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Merchant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Merchant. */
export type MerchantConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Merchant. */
export type MerchantConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type MerchantEdge = {
  __typename?: 'MerchantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Merchant;
};

export type MerchantFilter = {
  categoryId?: InputMaybe<IdFilter>;
  categoryName?: InputMaybe<StringFilter>;
  contractNumber?: InputMaybe<StringFilter>;
  contractStatus?: InputMaybe<EnumStringFilter>;
  contractType?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  feePercent?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  isShow?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  regionId?: InputMaybe<IdFilter>;
  register?: InputMaybe<StringFilter>;
  settlementDay?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type MerchantModifyRequest = BaseModelInterface & Node & VerificationInterface & {
  __typename?: 'MerchantModifyRequest';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  deletingSliderImageIds?: Maybe<Array<Scalars['Int']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  icon?: Maybe<Image>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  logo?: Maybe<Image>;
  merchantId: Scalars['ID']['output'];
  merchantName?: Maybe<Scalars['String']['output']>;
  modifyType?: Maybe<LoanModificationModifyType>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  requestReason?: Maybe<Scalars['String']['output']>;
  requester?: Maybe<User>;
  respondAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  respondReason?: Maybe<Scalars['String']['output']>;
  responder?: Maybe<User>;
  /** Optional slider images */
  sliderImages?: Maybe<Array<Scalars['JSON']['output']>>;
  socialProfiles?: Maybe<Scalars['JSON']['output']>;
  status: VerificationStatus;
  target?: Maybe<Node>;
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type MerchantModifyRequestBackoffice = BaseModelInterface & Node & VerificationInterface & {
  __typename?: 'MerchantModifyRequestBackoffice';
  amount?: Maybe<Scalars['Float']['output']>;
  changeAllStore?: Maybe<Scalars['Boolean']['output']>;
  contract?: Maybe<Attachment>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  feePercent?: Maybe<Scalars['Float']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  merchantId?: Maybe<Scalars['ID']['output']>;
  modifyType?: Maybe<LoanModificationModifyType>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  requestReason?: Maybe<Scalars['String']['output']>;
  requester?: Maybe<User>;
  respondAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  respondReason?: Maybe<Scalars['String']['output']>;
  responder?: Maybe<User>;
  settlementDay?: Maybe<Scalars['Int']['output']>;
  status: VerificationStatus;
  storeIds?: Maybe<Array<Scalars['Int']['output']>>;
  target?: Maybe<Node>;
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for MerchantModifyRequest. */
export type MerchantModifyRequestConnection = {
  __typename?: 'MerchantModifyRequestConnection';
  /** A list of edges. */
  edges: Array<MerchantModifyRequestEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<MerchantModifyRequest>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for MerchantModifyRequest. */
export type MerchantModifyRequestConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for MerchantModifyRequest. */
export type MerchantModifyRequestConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type MerchantModifyRequestEdge = {
  __typename?: 'MerchantModifyRequestEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MerchantModifyRequest;
};

/** StorePay Merchant simplified information */
export type MerchantSimple = {
  __typename?: 'MerchantSimple';
  categories: Array<Label>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  tags: Array<Label>;
};

/** StorePay MerchantUser. */
export type MerchantUser = BaseModelInterface & Node & {
  __typename?: 'MerchantUser';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  lastSignInAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Merchant associated with the merchant user */
  merchant?: Maybe<Merchant>;
  merchantId: Scalars['ID']['output'];
  regionId: Scalars['ID']['output'];
  role: MerchantUserRole;
  status: MerchantUserStatus;
  /** List of stores associated with the merchant user */
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** List of users associated with the merchant user */
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

/** The connection type for MerchantUser. */
export type MerchantUserConnection = {
  __typename?: 'MerchantUserConnection';
  /** A list of edges. */
  edges: Array<MerchantUserEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<MerchantUser>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for MerchantUser. */
export type MerchantUserConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for MerchantUser. */
export type MerchantUserConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type MerchantUserEdge = {
  __typename?: 'MerchantUserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MerchantUser;
};

export type MerchantUserFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  role?: InputMaybe<EnumStringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  store?: InputMaybe<StoreFilter>;
  storeId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

export enum MerchantUserRole {
  /** merchant_manager */
  MerchantManager = 'merchant_manager',
  /** store_manager */
  StoreManager = 'store_manager',
  /** store_seller */
  StoreSeller = 'store_seller'
}

export enum MerchantUserStatus {
  /** active */
  Active = 'active',
  /** inactive */
  Inactive = 'inactive'
}

export type MerchantsCategory = BaseModelInterface & Node & {
  __typename?: 'MerchantsCategory';
  category: Category;
  categoryId: Scalars['ID']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for MerchantsCategory. */
export type MerchantsCategoryConnection = {
  __typename?: 'MerchantsCategoryConnection';
  /** A list of edges. */
  edges: Array<MerchantsCategoryEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<MerchantsCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for MerchantsCategory. */
export type MerchantsCategoryConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for MerchantsCategory. */
export type MerchantsCategoryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type MerchantsCategoryEdge = {
  __typename?: 'MerchantsCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MerchantsCategory;
};

export type MerchantsCategoryFilter = {
  category?: InputMaybe<CategoryFilter>;
  categoryId?: InputMaybe<IdFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum MethodStatus {
  /** active */
  Active = 'active',
  /** inactive */
  Inactive = 'inactive',
  /** test */
  Test = 'test'
}

export enum MetricGranularity {
  /** DAY */
  Day = 'day',
  /** HOUR */
  Hour = 'hour',
  /** MONTH */
  Month = 'month',
  /** WEEK */
  Week = 'week',
  /** YEAR */
  Year = 'year'
}

/** Generic response for a chart / metric */
export type MetricResponse = {
  __typename?: 'MetricResponse';
  label: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type ModificationsFilter = {
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  loan?: InputMaybe<LoanFilter>;
  loanId?: InputMaybe<IdFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  modifyType?: InputMaybe<EnumStringFilter>;
  number?: InputMaybe<StringFilter>;
  settled?: InputMaybe<BoolFilter>;
  store?: InputMaybe<StoreFilter>;
  storeId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
  withdrawStatus?: InputMaybe<EnumStringFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create address for owner */
  addressCreate?: Maybe<Address>;
  /** Accept agreement for user */
  agreementAccept?: Maybe<UserAgreement>;
  /** Create agreement */
  agreementCreate?: Maybe<Agreement>;
  /** Delete agreement */
  agreementDestroy?: Maybe<Scalars['Boolean']['output']>;
  articleArticleCreate?: Maybe<Article>;
  articleArticleDestroy?: Maybe<Scalars['Boolean']['output']>;
  articleArticleUpdate?: Maybe<Article>;
  articleCategoryCreate?: Maybe<ArticleCategory>;
  articleCategoryDestroy?: Maybe<Scalars['Boolean']['output']>;
  articleCategoryUpdate?: Maybe<ArticleCategory>;
  /** Target payment capture by custom_description */
  assignBankTransaction?: Maybe<BankTransaction>;
  assignPayment?: Maybe<Payment>;
  /** Authorize Withdraw from Fiat Wallet */
  authorizeWalletWithdraw?: Maybe<Scalars['Boolean']['output']>;
  /** B2B user create graphql */
  b2bUserCreate?: Maybe<User>;
  /** Create credit score for b2b user */
  b2bUserCreditScoreCreate?: Maybe<CreditScore>;
  /** B2B user update graphql */
  b2bUserUpdate?: Maybe<User>;
  /** Create bank account */
  bankAccountCreate?: Maybe<Account>;
  /** Deactivate bank account */
  bankAccountDeactivate?: Maybe<Account>;
  /** Destroy bank account */
  bankAccountDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Make bank account default */
  bankAccountMakeDefault?: Maybe<Account>;
  /** Update bank account */
  bankAccountUpdate?: Maybe<Account>;
  /** Create bank CGW */
  bankCgwCreate?: Maybe<Cgw>;
  /** Get statements from bank CGW */
  bankCgwStatements?: Maybe<Array<BankTransaction>>;
  /** Update bank CGW */
  bankCgwUpdate?: Maybe<Cgw>;
  /** Target payment capture by custom_description */
  bankTransactionCaptureManual?: Maybe<BankTransaction>;
  /** Simulation of creating transaction by Bank::CGW */
  bankTransactionMock?: Maybe<Scalars['JSON']['output']>;
  bankTransferResend?: Maybe<BankTransfer>;
  /** Update bank */
  bankUpdate?: Maybe<Bank>;
  bannerCreate?: Maybe<Banner>;
  bannerDestroy?: Maybe<Scalars['Boolean']['output']>;
  bannerUpdate?: Maybe<Banner>;
  calculateReportRow?: Maybe<Scalars['Int']['output']>;
  /** capture manual invoice */
  captureManualInvoice?: Maybe<Invoice>;
  /** Create category */
  categoryCreate?: Maybe<Category>;
  /** Create category */
  categorySaveStructure?: Maybe<Scalars['JSON']['output']>;
  /** Update category */
  categoryUpdate?: Maybe<Category>;
  /** Check account name by account number */
  checkAccountName?: Maybe<Scalars['String']['output']>;
  /** Used to confirm email, phone, etc. If the confirmation is successful, it will return the signed id for approved objects */
  confirmableConfirm?: Maybe<Scalars['ID']['output']>;
  /** Resend confirmation email, phone, etc. */
  confirmableResend?: Maybe<Scalars['ID']['output']>;
  createBiometric?: Maybe<Biometric>;
  /** Create document template for contracts */
  createDocumentTemplate: DocumentTemplate;
  /** Create merchant modification request from merchant side */
  createMerchantRequest?: Maybe<MerchantModifyRequest>;
  /** Create merchant modify request from backoffice to backoffice */
  createMerchantRequestBackoffice?: Maybe<MerchantModifyRequestBackoffice>;
  /** Create credit score calculation */
  creditScoreCalculation?: Maybe<CreditScore>;
  /** Create Credit Product */
  creditScoreProductCreate?: Maybe<CreditScoreProduct>;
  creditScoreTransactionCreate?: Maybe<CreditScoreTransaction>;
  creditScoreTransactionCreateFromBackoffice?: Maybe<CreditScoreTransaction>;
  cronCreate?: Maybe<Scalars['Boolean']['output']>;
  /** Delete merchant modification request */
  destroyMerchantRequest?: Maybe<Scalars['Boolean']['output']>;
  /** Create documentation */
  documentationCreate?: Maybe<UserDocumentation>;
  /** Update documentation */
  documentationUpdate?: Maybe<UserDocumentation>;
  /** Start registration flow by email. Returns phone confirmable id. If user already logged in it will add email to user */
  emailRegister: Scalars['ID']['output'];
  /** Create faq */
  faqCreate?: Maybe<Faq>;
  /** Update faq */
  faqUpdate?: Maybe<Faq>;
  /** Create feedback */
  feedbackCreate?: Maybe<Feedback>;
  /** Delete feedback */
  feedbackDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Respond to feedback */
  feedbackRespond?: Maybe<Feedback>;
  fileCreate?: Maybe<SpFile>;
  fileDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Fix loan */
  fixLoan?: Maybe<LoanRegular>;
  gamificationCreate?: Maybe<Gamification>;
  gamificationDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Recalibrate gamification goals */
  gamificationRecalibrate?: Maybe<Scalars['Boolean']['output']>;
  gamificationUpdate?: Maybe<Gamification>;
  generateCheckSum?: Maybe<Scalars['String']['output']>;
  generateLoanReport?: Maybe<JobStatus>;
  /** Create guide */
  guideCreate?: Maybe<Guide>;
  /** Delete guide */
  guideDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Update guide */
  guideUpdate?: Maybe<Guide>;
  /** Delete invitation */
  invitationDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Respond to invitation */
  invitationRespond?: Maybe<Employee>;
  invoiceOverdue?: Maybe<Invoice>;
  invoicePay?: Maybe<Invoice>;
  /** Refund to user */
  invoiceRefundToUser?: Maybe<Invoice>;
  /** Check OTP for Mongolia */
  kycCheckOtpMongolia?: Maybe<Kyc>;
  /** Create KYC request for Indonesia */
  kycCreateForIndonesia?: Maybe<Kyc>;
  /** Create KYC request for Mongolia */
  kycCreateForMongolia?: Maybe<Kyc>;
  /** Create KYC request for Mongolia */
  kycCreateForOtpMongolia?: Maybe<Kyc>;
  /** Create KYC request for Vietnam region */
  kycCreateForVietnam?: Maybe<Scalars['Boolean']['output']>;
  /** Destroy KYC */
  kycDestroy?: Maybe<Kyc>;
  /** AWS face rekognition execute result */
  kycExecuteResult?: Maybe<Kyc>;
  /** AWS face rekognition */
  kycFaceCompare?: Maybe<Kyc>;
  /** This API is provided to perform ID Data Confirmation of the customer. */
  kycLivenessCheckForBss?: Maybe<Kyc>;
  /** Create OTP for Mongolia */
  kycOtpGenerateMongolia?: Maybe<Scalars['JSON']['output']>;
  /** Recreate KYC request for Mongolia */
  kycRecreateForMongolia?: Maybe<Kyc>;
  /** Update KYC request for Indonesia */
  kycUpdateForIndonesia?: Maybe<Kyc>;
  /** Update KYC request for Mongolia */
  kycUpdateForMongolia?: Maybe<Kyc>;
  /** This API is provided to perform ID Data Confirmation of the customer. */
  kycUserIdConfirmationForBss?: Maybe<Kyc>;
  /**
   * This API is provided to input Customer Information. Partner can send customer
   *           information to create / onboard customer. During this step, BSS will also perform some
   *           validations to check the credit score and risk assessment with the data provided from
   *           Partner
   */
  kycUserInformationFormForBss?: Maybe<Kyc>;
  loanActivateWithoutAdvance?: Maybe<LoanInterface>;
  loanCancel?: Maybe<LoanInterface>;
  loanCreate?: Maybe<LoanInterface>;
  /** Create loan by merchant */
  loanCreateByMerchant?: Maybe<LoanInterface>;
  /** Check status from xac */
  loanLongCheck?: Maybe<LoanLong>;
  /** Create verification for loan modification */
  loanModificationVerificationCreate?: Maybe<LoanModificationVerification>;
  /** Delete loan modify request */
  loanModifyRequestDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Create wallet product */
  loanProductCreate?: Maybe<Product>;
  /** Update wallet product */
  loanProductUpdate?: Maybe<Product>;
  loanReject?: Maybe<LoanInterface>;
  loanUpdate?: Maybe<LoanInterface>;
  loanVerify?: Maybe<LoanInterface>;
  /** Withdraw overpaid amount loan modification (refunded, amount decreased) of loan from wallet to bank account */
  loanWithdraw?: Maybe<BankTransfer>;
  loyaltyCategoryCreate?: Maybe<UserLoyaltyCategory>;
  loyaltyCategoryUpdate?: Maybe<UserLoyaltyCategory>;
  /** Create merchant */
  merchantCreate?: Maybe<Merchant>;
  /** Deactivate merchant */
  merchantDeactivate?: Maybe<Merchant>;
  /** Create merchant tag */
  merchantTagCreate?: Maybe<Tag>;
  /** Destroy merchant tag */
  merchantTagDestroy?: Maybe<Scalars['Boolean']['output']>;
  /** Update merchant tag */
  merchantTagUpdate?: Maybe<Tag>;
  /** Update merchant */
  merchantUpdate?: Maybe<Merchant>;
  /** Create merchantUser */
  merchantUserCreate?: Maybe<MerchantUser>;
  /** Invites user as employee */
  merchantUserInvite?: Maybe<Employee>;
  /** Remove merchantUser */
  merchantUserRemove?: Maybe<Scalars['Boolean']['output']>;
  /** Update merchantUser */
  merchantUserUpdate?: Maybe<MerchantUser>;
  /** Start registration flow by phone. Returns phone confirmable id. If user already logged in it will add phone to user */
  mobileRegister: Scalars['ID']['output'];
  /** Change user password */
  passwordChange?: Maybe<User>;
  /** check user's password valid or not */
  passwordCheck?: Maybe<Scalars['Boolean']['output']>;
  /** Password forget mutation */
  passwordForget?: Maybe<Scalars['ID']['output']>;
  /** Set password and create user */
  passwordRegister: Scalars['ID']['output'];
  /** Set password and create user for Indonesia */
  passwordRegisterForIndonesia: Scalars['ID']['output'];
  /** Recreate user password */
  passwordReset?: Maybe<Scalars['ID']['output']>;
  paymentMethodCreate?: Maybe<PaymentMethod>;
  paymentMethodUpdate?: Maybe<PaymentMethod>;
  paymentPaymentCapture?: Maybe<Payment>;
  paymentPaymentCreate?: Maybe<Payment>;
  penaltyUpdate?: Maybe<Penalty>;
  /** Register onesignal subscription id */
  registerSubId?: Maybe<Scalars['ID']['output']>;
  /** Respond to merchant modification request from merchant */
  respondMerchantRequest?: Maybe<MerchantModifyRequest>;
  /** respond for merchant modification from backoffice employee */
  respondMerchantRequestBackoffice?: Maybe<MerchantModifyRequestBackoffice>;
  /** Send OTP by email for Indonesia */
  sendOtpByEmailForIndonesia: Scalars['ID']['output'];
  /** Send OTP by phone for Indonesia */
  sendOtpByPhoneForIndonesia: Scalars['ID']['output'];
  /** Make a transfer of pending settlement to store account */
  settlementTransferToStore?: Maybe<Settlement>;
  /** user signs contract by privy */
  signUserContract?: Maybe<UserContract>;
  spcTransfer?: Maybe<Transaction>;
  /** Update spc rate */
  spcUpdateRate?: Maybe<CurrencyRate>;
  spcWithdraw?: Maybe<Transaction>;
  /** Verification for make special user */
  specialUserVerificationCreate?: Maybe<SpecialUserVerification>;
  /** Create store */
  storeCreate?: Maybe<Store>;
  /** Update store information */
  storeUpdate?: Maybe<Store>;
  /** Update document template */
  updateDocumentTemplate: DocumentTemplate;
  /** Update modification request in merchant side */
  updateMerchantRequest?: Maybe<MerchantModifyRequest>;
  userAssetCreate?: Maybe<Asset>;
  userAssetUpdate?: Maybe<Asset>;
  /** Update verified */
  userChangeState?: Maybe<User>;
  /** Invite user from merchant and user signup. */
  userCreate?: Maybe<Scalars['ID']['output']>;
  /** Delete user info */
  userDelete?: Maybe<User>;
  userDeviceDestroy?: Maybe<Scalars['Boolean']['output']>;
  userDeviceSendOtp?: Maybe<Scalars['ID']['output']>;
  /** Disable user */
  userDisable?: Maybe<User>;
  userFindByPhone?: Maybe<User>;
  /** Generate reference for user */
  userGenerateReference?: Maybe<User>;
  userGetStatements?: Maybe<CreditScore>;
  /** respond for Verification::LoanModification request */
  userLoanModificationRespond?: Maybe<Scalars['ID']['output']>;
  userPinCheck?: Maybe<User>;
  userPinCreate?: Maybe<User>;
  userPinForget?: Maybe<Scalars['ID']['output']>;
  userReCreateStatements?: Maybe<CreditScore>;
  userRequestCreditScore?: Maybe<CreditScore>;
  /** Create user role */
  userRoleAddUser?: Maybe<Array<User>>;
  /** Create user role */
  userRoleCreate?: Maybe<UserRole>;
  /** Delete user role */
  userRoleDelete?: Maybe<Scalars['Boolean']['output']>;
  /** Create user role */
  userRoleRemoveUser?: Maybe<Array<User>>;
  /** Create user role */
  userRoleUpdate?: Maybe<UserRole>;
  /** Update user info */
  userUpdate?: Maybe<User>;
  /** Update user status info */
  userUpdateStatus?: Maybe<User>;
  /** Validate OTP email for Indonesia */
  validateOtpEmailForIndonesia?: Maybe<Scalars['ID']['output']>;
  /** Validate phone OTP  for Indonesia */
  validateOtpForIndonesia?: Maybe<Scalars['ID']['output']>;
  /** destroy Verification */
  verificationDestroy?: Maybe<Verification>;
  /** respond for Verification */
  verificationRespond?: Maybe<Verification>;
  voidPayment?: Maybe<Payment>;
  voidPenalty?: Maybe<Penalty>;
  walletCryptoTransactionCreate?: Maybe<Transaction>;
  walletTransactionChange?: Maybe<Transaction>;
  withdrawFiat?: Maybe<Transaction>;
  /** Create working hour for owner */
  workingHourCreate?: Maybe<WorkingHour>;
  xacCalculate?: Maybe<Scalars['JSON']['output']>;
  xacChangeCreditAccount?: Maybe<LoanLong>;
  xacCreditScoreCreate?: Maybe<XacCreditScore>;
  xacCreditScoreRecalculate?: Maybe<XacCreditScore>;
  xacCreditScoreStatusCheck?: Maybe<XacCreditScore>;
  xacFindOrCreateAccounts?: Maybe<Array<Account>>;
  xacKycCheck?: Maybe<Scalars['JSON']['output']>;
  xacLoanInvoiceCreate?: Maybe<Invoice>;
  /** Re-trigger a MongolBank update for the given ZMS record */
  zmsMongolBankUpdate?: Maybe<Zms>;
};


export type MutationAddressCreateArgs = {
  input: AddressCreateInput;
};


export type MutationAgreementAcceptArgs = {
  input: AgreementAcceptInput;
};


export type MutationAgreementCreateArgs = {
  input: AgreementCreateInput;
};


export type MutationAgreementDestroyArgs = {
  input: AgreementDestroyInput;
};


export type MutationArticleArticleCreateArgs = {
  input: ArticleArticleCreateInput;
};


export type MutationArticleArticleDestroyArgs = {
  input: ArticleArticleDestroyInput;
};


export type MutationArticleArticleUpdateArgs = {
  input: ArticleArticleUpdateInput;
};


export type MutationArticleCategoryCreateArgs = {
  input: ArticleCategoryCreateInput;
};


export type MutationArticleCategoryDestroyArgs = {
  input: ArticleCategoryDestroyInput;
};


export type MutationArticleCategoryUpdateArgs = {
  input: ArticleCategoryUpdateInput;
};


export type MutationAssignBankTransactionArgs = {
  input: AssignBankTransactionInput;
};


export type MutationAssignPaymentArgs = {
  input: AssignPaymentInput;
};


export type MutationAuthorizeWalletWithdrawArgs = {
  input: AuthorizeWalletWithdrawInput;
};


export type MutationB2bUserCreateArgs = {
  input: B2bUserCreateInput;
};


export type MutationB2bUserCreditScoreCreateArgs = {
  input: B2bUserCreditScoreCreateInput;
};


export type MutationB2bUserUpdateArgs = {
  input: B2bUserUpdateInput;
};


export type MutationBankAccountCreateArgs = {
  input: BankAccountCreateInput;
};


export type MutationBankAccountDeactivateArgs = {
  input: BankAccountDeactivateInput;
};


export type MutationBankAccountDestroyArgs = {
  input: BankAccountDestroyInput;
};


export type MutationBankAccountMakeDefaultArgs = {
  input: BankAccountMakeDefaultInput;
};


export type MutationBankAccountUpdateArgs = {
  input: BankAccountUpdateInput;
};


export type MutationBankCgwCreateArgs = {
  input: BankCgwCreateInput;
};


export type MutationBankCgwStatementsArgs = {
  input: BankCgwStatementsInput;
};


export type MutationBankCgwUpdateArgs = {
  input: BankCgwUpdateInput;
};


export type MutationBankTransactionCaptureManualArgs = {
  input: BankTransactionCaptureManualInput;
};


export type MutationBankTransactionMockArgs = {
  input: BankTransactionMockInput;
};


export type MutationBankTransferResendArgs = {
  input: BankTransferResendInput;
};


export type MutationBankUpdateArgs = {
  input: BankUpdateInput;
};


export type MutationBannerCreateArgs = {
  input: BannerCreateInput;
};


export type MutationBannerDestroyArgs = {
  input: BannerDestroyInput;
};


export type MutationBannerUpdateArgs = {
  input: BannerUpdateInput;
};


export type MutationCalculateReportRowArgs = {
  input: CalculateReportRowInput;
};


export type MutationCaptureManualInvoiceArgs = {
  input: CaptureManualInvoiceInput;
};


export type MutationCategoryCreateArgs = {
  input: CategoryCreateInput;
};


export type MutationCategorySaveStructureArgs = {
  input: CategorySaveStructureInput;
};


export type MutationCategoryUpdateArgs = {
  input: CategoryUpdateInput;
};


export type MutationCheckAccountNameArgs = {
  input: CheckAccountNameInput;
};


export type MutationConfirmableConfirmArgs = {
  input: ConfirmableConfirmInput;
};


export type MutationConfirmableResendArgs = {
  input: ConfirmableResendInput;
};


export type MutationCreateBiometricArgs = {
  input: CreateBiometricInput;
};


export type MutationCreateDocumentTemplateArgs = {
  input: CreateDocumentTemplateInput;
};


export type MutationCreateMerchantRequestArgs = {
  input: CreateMerchantRequestInput;
};


export type MutationCreateMerchantRequestBackofficeArgs = {
  input: CreateMerchantRequestBackofficeInput;
};


export type MutationCreditScoreCalculationArgs = {
  input: CreditScoreCalculationInput;
};


export type MutationCreditScoreProductCreateArgs = {
  input: CreditScoreProductCreateInput;
};


export type MutationCreditScoreTransactionCreateArgs = {
  input: CreditScoreTransactionCreateInput;
};


export type MutationCreditScoreTransactionCreateFromBackofficeArgs = {
  input: CreditScoreTransactionCreateFromBackofficeInput;
};


export type MutationCronCreateArgs = {
  input: CronCreateInput;
};


export type MutationDestroyMerchantRequestArgs = {
  input: DestroyMerchantRequestInput;
};


export type MutationDocumentationCreateArgs = {
  input: DocumentationCreateInput;
};


export type MutationDocumentationUpdateArgs = {
  input: DocumentationUpdateInput;
};


export type MutationEmailRegisterArgs = {
  input: EmailRegisterInput;
};


export type MutationFaqCreateArgs = {
  input: FaqCreateInput;
};


export type MutationFaqUpdateArgs = {
  input: FaqUpdateInput;
};


export type MutationFeedbackCreateArgs = {
  input: FeedbackCreateInput;
};


export type MutationFeedbackDestroyArgs = {
  input: FeedbackDestroyInput;
};


export type MutationFeedbackRespondArgs = {
  input: FeedbackRespondInput;
};


export type MutationFileCreateArgs = {
  input: FileCreateInput;
};


export type MutationFileDestroyArgs = {
  input: FileDestroyInput;
};


export type MutationFixLoanArgs = {
  input: FixLoanInput;
};


export type MutationGamificationCreateArgs = {
  input: GamificationCreateInput;
};


export type MutationGamificationDestroyArgs = {
  input: GamificationDestroyInput;
};


export type MutationGamificationRecalibrateArgs = {
  input: GamificationRecalibrateInput;
};


export type MutationGamificationUpdateArgs = {
  input: GamificationUpdateInput;
};


export type MutationGenerateCheckSumArgs = {
  input: GenerateCheckSumInput;
};


export type MutationGenerateLoanReportArgs = {
  input: GenerateLoanReportInput;
};


export type MutationGuideCreateArgs = {
  input: GuideCreateInput;
};


export type MutationGuideDestroyArgs = {
  input: GuideDestroyInput;
};


export type MutationGuideUpdateArgs = {
  input: GuideUpdateInput;
};


export type MutationInvitationDestroyArgs = {
  input: InvitationDestroyInput;
};


export type MutationInvitationRespondArgs = {
  input: InvitationRespondInput;
};


export type MutationInvoiceOverdueArgs = {
  input: InvoiceOverdueInput;
};


export type MutationInvoicePayArgs = {
  input: InvoicePayInput;
};


export type MutationInvoiceRefundToUserArgs = {
  input: InvoiceRefundToUserInput;
};


export type MutationKycCheckOtpMongoliaArgs = {
  input: KycCheckOtpMongoliaInput;
};


export type MutationKycCreateForIndonesiaArgs = {
  input: KycCreateForIndonesiaInput;
};


export type MutationKycCreateForMongoliaArgs = {
  input: KycCreateForMongoliaInput;
};


export type MutationKycCreateForOtpMongoliaArgs = {
  input: KycCreateForOtpMongoliaInput;
};


export type MutationKycCreateForVietnamArgs = {
  input: KycCreateForVietnamInput;
};


export type MutationKycDestroyArgs = {
  input: KycDestroyInput;
};


export type MutationKycExecuteResultArgs = {
  input: KycExecuteResultInput;
};


export type MutationKycFaceCompareArgs = {
  input: KycFaceCompareInput;
};


export type MutationKycLivenessCheckForBssArgs = {
  input: KycLivenessCheckForBssInput;
};


export type MutationKycOtpGenerateMongoliaArgs = {
  input: KycOtpGenerateMongoliaInput;
};


export type MutationKycRecreateForMongoliaArgs = {
  input: KycRecreateForMongoliaInput;
};


export type MutationKycUpdateForIndonesiaArgs = {
  input: KycUpdateForIndonesiaInput;
};


export type MutationKycUpdateForMongoliaArgs = {
  input: KycUpdateForMongoliaInput;
};


export type MutationKycUserIdConfirmationForBssArgs = {
  input: KycUserIdConfirmationForBssInput;
};


export type MutationKycUserInformationFormForBssArgs = {
  input: KycUserInformationFormForBssInput;
};


export type MutationLoanActivateWithoutAdvanceArgs = {
  input: LoanActivateWithoutAdvanceInput;
};


export type MutationLoanCancelArgs = {
  input: LoanCancelInput;
};


export type MutationLoanCreateArgs = {
  input: LoanCreateInput;
};


export type MutationLoanCreateByMerchantArgs = {
  input: LoanCreateByMerchantInput;
};


export type MutationLoanLongCheckArgs = {
  input: LoanLongCheckInput;
};


export type MutationLoanModificationVerificationCreateArgs = {
  input: LoanModificationVerificationCreateInput;
};


export type MutationLoanModifyRequestDestroyArgs = {
  input: LoanModifyRequestDestroyInput;
};


export type MutationLoanProductCreateArgs = {
  input: LoanProductCreateInput;
};


export type MutationLoanProductUpdateArgs = {
  input: LoanProductUpdateInput;
};


export type MutationLoanRejectArgs = {
  input: LoanRejectInput;
};


export type MutationLoanUpdateArgs = {
  input: LoanUpdateInput;
};


export type MutationLoanVerifyArgs = {
  input: LoanVerifyInput;
};


export type MutationLoanWithdrawArgs = {
  input: LoanWithdrawInput;
};


export type MutationLoyaltyCategoryCreateArgs = {
  input: LoyaltyCategoryCreateInput;
};


export type MutationLoyaltyCategoryUpdateArgs = {
  input: LoyaltyCategoryUpdateInput;
};


export type MutationMerchantCreateArgs = {
  input: MerchantCreateInput;
};


export type MutationMerchantDeactivateArgs = {
  input: MerchantDeactivateInput;
};


export type MutationMerchantTagCreateArgs = {
  input: MerchantTagCreateInput;
};


export type MutationMerchantTagDestroyArgs = {
  input: MerchantTagDestroyInput;
};


export type MutationMerchantTagUpdateArgs = {
  input: MerchantTagUpdateInput;
};


export type MutationMerchantUpdateArgs = {
  input: MerchantUpdateInput;
};


export type MutationMerchantUserCreateArgs = {
  input: MerchantUserCreateInput;
};


export type MutationMerchantUserInviteArgs = {
  input: MerchantUserInviteInput;
};


export type MutationMerchantUserRemoveArgs = {
  input: MerchantUserRemoveInput;
};


export type MutationMerchantUserUpdateArgs = {
  input: MerchantUserUpdateInput;
};


export type MutationMobileRegisterArgs = {
  input: MobileRegisterInput;
};


export type MutationPasswordChangeArgs = {
  input: PasswordChangeInput;
};


export type MutationPasswordCheckArgs = {
  input: PasswordCheckInput;
};


export type MutationPasswordForgetArgs = {
  input: PasswordForgetInput;
};


export type MutationPasswordRegisterArgs = {
  input: PasswordRegisterInput;
};


export type MutationPasswordRegisterForIndonesiaArgs = {
  input: PasswordRegisterForIndonesiaInput;
};


export type MutationPasswordResetArgs = {
  input: PasswordResetInput;
};


export type MutationPaymentMethodCreateArgs = {
  input: PaymentMethodCreateInput;
};


export type MutationPaymentMethodUpdateArgs = {
  input: PaymentMethodUpdateInput;
};


export type MutationPaymentPaymentCaptureArgs = {
  input: PaymentPaymentCaptureInput;
};


export type MutationPaymentPaymentCreateArgs = {
  input: PaymentPaymentCreateInput;
};


export type MutationPenaltyUpdateArgs = {
  input: PenaltyUpdateInput;
};


export type MutationRegisterSubIdArgs = {
  input: RegisterSubIdInput;
};


export type MutationRespondMerchantRequestArgs = {
  input: RespondMerchantRequestInput;
};


export type MutationRespondMerchantRequestBackofficeArgs = {
  input: RespondMerchantRequestBackofficeInput;
};


export type MutationSendOtpByEmailForIndonesiaArgs = {
  input: SendOtpByEmailForIndonesiaInput;
};


export type MutationSendOtpByPhoneForIndonesiaArgs = {
  input: SendOtpByPhoneForIndonesiaInput;
};


export type MutationSettlementTransferToStoreArgs = {
  input: SettlementTransferToStoreInput;
};


export type MutationSignUserContractArgs = {
  input: SignUserContractInput;
};


export type MutationSpcTransferArgs = {
  input: SpcTransferInput;
};


export type MutationSpcUpdateRateArgs = {
  input: SpcUpdateRateInput;
};


export type MutationSpcWithdrawArgs = {
  input: SpcWithdrawInput;
};


export type MutationSpecialUserVerificationCreateArgs = {
  input: SpecialUserVerificationCreateInput;
};


export type MutationStoreCreateArgs = {
  input: StoreCreateInput;
};


export type MutationStoreUpdateArgs = {
  input: StoreUpdateInput;
};


export type MutationUpdateDocumentTemplateArgs = {
  input: UpdateDocumentTemplateInput;
};


export type MutationUpdateMerchantRequestArgs = {
  input: UpdateMerchantRequestInput;
};


export type MutationUserAssetCreateArgs = {
  input: UserAssetCreateInput;
};


export type MutationUserAssetUpdateArgs = {
  input: UserAssetUpdateInput;
};


export type MutationUserChangeStateArgs = {
  input: UserChangeStateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  input: UserDeleteInput;
};


export type MutationUserDeviceDestroyArgs = {
  input: UserDeviceDestroyInput;
};


export type MutationUserDeviceSendOtpArgs = {
  input: UserDeviceSendOtpInput;
};


export type MutationUserDisableArgs = {
  input: UserDisableInput;
};


export type MutationUserFindByPhoneArgs = {
  input: UserFindByPhoneInput;
};


export type MutationUserGenerateReferenceArgs = {
  input: UserGenerateReferenceInput;
};


export type MutationUserGetStatementsArgs = {
  input: UserGetStatementsInput;
};


export type MutationUserLoanModificationRespondArgs = {
  input: UserLoanModificationRespondInput;
};


export type MutationUserPinCheckArgs = {
  input: UserPinCheckInput;
};


export type MutationUserPinCreateArgs = {
  input: UserPinCreateInput;
};


export type MutationUserPinForgetArgs = {
  input: UserPinForgetInput;
};


export type MutationUserReCreateStatementsArgs = {
  input: UserReCreateStatementsInput;
};


export type MutationUserRequestCreditScoreArgs = {
  input: UserRequestCreditScoreInput;
};


export type MutationUserRoleAddUserArgs = {
  input: UserRoleAddUserInput;
};


export type MutationUserRoleCreateArgs = {
  input: UserRoleCreateInput;
};


export type MutationUserRoleDeleteArgs = {
  input: UserRoleDeleteInput;
};


export type MutationUserRoleRemoveUserArgs = {
  input: UserRoleRemoveUserInput;
};


export type MutationUserRoleUpdateArgs = {
  input: UserRoleUpdateInput;
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};


export type MutationUserUpdateStatusArgs = {
  input: UserUpdateStatusInput;
};


export type MutationValidateOtpEmailForIndonesiaArgs = {
  input: ValidateOtpEmailForIndonesiaInput;
};


export type MutationValidateOtpForIndonesiaArgs = {
  input: ValidateOtpForIndonesiaInput;
};


export type MutationVerificationDestroyArgs = {
  input: VerificationDestroyInput;
};


export type MutationVerificationRespondArgs = {
  input: VerificationRespondInput;
};


export type MutationVoidPaymentArgs = {
  input: VoidPaymentInput;
};


export type MutationVoidPenaltyArgs = {
  input: VoidPenaltyInput;
};


export type MutationWalletCryptoTransactionCreateArgs = {
  input: WalletCryptoTransactionCreateInput;
};


export type MutationWalletTransactionChangeArgs = {
  input: WalletTransactionChangeInput;
};


export type MutationWithdrawFiatArgs = {
  input: WithdrawFiatInput;
};


export type MutationWorkingHourCreateArgs = {
  input: WorkingHourCreateInput;
};


export type MutationXacCalculateArgs = {
  input: XacCalculateInput;
};


export type MutationXacChangeCreditAccountArgs = {
  input: XacChangeCreditAccountInput;
};


export type MutationXacCreditScoreCreateArgs = {
  input: XacCreditScoreCreateInput;
};


export type MutationXacCreditScoreRecalculateArgs = {
  input: XacCreditScoreRecalculateInput;
};


export type MutationXacCreditScoreStatusCheckArgs = {
  input: XacCreditScoreStatusCheckInput;
};


export type MutationXacFindOrCreateAccountsArgs = {
  input: XacFindOrCreateAccountsInput;
};


export type MutationXacKycCheckArgs = {
  input: XacKycCheckInput;
};


export type MutationXacLoanInvoiceCreateArgs = {
  input: XacLoanInvoiceCreateInput;
};


export type MutationZmsMongolBankUpdateArgs = {
  input: ZmsMongolBankUpdateInput;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

export type Notification = BaseModelInterface & Node & {
  __typename?: 'Notification';
  appUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  eventId?: Maybe<Scalars['ID']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  readAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  recipientId?: Maybe<Scalars['ID']['output']>;
  recipientType?: Maybe<Scalars['String']['output']>;
  recordId?: Maybe<Scalars['ID']['output']>;
  recordType?: Maybe<Scalars['String']['output']>;
  seenAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  webUrl?: Maybe<Scalars['String']['output']>;
};

/** The connection type for Notification. */
export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** A list of edges. */
  edges: Array<NotificationEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Notification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Notification. */
export type NotificationConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Notification. */
export type NotificationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Notification;
};

export enum NumberOfChildren {
  /** Five */
  Five = 'five',
  /** Four */
  Four = 'four',
  /** More Than Five */
  MoreThanFive = 'more_than_five',
  /** No Children */
  NoChildren = 'no_children',
  /** One */
  One = 'one',
  /** Three */
  Three = 'three',
  /** Two */
  Two = 'two'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Payment = BaseModelInterface & Node & {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Float']['output']>;
  captured: Scalars['Boolean']['output'];
  capturedUser?: Maybe<User>;
  capturedUserId?: Maybe<Scalars['ID']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  cvvResponseMessage?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  /** Return Associated Payment method */
  method?: Maybe<PaymentMethod>;
  methodFee?: Maybe<Scalars['Float']['output']>;
  methodId?: Maybe<Scalars['ID']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Node>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  ownerType?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  /** Return Associated Region */
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['ID']['output']>;
  /** Return Remote Response */
  remoteResponse?: Maybe<Scalars['JSON']['output']>;
  /** Return Associated Payment source */
  source?: Maybe<PaymentSource>;
  sourceId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<PaymentState>;
  target?: Maybe<Node>;
  targetId?: Maybe<Scalars['ID']['output']>;
  targetType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Payment. */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** A list of edges. */
  edges: Array<PaymentEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Payment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Payment. */
export type PaymentConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Payment. */
export type PaymentConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payment;
};

export type PaymentMethod = BaseModelInterface & Node & {
  __typename?: 'PaymentMethod';
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  feeAmount?: Maybe<Scalars['Float']['output']>;
  feeType?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  name: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['ID']['output']>;
  status: MethodStatus;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for PaymentMethod. */
export type PaymentMethodConnection = {
  __typename?: 'PaymentMethodConnection';
  /** A list of edges. */
  edges: Array<PaymentMethodEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<PaymentMethod>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for PaymentMethod. */
export type PaymentMethodConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for PaymentMethod. */
export type PaymentMethodConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type PaymentMethodEdge = {
  __typename?: 'PaymentMethodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PaymentMethod;
};

export type PaymentMethodFilter = {
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  region?: InputMaybe<RegionFilter>;
  regionId?: InputMaybe<IdFilter>;
  status?: InputMaybe<EnumStringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PaymentPaymentFilter = {
  amount?: InputMaybe<IntFilter>;
  captured?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  method?: InputMaybe<PaymentMethodFilter>;
  number?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<IdFilter>;
  ownerType?: InputMaybe<StringFilter>;
  region?: InputMaybe<RegionFilter>;
  source?: InputMaybe<PaymentSourceFilter>;
  state?: InputMaybe<EnumStringFilter>;
  targetId?: InputMaybe<IdFilter>;
  targetType?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type PaymentSource = BaseModelInterface & Node & {
  __typename?: 'PaymentSource';
  createdAt: Scalars['ISO8601DateTime']['output'];
  customerProfileId?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  idx?: Maybe<Scalars['String']['output']>;
  idx2?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  qrData?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Return Associated User */
  user: User;
  userId: Scalars['ID']['output'];
};

/** The connection type for PaymentSource. */
export type PaymentSourceConnection = {
  __typename?: 'PaymentSourceConnection';
  /** A list of edges. */
  edges: Array<PaymentSourceEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<PaymentSource>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for PaymentSource. */
export type PaymentSourceConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for PaymentSource. */
export type PaymentSourceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type PaymentSourceEdge = {
  __typename?: 'PaymentSourceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PaymentSource;
};

export type PaymentSourceFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  idx?: InputMaybe<StringFilter>;
  idx2?: InputMaybe<StringFilter>;
  region?: InputMaybe<RegionFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
};

export enum PaymentState {
  Checkout = 'checkout',
  Completed = 'completed',
  Failed = 'failed',
  Pending = 'pending',
  Processing = 'processing',
  Refunded = 'refunded',
  Void = 'void'
}

export type Penalty = BaseModelInterface & Node & {
  __typename?: 'Penalty';
  amount?: Maybe<Scalars['Float']['output']>;
  balance: Scalars['Float']['output'];
  category?: Maybe<PenaltyCategory>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  invoice?: Maybe<Invoice>;
  invoiceId?: Maybe<Scalars['ID']['output']>;
  loan?: Maybe<LoanInterface>;
  loanId?: Maybe<Scalars['ID']['output']>;
  paidAmount: Scalars['Float']['output'];
  paidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  penaltyDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<PenaltyStatus>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum PenaltyCategory {
  /** loss */
  Loss = 'loss',
  /** penalty */
  Penalty = 'penalty'
}

/** The connection type for Penalty. */
export type PenaltyConnection = {
  __typename?: 'PenaltyConnection';
  /** A list of edges. */
  edges: Array<PenaltyEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Penalty>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Penalty. */
export type PenaltyConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Penalty. */
export type PenaltyConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type PenaltyEdge = {
  __typename?: 'PenaltyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Penalty;
};

export type PenaltyFilter = {
  amount?: InputMaybe<IntFilter>;
  category?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  invoice?: InputMaybe<InvoiceFilter>;
  invoiceId?: InputMaybe<IdFilter>;
  loan?: InputMaybe<LoanFilter>;
  loanId?: InputMaybe<IdFilter>;
  paidAt?: InputMaybe<DateFilter>;
  penaltyDate?: InputMaybe<DateFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum PenaltyStatus {
  /** cancelled */
  Cancelled = 'cancelled',
  /** paid */
  Paid = 'paid',
  /** pending */
  Pending = 'pending'
}

export type PhoneFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  phone?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum PostalCode {
  /** DKI JAYA */
  DkiJaya = 'dki_jaya',
  /** KAB BANDUNG */
  KabBandung = 'kab_bandung',
  /** KAB BANDUNG BARAT */
  KabBandungBarat = 'kab_bandung_barat',
  /** KAB BEKASI */
  KabBekasi = 'kab_bekasi',
  /** KAB BOGOR */
  KabBogor = 'kab_bogor',
  /** KAB CIAMIS */
  KabCiamis = 'kab_ciamis',
  /** KAB CIANJUR */
  KabCianjur = 'kab_cianjur',
  /** KAB CIREBON */
  KabCirebon = 'kab_cirebon',
  /** KAB GARUT */
  KabGarut = 'kab_garut',
  /** KAB INDRAMAYU */
  KabIndramayu = 'kab_indramayu',
  /** KAB KARAWANG */
  KabKarawang = 'kab_karawang',
  /** KAB KUNINGAN */
  KabKuningan = 'kab_kuningan',
  /** KAB LEBAK */
  KabLebak = 'kab_lebak',
  /** KAB MAJALENGKA */
  KabMajalengka = 'kab_majalengka',
  /** KAB PANDEGLANG */
  KabPandeglang = 'kab_pandeglang',
  /** KAB PANGANDARAN */
  KabPangandaran = 'kab_pangandaran',
  /** KAB PURWAKARTA */
  KabPurwakarta = 'kab_purwakarta',
  /** KAB SERANG */
  KabSerang = 'kab_serang',
  /** KAB SUBANG */
  KabSubang = 'kab_subang',
  /** KAB SUKABUMI */
  KabSukabumi = 'kab_sukabumi',
  /** KAB SUMEDANG */
  KabSumedang = 'kab_sumedang',
  /** KAB TANGERANG */
  KabTangerang = 'kab_tangerang',
  /** KAB TASIKMALAYA */
  KabTasikmalaya = 'kab_tasikmalaya',
  /** KOTA BANDUNG */
  KotaBandung = 'kota_bandung',
  /** KOTA BANJAR */
  KotaBanjar = 'kota_banjar',
  /** KOTA BEKASI */
  KotaBekasi = 'kota_bekasi',
  /** KOTA BOGOR */
  KotaBogor = 'kota_bogor',
  /** KOTA CILEGON */
  KotaCilegon = 'kota_cilegon',
  /** KOTA CIMAHI */
  KotaCimahi = 'kota_cimahi',
  /** KOTA CIREBON */
  KotaCirebon = 'kota_cirebon',
  /** KOTA DEPOK */
  KotaDepok = 'kota_depok',
  /** KOTA SERANG */
  KotaSerang = 'kota_serang',
  /** KOTA SUKABUMI */
  KotaSukabumi = 'kota_sukabumi',
  /** KOTA TANGERANG */
  KotaTangerang = 'kota_tangerang',
  /** KOTA TANGERANG SELATAN */
  KotaTangerangSelatan = 'kota_tangerang_selatan',
  /** KOTA TASIKMALAYA */
  KotaTasikmalaya = 'kota_tasikmalaya',
  /** WIL KEPULAUAN SERIBU */
  WilKepulauanSeribu = 'wil_kepulauan_seribu',
  /** WIL KOTA JAKARTA BARAT */
  WilKotaJakartaBarat = 'wil_kota_jakarta_barat',
  /** WIL KOTA JAKARTA PUSAT */
  WilKotaJakartaPusat = 'wil_kota_jakarta_pusat',
  /** WIL KOTA JAKARTA SELATAN */
  WilKotaJakartaSelatan = 'wil_kota_jakarta_selatan',
  /** WIL KOTA JAKARTA TIMUR */
  WilKotaJakartaTimur = 'wil_kota_jakarta_timur',
  /** WIL KOTA JAKARTA UTARA */
  WilKotaJakartaUtara = 'wil_kota_jakarta_utara'
}

export type Product = BaseModelInterface & Node & {
  __typename?: 'Product';
  advancePercent?: Maybe<Scalars['Float']['output']>;
  advanceSpcPercent?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  dedicatedClass?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  divisionPeriod: Scalars['Int']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  durationUnit: DurationUnit;
  hasAdvance?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Image>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  isAdvanceSpc?: Maybe<Scalars['Boolean']['output']>;
  isLockSpc?: Maybe<Scalars['Boolean']['output']>;
  maxLoanAmount?: Maybe<Scalars['Int']['output']>;
  minLoanAmount?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  preferences?: Maybe<Scalars['String']['output']>;
  regionId: Scalars['Int']['output'];
  status: ProductStatus;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type ProductDescriptionArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type ProductNameArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Product. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Product>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Product. */
export type ProductConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Product. */
export type ProductConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type ProductFilter = {
  advancePercent?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  dedicatedClass?: InputMaybe<StringFilter>;
  divisionPeriod?: InputMaybe<IntFilter>;
  duration?: InputMaybe<IntFilter>;
  hasAdvance?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IdFilter>;
  isAdvanceSpc?: InputMaybe<BoolFilter>;
  isLockSpc?: InputMaybe<BoolFilter>;
  maxLoanAmount?: InputMaybe<IntFilter>;
  minLoanAmount?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum ProductStatus {
  /** active */
  Active = 'active',
  /** inactive */
  Inactive = 'inactive'
}

export type Progress = BaseModelInterface & Node & {
  __typename?: 'Progress';
  amount: Scalars['Float']['output'];
  amountChange?: Maybe<Scalars['Float']['output']>;
  complete: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  cycle: Scalars['String']['output'];
  date: Scalars['ISO8601DateTime']['output'];
  gamification: Gamification;
  goal: GamificationGoal;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  owner: Node;
  percentage: Scalars['Float']['output'];
  percentageChange?: Maybe<Scalars['Float']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  target: Node;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Progress. */
export type ProgressConnection = {
  __typename?: 'ProgressConnection';
  /** A list of edges. */
  edges: Array<ProgressEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Progress>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Progress. */
export type ProgressConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Progress. */
export type ProgressConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type ProgressEdge = {
  __typename?: 'ProgressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Progress;
};

export enum Quality {
  /** attention */
  Attention = 'attention',
  /** bad */
  Bad = 'bad',
  /** doubtful */
  Doubtful = 'doubtful',
  /** normal */
  Normal = 'normal',
  /** substandard */
  Substandard = 'substandard'
}

export type Quarter = BaseModelInterface & Node & {
  __typename?: 'Quarter';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  district?: Maybe<District>;
  geoJson?: Maybe<Scalars['JSON']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns list of agreements */
  agreements: AgreementConnection;
  /** Returns all merchant information in simplified form */
  allMerchants: Array<MerchantSimple>;
  /** Returns list of api_logs */
  apiLogs?: Maybe<ApiLogConnection>;
  /** Returns list of app versions */
  appVersions?: Maybe<AppVersionConnection>;
  /** Returns list of Article::Article */
  articleArticles: ArticleConnection;
  /** Return a list of article categories */
  articleCategories: ArticleCategoryConnection;
  /** Return a asset detail info */
  assetByUserIdObject?: Maybe<Asset>;
  /** Return backoffice permissions */
  backofficePermissions?: Maybe<Scalars['JSON']['output']>;
  /** Returns list of bank accounts */
  bankAccounts: AccountConnection;
  /** Returns search results of bank accounts */
  bankAccountsSearch: AccountConnection;
  /** Returns list of bank transactions */
  bankTransactions: BankTransactionConnection;
  /** Returns list of bank transfers */
  bankTransfers: BankTransferConnection;
  /** Returns list of bank */
  banks: BankConnection;
  /** Returns list of banners */
  banners: BannerConnection;
  /** Return a list of categories */
  categories: CategoryConnection;
  categoriesTree?: Maybe<Scalars['JSON']['output']>;
  /** Returns list of bank cgw */
  cgws: CgwConnection;
  /** Return a confirmation detail info */
  confirmation?: Maybe<ConfirmableToken>;
  /** Return a confirmable detail info by token */
  confirmationToken?: Maybe<ConfirmableToken>;
  /** Return contracts of user, template by region */
  contracts: UserContractConnection;
  /** Returns list of country */
  countries: CountryConnection;
  /** Returns list of credit score products */
  creditScoreProducts: CreditScoreProductConnection;
  /** Returns list of credit score transactions */
  creditScoreTransactions: CreditScoreTransactionConnection;
  /** Returns list of credit score transactions */
  creditTransactions: CreditScoreTransactionConnection;
  /** Returns list of CurrencyRate */
  currencies: CurrencyRateConnection;
  /** Returns list of document templates for contract */
  documentTemplates: DocumentTemplateConnection;
  /** Returns list of documentations */
  documentations: UserDocumentationConnection;
  elasticLoans: Scalars['JSON']['output'];
  /** Return list of invitations as employee */
  employeeInvitations: EmployeeConnection;
  /** Returns list of faqs */
  faqs: FaqConnection;
  /** Returns list of guides */
  feedbacks: FeedbackConnection;
  /** Returns list of progresses */
  gamificationProgresses: ProgressConnection;
  /** Returns list of gamifications */
  gamifications: GamificationConnection;
  /** Returns list of guides */
  guides: GuideConnection;
  /** Return a invitation detail info */
  invitation?: Maybe<Invitation>;
  /** Returns list of invoices */
  invoices: InvoiceConnection;
  /** Background job statuses */
  jobLogs: JobStatusConnection;
  /** Return the last CurrencyRate record */
  lastCurrencyRate?: Maybe<CurrencyRate>;
  /** Returns a list of loan modification */
  loanModifications: LoanModificationConnection;
  /** Return list of loan modify verifications */
  loanModifyVerifications: LoanModificationVerificationConnection;
  /** Returns list of wallet products */
  loanProducts: ProductConnection;
  /** Returns list of loans */
  loans: LoanInterfaceConnection;
  /** Returns list of loyalty categories */
  loyaltyCategories: UserLoyaltyCategoryConnection;
  /** Return current logged in user info */
  me?: Maybe<User>;
  /** Return list of merchant request verifications */
  merchantRequestVerifications: MerchantModifyRequestConnection;
  /** Returns list of Merchant Users */
  merchantUsers: MerchantUserConnection;
  /** Returns list of Merchants */
  merchants: MerchantConnection;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes?: Maybe<Array<Node>>;
  /** Returns list of notifications */
  notifications?: Maybe<NotificationConnection>;
  /** Returns list of payment methods */
  paymentMethods: PaymentMethodConnection;
  /** Returns list of payment payment */
  paymentPayments: PaymentConnection;
  /** Returns list of payment sources */
  paymentSources: PaymentSourceConnection;
  /** Returns list of penalties */
  penalties: PenaltyConnection;
  /** Returns list of phones */
  phones: UserPhoneConnection;
  /** Returns list of regions */
  regions: RegionConnection;
  /** Returns list of loans by search result */
  searchLoans: LoanInterfaceConnection;
  /** Return a settlement detail info */
  settlement?: Maybe<Settlement>;
  /** Returns list of settlements */
  settlements?: Maybe<SettlementConnection>;
  /** Returns list of snapshot_loans */
  snapshotLoans: SnapShotLoanConnection;
  /** Returns list of files */
  spFiles: SpFileConnection;
  /** Returns aggregated transaction data by category within a date range */
  spcWalletAggregatedTransactions: Array<SpcWalletAggregatedTransaction>;
  store?: Maybe<Store>;
  /** Returns list of Merchants */
  stores: StoreConnection;
  /** Returns list of Merchant Tags */
  tags: TagConnection;
  /** Return list of user roles */
  userRoles: UserRoleConnection;
  /** Returns list of users */
  users: UserConnection;
  /** Return VAT payer info */
  vatPayerInfo?: Maybe<Scalars['JSON']['output']>;
  /** Return list of verifications */
  verifications: VerificationConnection;
  /** Returns list of settlement transactions */
  walletSettlements: TransactionConnection;
  /** Return list of wallet transactions */
  walletTransactions: TransactionConnection;
  /** Return list of wallets */
  wallets: WalletInterfaceConnection;
  xac?: Maybe<XacApi>;
  /** Return list of credit scores */
  xacCreditScores: XacCreditScoreConnection;
  /** Returns list of xac_loans */
  xacLoans?: Maybe<LoanLongConnection>;
  /** Returns list of zms */
  zms: ZmsConnection;
};


export type QueryAgreementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AgreementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryApiLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiLogFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryAppVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppVersionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryArticleArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleArticleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryArticleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryAssetByUserIdObjectArgs = {
  assetId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryBankAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryBankAccountsSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryBankTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BankTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryBankTransfersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BankTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryBanksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BankFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryBannersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BannerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryCgwsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CgwFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryConfirmationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConfirmationTokenArgs = {
  token: Scalars['String']['input'];
};


export type QueryContractsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContractFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CountryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryCreditScoreProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryCreditScoreTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryCreditTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryCurrenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CurrencyRateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryDocumentTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentTemplateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryDocumentationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserDocumentationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryElasticLoansArgs = {
  params?: InputMaybe<Scalars['JSON']['input']>;
  regionId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmployeeInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InvitationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryFaqsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FaqFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeedbackFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryGamificationProgressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationProgressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryGamificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryGuidesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GuideFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryInvitationArgs = {
  token: Scalars['String']['input'];
};


export type QueryInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InvoiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryJobLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<JobStatusFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryLoanModificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModificationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryLoanModifyVerificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanModificationVerificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryLoanProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryLoyaltyCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoyaltyCategoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryMerchantRequestVerificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VerificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryMerchantUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentMethodFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryPaymentPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentPaymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryPaymentSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentSourceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryPenaltiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PenaltyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryPhonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PhoneFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RegionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QuerySearchLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  loanNumberOrUserPhone: Scalars['String']['input'];
  merchantId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QuerySettlementArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySettlementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettlementFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QuerySnapshotLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SnapshotLoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QuerySpFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SpFileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryStoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TagFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryUserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryVatPayerInfoArgs = {
  registerNumber: Scalars['String']['input'];
};


export type QueryVerificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VerificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryWalletSettlementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryWalletTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryXacCreditScoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<XacCreditScoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryXacLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type QueryZmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ZmsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** Receive Confirmable token channel */
export enum ReceiveTokenChannel {
  /** email */
  Email = 'email',
  /** phone */
  Phone = 'phone'
}

export type Region = BaseModelInterface & Node & {
  __typename?: 'Region';
  country: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency: Scalars['String']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  loanSummary?: Maybe<LoanSummary>;
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneCode: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userSummary?: Maybe<UserSummary>;
  utcOffset: Scalars['Int']['output'];
};

/** The connection type for Region. */
export type RegionConnection = {
  __typename?: 'RegionConnection';
  /** A list of edges. */
  edges: Array<RegionEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Region>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Region. */
export type RegionConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Region. */
export type RegionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type RegionEdge = {
  __typename?: 'RegionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Region;
};

export type RegionFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum ResidentOwnerStatus {
  /** Community Property */
  CommunityProperty = 'community_property',
  /** Joint Tenancy */
  JointTenancy = 'joint_tenancy',
  /** Partnership Owners */
  PartnershipOwners = 'partnership_owners',
  /** Sole Ownership */
  SoleOwnership = 'sole_ownership',
  /** Tenancy in Common */
  TenancyInCommon = 'tenancy_in_common',
  /** Trust Ownership */
  TrustOwnership = 'trust_ownership'
}

export type SpcWalletAggregatedTransaction = {
  __typename?: 'SPCWalletAggregatedTransaction';
  adminAmount: Scalars['Float']['output'];
  adminCount: Scalars['Int']['output'];
  depositAmount: Scalars['Float']['output'];
  depositCount: Scalars['Int']['output'];
  exchangeAmount: Scalars['Float']['output'];
  exchangeCount: Scalars['Int']['output'];
  lockedAmount: Scalars['Float']['output'];
  lockedCount: Scalars['Int']['output'];
  refundAmount: Scalars['Float']['output'];
  refundCount: Scalars['Int']['output'];
  rewardAmount: Scalars['Float']['output'];
  rewardCount: Scalars['Int']['output'];
  salesAmount: Scalars['Float']['output'];
  salesCount: Scalars['Int']['output'];
  transactionDate: Scalars['ISO8601Date']['output'];
  unlockAmount: Scalars['Float']['output'];
  unlockCount: Scalars['Int']['output'];
  userExchangeAmount: Scalars['Float']['output'];
  userExchangeCount: Scalars['Int']['output'];
  withdrawAmount: Scalars['Float']['output'];
  withdrawCount: Scalars['Int']['output'];
};

/** Settlement for merchant stores */
export type Settlement = BaseModelInterface & Node & {
  __typename?: 'Settlement';
  /** Returns list of bank transfers */
  bankTransfers: BankTransferConnection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  feeAmount?: Maybe<Scalars['Float']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isTransferInitiated?: Maybe<Scalars['Boolean']['output']>;
  lastBankTransfer?: Maybe<BankTransfer>;
  /** Returns list of loans */
  loans?: Maybe<LoanRegularConnection>;
  merchant?: Maybe<Merchant>;
  merchantId?: Maybe<Scalars['ID']['output']>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  refundAmount?: Maybe<Scalars['Float']['output']>;
  regionId?: Maybe<Scalars['ID']['output']>;
  salesAmount?: Maybe<Scalars['Float']['output']>;
  settlementDate: Scalars['ISO8601DateTime']['output'];
  status: SettlementStatus;
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['ID']['output']>;
  systemFeeAmount?: Maybe<Scalars['Float']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  transferAmount?: Maybe<Scalars['Float']['output']>;
  transferredDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


/** Settlement for merchant stores */
export type SettlementBankTransfersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BankTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Settlement for merchant stores */
export type SettlementLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for Settlement. */
export type SettlementConnection = {
  __typename?: 'SettlementConnection';
  /** A list of edges. */
  edges: Array<SettlementEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Settlement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Settlement. */
export type SettlementConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Settlement. */
export type SettlementConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type SettlementEdge = {
  __typename?: 'SettlementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Settlement;
};

export type SettlementFilter = {
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  loans?: InputMaybe<LoanFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  refundAmount?: InputMaybe<IntFilter>;
  salesAmount?: InputMaybe<IntFilter>;
  settlementDate?: InputMaybe<DateFilter>;
  status?: InputMaybe<EnumStringFilter>;
  store?: InputMaybe<StoreFilter>;
  storeId?: InputMaybe<IdFilter>;
  transferAmount?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum SettlementStatus {
  /** failed */
  Failed = 'failed',
  /** pending */
  Pending = 'pending',
  /** skipped */
  Skipped = 'skipped',
  /** transferred */
  Transferred = 'transferred'
}

export enum SettlementTransferType {
  /** full */
  Full = 'full',
  /** per_invoice */
  PerInvoice = 'per_invoice'
}

/** Sort Direction */
export enum SortDirection {
  /** Ascending */
  Asc = 'asc',
  /** Descending */
  Desc = 'desc'
}

export type SortFilter = {
  direction?: InputMaybe<SortDirection>;
  field: Scalars['String']['input'];
};

/** SP file type */
export type SpFile = Node & {
  __typename?: 'SpFile';
  byteSize?: Maybe<Scalars['Float']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Attachment>;
  filename?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  url: Scalars['String']['output'];
};


/** SP file type */
export type SpFileByteSizeArgs = {
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for SpFile. */
export type SpFileConnection = {
  __typename?: 'SpFileConnection';
  /** A list of edges. */
  edges: Array<SpFileEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<SpFile>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for SpFile. */
export type SpFileConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for SpFile. */
export type SpFileConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type SpFileEdge = {
  __typename?: 'SpFileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SpFile;
};

export type SpFileFilter = {
  byteSize?: InputMaybe<IntFilter>;
  contentType?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  filename?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export enum StartingPeriod {
  /** Five to Ten Years */
  FiveToTenYears = 'five_to_ten_years',
  /** Less Than 1 Year */
  LessThan_1Year = 'less_than_1_year',
  /** More Than Ten Years */
  MoreThanTenYears = 'more_than_ten_years',
  /** One to Three Years */
  OneToThreeYears = 'one_to_three_years',
  /** Three to Five Years */
  ThreeToFiveYears = 'three_to_five_years'
}

export type State = BaseModelInterface & Node & {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  districts: Array<District>;
  geoJson?: Maybe<Scalars['JSON']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum Status {
  /** active */
  Active = 'active',
  /** banned */
  Banned = 'banned',
  /** deleted */
  Deleted = 'deleted',
  /** inactive */
  Inactive = 'inactive',
  /** pending */
  Pending = 'pending',
  /** suspended */
  Suspended = 'suspended'
}

/** StorePay Store. */
export type Store = BaseModelInterface & Node & {
  __typename?: 'Store';
  address?: Maybe<Scalars['String']['output']>;
  /** Returns list of loans */
  allLoans?: Maybe<LoanRegularConnection>;
  availableProductIds?: Maybe<Array<Scalars['Int']['output']>>;
  /** Default bank account of store */
  bankAccount?: Maybe<Account>;
  bankAccountId?: Maybe<Scalars['Int']['output']>;
  /** Category associated with the store */
  category: Category;
  categoryId?: Maybe<Scalars['ID']['output']>;
  contract?: Maybe<Attachment>;
  contractCreateDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  contractEndDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  contractExtensionDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  contractNumber?: Maybe<Scalars['String']['output']>;
  contractStatus?: Maybe<ContractStatus>;
  contractType?: Maybe<StoreContract>;
  /** Count of all loans associated with the store */
  countOfLoans?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  feePercent?: Maybe<Scalars['Float']['output']>;
  /** Return fiat wallet */
  fiatWallet?: Maybe<WalletFiat>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAirline?: Maybe<Scalars['Boolean']['output']>;
  isLockSpc?: Maybe<Scalars['Boolean']['output']>;
  isOnlyPremium?: Maybe<Scalars['Boolean']['output']>;
  isShow: Scalars['Boolean']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  loanModificationClosedDays: Scalars['Int']['output'];
  loanModificationConfirmedDays: Scalars['Int']['output'];
  /** Returns list of loans */
  loans?: Maybe<LoanRegularConnection>;
  longitude?: Maybe<Scalars['Float']['output']>;
  /** Merchant associated with the store */
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  /** List of merchant_users associated with the store */
  merchantUsers?: Maybe<MerchantUserConnection>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  register?: Maybe<Scalars['String']['output']>;
  /** Return a merchant's store's sales count per day by age group in last week with YoY */
  salesCountWeeklyByAgeGroupWithYoy?: Maybe<Scalars['JSON']['output']>;
  /** Return a merchant's store's sales count per day in last week with YoY */
  salesCountWeeklyWithYoy?: Maybe<Scalars['JSON']['output']>;
  /** Return a merchant's store's sales loan amount */
  salesLoanAmount?: Maybe<Scalars['BigInt']['output']>;
  /** Return a merchant's store's sales loan count */
  salesLoanCount?: Maybe<Scalars['BigInt']['output']>;
  /** Return a merchant's store's sales total count in last week with YoY */
  salesTotalCountOfWeekByWithYoy?: Maybe<Scalars['JSON']['output']>;
  /** Return a merchant's store's sales total amount in last week with YoY */
  salesTotalVolumeOfWeekByWithYoy?: Maybe<Scalars['JSON']['output']>;
  settlementDay?: Maybe<Scalars['Int']['output']>;
  settlementTransferType?: Maybe<SettlementTransferType>;
  settlementType?: Maybe<Scalars['String']['output']>;
  /** Returns list of settlement transactions */
  settlements: TransactionConnection;
  socialProfiles?: Maybe<Scalars['JSON']['output']>;
  /** Return a merchant's store's net sales amount */
  storeFeeNetSalesAmount?: Maybe<Scalars['BigInt']['output']>;
  /** Sum of amounts of all loans associated with the store */
  sumOfAmounts?: Maybe<Scalars['Float']['output']>;
  timetable: Scalars['String']['output'];
  /** Total debit transactions amount of store */
  totalDebitTransactionsAmount?: Maybe<Scalars['Float']['output']>;
  /** Total loans net sales amount of store */
  totalNetSalesAmount?: Maybe<Scalars['Float']['output']>;
  /** Count of all active and closed loans of store */
  totalSalesCount?: Maybe<Scalars['Int']['output']>;
  /** Total loans amount of store */
  totalSalesLoanAmount?: Maybe<Scalars['BigInt']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** List of users associated with the store */
  users?: Maybe<UserConnection>;
  webhook?: Maybe<Scalars['String']['output']>;
  /** Returns list of xac_loans */
  xacLoans?: Maybe<LoanLongConnection>;
};


/** StorePay Store. */
export type StoreAllLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Store. */
export type StoreLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Store. */
export type StoreMerchantUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Store. */
export type StoreSalesCountWeeklyByAgeGroupWithYoyArgs = {
  beginDate: Scalars['ISO8601DateTime']['input'];
  endDate: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Store. */
export type StoreSalesCountWeeklyWithYoyArgs = {
  beginDate: Scalars['ISO8601DateTime']['input'];
  endDate: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Store. */
export type StoreSalesLoanAmountArgs = {
  beginDate: Scalars['ISO8601DateTime']['input'];
  endDate: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Store. */
export type StoreSalesLoanCountArgs = {
  beginDate: Scalars['ISO8601DateTime']['input'];
  endDate: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Store. */
export type StoreSalesTotalCountOfWeekByWithYoyArgs = {
  beginDate: Scalars['ISO8601DateTime']['input'];
  endDate: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Store. */
export type StoreSalesTotalVolumeOfWeekByWithYoyArgs = {
  beginDate: Scalars['ISO8601DateTime']['input'];
  endDate: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Store. */
export type StoreSettlementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Store. */
export type StoreStoreFeeNetSalesAmountArgs = {
  beginDate: Scalars['ISO8601DateTime']['input'];
  endDate: Scalars['ISO8601DateTime']['input'];
};


/** StorePay Store. */
export type StoreUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Store. */
export type StoreXacLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for Store. */
export type StoreConnection = {
  __typename?: 'StoreConnection';
  /** A list of edges. */
  edges: Array<StoreEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Store>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Store. */
export type StoreConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Store. */
export type StoreConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export enum StoreContract {
  /** company */
  Company = 'company',
  /** individual */
  Individual = 'individual',
  /** unknown */
  Unknown = 'unknown'
}

/** An edge in a connection. */
export type StoreEdge = {
  __typename?: 'StoreEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Store;
};

export type StoreFilter = {
  bank?: InputMaybe<BankFilter>;
  bankAccount?: InputMaybe<AccountFilter>;
  code?: InputMaybe<StringFilter>;
  contractNumber?: InputMaybe<StringFilter>;
  contractStatus?: InputMaybe<StringFilter>;
  contractType?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  feePercent?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  isAirline?: InputMaybe<BoolFilter>;
  isLockSpc?: InputMaybe<StringFilter>;
  isOnlyPremium?: InputMaybe<StringFilter>;
  isShow?: InputMaybe<StringFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  merchantName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  register?: InputMaybe<StringFilter>;
  settlementDay?: InputMaybe<IntFilter>;
  settlementTransferType?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type StringFilter = {
  /** is blank ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>;
  /** contains */
  cont?: InputMaybe<Scalars['String']['input']>;
  /** ends with */
  end?: InputMaybe<Scalars['String']['input']>;
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** starts with */
  start?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Invoice subscription */
  invoice?: Maybe<Invoice>;
  /** When background job progress updates */
  jobUpdated?: Maybe<JobStatus>;
  /** Trigger to listening loan subscribers when loan updated */
  loan?: Maybe<LoanInterface>;
  /** Loan verification for responder subscription */
  loanVerification?: Maybe<LoanModificationVerification>;
  /** Trigger to user when loan created */
  pendingLoan?: Maybe<LoanInterface>;
  /** Refresh merchants web loans list */
  storeHaveToRefresh: Scalars['Boolean']['output'];
  /** User state subscription */
  userState?: Maybe<User>;
  /** A notification was added */
  xacCreditScore?: Maybe<XacCreditScore>;
  /** A notification was added */
  xacLoanSubscription?: Maybe<LoanLong>;
};


export type SubscriptionInvoiceArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionJobUpdatedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionLoanArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionLoanVerificationArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionPendingLoanArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionStoreHaveToRefreshArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionUserStateArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionXacCreditScoreArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionXacLoanSubscriptionArgs = {
  id: Scalars['ID']['input'];
};

/** StorePay Merchant Tag. */
export type Tag = BaseModelInterface & Node & {
  __typename?: 'Tag';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  /** Returns list of Merchants */
  merchants?: Maybe<MerchantConnection>;
  name?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['ID']['output']>;
  status: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


/** StorePay Merchant Tag. */
export type TagMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** StorePay Merchant Tag. */
export type TagNameArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for Tag. */
export type TagConnection = {
  __typename?: 'TagConnection';
  /** A list of edges. */
  edges: Array<TagEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Tag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Tag. */
export type TagConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Tag. */
export type TagConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tag;
};

export type TagFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type Transaction = BaseModelInterface & Node & {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['Float']['output']>;
  archived: Scalars['Boolean']['output'];
  authorizedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  authorizedById?: Maybe<Scalars['ID']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  bankTransfer?: Maybe<BankTransfer>;
  category?: Maybe<TransactionCategory>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  due?: Maybe<Scalars['ISO8601DateTime']['output']>;
  dueDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  icon?: Maybe<Image>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  merchantFee?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  relatedAccount?: Maybe<Scalars['String']['output']>;
  relatedAccountName?: Maybe<Scalars['String']['output']>;
  relatedBank?: Maybe<Scalars['String']['output']>;
  /** Returns list of settlement transactions */
  sales: TransactionConnection;
  source?: Maybe<TransactionSourceUnion>;
  sourceId?: Maybe<Scalars['ID']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
  status: TransactionStatus;
  transactionAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  transactionFee?: Maybe<Scalars['Float']['output']>;
  typeCode?: Maybe<WalletTransactionTypeCode>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  wallet: WalletInterface;
  walletId: Scalars['ID']['output'];
  walletType: TransactionWalletType;
  withdrawTransaction?: Maybe<Transaction>;
  withdrawTransactionId?: Maybe<Scalars['ID']['output']>;
};


export type TransactionNameArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type TransactionSalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export enum TransactionCategory {
  /** admin */
  Admin = 'admin',
  /** deposit */
  Deposit = 'deposit',
  /** exchange */
  Exchange = 'exchange',
  /** locked */
  Locked = 'locked',
  /** payment */
  Payment = 'payment',
  /** refund */
  Refund = 'refund',
  /** reward */
  Reward = 'reward',
  /** sales */
  Sales = 'sales',
  /** unlock */
  Unlock = 'unlock',
  /** user_exchange */
  UserExchange = 'user_exchange',
  /** withdraw */
  Withdraw = 'withdraw'
}

/** The connection type for Transaction. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of edges. */
  edges: Array<TransactionEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Transaction>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Transaction. */
export type TransactionConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Transaction. */
export type TransactionConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Transaction;
};

export type TransactionFilter = {
  amount?: InputMaybe<IntFilter>;
  balance?: InputMaybe<IntFilter>;
  category?: InputMaybe<UserFilter>;
  createdAt?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  typeCode?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** Union type for Loan, Modification, Settlement or User */
export type TransactionSourceUnion = Account | Cgw | LoanLong | LoanModification | LoanRegular | Payment | Settlement | User | WalletCrypto;

export enum TransactionStatus {
  /** authorized */
  Authorized = 'authorized',
  /** pending */
  Pending = 'pending',
  /** rejected */
  Rejected = 'rejected'
}

export enum TransactionWalletType {
  /** fiat_wallet */
  FiatWallet = 'fiat_wallet',
  /** spc_wallet */
  SpcWallet = 'spc_wallet'
}

/** Representation of a StorePay user. */
export type User = BaseModelInterface & Node & {
  __typename?: 'User';
  address?: Maybe<Address>;
  /** Returns list of assets */
  assets?: Maybe<AssetConnection>;
  /** Returns list of Audit logs. */
  audits?: Maybe<AuditConnection>;
  availableLoanProducts?: Maybe<Array<Product>>;
  avatar?: Maybe<Image>;
  b2bContacts?: Maybe<Scalars['JSON']['output']>;
  bankAccount?: Maybe<Account>;
  bankAccounts?: Maybe<Array<Account>>;
  banks?: Maybe<Array<Bank>>;
  birthday?: Maybe<Scalars['ISO8601Date']['output']>;
  cifNumber?: Maybe<Scalars['String']['output']>;
  citizenIdNumber?: Maybe<Scalars['String']['output']>;
  citizenship?: Maybe<Scalars['String']['output']>;
  civilId?: Maybe<Scalars['String']['output']>;
  confirmDevice?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** List of contracts associated with the user */
  contracts: UserContractConnection;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** Returns list of credit scores */
  creditScores: CreditScoreConnection;
  /** Returns list of credit score transactions */
  creditTransactions: CreditScoreTransactionConnection;
  currentLimit?: Maybe<Scalars['Float']['output']>;
  currentReference?: Maybe<UserCurrentReference>;
  currentSignInAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  currentSignInIp?: Maybe<Scalars['String']['output']>;
  /** Returns list of dan citizen salaries */
  danCitizenSalaryInfos: DanCitizenSalaryConnection;
  /** Returns list of devices */
  devices?: Maybe<UserDeviceConnection>;
  email?: Maybe<Scalars['String']['output']>;
  faceIdToken?: Maybe<Scalars['String']['output']>;
  failedAttempts?: Maybe<Scalars['Int']['output']>;
  failedPinAttempts?: Maybe<Scalars['Int']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  /** Fiat wallet associated with the user */
  fiatWallet?: Maybe<WalletFiat>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  groceryCurrentLimit?: Maybe<Scalars['Float']['output']>;
  groceryLimit?: Maybe<Scalars['Float']['output']>;
  groceryUsedLimit?: Maybe<Scalars['Float']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  /** Returns list of invoices */
  invoices: InvoiceConnection;
  isCompany?: Maybe<Scalars['Boolean']['output']>;
  isSpecial?: Maybe<Scalars['Boolean']['output']>;
  kyc?: Maybe<Kyc>;
  kycs?: Maybe<Array<Kyc>>;
  language?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastSignInAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  lastSignInIp?: Maybe<Scalars['String']['output']>;
  levelId?: Maybe<Scalars['Int']['output']>;
  loanSummary?: Maybe<UserLoanSummary>;
  /** Returns list of loans */
  loans: LoanInterfaceConnection;
  lockedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  loyaltyCategory?: Maybe<UserLoyaltyCategory>;
  maxLimit?: Maybe<Scalars['Float']['output']>;
  /** Returns list of Merchant Users */
  merchantUsers?: Maybe<MerchantUserConnection>;
  /** List of merchants associated with the user */
  merchants?: Maybe<MerchantConnection>;
  middleName?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  /** Agreements that the user has not yet accepted */
  needAcceptAgreements: Array<Agreement>;
  note?: Maybe<Scalars['String']['output']>;
  /** Returns list of notifications */
  notifications?: Maybe<NotificationConnection>;
  phone?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  pinBlockedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Returns list of attachment */
  references?: Maybe<AttachmentConnection>;
  region: Region;
  regionId?: Maybe<Scalars['ID']['output']>;
  rekognitionFlow?: Maybe<Scalars['String']['output']>;
  rememberCreatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  resetPass?: Maybe<Scalars['Boolean']['output']>;
  roleMatrix?: Maybe<Scalars['JSON']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  signInCount?: Maybe<Scalars['Int']['output']>;
  spcBaseLimit?: Maybe<Scalars['Float']['output']>;
  /** Crypto wallet associated with the user */
  spcWallet?: Maybe<WalletCrypto>;
  state?: Maybe<KycState>;
  status?: Maybe<Status>;
  totalCreditScoreTransactions?: Maybe<Scalars['Float']['output']>;
  totalDebitScoreTransactions?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Returns list of api_logs */
  urtaarLogs?: Maybe<ApiLogConnection>;
  usedLimit?: Maybe<Scalars['Float']['output']>;
  userAddress?: Maybe<Scalars['String']['output']>;
  userEmails: Array<UserEmail>;
  userPhones: Array<UserPhone>;
  userRole?: Maybe<UserRole>;
  userRoleId?: Maybe<Scalars['ID']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  /** Returns list of transactions */
  walletTransactions: TransactionConnection;
  xacCreditScore?: Maybe<XacCreditScore>;
  /** Returns list of credit scores */
  xacCreditScores: XacCreditScoreConnection;
  /** Returns list of xac_loans */
  xacLoans: LoanLongConnection;
};


/** Representation of a StorePay user. */
export type UserAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserAuditsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserContractsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContractFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserCreditScoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserCreditTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserDanCitizenSalaryInfosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserDevicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DeviceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<InvoiceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserKycsArgs = {
  last: Scalars['Int']['input'];
};


/** Representation of a StorePay user. */
export type UserLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserMerchantUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantUserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserMerchantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserReferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserUrtaarLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiLogFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserWalletTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserXacCreditScoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<XacCreditScoreFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


/** Representation of a StorePay user. */
export type UserXacLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type UserAgreement = BaseModelInterface & Node & {
  __typename?: 'UserAgreement';
  agreementId: Scalars['ID']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  version: Scalars['Int']['output'];
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for User. */
export type UserConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for User. */
export type UserConnectionSumArgs = {
  field: Scalars['String']['input'];
};

export type UserContract = BaseModelInterface & Node & {
  __typename?: 'UserContract';
  contractReference?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Attachment>;
  documentTemplateId?: Maybe<Scalars['ID']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  magicLink?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  privyId?: Maybe<Scalars['String']['output']>;
  regionId?: Maybe<Scalars['ID']['output']>;
  signedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status: UserContractStatus;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for UserContract. */
export type UserContractConnection = {
  __typename?: 'UserContractConnection';
  /** A list of edges. */
  edges: Array<UserContractEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<UserContract>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for UserContract. */
export type UserContractConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for UserContract. */
export type UserContractConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type UserContractEdge = {
  __typename?: 'UserContractEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserContract;
};

export enum UserContractStatus {
  /** ACTIVE */
  Active = 'active',
  /** EXPIRED */
  Expired = 'expired',
  /** INACTIVE */
  Inactive = 'inactive',
  /** TERMINATED */
  Terminated = 'terminated'
}

export type UserCurrentReference = {
  __typename?: 'UserCurrentReference';
  activeLoan: Scalars['Int']['output'];
  activeLoanAmount: Scalars['Float']['output'];
  overdueLoan: Scalars['Int']['output'];
  overdueLoanAmount: Scalars['Float']['output'];
};

export type UserDevice = BaseModelInterface & Node & {
  __typename?: 'UserDevice';
  channel?: Maybe<DeviceChannel>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  deviceId?: Maybe<Scalars['String']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for UserDevice. */
export type UserDeviceConnection = {
  __typename?: 'UserDeviceConnection';
  /** A list of edges. */
  edges: Array<UserDeviceEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<UserDevice>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for UserDevice. */
export type UserDeviceConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for UserDevice. */
export type UserDeviceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type UserDeviceEdge = {
  __typename?: 'UserDeviceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserDevice;
};

export type UserDocumentation = BaseModelInterface & Node & {
  __typename?: 'UserDocumentation';
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type UserDocumentationBodyArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type UserDocumentationNameArgs = {
  fallback?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** The connection type for UserDocumentation. */
export type UserDocumentationConnection = {
  __typename?: 'UserDocumentationConnection';
  /** A list of edges. */
  edges: Array<UserDocumentationEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<UserDocumentation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for UserDocumentation. */
export type UserDocumentationConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for UserDocumentation. */
export type UserDocumentationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type UserDocumentationEdge = {
  __typename?: 'UserDocumentationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserDocumentation;
};

export type UserDocumentationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

export type UserEmail = BaseModelInterface & Node & {
  __typename?: 'UserEmail';
  confirmed: Scalars['Boolean']['output'];
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type UserFilter = {
  citizenIdNumber?: InputMaybe<StringFilter>;
  civilId?: InputMaybe<StringFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  confirmedAt?: InputMaybe<DateFilter>;
  createdAt?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumStringFilter>;
  id?: InputMaybe<IdFilter>;
  isCompany?: InputMaybe<BoolFilter>;
  isSpecial?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  loyaltyCategory?: InputMaybe<LoyaltyCategoryFilter>;
  loyaltyCategoryId?: InputMaybe<IdFilter>;
  phone?: InputMaybe<StringFilter>;
  resetPass?: InputMaybe<BoolFilter>;
  state?: InputMaybe<EnumStringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userRoleId?: InputMaybe<IdFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserLoanSummary = {
  __typename?: 'UserLoanSummary';
  activeLoan: Scalars['Int']['output'];
  closedLoan: Scalars['Int']['output'];
  totalLoan: Scalars['Int']['output'];
  totalLoanAmount: Scalars['Float']['output'];
  totalQualityNormal: Scalars['Int']['output'];
  totalQualityOverdue: Scalars['Int']['output'];
};

export type UserLoyaltyCategory = BaseModelInterface & Node & {
  __typename?: 'UserLoyaltyCategory';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  gamificationIds: Array<Scalars['ID']['output']>;
  /** Returns list of gamifications */
  gamifications?: Maybe<GamificationConnection>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  isB2b?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /** Returns list of users */
  users?: Maybe<UserConnection>;
};


export type UserLoyaltyCategoryGamificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GamificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};


export type UserLoyaltyCategoryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for UserLoyaltyCategory. */
export type UserLoyaltyCategoryConnection = {
  __typename?: 'UserLoyaltyCategoryConnection';
  /** A list of edges. */
  edges: Array<UserLoyaltyCategoryEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<UserLoyaltyCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for UserLoyaltyCategory. */
export type UserLoyaltyCategoryConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for UserLoyaltyCategory. */
export type UserLoyaltyCategoryConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type UserLoyaltyCategoryEdge = {
  __typename?: 'UserLoyaltyCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserLoyaltyCategory;
};

export type UserPhone = BaseModelInterface & Node & {
  __typename?: 'UserPhone';
  carrier?: Maybe<Scalars['String']['output']>;
  confirmed: Scalars['Boolean']['output'];
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  countryCode: Scalars['String']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for UserPhone. */
export type UserPhoneConnection = {
  __typename?: 'UserPhoneConnection';
  /** A list of edges. */
  edges: Array<UserPhoneEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<UserPhone>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for UserPhone. */
export type UserPhoneConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for UserPhone. */
export type UserPhoneConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type UserPhoneEdge = {
  __typename?: 'UserPhoneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserPhone;
};

export type UserRole = BaseModelInterface & Node & {
  __typename?: 'UserRole';
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for UserRole. */
export type UserRoleConnection = {
  __typename?: 'UserRoleConnection';
  /** A list of edges. */
  edges: Array<UserRoleEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<UserRole>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for UserRole. */
export type UserRoleConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for UserRole. */
export type UserRoleConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type UserRoleEdge = {
  __typename?: 'UserRoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserRole;
};

export type UserRoleFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  region?: InputMaybe<RegionFilter>;
  regionId?: InputMaybe<IdFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type UserSummary = {
  __typename?: 'UserSummary';
  allActiveUsers?: Maybe<Scalars['Int']['output']>;
  allAutoRejectedUsers?: Maybe<Scalars['Int']['output']>;
  allB2bUsers?: Maybe<Scalars['Int']['output']>;
  allIdentityFailedUsers?: Maybe<Scalars['Int']['output']>;
  allIdentitySignatureFailedUsers?: Maybe<Scalars['Int']['output']>;
  allRejectedUsers?: Maybe<Scalars['Int']['output']>;
  allRequestedUsers?: Maybe<Scalars['Int']['output']>;
  allSignatureFailedUsers?: Maybe<Scalars['Int']['output']>;
  allUser?: Maybe<Scalars['Int']['output']>;
  allVerifiedUser?: Maybe<Scalars['Int']['output']>;
};

/** Autogenerated input type of UserUpdate */
export type UserUpdateInput = {
  address?: InputMaybe<AddressInput>;
  auditComment?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  birthday?: InputMaybe<Scalars['ISO8601Date']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  faceIdToken?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Verification = BaseModelInterface & Node & VerificationInterface & {
  __typename?: 'Verification';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  merchantId?: Maybe<Scalars['ID']['output']>;
  modifyType?: Maybe<LoanModificationModifyType>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  requester?: Maybe<User>;
  respondAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  responder?: Maybe<User>;
  status: VerificationStatus;
  target?: Maybe<Node>;
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** The connection type for Verification. */
export type VerificationConnection = {
  __typename?: 'VerificationConnection';
  /** A list of edges. */
  edges: Array<VerificationEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Verification>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Verification. */
export type VerificationConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Verification. */
export type VerificationConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type VerificationEdge = {
  __typename?: 'VerificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Verification;
};

export type VerificationFilter = {
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchantId?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  requester?: InputMaybe<UserFilter>;
  requesterId?: InputMaybe<IdFilter>;
  respondAt?: InputMaybe<DateFilter>;
  responder?: InputMaybe<UserFilter>;
  responderId?: InputMaybe<IdFilter>;
  status?: InputMaybe<EnumStringFilter>;
  targetId?: InputMaybe<IdFilter>;
  targetType?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** An object with an ID. */
export type VerificationInterface = {
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  merchantId?: Maybe<Scalars['ID']['output']>;
  modifyType?: Maybe<LoanModificationModifyType>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  requester?: Maybe<User>;
  respondAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  responder?: Maybe<User>;
  status: VerificationStatus;
  target?: Maybe<Node>;
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum VerificationStatus {
  /** expired */
  Expired = 'expired',
  /** pending */
  Pending = 'pending',
  /** rejected */
  Rejected = 'rejected',
  /** verified */
  Verified = 'verified'
}

export type WalletCrypto = BaseModelInterface & Node & WalletInterface & {
  __typename?: 'WalletCrypto';
  account?: Maybe<Scalars['String']['output']>;
  availableAmount?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  freezeAmount?: Maybe<Scalars['Float']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  lockedAmount?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Node>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  startsDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status?: Maybe<WalletStatus>;
  /** Returns list of transactions */
  transactions: TransactionConnection;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type WalletCryptoTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WalletFiat = BaseModelInterface & Node & WalletInterface & {
  __typename?: 'WalletFiat';
  account?: Maybe<Scalars['String']['output']>;
  availableAmount?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  freezeAmount?: Maybe<Scalars['Float']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  lockedAmount?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Node>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  startsDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status?: Maybe<WalletStatus>;
  /** Returns list of transactions */
  transactions: TransactionConnection;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


export type WalletFiatTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

export type WalletFilter = {
  availableAmount?: InputMaybe<IntFilter>;
  balance?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  freezeAmount?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  merchantName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<IdFilter>;
  ownerType?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  storeName?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

/** An object with an ID. */
export type WalletInterface = {
  account?: Maybe<Scalars['String']['output']>;
  availableAmount?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  freezeAmount?: Maybe<Scalars['Float']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  lockedAmount?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Node>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  startsDate?: Maybe<Scalars['ISO8601DateTime']['output']>;
  status?: Maybe<WalletStatus>;
  /** Returns list of transactions */
  transactions: TransactionConnection;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};


/** An object with an ID. */
export type WalletInterfaceTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFilter>;
};

/** The connection type for WalletInterface. */
export type WalletInterfaceConnection = {
  __typename?: 'WalletInterfaceConnection';
  /** A list of edges. */
  edges: Array<WalletInterfaceEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<WalletInterface>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for WalletInterface. */
export type WalletInterfaceConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for WalletInterface. */
export type WalletInterfaceConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type WalletInterfaceEdge = {
  __typename?: 'WalletInterfaceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WalletInterface;
};

export enum WalletStatus {
  /** active */
  Active = 'active',
  /** closed */
  Closed = 'closed',
  /** locked */
  Locked = 'locked'
}

export type WalletTransactionFilter = {
  accountNumber?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  archived?: InputMaybe<BoolFilter>;
  authorizedAt?: InputMaybe<DateFilter>;
  authorizedById?: InputMaybe<IdFilter>;
  balance?: InputMaybe<IntFilter>;
  bankTransfer?: InputMaybe<BankTransferFilter>;
  category?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  date?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchantName?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<IdFilter>;
  sourceType?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  storeName?: InputMaybe<StringFilter>;
  transactionAt?: InputMaybe<DateFilter>;
  typeCode?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  wallet?: InputMaybe<WalletFilter>;
  walletId?: InputMaybe<IdFilter>;
  walletTransactionId?: InputMaybe<IdFilter>;
  walletType?: InputMaybe<EnumStringFilter>;
  withdrawTransaction?: InputMaybe<WalletTransactionFilter>;
};

export enum WalletTransactionTypeCode {
  /** credit */
  Credit = 'credit',
  /** debit */
  Debit = 'debit'
}

/** WorkingHour */
export type WorkingHour = BaseModelInterface & Node & {
  __typename?: 'WorkingHour';
  createdAt: Scalars['ISO8601DateTime']['output'];
  dayOfWeek: WorkingHourDayOfWeeks;
  endTime: Scalars['String']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  ownerId: Scalars['ID']['output'];
  ownerType?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum WorkingHourDayOfWeeks {
  /** friday */
  Friday = 'friday',
  /** monday */
  Monday = 'monday',
  /** saturday */
  Saturday = 'saturday',
  /** sunday */
  Sunday = 'sunday',
  /** thursday */
  Thursday = 'thursday',
  /** tuesday */
  Tuesday = 'tuesday',
  /** wednesday */
  Wednesday = 'wednesday'
}

export type XacApi = {
  __typename?: 'XacApi';
  /** Return xac account statements */
  accountStatements?: Maybe<Scalars['JSON']['output']>;
  /** Return xac conditions */
  conditions?: Maybe<Scalars['JSON']['output']>;
  /** Return xac form data */
  creditScoreFields?: Maybe<Scalars['JSON']['output']>;
};


export type XacApiAccountStatementsArgs = {
  id: Scalars['ID']['input'];
};

export type XacCreditScore = BaseModelInterface & Node & {
  __typename?: 'XacCreditScore';
  address?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  businessSector?: Maybe<Scalars['String']['output']>;
  canCreateNew?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentAccount?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  feeAmount?: Maybe<Scalars['Float']['output']>;
  feeFree?: Maybe<Scalars['Boolean']['output']>;
  feePaidAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  joblessMembers?: Maybe<Scalars['String']['output']>;
  loan?: Maybe<LoanLong>;
  message?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSON']['output']>;
  request?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<XacCreditScoreStatus>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  worksCount?: Maybe<Scalars['Int']['output']>;
  workspan?: Maybe<Scalars['String']['output']>;
};

/** The connection type for XacCreditScore. */
export type XacCreditScoreConnection = {
  __typename?: 'XacCreditScoreConnection';
  /** A list of edges. */
  edges: Array<XacCreditScoreEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<XacCreditScore>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for XacCreditScore. */
export type XacCreditScoreConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for XacCreditScore. */
export type XacCreditScoreConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type XacCreditScoreEdge = {
  __typename?: 'XacCreditScoreEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: XacCreditScore;
};

export type XacCreditScoreFilter = {
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  expiresAt?: InputMaybe<DateFilter>;
  feeAmount?: InputMaybe<IntFilter>;
  feePaidAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  loan?: InputMaybe<LoanFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

export enum XacCreditScoreStatus {
  /** amount_rejected */
  AmountRejected = 'amount_rejected',
  /** cib_failed */
  CibFailed = 'cib_failed',
  /** confirmed */
  Confirmed = 'confirmed',
  /** expired */
  Expired = 'expired',
  /** fee_paid */
  FeePaid = 'fee_paid',
  /** fee_pending */
  FeePending = 'fee_pending',
  /** limited */
  Limited = 'limited',
  /** org_rejected */
  OrgRejected = 'org_rejected',
  /** overdue */
  Overdue = 'overdue',
  /** rejected */
  Rejected = 'rejected',
  /** scoring_rejected */
  ScoringRejected = 'scoring_rejected',
  /** started */
  Started = 'started',
  /** system_failed */
  SystemFailed = 'system_failed',
  /** unknown */
  Unknown = 'unknown',
  /** used */
  Used = 'used'
}

/** ZMS. */
export type Zms = BaseModelInterface & Node & {
  __typename?: 'Zms';
  action?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description: Scalars['String']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  lCode?: Maybe<Scalars['String']['output']>;
  loan: LoanInterface;
  loanId: Scalars['ID']['output'];
  number: Scalars['String']['output'];
  patchNumber: Scalars['String']['output'];
  preferences?: Maybe<Scalars['String']['output']>;
  quality: Quality;
  response: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId: Scalars['ID']['output'];
  zmsStatus: ZmsStatus;
};

/** The connection type for Zms. */
export type ZmsConnection = {
  __typename?: 'ZmsConnection';
  /** A list of edges. */
  edges: Array<ZmsEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<Zms>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for Zms. */
export type ZmsConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for Zms. */
export type ZmsConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type ZmsEdge = {
  __typename?: 'ZmsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Zms;
};

export type ZmsFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  loan?: InputMaybe<LoanFilter>;
  loanId?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  patchNumber?: InputMaybe<StringFilter>;
  quality?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  userId?: InputMaybe<IdFilter>;
  zmsStatus?: InputMaybe<EnumStringFilter>;
};

export enum ZmsStatus {
  /** failed */
  Failed = 'failed',
  /** success */
  Success = 'success'
}

/** Autogenerated input type of addressCreate */
export type AddressCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  districtId?: InputMaybe<Scalars['ID']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  ownerId: Scalars['ID']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  quarterId: Scalars['ID']['input'];
  stateId?: InputMaybe<Scalars['ID']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  village?: InputMaybe<Scalars['String']['input']>;
  what3words?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of agreementAccept */
export type AgreementAcceptInput = {
  agreementId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Int']['input'];
};

/** Autogenerated input type of agreementCreate */
export type AgreementCreateInput = {
  audienceKind: AgreementAudienceKind;
  category: AgreementCategory;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  htmlContent?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  preferences: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
};

/** Autogenerated input type of agreementDestroy */
export type AgreementDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of articleArticleCreate */
export type ArticleArticleCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  categoryId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ArticleArticleStatuses>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
  videos?: InputMaybe<Array<Scalars['Upload']['input']>>;
};

/** Autogenerated input type of articleArticleDestroy */
export type ArticleArticleDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of articleArticleUpdate */
export type ArticleArticleUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  categoryId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['Upload']['input']>>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ArticleArticleStatuses>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
  videos?: InputMaybe<Array<Scalars['Upload']['input']>>;
};

/** Autogenerated input type of articleCategoryCreate */
export type ArticleCategoryCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of articleCategoryDestroy */
export type ArticleCategoryDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of articleCategoryUpdate */
export type ArticleCategoryUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of assignBankTransaction */
export type AssignBankTransactionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  targetId: Scalars['ID']['input'];
};

/** Autogenerated input type of assignPayment */
export type AssignPaymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  targetId: Scalars['ID']['input'];
};

/** Autogenerated input type of authorizeWalletWithdraw */
export type AuthorizeWalletWithdrawInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

/** Autogenerated input type of b2bUserCreate */
export type B2bUserCreateInput = {
  b2bContacts?: InputMaybe<Scalars['JSON']['input']>;
  citizenIdNumber: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  note: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

/** Autogenerated input type of b2bUserCreditScoreCreate */
export type B2bUserCreditScoreCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['Float']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of b2bUserUpdate */
export type B2bUserUpdateInput = {
  b2bContacts?: InputMaybe<Scalars['JSON']['input']>;
  citizenIdNumber?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of bankAccountCreate */
export type BankAccountCreateInput = {
  bankId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isConfirm?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['String']['input'];
  ownerId: Scalars['ID']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated input type of bankAccountDeactivate */
export type BankAccountDeactivateInput = {
  bankId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of bankAccountDestroy */
export type BankAccountDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of bankAccountMakeDefault */
export type BankAccountMakeDefaultInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of bankAccountUpdate */
export type BankAccountUpdateInput = {
  bankId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isConfirm?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  ownerType?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of bankCGWCreate */
export type BankCgwCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isCredit?: InputMaybe<Scalars['Boolean']['input']>;
  minBalance?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<BankCgwStatus>;
  transferAccount: Scalars['String']['input'];
  transferPassword: Scalars['String']['input'];
  transferUsername: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

/** Autogenerated input type of bankCGWStatements */
export type BankCgwStatementsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated input type of bankCGWUpdate */
export type BankCgwUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isCredit?: InputMaybe<Scalars['Boolean']['input']>;
  minBalance?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<BankCgwStatus>;
  transferAccount?: InputMaybe<Scalars['String']['input']>;
  transferPassword?: InputMaybe<Scalars['String']['input']>;
  transferUsername?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of bankTransactionCaptureManual */
export type BankTransactionCaptureManualInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customDescription: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of bankTransactionMock */
export type BankTransactionMockInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of bankTransferResend */
export type BankTransferResendInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of bankUpdate */
export type BankUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  swiftCode?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of bannerCreate */
export type BannerCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expiresAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  name: Scalars['String']['input'];
  page: Scalars['String']['input'];
  showArrow?: InputMaybe<Scalars['Boolean']['input']>;
  showIndicators?: InputMaybe<Scalars['Boolean']['input']>;
  showThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of bannerDestroy */
export type BannerDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of bannerUpdate */
export type BannerUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expiresAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  showArrow?: InputMaybe<Scalars['Boolean']['input']>;
  showIndicators?: InputMaybe<Scalars['Boolean']['input']>;
  showThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of calculateReportRow */
export type CalculateReportRowInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Report parameters */
  params?: InputMaybe<Scalars['JSON']['input']>;
  /** Report template */
  template?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of captureManualInvoice */
export type CaptureManualInvoiceInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of categoryCreate */
export type CategoryCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Autogenerated input type of categorySaveStructure */
export type CategorySaveStructureInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  tree: Scalars['JSON']['input'];
};

/** Autogenerated input type of categoryUpdate */
export type CategoryUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of checkAccountName */
export type CheckAccountNameInput = {
  accountNumber: Scalars['String']['input'];
  bankCode?: InputMaybe<Scalars['String']['input']>;
  bankId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ownerType?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of confirmableConfirm */
export type ConfirmableConfirmInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated input type of confirmableResend */
export type ConfirmableResendInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of createBiometric */
export type CreateBiometricInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  publicKey: Scalars['String']['input'];
};

/** Autogenerated input type of createDocumentTemplate */
export type CreateDocumentTemplateInput = {
  classification: DocumentTemplateClassifications;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status: DocumentTemplateStatuses;
  template: Scalars['Upload']['input'];
};

/** Autogenerated input type of createMerchantRequestBackoffice */
export type CreateMerchantRequestBackofficeInput = {
  changeAllStore: Scalars['Boolean']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['Upload']['input']>;
  feePercent: Scalars['Float']['input'];
  merchantId: Scalars['Int']['input'];
  requestReason: Scalars['String']['input'];
  settlementDay: Scalars['Int']['input'];
  storeIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Autogenerated input type of createMerchantRequest */
export type CreateMerchantRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['Upload']['input']>;
  deletingSliderImageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  merchantId: Scalars['ID']['input'];
  requestReason: Scalars['String']['input'];
  sliderImages?: InputMaybe<Array<Scalars['Upload']['input']>>;
  socialProfiles?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated input type of creditScoreCalculation */
export type CreditScoreCalculationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  regionId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of creditScoreProductCreate */
export type CreditScoreProductCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  level: Scalars['Int']['input'];
  maxLimit: Scalars['Float']['input'];
  minLimit: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  productCurrency: Scalars['Int']['input'];
  productMaxLimit: Scalars['Float']['input'];
  productMinLimit: Scalars['Float']['input'];
  regionId: Scalars['ID']['input'];
};

/** Autogenerated input type of creditScoreTransactionCreateFromBackoffice */
export type CreditScoreTransactionCreateFromBackofficeInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  targetUserId: Scalars['ID']['input'];
  typeCode: CreditScoreTransactionTypeCode;
};

/** Autogenerated input type of creditScoreTransactionCreate */
export type CreditScoreTransactionCreateInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of cronCreate */
export type CronCreateInput = {
  arguments?: InputMaybe<Scalars['JSON']['input']>;
  class: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cron: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Autogenerated input type of destroyMerchantRequest */
export type DestroyMerchantRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of documentationCreate */
export type DocumentationCreateInput = {
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Autogenerated input type of documentationUpdate */
export type DocumentationUpdateInput = {
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Autogenerated input type of emailRegister */
export type EmailRegisterInput = {
  appScreen?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of faqCreate */
export type FaqCreateInput = {
  answer: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
};

/** Autogenerated input type of faqUpdate */
export type FaqUpdateInput = {
  answer: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  question: Scalars['String']['input'];
};

/** Autogenerated input type of feedbackCreate */
export type FeedbackCreateInput = {
  category: FeedbackCategory;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followUpConsent: Scalars['Boolean']['input'];
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  preferences: Scalars['JSON']['input'];
  senderId: Scalars['ID']['input'];
  systemType: FeedbackSystem;
};

/** Autogenerated input type of feedbackDestroy */
export type FeedbackDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of feedbackRespond */
export type FeedbackRespondInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  preferences: Scalars['JSON']['input'];
  response?: InputMaybe<Scalars['String']['input']>;
  status: FeedbackStatus;
};

/** Autogenerated input type of fileCreate */
export type FileCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
};

/** Autogenerated input type of fileDestroy */
export type FileDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of fixLoan */
export type FixLoanInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of gamificationCreate */
export type GamificationCreateInput = {
  actions?: InputMaybe<Scalars['JSON']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  goalPolicy?: InputMaybe<GamificationGoalPolicy>;
  goalRepeat?: InputMaybe<GoalRepeat>;
  goals?: InputMaybe<Scalars['JSON']['input']>;
  loyaltyCategoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
  startsAt: Scalars['String']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of gamificationDestroy */
export type GamificationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of gamificationRecalibrate */
export type GamificationRecalibrateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cycle: Scalars['String']['input'];
  goalId: Scalars['ID']['input'];
};

/** Autogenerated input type of gamificationUpdate */
export type GamificationUpdateInput = {
  actions?: InputMaybe<Scalars['JSON']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  goalPolicy?: InputMaybe<GamificationGoalPolicy>;
  goals?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  loyaltyCategoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  startsAt?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of generateCheckSum */
export type GenerateCheckSumInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: Scalars['String']['input'];
};

/** Autogenerated input type of generateLoanReport */
export type GenerateLoanReportInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Report parameters */
  params?: InputMaybe<Scalars['JSON']['input']>;
  /** Report template */
  template?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of guideCreate */
export type GuideCreateInput = {
  audienceKind: GuideAudienceKind;
  category: GuideCategory;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  faq?: InputMaybe<Scalars['JSON']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  filePreview?: InputMaybe<Scalars['Upload']['input']>;
  htmlContent?: InputMaybe<Scalars['String']['input']>;
  preferences: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  youtubeEmbedLink?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of guideDestroy */
export type GuideDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of guideUpdate */
export type GuideUpdateInput = {
  audienceKind?: InputMaybe<GuideAudienceKind>;
  category?: InputMaybe<GuideCategory>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  faq?: InputMaybe<Scalars['JSON']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  filePreview?: InputMaybe<Scalars['Upload']['input']>;
  htmlContent?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeEmbedLink?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of invitationDestroy */
export type InvitationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of invitationRespond */
export type InvitationRespondInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  status: InvitationStatus;
  token: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of invoiceOverdue */
export type InvoiceOverdueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of invoicePay */
export type InvoicePayInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of invoiceRefundToUser */
export type InvoiceRefundToUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of kycCheckOtpMongolia */
export type KycCheckOtpMongoliaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  otp: Scalars['String']['input'];
};

/** Autogenerated input type of kycCreateForIndonesia */
export type KycCreateForIndonesiaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  ktp?: InputMaybe<Scalars['Upload']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nik?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of kycCreateForMongolia */
export type KycCreateForMongoliaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ktp?: InputMaybe<Scalars['Upload']['input']>;
  nik?: InputMaybe<Scalars['String']['input']>;
  selfie?: InputMaybe<Scalars['Upload']['input']>;
  signature?: InputMaybe<Scalars['Upload']['input']>;
};

/** Autogenerated input type of kycCreateForOtpMongolia */
export type KycCreateForOtpMongoliaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  nik?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of kycCreateForVietnam */
export type KycCreateForVietnamInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of kycDestroy */
export type KycDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of kycExecuteResult */
export type KycExecuteResultInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  sessionId: Scalars['String']['input'];
};

/** Autogenerated input type of kycFaceCompare */
export type KycFaceCompareInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  targetKey: Scalars['String']['input'];
};

/** Autogenerated input type of kycLivenessCheckForBss */
export type KycLivenessCheckForBssInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstImage: Scalars['Upload']['input'];
  id: Scalars['ID']['input'];
  secondImage: Scalars['Upload']['input'];
};

/** Autogenerated input type of kycOtpGenerateMongolia */
export type KycOtpGenerateMongoliaInput = {
  channel: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of kycRecreateForMongolia */
export type KycRecreateForMongoliaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of kycUpdateForIndonesia */
export type KycUpdateForIndonesiaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactRelation?: InputMaybe<ContactRelation>;
  department?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<Education>;
  emergencyContactName?: InputMaybe<Scalars['String']['input']>;
  emergencyContactPhone?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  industry?: InputMaybe<Scalars['String']['input']>;
  maritalStatus?: InputMaybe<MaritalStatus>;
  numberOfChildren?: InputMaybe<NumberOfChildren>;
  position?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  residentOwnerStatus?: InputMaybe<ResidentOwnerStatus>;
  salaryIncome?: InputMaybe<Scalars['Float']['input']>;
  startingPeriod?: InputMaybe<StartingPeriod>;
};

/** Autogenerated input type of kycUpdateForMongolia */
export type KycUpdateForMongoliaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactRelation?: InputMaybe<ContactRelation>;
  contactRelationTwo?: InputMaybe<ContactRelationTwo>;
  department?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<Education>;
  emergencyContactName?: InputMaybe<Scalars['String']['input']>;
  emergencyContactNameTwo?: InputMaybe<Scalars['String']['input']>;
  emergencyContactPhone?: InputMaybe<Scalars['String']['input']>;
  emergencyContactPhoneTwo?: InputMaybe<Scalars['String']['input']>;
  emergencyContactSurname?: InputMaybe<Scalars['String']['input']>;
  emergencyContactSurnameTwo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  industry?: InputMaybe<Scalars['String']['input']>;
  ktp?: InputMaybe<Scalars['Upload']['input']>;
  maritalStatus?: InputMaybe<MaritalStatus>;
  numberOfChildren?: InputMaybe<NumberOfChildren>;
  passportImage?: InputMaybe<Scalars['Upload']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  residentOwnerStatus?: InputMaybe<ResidentOwnerStatus>;
  salaryIncome?: InputMaybe<Scalars['Float']['input']>;
  selfie?: InputMaybe<Scalars['Upload']['input']>;
  signature?: InputMaybe<Scalars['Upload']['input']>;
  startingPeriod?: InputMaybe<StartingPeriod>;
};

/** Autogenerated input type of kycUserIdConfirmationForBss */
export type KycUserIdConfirmationForBssInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of kycUserInformationFormForBss */
export type KycUserInformationFormForBssInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of loanActivateWithoutAdvance */
export type LoanActivateWithoutAdvanceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of loanCancel */
export type LoanCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of loanCreateByMerchant */
export type LoanCreateByMerchantInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  storeId: Scalars['ID']['input'];
};

/** Autogenerated input type of loanCreate */
export type LoanCreateInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Float']['input'];
  callbackUrl?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  merchantUserId?: InputMaybe<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
  requestId?: InputMaybe<Scalars['String']['input']>;
  storeId: Scalars['ID']['input'];
};

/** Autogenerated input type of loanLongCheck */
export type LoanLongCheckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of loanModificationVerificationCreate */
export type LoanModificationVerificationCreateInput = {
  airlineFareAmount?: InputMaybe<Scalars['Float']['input']>;
  airlinePassengers?: InputMaybe<Scalars['JSON']['input']>;
  airlineTaxAmount?: InputMaybe<Scalars['Float']['input']>;
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  loanAmount: Scalars['Float']['input'];
  loanId: Scalars['ID']['input'];
  loanNumber: Scalars['String']['input'];
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  merchantId: Scalars['ID']['input'];
  merchantName: Scalars['String']['input'];
  modifyType: LoanModificationModifyType;
  purchaseDate: Scalars['String']['input'];
  requestReason?: InputMaybe<LoanModifyRequestReason>;
  requesterId: Scalars['ID']['input'];
  responderId: Scalars['ID']['input'];
  storeName: Scalars['String']['input'];
};

/** Autogenerated input type of loanModifyRequestDestroy */
export type LoanModifyRequestDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of loanProductCreate */
export type LoanProductCreateInput = {
  advancePercent?: InputMaybe<Scalars['Float']['input']>;
  advanceSpcPercent?: InputMaybe<Scalars['Float']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dedicatedClass?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  divisionPeriod: Scalars['Int']['input'];
  duration: Scalars['Int']['input'];
  durationUnit: DurationUnit;
  hasAdvance?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isAdvanceSpc?: InputMaybe<Scalars['Boolean']['input']>;
  isLockSpc?: InputMaybe<Scalars['Boolean']['input']>;
  maxLoanAmount: Scalars['Float']['input'];
  minLoanAmount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<ProductStatus>;
};

/** Autogenerated input type of loanProductUpdate */
export type LoanProductUpdateInput = {
  advancePercent?: InputMaybe<Scalars['Float']['input']>;
  advanceSpcPercent?: InputMaybe<Scalars['Float']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dedicatedClass?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  divisionPeriod?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  durationUnit?: InputMaybe<DurationUnit>;
  hasAdvance?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  isAdvanceSpc?: InputMaybe<Scalars['Boolean']['input']>;
  isLockSpc?: InputMaybe<Scalars['Boolean']['input']>;
  maxLoanAmount?: InputMaybe<Scalars['Float']['input']>;
  minLoanAmount?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<ProductStatus>;
};

/** Autogenerated input type of loanReject */
export type LoanRejectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isSystem?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of loanUpdate */
export type LoanUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  id: Scalars['ID']['input'];
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  merchantUserId?: InputMaybe<Scalars['ID']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  registerNum?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  status?: InputMaybe<LoanStatus>;
  storeContractNumber?: InputMaybe<Scalars['String']['input']>;
  storeFeePercent?: InputMaybe<Scalars['Float']['input']>;
  storeId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of loanVerify */
export type LoanVerifyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstPaymentDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  id: Scalars['ID']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
  productId: Scalars['ID']['input'];
};

/** Autogenerated input type of loanWithdraw */
export type LoanWithdrawInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  modificationId: Scalars['ID']['input'];
  userBankAccountId: Scalars['ID']['input'];
};

/** Autogenerated input type of loyaltyCategoryCreate */
export type LoyaltyCategoryCreateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isB2b?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  preferences: Scalars['JSON']['input'];
};

/** Autogenerated input type of loyaltyCategoryUpdate */
export type LoyaltyCategoryUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  isB2b?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
};

/** Autogenerated input type of merchantCreate */
export type MerchantCreateInput = {
  address: Scalars['String']['input'];
  brandName?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  contract?: InputMaybe<Scalars['Upload']['input']>;
  contractCreateDate: Scalars['ISO8601DateTime']['input'];
  contractEndDate: Scalars['ISO8601DateTime']['input'];
  contractExtensionDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
  contractStatus: ContractStatus;
  contractType: Contract;
  contractorName?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  feePercent: Scalars['Float']['input'];
  icon?: InputMaybe<Scalars['Upload']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isLockSpc?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlyPremium?: InputMaybe<Scalars['Boolean']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  merchantSystemFee: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  register: Scalars['String']['input'];
  relatedCategoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  settlementDay: Scalars['Int']['input'];
  settlementType?: InputMaybe<Scalars['String']['input']>;
  signatureAddress?: InputMaybe<Scalars['String']['input']>;
  signatureEmail?: InputMaybe<Scalars['String']['input']>;
  signatureName?: InputMaybe<Scalars['String']['input']>;
  signaturePhone?: InputMaybe<Scalars['String']['input']>;
  signaturePosition?: InputMaybe<Scalars['String']['input']>;
  sliderImages?: InputMaybe<Array<Scalars['Upload']['input']>>;
  socialProfiles?: InputMaybe<Scalars['JSON']['input']>;
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  timetable?: InputMaybe<Scalars['String']['input']>;
  webhook?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of merchantDeactivate */
export type MerchantDeactivateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of merchantTagCreate */
export type MerchantTagCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of merchantTagDestroy */
export type MerchantTagDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of merchantTagUpdate */
export type MerchantTagUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of merchantUpdate */
export type MerchantUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<Scalars['JSON']['input']>;
  contract?: InputMaybe<Scalars['Upload']['input']>;
  contractCreateDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractEndDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractExtensionDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
  contractStatus?: InputMaybe<ContractStatus>;
  contractType?: InputMaybe<Contract>;
  contractorName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  feePercent?: InputMaybe<Scalars['Float']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  isLockSpc?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlyPremium?: InputMaybe<Scalars['Boolean']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  merchantSystemFee?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  register?: InputMaybe<Scalars['String']['input']>;
  relatedCategoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  settlementDay?: InputMaybe<Scalars['Int']['input']>;
  settlementType?: InputMaybe<Scalars['String']['input']>;
  signatureAddress?: InputMaybe<Scalars['String']['input']>;
  signatureEmail?: InputMaybe<Scalars['String']['input']>;
  signatureName?: InputMaybe<Scalars['String']['input']>;
  signaturePhone?: InputMaybe<Scalars['String']['input']>;
  signaturePosition?: InputMaybe<Scalars['String']['input']>;
  sliderImageSignedIds?: InputMaybe<Array<Scalars['String']['input']>>;
  sliderImages?: InputMaybe<Array<Scalars['Upload']['input']>>;
  socialProfiles?: InputMaybe<Scalars['JSON']['input']>;
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  timetable?: InputMaybe<Scalars['String']['input']>;
  webhook?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of merchantUserCreate */
export type MerchantUserCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  merchantId: Scalars['ID']['input'];
  role: MerchantUserRole;
  status: MerchantUserStatus;
  storeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated input type of merchantUserInvite */
export type MerchantUserInviteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  merchantId: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<MerchantUserRole>;
  status?: InputMaybe<MerchantUserStatus>;
  storeId?: InputMaybe<Scalars['ID']['input']>;
  storeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Autogenerated input type of merchantUserRemove */
export type MerchantUserRemoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of merchantUserUpdate */
export type MerchantUserUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<MerchantUserRole>;
  status?: InputMaybe<MerchantUserStatus>;
  storeId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of mobileRegister */
export type MobileRegisterInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone: Scalars['String']['input'];
};

/** Autogenerated input type of passwordChange */
export type PasswordChangeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confirmPassword: Scalars['String']['input'];
  currentPassword: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  newPassword: Scalars['String']['input'];
};

/** Autogenerated input type of passwordCheck */
export type PasswordCheckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currentPassword: Scalars['String']['input'];
};

/** Autogenerated input type of passwordForget */
export type PasswordForgetInput = {
  appScreen?: InputMaybe<Scalars['String']['input']>;
  channel: ReceiveTokenChannel;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identify: Scalars['String']['input'];
};

/** Autogenerated input type of passwordRegisterForIndonesia */
export type PasswordRegisterForIndonesiaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confirmPassword: Scalars['String']['input'];
  emailSid: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  regionId?: InputMaybe<Scalars['ID']['input']>;
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of passwordRegister */
export type PasswordRegisterInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confirmPassword: Scalars['String']['input'];
  emailSid: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneSid: Scalars['ID']['input'];
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of passwordReset */
export type PasswordResetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  confirmPassword: Scalars['String']['input'];
  confirmationId: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};

/** Autogenerated input type of paymentMethodCreate */
export type PaymentMethodCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<MethodStatus>;
  type: Scalars['String']['input'];
};

/** Autogenerated input type of paymentMethodUpdate */
export type PaymentMethodUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<MethodStatus>;
};

/** Autogenerated input type of paymentPaymentCapture */
export type PaymentPaymentCaptureInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of paymentPaymentCreate */
export type PaymentPaymentCreateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  methodId: Scalars['ID']['input'];
  params?: InputMaybe<Scalars['JSON']['input']>;
  targetId: Scalars['ID']['input'];
};

/** Autogenerated input type of penaltyUpdate */
export type PenaltyUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  paidAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  status?: InputMaybe<PenaltyStatus>;
};

/** Autogenerated input type of registerSubId */
export type RegisterSubIdInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deviceModel: Scalars['String']['input'];
  deviceOs: Scalars['String']['input'];
  subscribed: Scalars['Boolean']['input'];
  subscriptionId: Scalars['String']['input'];
};

/** Autogenerated input type of respondMerchantRequestBackoffice */
export type RespondMerchantRequestBackofficeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  respond: VerificationStatus;
  respondReason?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of respondMerchantRequest */
export type RespondMerchantRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  respond: VerificationStatus;
  respondReason?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of sendOtpByEmailForIndonesia */
export type SendOtpByEmailForIndonesiaInput = {
  appScreen?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of sendOtpByPhoneForIndonesia */
export type SendOtpByPhoneForIndonesiaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone: Scalars['String']['input'];
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of settlementTransferToStore */
export type SettlementTransferToStoreInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  transferDate: Scalars['ISO8601DateTime']['input'];
};

/** Autogenerated input type of signUserContract */
export type SignUserContractInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SnapShotLoan = BaseModelInterface & Node & {
  __typename?: 'snapShotLoan';
  amount?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  intAmount?: Maybe<Scalars['Float']['output']>;
  intRate?: Maybe<Scalars['Float']['output']>;
  loanId?: Maybe<Scalars['ID']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  overdueDays?: Maybe<Scalars['Int']['output']>;
  paidAmount?: Maybe<Scalars['Float']['output']>;
  penAmount?: Maybe<Scalars['Float']['output']>;
  penaltyRate?: Maybe<Scalars['Float']['output']>;
  productId?: Maybe<Scalars['ID']['output']>;
  quality?: Maybe<LoanQuality>;
  snapshotDate?: Maybe<Scalars['ISO8601Date']['output']>;
  status?: Maybe<LoanStatus>;
  storeId?: Maybe<Scalars['ID']['output']>;
  totalPenalty?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

/** The connection type for snapShotLoan. */
export type SnapShotLoanConnection = {
  __typename?: 'snapShotLoanConnection';
  /** A list of edges. */
  edges: Array<SnapShotLoanEdge>;
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>;
  /** A list of nodes. */
  nodes: Array<SnapShotLoan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  sum: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
};


/** The connection type for snapShotLoan. */
export type SnapShotLoanConnectionMetricsArgs = {
  dateField: Scalars['String']['input'];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars['String']['input']>;
};


/** The connection type for snapShotLoan. */
export type SnapShotLoanConnectionSumArgs = {
  field: Scalars['String']['input'];
};

/** An edge in a connection. */
export type SnapShotLoanEdge = {
  __typename?: 'snapShotLoanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SnapShotLoan;
};

export type SnapshotLoanFilter = {
  amount?: InputMaybe<IntFilter>;
  balance?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  intAmount?: InputMaybe<IntFilter>;
  loan?: InputMaybe<LoanFilter>;
  loanId?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  overdueDays?: InputMaybe<IntFilter>;
  paidAmount?: InputMaybe<IntFilter>;
  penAmount?: InputMaybe<IntFilter>;
  penaltyRate?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductFilter>;
  productId?: InputMaybe<IdFilter>;
  quality?: InputMaybe<EnumStringFilter>;
  snapshotDate?: InputMaybe<DateFilter>;
  status?: InputMaybe<EnumStringFilter>;
  store?: InputMaybe<StoreFilter>;
  storeId?: InputMaybe<IdFilter>;
  totalPenalty?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

/** Autogenerated input type of spcTransfer */
export type SpcTransferInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  destination: Scalars['String']['input'];
  source: Scalars['String']['input'];
};

/** Autogenerated input type of spcUpdateRate */
export type SpcUpdateRateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

/** Autogenerated input type of spcWithdraw */
export type SpcWithdrawInput = {
  accountNumber: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type SpecialUserVerification = BaseModelInterface & Node & VerificationInterface & {
  __typename?: 'specialUserVerification';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** ID of the object. */
  id: Scalars['ID']['output'];
  merchantId?: Maybe<Scalars['ID']['output']>;
  modifyType?: Maybe<LoanModificationModifyType>;
  number: Scalars['String']['output'];
  preferences?: Maybe<Scalars['JSON']['output']>;
  requester?: Maybe<User>;
  respondAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  responder?: Maybe<User>;
  status: VerificationStatus;
  target?: Maybe<Node>;
  token: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of specialUserVerificationCreate */
export type SpecialUserVerificationCreateInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  requestReason: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of storeCreate */
export type StoreCreateInput = {
  address: Scalars['String']['input'];
  availableProductIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  bankAccountId?: InputMaybe<Scalars['ID']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['Upload']['input']>;
  contractCreateDate: Scalars['ISO8601DateTime']['input'];
  contractEndDate: Scalars['ISO8601DateTime']['input'];
  contractExtensionDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractNumber: Scalars['String']['input'];
  contractStatus: ContractStatus;
  contractType: StoreContract;
  description: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  feePercent: Scalars['Float']['input'];
  isActive: Scalars['Boolean']['input'];
  isAirline?: InputMaybe<Scalars['Boolean']['input']>;
  isLockSpc?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlyPremium?: InputMaybe<Scalars['Boolean']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  merchantId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  register: Scalars['String']['input'];
  settlementDay: Scalars['Int']['input'];
  settlementType?: InputMaybe<Scalars['String']['input']>;
  socialProfiles?: InputMaybe<Scalars['JSON']['input']>;
  timetable: Scalars['String']['input'];
  webhook?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of storeUpdate */
export type StoreUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  availableProductIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  bankAccountId?: InputMaybe<Scalars['ID']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['Upload']['input']>;
  contractCreateDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractEndDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractExtensionDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
  contractStatus?: InputMaybe<ContractStatus>;
  contractType?: InputMaybe<StoreContract>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  feePercent?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isAirline?: InputMaybe<Scalars['Boolean']['input']>;
  isLockSpc?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlyPremium?: InputMaybe<Scalars['Boolean']['input']>;
  isShow?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  loanModificationClosedDays?: InputMaybe<Scalars['Int']['input']>;
  loanModificationConfirmedDays?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  register?: InputMaybe<Scalars['String']['input']>;
  settlementDay?: InputMaybe<Scalars['Int']['input']>;
  settlementType?: InputMaybe<Scalars['String']['input']>;
  socialProfiles?: InputMaybe<Scalars['JSON']['input']>;
  timetable?: InputMaybe<Scalars['String']['input']>;
  webhook?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of updateDocumentTemplate */
export type UpdateDocumentTemplateInput = {
  classification?: InputMaybe<DocumentTemplateClassifications>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DocumentTemplateStatuses>;
  template?: InputMaybe<Scalars['Upload']['input']>;
};

/** Autogenerated input type of updateMerchantRequest */
export type UpdateMerchantRequestInput = {
  changeAllStore?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['Upload']['input']>;
  deletingSliderImageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  feePercent?: InputMaybe<Scalars['Float']['input']>;
  icon?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  requestReason?: InputMaybe<Scalars['String']['input']>;
  settlementDay?: InputMaybe<Scalars['Int']['input']>;
  sliderImageSignedIds?: InputMaybe<Array<Scalars['String']['input']>>;
  sliderImages?: InputMaybe<Array<Scalars['Upload']['input']>>;
  socialProfiles?: InputMaybe<Scalars['JSON']['input']>;
  storeIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Autogenerated input type of userAssetCreate */
export type UserAssetCreateInput = {
  assetId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roleId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of userAssetUpdate */
export type UserAssetUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  roleId: Scalars['ID']['input'];
};

/** Autogenerated input type of userChangeState */
export type UserChangeStateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  state: KycState;
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of userCreate */
export type UserCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  faceIdToken?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  invitationToken: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneSid: Scalars['ID']['input'];
  regionId: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of userDelete */
export type UserDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of userDeviceDestroy */
export type UserDeviceDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of userDeviceSendOtp */
export type UserDeviceSendOtpInput = {
  appScreen?: InputMaybe<Scalars['String']['input']>;
  channel: DeviceChannel;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deviceId: Scalars['String']['input'];
};

/** Autogenerated input type of userDisable */
export type UserDisableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** Autogenerated input type of userFindByPhone */
export type UserFindByPhoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

/** Autogenerated input type of userGenerateReference */
export type UserGenerateReferenceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pinCode?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of userGetStatements */
export type UserGetStatementsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  statementId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of userLoanModificationRespond */
export type UserLoanModificationRespondInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  respondStatus: VerificationStatus;
};

/** Autogenerated input type of userPinCheck */
export type UserPinCheckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pin: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of userPinCreate */
export type UserPinCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pin: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of userPinForget */
export type UserPinForgetInput = {
  appScreen?: InputMaybe<Scalars['String']['input']>;
  channel: ReceiveTokenChannel;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

/** Autogenerated input type of userReCreateStatements */
export type UserReCreateStatementsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  statementId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of userRequestCreditScore */
export type UserRequestCreditScoreInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of userRoleAddUser */
export type UserRoleAddUserInput = {
  assetId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  userIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated input type of userRoleCreate */
export type UserRoleCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Autogenerated input type of userRoleDelete */
export type UserRoleDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of userRoleRemoveUser */
export type UserRoleRemoveUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['ID']['input']>;
};

/** Autogenerated input type of userRoleUpdate */
export type UserRoleUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Autogenerated input type of userUpdateStatus */
export type UserUpdateStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currentUserId: Scalars['ID']['input'];
  note: Scalars['String']['input'];
  status: Status;
  targetUserId: Scalars['ID']['input'];
};

/** Autogenerated input type of validateOtpEmailForIndonesia */
export type ValidateOtpEmailForIndonesiaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated input type of validateOtpForIndonesia */
export type ValidateOtpForIndonesiaInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated input type of verificationDestroy */
export type VerificationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of verificationRespond */
export type VerificationRespondInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  respond: VerificationStatus;
  respondReason?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of voidPayment */
export type VoidPaymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Payment ID */
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of voidPenalty */
export type VoidPenaltyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  status?: InputMaybe<PenaltyStatus>;
};

/** Autogenerated input type of walletCryptoTransactionCreate */
export type WalletCryptoTransactionCreateInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  destinationWalletId: Scalars['ID']['input'];
  source: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  walletId: Scalars['ID']['input'];
};

/** Autogenerated input type of walletTransactionChange */
export type WalletTransactionChangeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** transaction id */
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  status: TransactionStatus;
};

/** Autogenerated input type of withdrawFiat */
export type WithdrawFiatInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Wallet id */
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of workingHourCreate */
export type WorkingHourCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dayOfWeek: WorkingHourDayOfWeeks;
  endTime: Scalars['String']['input'];
  ownerId: Scalars['ID']['input'];
  preferences?: InputMaybe<Scalars['JSON']['input']>;
  startTime: Scalars['String']['input'];
};

/** Autogenerated input type of xacCalculate */
export type XacCalculateInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of xacChangeCreditAccount */
export type XacChangeCreditAccountInput = {
  account: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of xacCreditScoreCreate */
export type XacCreditScoreCreateInput = {
  address: Scalars['String']['input'];
  businessSector: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currentAccount: Scalars['String']['input'];
  joblessMembers: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  workspan: Scalars['String']['input'];
};

/** Autogenerated input type of xacCreditScoreRecalculate */
export type XacCreditScoreRecalculateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of xacCreditScoreStatusCheck */
export type XacCreditScoreStatusCheckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of xacFindOrCreateAccounts */
export type XacFindOrCreateAccountsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of xacKycCheck */
export type XacKycCheckInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated input type of xacLoanInvoiceCreate */
export type XacLoanInvoiceCreateInput = {
  amount: Scalars['Float']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated input type of zmsMongolBankUpdate */
export type ZmsMongolBankUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  quality?: InputMaybe<Scalars['Int']['input']>;
};
