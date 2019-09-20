const Header = props => {
  const checkedItems = props.items.filter(item => item.active);
  const number = checkedItems.length;
  return (
    <header>
      <h2>Order Recapitulation: {number}</h2>
      <h2>
        Cash: {number ? `${number * 10} euro` : "You don't chose a goods"}
      </h2>
    </header>
  );
};
