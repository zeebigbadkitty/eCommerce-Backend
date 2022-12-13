// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:
})
// Categories have many Products
Category.hasMany(Product,{
  foreignKey:
})
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag,{
  foreignKey:
})
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product,{
  foreignKey:
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
