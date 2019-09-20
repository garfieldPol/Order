class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "tea", active: false },
      { id: 2, name: "mashed potatoes", active: false },
      { id: 3, name: "porridge", active: false },
      { id: 4, name: "water soup", active: false },
      { id: 5, name: "boild water", active: false },
      { id: 6, name: "old bread", active: true }
    ]
  };

  handleStatusChange = id => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });

    this.setState({
      items: items
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleStatusChange}
        />
      </React.Fragment>
    );
  }
}
