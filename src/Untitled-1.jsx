const state = {
  pessoa:{ 
    name: "Ricardo",
    age: 31
  }
}

let pessoaunica= {
  ...this.state.pessoa
}

pessoaunica.name = "victor";

this.setState({
  pessoas:pessoaunica
})
