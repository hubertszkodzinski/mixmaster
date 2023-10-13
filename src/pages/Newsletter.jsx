function Newsletter() {
  return (
    <form className='form'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          id='name'
          name='name'
          placeholder='type your name'
          defaultValue='john'
        />
      </div>
      {/* lastName */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          id='lastName'
          name='lastName'
          placeholder='type your last name'
          defaultValue='doe'
        />
      </div>
      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          id='email'
          name='email'
          placeholder='type your email'
          defaultValue='test@test.com'
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
      >
        submit
      </button>
    </form>
  );
}
export default Newsletter;
