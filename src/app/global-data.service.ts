import { Injectable } from '@angular/core';

interface ShareObj {
    [background: string]: any;
}

@Injectable()
export class GlobalDataService {
    shareObj: ShareObj = {};
}
