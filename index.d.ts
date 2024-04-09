type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string
type TProductAttributes = {
  color?: string
  connectivity?: string
  power_source?: string
  display?: string
  storage?: string
  capacity?: string
  ports?: string
  weight?: string
  material?: string
  thread_count?: string
  resolution?: string
  size?: string
  grip_type?: string
  dimensions?: string // Nuevo atributo agregado
  reason?: string // Nuevo atributo agregado
  action?: string // Nuevo atributo agregado
  description,
}

type TProduct = {
  sku: string
  id: TProductId
  name: string
  brand: string // Nuevo atributo agregado para coincidir con los datos de Amazon
  artist?: string // Modificado para ser opcional, ya que Amazon no tiene artistas para sus productos
  year?: number // Modificado para ser opcional, ya que Amazon no proporciona años de creación para sus productos
  price: number
  image: Url
  attributes: TProductAttributes
}

type TAPIARTDetailResponse = TProduct

type TAPIartResponse = {
  length: number // Corregido error tipográfico
  data: TProduct[]
  error?: string
}
