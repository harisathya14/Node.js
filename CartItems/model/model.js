import dbConn from "../config/db.config.js";

export const Item = (item) => {
  this.id = item.id;
  this.item = item.item;
  this.productdetail = item.productdetail;
  this.noProduct = item.noProduct;
  this.cost = item.cost;
}

Item.postData = (newItem, result) => {
  dbConn.query("INSERT INTO cartproduct SET?", [newItem], (err, res) => {
    if (err) {
      console.log(`Error: ${err}`);
      result(err)
      return;
    }
    console.log("Created Item: ", { newItem });
    result(null, { ...newItem })
  })
}

Item.updateData = (id, updatedItem, result) => {
  dbConn.query("UPDATE cartproduct SET ? WHERE id = ?", [updatedItem, id], (err, res) => {
    if (err) {
      console.log(`Error: ${err}`);
      result(err);
      return;
    }
    console.log("Updated Item: ", { id: id, ...updatedItem });
    result(null, { id: id, ...updatedItem });
  });
};

Item.getAll = (item, result) => {
  const query = "SELECT * FROM cartproduct";

  if (item) {
    query = query + `WHERE item LIKE '${item}'`
  }

  dbConn.query(query, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }

    console.log("Item: ", res);
    result(null, res);
  })
}

Item.deleteById = (id, result) => {
  dbConn.query("DELETE FROM cartproduct WHERE id =?", id, (err, res) => {
    if (err) {
      console.log(`Error: ${err}`);
      result(err);
      return;
    }
    result(null, res.affectedRows);
  });
};