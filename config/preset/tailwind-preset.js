module.exports = {
    theme: {
        screens: {
            lg: {max: '1200px'},
            md: {max: '960px'},
            sm: {max: '600px'},
        },
        colors:{
            'fg.default': '#22292F',
            'fg.muted': '#57606A',
            'fg.subtle': '#6E7781',

            'fg.success': '#197F37',
            'fg.danger': '#CF222E',
            'fg.accent': '#0969DA',

            'bg.default': '#FFFFFF',
            'bg.overlay': '#FFFFFF',
            'bg.inset': '#F6F8FA',
            'bg.subtle': '#F6F8FA',

            'border.default': '#D0D7DE',
            'border.muted': '#D8DEE4',

            transparent: '#00000000',
            black: '#000000',
            white: '#ffffff',
        },
        fontSize: {
            display: ['2.5rem', {lineHeight: '1.4', fontWeight: 500}],

            'title.large': ['2rem', {lineHeight: '1.5', fontWeight: 600}],
            'title.medium': ['1.25rem', {lineHeight: '1.6', fontWeight: 600}],
            'title.small': ['1rem', {lineHeight: '1.5', fontWeight: 600}],

            subtitle: ['1.25rem', {lineHeight: '1.6'}],

            'body.large': ['16px', {lineHeight: '1.5'}],
            'body.medium': ['14px', {lineHeight: '1.5'}],
            'body.small': ['12px', {lineHeight: '1.5'}],

            caption: ['12px', {lineHeight: '1.3333'}],
        },
    },
}