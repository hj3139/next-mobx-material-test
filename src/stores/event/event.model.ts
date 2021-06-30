export enum EventStatus {
  READY = 'READY',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE'
}

interface FileMetadata {
  contentType: string;
  contentLength: number;
}

export interface ResponseFileObject {
  fileObjectId: number;
  fileMetadata: FileMetadata;
  fileName: string;
  fileKey: string;
  bucketName: string;
}

export interface ResponseSns {
  instagramId: string;
  youtubeId: string;
  instagramFollowers: number;
  youtubeSubscriberCount: number;
}

export interface ResponseAccount {
  loginId: string;
  username: string;
  avatar: ResponseFileObject;
  sns: ResponseSns;
}

export interface ResponseBrandForEvent {
  brandId: number;
  brandName: string;
}
export interface ResponseEventListModel {
  eventId: number;
  name: string;
  eventStatus: EventStatus;
  salesStarted: string;
  salesEnded: string;
  targetAmountAttainmentRate: number;
  likeCnt: number;
  customLikeCnt: number;
  thumbnails: ResponseFileObject[];
  images: ResponseFileObject[];
  brand: ResponseBrandForEvent;
  creator: ResponseAccount;
  displayPrice: number;
  onlyExpose: boolean;
}
