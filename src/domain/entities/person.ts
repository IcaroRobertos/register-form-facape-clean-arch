export interface IPerson {
  id?: string
  name: string
  phone: string
}

export class Person {
  private person: IPerson

  constructor(input: IPerson){
    this.person = input
  }

  public validate(): void {
    if(this.person.name === "") throw new Error("nome não pode ser vazio")
    if(this.person.phone === "") throw new Error("email não pode ser vazio")
  }
  
  public data(): IPerson {
    return this.person
  }
}