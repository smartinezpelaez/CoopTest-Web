export interface TransaccionDTO {
  id?: string;
  clienteId?: string;
  fondoId?: string;
  tipo?: string; // 'Apertura' o 'Cancelación'
  monto?: number;
  fecha?: Date;
}
