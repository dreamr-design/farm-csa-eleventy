module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addFilter('postDate', (date) => new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }));
  return {
    dir: { input: 'src', output: '_site' },
    htmlTemplateEngine: 'njk',
  };
};
