/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'xml2js' {
    const value: any;
    export default value;
  }

  interface BlogItem {
    title: string;
    link: string;
    pubDate: string;
    description?: string;
  }
  
  interface RSSResult {
    rss: {
      channel: Array<{
        item: Array<{
          title: Array<string>;
          link: Array<string>;
          pubDate: Array<string>;
          description?: Array<string>;
        }>;
      }>;
    };
  }
  

  