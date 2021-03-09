import { trigger, state, style, transition,
    animate, group
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '100px', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('500ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '100px'
            })),
        ]
        )])
    ]),
]
