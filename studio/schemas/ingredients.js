
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ingredent Name",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "notes",
      title: "Notes",
      type: "text"
    }
  ]
}