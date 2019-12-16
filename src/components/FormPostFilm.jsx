import React from 'react'

class FormPostFilm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      poster: '',
      comment: ''
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.postFilm = this.postFilm.bind(this)
  }

  postFilm() {
    const url = 'https://post-a-form.herokuapp.com/api/movies/'
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error)
        } else {
          alert(`Film ajouté avec l'ID ${res}!`)
        }
      })
      .catch(e => {
        console.error(e)
        alert(`Erreur lors de l'ajout d'un film`)
      })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='FormEmployee'>
        <h1>Saisi d'un Film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='title'>Nom du film</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='poster'>Lien affiche</label>
              <input
                type='text'
                id='poster'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
                required
              />
            </div>

            <div className='form-data'>
              <label htmlFor='comment'>Commentaires</label>
              <input
                type='text'
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
                required
              />
            </div>
            <hr />
            <div className='form-data'>
              <input type='submit' value='Envoyer' onClick={this.postFilm} />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default FormPostFilm
