module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};