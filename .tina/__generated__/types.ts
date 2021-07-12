// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
  JSONObject: any;
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
};

export type FormField = {
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};




export type SelectOption = {
  __typename?: 'SelectOption';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  collection?: Maybe<Section>;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type Section = {
  __typename?: 'Section';
  type?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
  new_doc_ext?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<Document>>>;
};

export type SectionDocumentUnion = Posts_Document | Authors_Document | Pages_Document;

export type SectionParams = {
  posts?: Maybe<Posts_Input>;
  authors?: Maybe<Authors_Input>;
  pages?: Maybe<Pages_Input>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument?: Maybe<Document>;
  updateDocument?: Maybe<SectionDocumentUnion>;
  updatePostsDocument?: Maybe<Posts_Document>;
  updateAuthorsDocument?: Maybe<Authors_Document>;
  updatePagesDocument?: Maybe<Pages_Document>;
};


export type MutationAddPendingDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  collection?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<SectionParams>;
};


export type MutationUpdatePostsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Posts_Input>;
};


export type MutationUpdateAuthorsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Authors_Input>;
};


export type MutationUpdatePagesDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Pages_Input>;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  getDocument?: Maybe<SectionDocumentUnion>;
  getCollections?: Maybe<Array<Maybe<Section>>>;
  getCollection?: Maybe<Section>;
  getPostsDocument?: Maybe<Posts_Document>;
  getPostsList?: Maybe<Array<Maybe<Posts_Document>>>;
  getAuthorsDocument?: Maybe<Authors_Document>;
  getAuthorsList?: Maybe<Array<Maybe<Authors_Document>>>;
  getPagesDocument?: Maybe<Pages_Document>;
  getPagesList?: Maybe<Array<Maybe<Pages_Document>>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>;
};


export type QueryGetPostsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetAuthorsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetPagesDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};

export type Posts_Data = Article_Doc_Data;

export type Posts_Input = {
  article?: Maybe<Article_Doc_Input>;
};

export type Posts_Values = Article_Doc_Values;

export type Posts_Form = Article_Doc_Form;

export type Posts_Document = Node & Document & {
  __typename?: 'Posts_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Posts_Data>;
  values?: Maybe<Posts_Values>;
  form?: Maybe<Posts_Form>;
};

export type Article_Doc_Data = {
  __typename?: 'Article_Doc_Data';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Authors_Document>;
  _body?: Maybe<Scalars['String']>;
};

export type Article_Doc_Values = {
  __typename?: 'Article_Doc_Values';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['Reference']>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type TextField = FormField & {
  __typename?: 'TextField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SelectField = FormField & {
  __typename?: 'SelectField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<SelectOption>>>;
};

export type TextareaField = FormField & {
  __typename?: 'TextareaField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Article_Doc_FormFieldsUnion = TextField | SelectField | TextareaField;

export type Article_Doc_Form = {
  __typename?: 'Article_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Article_Doc_FormFieldsUnion>>>;
};

export type Article_Doc_Input = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
};

export type Authors_Data = Author_Doc_Data;

export type Authors_Input = {
  author?: Maybe<Author_Doc_Input>;
};

export type Authors_Values = Author_Doc_Values;

export type Authors_Form = Author_Doc_Form;

export type Authors_Document = Node & Document & {
  __typename?: 'Authors_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Authors_Data>;
  values?: Maybe<Authors_Values>;
  form?: Maybe<Authors_Form>;
};

export type Author_Doc_Data = {
  __typename?: 'Author_Doc_Data';
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
};

export type Author_Doc_Values = {
  __typename?: 'Author_Doc_Values';
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type Author_Doc_FormFieldsUnion = TextField | TextareaField;

export type Author_Doc_Form = {
  __typename?: 'Author_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Author_Doc_FormFieldsUnion>>>;
};

export type Author_Doc_Input = {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  _body?: Maybe<Scalars['String']>;
};

export type Pages_Data = Page_Doc_Data;

export type Pages_Input = {
  page?: Maybe<Page_Doc_Input>;
};

export type Pages_Values = Page_Doc_Values;

export type Pages_Form = Page_Doc_Form;

export type Pages_Document = Node & Document & {
  __typename?: 'Pages_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Pages_Data>;
  values?: Maybe<Pages_Values>;
  form?: Maybe<Pages_Form>;
};

export type Raw_Data = {
  __typename?: 'Raw_Data';
  description?: Maybe<Scalars['String']>;
};

export type Content_Data = {
  __typename?: 'Content_Data';
  body?: Maybe<Scalars['String']>;
};

export type Image_Data = {
  __typename?: 'Image_Data';
  heading?: Maybe<Scalars['String']>;
  imgDescription?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

export type Page_Blocks_Data = Raw_Data | Content_Data | Image_Data;

export type Page_Doc_Data = {
  __typename?: 'Page_Doc_Data';
  blocks?: Maybe<Array<Maybe<Page_Blocks_Data>>>;
  _body?: Maybe<Scalars['String']>;
};

export type Raw_Values = {
  __typename?: 'Raw_Values';
  description?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type Content_Values = {
  __typename?: 'Content_Values';
  body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type Image_Values = {
  __typename?: 'Image_Values';
  heading?: Maybe<Scalars['String']>;
  imgDescription?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type Page_Blocks_Values = Raw_Values | Content_Values | Image_Values;

export type Page_Doc_Values = {
  __typename?: 'Page_Doc_Values';
  blocks?: Maybe<Array<Maybe<Page_Blocks_Values>>>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type Raw_FormFieldsUnion = TextField;

export type Raw_Form = {
  __typename?: 'Raw_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Raw_FormFieldsUnion>>>;
};

export type Content_FormFieldsUnion = TextareaField;

export type Content_Form = {
  __typename?: 'Content_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Content_FormFieldsUnion>>>;
};

export type Image_FormFieldsUnion = TextField | TextareaField;

export type Image_Form = {
  __typename?: 'Image_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Image_FormFieldsUnion>>>;
};

export type Page_Blocks_BlocksFieldTemplates = {
  __typename?: 'Page_Blocks_BlocksFieldTemplates';
  raw?: Maybe<Raw_Form>;
  content?: Maybe<Content_Form>;
  image?: Maybe<Image_Form>;
};

export type Page_Blocks_BlocksField = FormField & {
  __typename?: 'Page_Blocks_BlocksField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  templates?: Maybe<Page_Blocks_BlocksFieldTemplates>;
};

export type Page_Doc_FormFieldsUnion = Page_Blocks_BlocksField | TextareaField;

export type Page_Doc_Form = {
  __typename?: 'Page_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Page_Doc_FormFieldsUnion>>>;
};

export type Raw_Input = {
  description?: Maybe<Scalars['String']>;
};

export type Content_Input = {
  body?: Maybe<Scalars['String']>;
};

export type Image_Input = {
  heading?: Maybe<Scalars['String']>;
  imgDescription?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

export type Blocks_Input = {
  raw?: Maybe<Raw_Input>;
  content?: Maybe<Content_Input>;
  image?: Maybe<Image_Input>;
};

export type Page_Doc_Input = {
  blocks?: Maybe<Array<Maybe<Blocks_Input>>>;
  _body?: Maybe<Scalars['String']>;
};

