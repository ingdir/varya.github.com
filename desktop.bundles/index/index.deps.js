exports.deps = [
    {
        "block": "highlight",
        "elem": "hack"
    },
    {
        "block": "i-bem",
        "elem": "dom"
    },
    {
        "block": "page",
        "elem": "css"
    },
    {
        "block": "page",
        "elem": "js"
    },
    {
        "block": "jquery"
    },
    {
        "block": "loader"
    },
    {
        "block": "loader",
        "mod": "type"
    },
    {
        "block": "loader",
        "mod": "type",
        "val": "js"
    },
    {
        "block": "jquery",
        "elem": "config"
    },
    {
        "block": "ua"
    },
    {
        "block": "objects"
    },
    {
        "block": "functions"
    },
    {
        "block": "dom"
    },
    {
        "block": "i-bem",
        "elem": "dom",
        "mod": "init"
    },
    {
        "block": "i-bem",
        "elem": "internal"
    },
    {
        "block": "highlight"
    },
    {
        "block": "highlight",
        "elem": "init"
    },
    {
        "block": "highlight",
        "mod": "theme"
    },
    {
        "block": "highlight",
        "mod": "theme",
        "val": "solarized-light"
    },
    {
        "block": "i-bem"
    },
    {
        "block": "inherit"
    },
    {
        "block": "identify"
    },
    {
        "block": "next-tick"
    },
    {
        "block": "events"
    },
    {
        "block": "page"
    },
    {
        "block": "i-bem",
        "elem": "dom",
        "mod": "init",
        "val": "auto"
    },
    {
        "block": "grid"
    },
    {
        "block": "text"
    },
    {
        "block": "fonts"
    },
    {
        "block": "articles-list"
    },
    {
        "block": "page",
        "elem": "meta"
    },
    {
        "block": "header"
    },
    {
        "block": "logo"
    },
    {
        "block": "candies"
    },
    {
        "block": "layout"
    },
    {
        "block": "main"
    },
    {
        "block": "article"
    },
    {
        "block": "box"
    },
    {
        "block": "share"
    },
    {
        "block": "slide"
    },
    {
        "block": "colors"
    },
    {
        "block": "recent-posts"
    },
    {
        "block": "date"
    },
    {
        "block": "comments"
    },
    {
        "block": "related"
    },
    {
        "block": "sidebar"
    },
    {
        "block": "menu-vert"
    },
    {
        "block": "menu-vert",
        "elem": "title"
    },
    {
        "block": "menu-vert",
        "elem": "item"
    },
    {
        "block": "box",
        "elem": "title"
    },
    {
        "block": "link"
    },
    {
        "block": "link",
        "mod": "disabled"
    },
    {
        "block": "pointer-events"
    },
    {
        "block": "github",
        "elem": "jquery"
    },
    {
        "block": "github"
    },
    {
        "block": "prompting"
    },
    {
        "block": "languages"
    },
    {
        "block": "social-ico"
    },
    {
        "block": "footer"
    },
    {
        "block": "footer",
        "elem": "left"
    },
    {
        "block": "footer",
        "elem": "center"
    },
    {
        "block": "footer",
        "elem": "right"
    }
];
exports.depsFull = {
    "": {
        "shouldDeps": [
            "page",
            "page__css",
            "page__meta",
            "page__js",
            "header",
            "layout",
            "main",
            "article",
            "slide",
            "recent-posts",
            "comments",
            "related",
            "sidebar",
            "menu-vert",
            "menu-vert__title",
            "menu-vert__item",
            "box",
            "box__title",
            "link",
            "github",
            "prompting",
            "languages",
            "social-ico",
            "footer",
            "footer__left",
            "footer__center",
            "footer__right",
            "link.test.js",
            "i-bem",
            "ua.bemhtml",
            "i-bem__dom",
            "i-bem__dom.spec.js",
            "i-bem__dom_init_auto",
            "highlight",
            "link.bemhtml",
            "highlight__hack",
            "events",
            "jquery",
            "dom",
            "highlight__init",
            "i-bem.bemhtml",
            "jquery__config"
        ],
        "mustDeps": [],
        "item": {},
        "include": true,
        "key": ""
    },
    "page": {
        "shouldDeps": [
            "i-bem__dom",
            "i-bem__dom_init",
            "i-bem__dom_init_auto",
            "ua",
            "page",
            "page__css",
            "page__js",
            "grid",
            "text",
            "highlight",
            "fonts",
            "articles-list"
        ],
        "mustDeps": [
            "i-bem",
            "ua"
        ],
        "item": {
            "block": "page"
        },
        "include": true,
        "key": "page"
    },
    "page__css": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "page",
            "elem": "css"
        },
        "include": true,
        "key": "page__css"
    },
    "page__meta": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "page",
            "elem": "meta"
        },
        "include": true,
        "key": "page__meta"
    },
    "page__js": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "page",
            "elem": "js"
        },
        "include": true,
        "key": "page__js"
    },
    "header": {
        "shouldDeps": [
            "logo",
            "candies"
        ],
        "mustDeps": [],
        "item": {
            "block": "header"
        },
        "include": true,
        "key": "header"
    },
    "layout": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "layout"
        },
        "include": true,
        "key": "layout"
    },
    "main": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "main"
        },
        "include": true,
        "key": "main"
    },
    "article": {
        "shouldDeps": [
            "box",
            "share"
        ],
        "mustDeps": [],
        "item": {
            "block": "article"
        },
        "include": true,
        "key": "article"
    },
    "slide": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "slide"
        },
        "include": true,
        "key": "slide"
    },
    "recent-posts": {
        "shouldDeps": [
            "date"
        ],
        "mustDeps": [
            "colors"
        ],
        "item": {
            "block": "recent-posts"
        },
        "include": true,
        "key": "recent-posts"
    },
    "comments": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "comments"
        },
        "include": true,
        "key": "comments"
    },
    "related": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "related"
        },
        "include": true,
        "key": "related"
    },
    "sidebar": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "sidebar"
        },
        "include": true,
        "key": "sidebar"
    },
    "menu-vert": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "menu-vert"
        },
        "include": true,
        "key": "menu-vert"
    },
    "menu-vert__title": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "menu-vert",
            "elem": "title"
        },
        "include": true,
        "key": "menu-vert__title"
    },
    "menu-vert__item": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "menu-vert",
            "elem": "item"
        },
        "include": true,
        "key": "menu-vert__item"
    },
    "box": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "box"
        },
        "include": true,
        "key": "box"
    },
    "box__title": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "box",
            "elem": "title"
        },
        "include": true,
        "key": "box__title"
    },
    "link": {
        "shouldDeps": [
            "link_disabled",
            "pointer-events"
        ],
        "mustDeps": [],
        "item": {
            "block": "link"
        },
        "include": true,
        "key": "link"
    },
    "github": {
        "shouldDeps": [],
        "mustDeps": [
            "github__jquery"
        ],
        "item": {
            "block": "github"
        },
        "include": true,
        "key": "github"
    },
    "prompting": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "prompting"
        },
        "include": true,
        "key": "prompting"
    },
    "languages": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "languages"
        },
        "include": true,
        "key": "languages"
    },
    "social-ico": {
        "shouldDeps": [
            "link"
        ],
        "mustDeps": [],
        "item": {
            "block": "social-ico"
        },
        "include": true,
        "key": "social-ico"
    },
    "footer": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer"
        },
        "include": true,
        "key": "footer"
    },
    "footer__left": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer",
            "elem": "left"
        },
        "include": true,
        "key": "footer__left"
    },
    "footer__center": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer",
            "elem": "center"
        },
        "include": true,
        "key": "footer__center"
    },
    "footer__right": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "footer",
            "elem": "right"
        },
        "include": true,
        "key": "footer__right"
    },
    "i-bem": {
        "shouldDeps": [
            "i-bem__internal",
            "inherit",
            "identify",
            "next-tick",
            "objects",
            "functions",
            "events"
        ],
        "mustDeps": [
            "highlight__hack"
        ],
        "item": {
            "block": "i-bem"
        },
        "include": true,
        "key": "i-bem"
    },
    "i-bem__dom": {
        "shouldDeps": [
            "jquery",
            "objects",
            "functions",
            "dom",
            "i-bem__dom_init",
            "i-bem",
            "i-bem__internal"
        ],
        "mustDeps": [],
        "item": {
            "block": "i-bem",
            "elem": "dom"
        },
        "include": true,
        "key": "i-bem__dom"
    },
    "i-bem__dom_init": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "i-bem",
            "elem": "dom",
            "mod": "init"
        },
        "include": true,
        "key": "i-bem__dom_init"
    },
    "i-bem__dom_init_auto": {
        "shouldDeps": [
            "i-bem__dom_init"
        ],
        "mustDeps": [],
        "item": {
            "block": "i-bem",
            "elem": "dom",
            "mod": "init",
            "val": "auto"
        },
        "include": true,
        "key": "i-bem__dom_init_auto"
    },
    "ua": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "ua"
        },
        "include": true,
        "key": "ua"
    },
    "grid": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "grid"
        },
        "include": true,
        "key": "grid"
    },
    "text": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "text"
        },
        "include": true,
        "key": "text"
    },
    "highlight": {
        "shouldDeps": [
            "highlight__init"
        ],
        "mustDeps": [
            "i-bem__dom"
        ],
        "item": {
            "block": "highlight"
        },
        "include": true,
        "key": "highlight"
    },
    "fonts": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "fonts"
        },
        "include": true,
        "key": "fonts"
    },
    "articles-list": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "articles-list"
        },
        "include": true,
        "key": "articles-list"
    },
    "logo": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "logo"
        },
        "include": true,
        "key": "logo"
    },
    "candies": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "candies"
        },
        "include": true,
        "key": "candies"
    },
    "share": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "share"
        },
        "include": true,
        "key": "share"
    },
    "colors": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "colors"
        },
        "include": true,
        "key": "colors"
    },
    "date": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "date"
        },
        "include": true,
        "key": "date"
    },
    "link_disabled": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "link",
            "mod": "disabled"
        },
        "include": true,
        "key": "link_disabled"
    },
    "pointer-events": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "pointer-events"
        },
        "include": true,
        "key": "pointer-events"
    },
    "link.test.js": {
        "shouldDeps": [
            "link_disabled",
            "pointer-events"
        ],
        "mustDeps": [
            "link.bemhtml"
        ],
        "item": {
            "block": "link",
            "tech": "test.js"
        },
        "include": true,
        "key": "link.test.js"
    },
    "link.bemhtml": {
        "shouldDeps": [
            "link_disabled",
            "pointer-events"
        ],
        "mustDeps": [
            "link.bemhtml"
        ],
        "item": {
            "block": "link",
            "tech": "bemhtml"
        },
        "include": true,
        "key": "link.bemhtml"
    },
    "github__jquery": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "github",
            "elem": "jquery"
        },
        "include": true,
        "key": "github__jquery"
    },
    "i-bem__internal": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "i-bem",
            "elem": "internal"
        },
        "include": true,
        "key": "i-bem__internal"
    },
    "inherit": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "inherit"
        },
        "include": true,
        "key": "inherit"
    },
    "identify": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "identify"
        },
        "include": true,
        "key": "identify"
    },
    "next-tick": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "next-tick"
        },
        "include": true,
        "key": "next-tick"
    },
    "objects": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "objects"
        },
        "include": true,
        "key": "objects"
    },
    "functions": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "functions"
        },
        "include": true,
        "key": "functions"
    },
    "events": {
        "shouldDeps": [
            "inherit",
            "identify"
        ],
        "mustDeps": [],
        "item": {
            "block": "events"
        },
        "include": true,
        "key": "events"
    },
    "highlight__hack": {
        "shouldDeps": [
            "highlight",
            "highlight_theme",
            "highlight_theme_solarized-light"
        ],
        "mustDeps": [],
        "item": {
            "block": "highlight",
            "elem": "hack"
        },
        "include": true,
        "key": "highlight__hack"
    },
    "ua.bemhtml": {
        "shouldDeps": [],
        "mustDeps": [
            "i-bem"
        ],
        "item": {
            "block": "ua",
            "tech": "bemhtml"
        },
        "include": true,
        "key": "ua.bemhtml"
    },
    "jquery": {
        "shouldDeps": [
            "loader",
            "loader_type",
            "loader_type_js",
            "jquery__config"
        ],
        "mustDeps": [
            "page",
            "page__css",
            "page__js"
        ],
        "item": {
            "block": "jquery"
        },
        "include": true,
        "key": "jquery"
    },
    "dom": {
        "shouldDeps": [
            "jquery"
        ],
        "mustDeps": [],
        "item": {
            "block": "dom"
        },
        "include": true,
        "key": "dom"
    },
    "i-bem__dom.spec.js": {
        "shouldDeps": [
            "jquery",
            "objects",
            "functions",
            "dom",
            "i-bem__dom_init",
            "i-bem",
            "i-bem__internal"
        ],
        "mustDeps": [
            "i-bem.bemhtml"
        ],
        "item": {
            "block": "i-bem",
            "elem": "dom",
            "tech": "spec.js"
        },
        "include": true,
        "key": "i-bem__dom.spec.js"
    },
    "i-bem.bemhtml": {
        "shouldDeps": [
            "i-bem__internal",
            "inherit",
            "identify",
            "next-tick",
            "objects",
            "functions",
            "events"
        ],
        "mustDeps": [
            "highlight__hack"
        ],
        "item": {
            "block": "i-bem",
            "tech": "bemhtml"
        },
        "include": true,
        "key": "i-bem.bemhtml"
    },
    "highlight__init": {
        "shouldDeps": [],
        "mustDeps": [
            "highlight"
        ],
        "item": {
            "block": "highlight",
            "elem": "init"
        },
        "include": true,
        "key": "highlight__init"
    },
    "highlight_theme": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "highlight",
            "mod": "theme"
        },
        "include": true,
        "key": "highlight_theme"
    },
    "highlight_theme_solarized-light": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "highlight",
            "mod": "theme",
            "val": "solarized-light"
        },
        "include": true,
        "key": "highlight_theme_solarized-light"
    },
    "loader": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "loader"
        },
        "include": true,
        "key": "loader"
    },
    "loader_type": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "loader",
            "mod": "type"
        },
        "include": true,
        "key": "loader_type"
    },
    "loader_type_js": {
        "shouldDeps": [],
        "mustDeps": [],
        "item": {
            "block": "loader",
            "mod": "type",
            "val": "js"
        },
        "include": true,
        "key": "loader_type_js"
    },
    "jquery__config": {
        "shouldDeps": [
            "ua",
            "objects"
        ],
        "mustDeps": [],
        "item": {
            "block": "jquery",
            "elem": "config"
        },
        "include": true,
        "key": "jquery__config"
    }
};
