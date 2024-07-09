# Website
This is a prototype for the static web site for St. Andrew Kim Korean School.
The goal is to create a static website that can be easily updated by nontechnical users.

It uses the following technologies:
* [Hugo](https://gohugo.io/) (static site generator)
* [Decap] (https://decapcms.org/) (headless content management system)
* [Tailwind](https://tailwindcss.com/) (A utility-first CSS framework )
* [Netlify](https://www.netlify.com/) (deployment)

## Development Tooling
You will need [go](https://go.dev/) and [hugo](https://gohugo.io/) installed on your system.
The easiest way to do this is using [asdf](https://asdf-vm.com/).

### With `asdf`
```bash
# Install required asdf plugins
asdf plugin add golang https://github.com/asdf-community/asdf-golang.git
asdf plugin add hugo https://github.com/nklmilojevic/asdf-hugo.git

# Install dependencies from .tool-versions
asdf install
```

### Without `asdf`
Follow the installation instructions from go and hugo.  You can reference the `.tool-versions` file in this repo for good version numbers. Make sure you're using the hugo extended version which provides css compilation required by tailwind.

### Windows
This probably won't work on windows.  Maybe it will? I don't have access to a windows machine.

## Development
Run these commands from the root of the repo:

Install Javascript dependencies
```
npm install
```

Start the Hugo server
```bash
hugo server -D --disableFastRender --environment development
```

In another terminal, start the process that compiles the tailwind CSS
```
npx tailwindcss -i ./themes/main/static/src/input.css -o ./themes/main/assets/css/output.css --watch
```

## Notes
Javascript is automatically compiled
https://gohugo.io/hugo-pipes/js/

Changes to the pages will be automatically compiled and live reloaded.

## Translation
There are two methods by which translation happens.

### Content Translation
Files under the `/content` folder should be created with `.en.md` and `.ko.md`.  In that file, fill out the frontmatter:

`classes.en.md`
```
---
title: Classes
date: 2024-02-22T05:58:03.337Z
description: Page describing the different levels
---

```

`classes.ko.md`
```
---
title: 학급안내
date: 2024-02-22T05:58:03.337Z
description: 학급안내
---

```

Now you can write content in Markdown in the language for the file. It is not required that every page have a translation.

### Theme Element Translation
For items not in the `content` folder, translation works more traditionally.  Such pages are mostly in `/themes/main/layouts`.  For these items we don't keep two copies of the file. Instead, there are language files in `/themes/i18n`. You register a key and the corresponding translation that is bound to that key:

In `en.toml` for example we have:
```toml
register = 'Register'
```

And in `ko.toml` we have:

```toml
register = '등록'
```

Then the translations can be used in templates like this:

```html
<input
    type="submit"
    value="{{ T "register" }}"
  />
```


## Deployment
Currently any merge to `main` will cause the site to deploy via netlify.

The configuration for the CMS is located at `/static/admin`.


## Content Management System (CMS)
[Decap] (https://decapcms.org/) is used as a content management system to allow non technical users to modify site content.

### Log In and User Managment
The admin site can be accessed at `/admin` and requires login.  Login is handled via OAUTH provided by netlify.  To manage who is allowed to access the CMS, follow [this guide](https://docs.netlify.com/security/secure-access-to-sites/identity/registration-login/#invitations).

### Configuration
The configuration file for the CMS is located at `/static/admin/config.yml`. A full summary of all configuration options can be seen [here](https://decapcms.org/docs/configuration-options/).

#### Advanced Configuration
The admin site is fully customizable using React.
