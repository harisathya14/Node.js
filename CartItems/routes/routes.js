import express from 'express';
import { Item } from '../model/model.js';

const router = express.Router();

router.post("/", (req, res) => {
  const newItem = {
    item: req.body.item,
    productdetail: req.body.productdetail,
    noProduct: req.body.noProduct,
    cost: req.body.cost
  };

  Item.postData(newItem, (err, createdItem) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ item: createdItem });
  });
})

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedItem = {
    item: req.body.item,
    productdetail: req.body.productdetail,
    noProduct: req.body.noProduct,
    cost: req.body.cost
  };

  Item.updateData(id, updatedItem, (err, updatedItem) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ item: updatedItem });
  });
});

router.get("/", (req, res) => {
  Item.getAll(req.query.item, (err, cartproduct) => {
    if (err) {
      res.status(500).json({
        error: err.message
      });
      return;
    }
    res.json({
      cartproduct
    });
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Item.deleteById(id, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Item deleted successfully" });
  });
});

export default router;