import {IPerson, Person} from "../../domain/entities/person"
import {IRegisterAndNotifyPerson} from '../interfaces/register_and_notify_person_interface'

export class RegisterAndNotifyPerson {
  private repository: IRegisterAndNotifyPerson

  constructor(repository: IRegisterAndNotifyPerson){
    this.repository = repository
  }
  
  public execute(input: IPerson){
    const person = new Person(input)
    person.validate()

    const id = this.repository.save(person)
    const notificationId = this.repository.notify(person.data().phone)

    return {id, notificationId}
  }
}