// add to here to load files with
// extensions other than js or ts etc

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.csv" {
  const content: any;
  export default content;
}

declare module "*.css" {
  const content: any;
  export default content;
}
