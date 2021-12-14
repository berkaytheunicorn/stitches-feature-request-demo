import Head from "next/head";
import React, { ReactElement } from "react";

type MetaImage = {
  width: number;
  height: number;
  url: string;
};

type MetaProps = {
  links?: Array<string>;
  locale?: string;
  theme?: string;
  title: string;
  brand?: string;
  hideBrandInTitle?: string;
  description?: string;
  url?: string;
  canonical?: string;
  author?: string;
  image?: MetaImage;
  handle?: string;
  imagePath?: string;
  twitter?: any;
  facebook?: any;
  og?: any;
};

const favicon = {
  generic: [
    "32x32",
    "48x48",
    "57x57",
    "76x76",
    "96x96",
    "128x128",
    "192x192",
    "228x228",
  ],
  android: ["192x192", "512x512"],
  ms: ["70x70", "150x150", "310x310", "310x150"],
  apple: ["57x57", "76x76", "120x120", "152x152", "167x167", "180x180"],
};

export const Meta = (props: MetaProps) => {
  const {
    links = [],
    locale,
    handle,
    theme = "#000",
    brand,
    title,
    hideBrandInTitle,
    description,
    url,
    canonical,
    author,
    image = {
      width: 1250,
      height: 640,
      url: `brand/header.png`,
    },
    imagePath = "/brand",
  } = props;

  const twitter = {
    card: "summary_large_image",
    handle,
    image,
    title,
    url,
    description,
    authorHandle: author,
    ...props.twitter,
  };

  const facebook = {
    ...props.facebook,
  };

  const og = {
    site_name: title,
    type: "website",
    title,
    url,
    image,
    locale,
    description,
    ...props.og,
  };

  return (
    <Head>
      {title && (
        <title>
          {title}
          {brand && !hideBrandInTitle && ` | ${brand}`}
        </title>
      )}
      {description && <meta name="description" content={description} />}
      {(canonical || url) && <link rel="canonical" href={canonical || url} />}

      <meta name="robots" content="index,follow" />

      {/* Twitter */}
      {twitter.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter.handle && (
        <meta name="twitter:site" content={`@${twitter.handle}`} />
      )}
      {twitter.authorHandle && (
        <meta name="twitter:creator" content={`@${twitter.authorHandle}`} />
      )}
      {twitter.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter.url && <meta name="twitter:url" content={twitter.url} />}
      {twitter.description && (
        <meta name="twitter:description" content={twitter.description} />
      )}
      {twitter.image && twitter.image.url && (
        <meta name="twitter:image:src" content={twitter.image.url} />
      )}

      {/* Facebook */}
      {facebook && (
        <>
          {facebook.appId && (
            <meta property="fb:app_id" content={facebook.appId} />
          )}
        </>
      )}

      {/* OpenGraph */}
      {og.locale && <meta property="og:locale" content={og.locale} />}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.type && <meta property="og:type" content={og.type} />}
      {og.url && <meta property="og:url" content={og.url} />}
      {og.image && (
        <>
          {og.image.url && <meta property="og:image" content={og.image.url} />}
          {og.image.width && (
            <meta property="og:image:width" content={og.image.width} />
          )}
          {og.image.height && (
            <meta property="og:image:height" content={og.image.height} />
          )}
        </>
      )}
      {og.site_name && <meta property="og:site_name" content={og.site_name} />}
      {og.description && (
        <meta property="og:description" content={og.description} />
      )}

      {og.video && (
        <>
          {og.video.url && <meta property="og:video" content={og.video.url} />}
          {og.video.width && (
            <meta property="og:video:width" content={og.video.width} />
          )}
          {og.video.height && (
            <meta property="og:video:height" content={og.video.height} />
          )}
        </>
      )}

      {author && <meta property="article:author" content={author} />}

      {favicon && (
        <>
          {/* Generic */}
          <meta name="theme-color" content={theme} />
          <link rel="icon" sizes={"16x16"} href={`${imagePath}/favicon.ico`} />
          <meta
            name="thumbnail"
            content={`${imagePath}/app-icon-180x180.png`}
          />
          {favicon.generic.map((size) => (
            <link
              key={size}
              rel="icon"
              type="image/png"
              sizes={size}
              href={`${imagePath}/favicon-${size}.png`}
            />
          ))}
          {/* Android */}
          {favicon.android.map((size) => (
            <link
              key={size}
              rel="shortcut icon"
              sizes={size}
              href={`${imagePath}/favicon-${size}.png`}
            />
          ))}
          {/* Microsoft */}
          <meta name="application-name" content={title} />
          <meta name="msapplication-TileColor" content={theme} />
          {favicon.ms.map((size) => (
            <meta
              key={size}
              name={`msapplication-square${size}logo`}
              content={`${imagePath}/ms-tile-${size}.png`}
            />
          ))}
          {/* Apple */}
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link rel="mask-icon" href={`${imagePath}/logo.svg`} color={theme} />

          {favicon.apple.map((size) => (
            <link
              key={size}
              rel="apple-touch-icon"
              sizes={size}
              href={`${imagePath}/app-icon-${size}.png`}
            />
          ))}
        </>
      )}

      {links.map((link, idx) => {
        return <link key={idx} {...link} />;
      })}
    </Head>
  );
};
