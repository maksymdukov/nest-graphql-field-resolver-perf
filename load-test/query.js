module.exports = function () {
  return JSON.stringify({
    query: `query {
  getProducts {
    id
    name
    variants {
      id
      images {
        id
        imageUrl
        imageUrl2
        imageUrl3
        __typename
      }
      __typename
    }
    __typename
  }
}`,
    variables: {},
  });
};
