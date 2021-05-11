import React from 'react'
import { Card } from '_/components/Card'
import { Text } from '_/components/Text'
import { Icon } from '_/components/Icon';
import { useForm } from '_/hooks/useForm';

const INIT = {
  username: '',
  recipient: '',
  path: '',
  amount: '',
  server: '',
  descripcion: ''
}
export const Home = () => {
  const [data, setData, onDataChange] = useForm(INIT);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Data', data);
    setData(INIT)
  }
  return (
    <div>
      <Text>
        <Icon name="check" className="mr-2" />
        learn react with this example
      </Text>

      <form onSubmit={onSubmit}>
        <Card header="Formulario 1"
          footer={
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-check" />
              OK
            </button>
          }>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="username"
              value={data.username}
              onChange={onDataChange} />
          </div>

          <div className="input-group mb-3">
            <input type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="recipient"
              value={data.recipient}
              onChange={onDataChange} />
            <span className="input-group-text">@example.com</span>
          </div>

          <label className="form-label">Your vanity URL</label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              https://example.com/users/
              </span>
            <input type="text"
              className="form-control"
              aria-describedby="basic-addon3"
              name="path"
              value={data.path}
              onChange={onDataChange} />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              name="amount"
              value={data.amount}
              onChange={onDataChange} />
            <span className="input-group-text">.00</span>
          </div>

          <div className="input-group mb-3">
            <input type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              name="username"
              value={data.username}
              onChange={onDataChange} />
            <span className="input-group-text">@</span>
            <input type="text"
              className="form-control"
              placeholder="Server"
              aria-label="Server"
              name="server"
              value={data.server}
              onChange={onDataChange} />
          </div>

          <div className="input-group">
            <span className="input-group-text">
              With textarea
            </span>
            <textarea className="form-control"
              aria-label="With textarea"
              name="descripcion"
              value={data.descripcion}
              onChange={onDataChange} >

            </textarea>
          </div>
          <code>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </code>

        </Card>

      </form>
    </div>
  )
}
