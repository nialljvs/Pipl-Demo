import { PersonAddress } from './person-address';
import { PersonName } from './person-name';
import { Image } from './image';
import { Job } from './job';
import { Education } from './education';

export interface Person {
    match: number;
    names: PersonName[];
    usernames?: Record<string, any>[];
    emails?: Record<string, any>[];
    phones?: Record<string, any>[];
    gender: Record<string, any>
    dob?: Record<string, any>
    languages?: string[];
    addresses?: PersonAddress[];
    user_ids?: string[];
    images?: Image[];
    jobs?: Job[];
    educations?: Education[];
    relationships?: PersonName[];
    showAllEmails: boolean;
    showAllPhones: boolean;
}
