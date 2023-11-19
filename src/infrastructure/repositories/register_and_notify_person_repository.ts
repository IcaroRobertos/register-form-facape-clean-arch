import uniqid from 'uniqid'
import {IRegisterAndNotifyPerson} from '../../application/interfaces/register_and_notify_person_interface'
import { IPerson, Person } from '../../domain/entities/person'

export class RegisterAndNotifyPersonRepository implements IRegisterAndNotifyPerson {
  private db: Array<IPerson> = []

  public save(person: Person): string {
    const id = uniqid()
    const data = person.data()

    this.db.push({id: id, name: data.name, phone: data.phone})

    console.log(this.db)

    return id
  }

  public notify(phone: string): string {
    const id = uniqid()

    console.log({id, phone})

    return id
  }
}