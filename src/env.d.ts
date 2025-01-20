interface ImportMetaEnv {
  readonly PUBLIC_LINKEDIN_URL: string;
  readonly PUBLIC_GITHUB_URL: string;
  readonly PUBLIC_RESUME_FILE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
