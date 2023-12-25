/**
 * @type {import('next').NextConfig}
 */

/** @type {import('next-with-linaria').LinariaConfig} */

const withLinaria = require('next-with-linaria');
const isProd = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
    withLinaria({
        linaria: {
            evaluate: true,
            displayName: !isProd,
            classNameSlug: (hash, title) => `${isProd ? '' : `${title}_`}${hash}_appName`
        }
    })
);
