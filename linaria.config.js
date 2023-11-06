const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    evaluate: true,
    displayName: !isProd,
    classNameSlug: (hash, title) => `${isProd ? '' : `${title}_`}${hash}_piatnashki`
}