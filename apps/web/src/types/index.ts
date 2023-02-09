import type { APIError, ErrorEntry, User } from "altogic";

export interface LoginFormData {
  email: string;
  password: string;
  responseMessage?: string;
}

export interface RegisterFormData {
  name: string;
  username: string;
  email: string;
  password: string;
  responseMessage?: string;
}

export interface CreateTopicData {
  title: string;
  content: string;
  responseMessage?: string;
}

export interface UpdateProfileData {
  username?: string;
  password?: string;
  passwordConfirmation?: string;
}

export interface ITopic {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author?: User;
  createdAt: Date;
  updatedAt: Date;
  viewCount: number;
  entryCount: number;
  isPublic: boolean;
}

export interface IEntry {
  _id: string;
  content: string;
  author: User;
  topic: ITopic;
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
}

export interface IUser extends User {
  username: string;
  profilePicture?: string;
}

interface Item extends ErrorEntry {
  details?: {
    field?: string;
  };
}

export interface ResponseError extends APIError {
  items: Item[];
}
