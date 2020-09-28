// @flow strict
import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import { DiscussionEmbed } from 'disqus-react';

type Props = {
  postTitle: string,
  postSlug: string
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const { disqusShortname } = useSiteMetadata();
  if (!disqusShortname) {
    return null;
  }
  return (
    <DiscussionEmbed
        shortname={disqusShortname}
        config={
            {
                identifier: postSlug,
                title: postTitle,
            }
        }
    />
  );
};

export default Comments;
