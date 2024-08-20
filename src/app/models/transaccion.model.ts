export interface TransaccionDTO {
  id: string;
  idCliente: string;
  idFondo: string;
  tipoTransaccion: string;
  fechaTransaccion: Date;
  monto: number;          
}
