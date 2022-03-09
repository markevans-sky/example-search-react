import React from "react";
import "./App.css";
import {
  ContentSearch,
  BrowseableApi,
  Page,
  PageId,
} from "@sky-uk/ixd-search-widget";

class API implements BrowseableApi {
  async getStartPage(): Promise<Page> {
    return Promise.resolve({
      title: "Start page",
      rails: [
        {
          title: "Rail 1",
          items: [
            { content: { title: "Bookmark 1" }, pageId: "abc" },
            { content: { title: "Bookmark 2" }, pageId: "def" },
          ],
          template: "category",
        },
      ],
    });
  }

  async getPage(id: PageId): Promise<Page> {
    return {
      title: "Dummy Page",
      rails: [
        {
          title: "Rail 1",
          items: [
            {
              content: {
                title: "Item 1",
                landscapeImageUrl: "https://picsum.photos/400/225",
              },
            },
            {
              content: {
                title: "Item 2",
                landscapeImageUrl: "https://picsum.photos/400/225",
              },
            },
          ],
          template: "landscape",
        },
        {
          title: "Rail 2",
          items: [
            {
              content: {
                title: "Item 1",
                coverImageUrl: "https://picsum.photos/300/400",
              },
            },
            {
              content: {
                title: "Item 2",
                coverImageUrl: "https://picsum.photos/300/400",
              },
            },
          ],
          template: "cover",
        },
      ],
      pageId: id,
    };
  }
}
const api = new API();

function App() {
  return <ContentSearch browseApi={api} tabs={["browse", "search"]} />;
}

export default App;
