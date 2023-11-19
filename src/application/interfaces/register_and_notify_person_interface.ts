import { Person } from "../../domain/entities/person";

export interface IRegisterAndNotifyPerson {
  save(person: Person): string
  notify(phone: string): string
}