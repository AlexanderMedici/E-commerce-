import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item: lineItemId, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
    const lineItemIds = lineItemId;
  const handleUpdateCartQty = (lineItemIds, newQuantity) => onUpdateCartQty(lineItemIds, newQuantity);

  const handleRemoveFromCart = (lineItemIds) => onRemoveFromCart(lineItemIds);

  return (
    <Card className="cart-item">
      <CardMedia image={lineItemIds.media.source} alt={lineItemIds.name} className={classes.media} />
      <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">{lineItemIds.name}</Typography>
        <Typography variant="h5">{lineItemIds.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(lineItemIds.id, lineItemIds.quantity - 1)}>-</Button>
          <Typography>&nbsp;{lineItemIds.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(lineItemIds.id, lineItemIds.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(lineItemIds.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;