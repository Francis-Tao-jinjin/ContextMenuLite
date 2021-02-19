import { ContextmenuProps } from "../components/contextMenu";

export const data:ContextmenuProps = [
    {
        name: 'Copy',
        fn: () => {console.log('click Copy')},
        tips: 'this is tips',
        separate: true,
        disabled: false,
        selected: true,
        extend: []
    }, {
        name: 'Paste',
        fn: () => {console.log('click Paste')},
        tips: '',
        separate: false,
        disabled: true,
        selected: false,
        extend: []
    }, {
        name: 'New',
        fn: () => {console.log('click New')},
        tips: '',
        separate: false,
        disabled: false,
        selected: false,
        extend: [
            {
                name: 'Folder',
                fn: () => {console.log('click Folder')},
                tips: '',
                separate: true,
                disabled: false,
                selected: false,
                extend: []
            }, {
                name: 'Extend',
                fn: () => {console.log('click Extend')},
                tips: '',
                separate: false,
                disabled: false,
                selected: false,
                extend: [
                    {
                        name: 'Word',
                        fn: () => {console.log('click Word')},
                        tips: '',
                        separate: false,
                        disabled: false,
                        selected: false,
                        extend: []
                    }, {
                        name: 'Excel',
                        fn: () => {console.log('click Excel')},
                        tips: '',
                        separate: false,
                        disabled: false,
                        selected: true,
                        extend: []
                    }
                ]
            }
        ]
    }, {
        name: 'Refresh',
        fn: () => {console.log('click Refresh')},
        tips: '',
        separate: false,
        disabled: false,
        selected: false,
        extend: []
    }
];

export const data2:ContextmenuProps = [
    {
        name: 'Open',
        selected: true,
        fn: () => {console.log('click open')},
        extend: []
    },
    {
        name: 'Open With',
        fn: null,
        separate: true,
        extend: [{
            name: 'vs code (default)',
            fn: () => console.log('click vs code'),
            extend: [],
            separate: true,
        }, {
            name: 'sublime Text',
            fn: () => console.log('click sublime Text'),
            extend: [],
        }, {
            name: 'X code',
            fn: () => console.log('click X code'),
            extend: [],
        }, {
            name: 'vs code',
            fn: () => console.log('click vs code'),
            extend: [],
        }]
    },
    {
        name: 'Move to Trash',
        disabled: true,
        fn: () => {console.log('click Move to Trash')},
        extend: []
    },{
        name: 'Get Info',
        fn: () => {console.log('click Get Info')},
        extend: []
    },{
        name: 'Rename',
        fn: () => {console.log('click Rename')},
        extend: []
    },{
        name: 'Duplicate',
        fn: () => {console.log('click Duplicate')},
        extend: []
    },{
        name: 'Share',
        fn: null,
        extend: [{
            name: 'Mail',
            selected: true,
            fn: () => {console.log('click Mail')},
            extend: []
        }, {
            name: 'Notes',
            fn: () => {console.log('click Notes')},
            extend: []
        }, {
            name: 'Add to Photos',
            fn: () => {console.log('click Add to Photos')},
            extend: []
        },]
    }
];