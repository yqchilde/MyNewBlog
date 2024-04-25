import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '导航',
        link: '/nav',
    },
    {
        text: "后端物语",
        activeMatch: '^/review',
        items: [
            { text: "Golang篇", link: "/review/golang" },
            { text: "Python篇", link: "/review/python" },
        ]
    },
    // {
    //     text: "源码阅读",
    //     items: [
    //         { text: "Golang", link: "/posts/backend/golang/" },
    //         { text: "PHP", link: "/posts/backend/php/" }
    //     ]
    // },
    {
        text: 'Workflow',
        items: [
            {
                items: [
                    { text: '编程规范', link: '/workflow/style-guide' },
                ]
            },
            {
                items: [
                    { text: '常用正则整理', link: '/workflow/utils/regexp' },
                    { text: '常用片段整理', link: '/workflow/utils/snippets' }
                ]
            },
            {
                items: [
                    { text: 'Git 命令清单', link: '/workflow/git/command' },
                    { text: 'Git 常用命令', link: '/workflow/git/common-command' },
                ]
            },
        ],
        activeMatch: '^/workflow'
    },
    {
        text: "博客",
        link: '/blog',
        activeMatch: '^/blog',
    },
    {
        text: '提效工具',
        items: [
            {
                text: '软件推荐与配置',
                items: [
                    { text: 'Mac 平台', link: '/efficiency/mac' },
                    { text: 'Windows 平台', link: '/efficiency/windows' },
                ]
            },
        ],
        activeMatch: '^/efficiency'
    },
    {
        text: 'About',
        link: '/about'
    }
]