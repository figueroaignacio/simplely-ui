// Components
import { Mdx } from "@/components/mdx/mdx-components";

// Next
import { notFound } from "next/navigation";

// Contentlayer
import { allDocs } from ".contentlayer/generated";

// Styles
import "@/styles/mdx.css";

interface DocPageParams {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}

export default async function DocPage({ params }: DocPageParams) {
  const doc = await getDocFromParams(params.slug);

  return (
    <article>
      <div>
        <h1>{doc.title}</h1>
        <p>{doc.description}</p>
      </div>
      <Mdx code={doc.body.code} />
    </article>
  );
}
