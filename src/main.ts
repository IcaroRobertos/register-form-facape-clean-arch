import {RegisterAndNotifyPerson} from './application/usecases/register_and_notify_person'
import {RegisterAndNotifyPersonRepository} from './infrastructure/repositories/register_and_notify_person_repository'

function main(){
  const repository = new RegisterAndNotifyPersonRepository()
  const usecase = new RegisterAndNotifyPerson(repository)

  usecase.execute({name: "Icaro", phone: "82999223176"})
}

main()