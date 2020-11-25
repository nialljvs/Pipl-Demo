import { DateRange } from '../daterange';

export interface Education {
    degree?: string;
    school: string;
    date_range?: DateRange;
    display: string;
}