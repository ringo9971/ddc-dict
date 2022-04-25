import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v0.17.0/types.ts";
import {
  assertEquals,
  Denops,
  fn,
} from "https://deno.land/x/ddc_vim@v0.17.0/deps.ts#^";

type moji = {
  name:        string;
  description: string;
}

export type CompleteMetadata = {
  name: string;
  moji: string;
  description: string;
}

function getGitmoji(): CompleteMetadata[] {
  const moji = gitmojiJson.gitmojis.map((data: moji) => ({name: data.name, description: data.description}));
  return moji;
}

const gitmojiJson = {
  gitmojis: [
    {
      "name": "vector",
      "description": "",
    },
    {
      "name": "priority_queue",
      "description": "",
    },
    {
      "name": "emplace_back",
      "description": "",
    },
    {
      "name": "emplace",
      "description": "",
    },
    {
      "name": "empty",
      "description": "",
    },
    {
      "name": "vector",
      "description": "",
    },
    {
      "name": "tuple",
      "description": "",
    },
    {
      "name": "upper_bound",
      "description": "",
    },
    {
      "name": "lower_bound",
      "description": "",
    },
    {
      "name": "binary_search",
      "description": "",
    },
    {
      "name": "continue",
      "description": "",
    },
    {
      "name": "break",
      "description": "",
    },
    {
      "name": "reverse",
      "description": "",
    },
    {
      "name": "next_permutation",
      "description": "",
    },
    {
      "name": "transform",
      "description": "",
    },
    {
      "name": "max_element",
      "description": "",
    },
    {
      "name": "min_element",
      "description": "",
    },
    {
      "name": "accumulate",
      "description": "",
    },
  ]
};


export class Source extends BaseSource<Record<string, never>> {
  async gatherCandidates(): Promise<Candidate<CompleteMetadata>[]> {
    const candidates = getGitmoji();
    const ddcCandidates = candidates.flatMap(data => {
      return {
        word: data.name,
        abbr: data.name,
        kind: data.description,
        user_data: {
          name: data.name,
          moji: data.name,
          description: data.description,
        },
      };
    });
    return Promise.resolve(ddcCandidates);
  }

  params() {
    return {};
  }
}

