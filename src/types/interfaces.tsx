export interface Model {
  name?: string;
  user: User;
  embedUrl?: string;
  viewerUrl?: string;
  uid?: string;
  thumbnails?: Thumbnails;
  likeCount?: number;
  viewCount?: number;
}

export interface User {
  username?: string;
  profileUrl?: string;
  displayName?: string;
  avatar: Thumbnails;
  likesUrl: string;
}

export interface Thumbnails extends Model {
  images: Image[];
}

export interface Image extends Model {
  url: string;
  width: number;
  uid: string;
  height: number;
}

export interface Theme {
  white: string;
  backgroundLight: string;
  backgroundmedium: string;
  fontColor: string;
}

export interface Style {
  row?: boolean;
  justify?: string;
  align?: string;
  width?: string;
  heigth?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}
