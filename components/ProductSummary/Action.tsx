import React, { useState, useContext } from 'react'
import { Input, Icon, Transition } from 'semantic-ui-react'
import { useActionMutations } from '@store/Cart'

type ActionProps = {
  product: TProduct
}

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const ActionRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const Action = ({ product }: ActionProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { Action } = useActionMutations()

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      ActionRequest()
        .then(() => {
          Action(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))

  return (
    <>
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        step={1}
        error={!!error}
        onChange={handleChange}
        action={{
          color: 'green',
          content: 'Take Action',
          icon: 'edit',
          onClick: handleSubmit,
          loading,
          disabled: loading,
        }}
      />
      {error && (
        <div style={{ color: 'red', position: 'absolute' }}>{error}</div>
      )}
      <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div style={{ color: 'green', position: 'absolute' }}>
          <Icon name="check" />
          Action Taken! Quantity: {quantity}
        </div>
      </Transition>
    </>
  )
}

export default Action
