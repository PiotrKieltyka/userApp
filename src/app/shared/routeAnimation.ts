import { transition, query, style, animate, trigger, animateChild, group } from '@angular/animations';

export const slideAnimation = trigger ('slideAnimation', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ right: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms', style({ right: '100%'}))
          ]),
          query(':enter', [
            animate('200ms', style({ right: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ])
]);

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* <=> *', [
        query(':enter', [ style({ opacity: 0 })],
        { optional: true }),
        query(':leave', [ style({ opacity: 1 }), animate('2.3s', style({ opacity: 0 }))],
        { optional: true }),
        query(':enter', [ style({ opacity: 0 }), animate('2.3s', style({ opacity: 1 }))],
        { optional: true })
    ])
]);
