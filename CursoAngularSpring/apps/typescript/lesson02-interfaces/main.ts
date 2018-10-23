import { Person } from './../lessoan01-classes/person';
import { PersonDao } from './person-dao';
import { DaoInterface } from './dao.interface';

let personDao : DaoInterface = new PersonDao();
let person: Person = new Person('Mike');

personDao.insert(person);