export interface discordMessageRequest {
  type: number;
  data: messageRequestData;
  member: messageRequestMember;
  guild_id: number;
}

export interface messageRequestData {
  name: string;
  options: Array<messageRequestDataOptions>;
}

export interface messageRequestDataOptions {
  name: string;
  type: number;
  value: string;
}

export interface messageRequestMember {
  user: memberUser;
}

export interface memberUser {
  id: number;
  username: string;
}
