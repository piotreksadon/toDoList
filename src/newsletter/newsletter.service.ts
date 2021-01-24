import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NewsletterService {
    // @Cron('*/5 * * * * *', {
    //     name: 'notifications',
    //     timeZone: 'Europe/Paris',
    //   })
    //   triggerNotifications() {
    //     console.log('Rozsyłam powiadomienia!')
    //   }
};
