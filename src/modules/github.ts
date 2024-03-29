export interface GithubUser {
  login: string,
  id: number,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  type: string,
  site_admin: boolean,
}

export interface RepoData {
  id: string,
  name: string,
  full_name: string,
  description: string | null,
  private: boolean,
  owner: GithubUser,
  fork: boolean,
  visibility: string,
  url: string,
  svn_url: string,
}

export async function getUserRepos(username: string): Promise<Array<RepoData>> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return await res.json()
}