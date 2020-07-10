import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
      gender: '',
      alamat: '',
      favorit: [],
      checkbox: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPick = this.onPick.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onSubmit(event) {
    const { name, pekerjaan, alamat} = this.state;
    alert(`Namaku adalah ${name}, pekerjaanku sebagai ${pekerjaan}, rumahku di ${alamat}`);
    event.preventDefault(); 
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  onCheck(event) {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: !prevState[name] }))
  }

  onPick(event) {
    let favorit = [...this.state.favorit];
    let idx = favorit.findIndex(elemen => event.target.value === elemen);
    if (idx > 0) {
        favorit = [...favorit.slice(0, idx), ...favorit.slice(idx + 1, favorit.length)]
    } else if (idx === 0) {
        favorit = [...favorit.slice(idx + 1, favorit.length)]
    } else {
        favorit.push(event.target.value)
    }
    this.setState({ favorit });
  }
  
  render() {
    const { name, birthday, alamat, favorit, checkbox } = this.state;
    const {list} = this.props;
    
    return (         
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={name} onChange={this.onChange} placeholder="nama..." />
        </label>
        <br/>
        <label>
          Tanggal Lahir:
          <input name="birthday" type="date" value={birthday} onChange={this.onChange}></input>
        </label>
        <br/>
        <label>
          Gender:
          <input name="gender" type="radio" value="laki-laki" onChange={this.onChange} /> Laki-laki
          <input name="gender" type="radio" value="perempuan" onChange={this.onChange} /> Perempuan
        </label>
        <br/>
        <label>
          Address:
          <textarea name="alamat" value={alamat} onChange={this.onChange} />
        </label>
        <br/>
        <label>
          Konsol favorit:
          <select multiple value={favorit} onChange={this.onPick}>
            <option value="playstation">Playstation</option>
            <option value="nintendo">Nintendo</option>
            <option value="xbox">Xbox</option>
          </select>
        </label>
        <br/>
        <label>
          Apakah Anda sudah berusia 18+:
          <input name="checkbox" type="checkbox" value={checkbox} checked={checkbox} onChange={this.onCheck}/>
        </label>   
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default User;