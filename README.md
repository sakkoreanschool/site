# Website
This is the static web site for St. Andrew Kim Korean School.

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
Follow the installation instructions from go and hugo.  You can reference the `.tool-versions` file in this repo for good version numbers. We're not using anything very specific so anything close should work fine.

### Windows
This probably won't work on windows.  Maybe it will? I don't have access to a windows machine.

## Development
Run
```bash
hugo serve
```

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

Now you can write content in Markdown in the language for the file.

### Theme Element Translation
Some elements are more complex.  They are mostly in `/themes/main/layouts`.  For these items we don't keep two copies of the file. Instead, there are language files in `/themes/i18n`.

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
TBD