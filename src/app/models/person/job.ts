import { DateRange } from '../daterange';

export interface Job {
    title?: string;
    organization?: string;
    date_range?: DateRange;
    display: string;
    industry?: string;
}