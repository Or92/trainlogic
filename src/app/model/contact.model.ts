export interface Contact {
  name: string;
  type: string;
  contacts?: [Contact];
  id: number;
}
