# rask/finmech-site

Static website for [finmech.group](https://www.finmech.group), a hub for the
Finnish mechanical keyboard community.

## Building

Requirements are stable NodeJS and npm. Gulp is used to compile the site.

To install and build the site locally, run

    $ git clone <repo> <directory>
    $ cd <directory>
    $ npm install -g gulp-cli # global gulp binaries
    $ npm install # project dependencies
    $ gulp # build the site

This should result in a static site being available inside the
`<directory>/public/` directory and opening the `index.html` page should display
the site homepage in your browser.

## Contributing

Bugfixes and minor enhancements very welcome. If you want new content, new
features, or bigger changes on the site please create an issue first. Feel free
to create issues for all types of questions or troubles you are having.

Create pull requests against `master` branch. The `public/` directory is
`.gitignore`d so remember to create a build step if you wish to add content
there.

## License

This project is licensed as Affero GPL 3.0. See `LICENSE.md` for the whole
license text.

>   finmech-site, website for the Finland mechanical keyboard community
>   Copyright (C) 2018, Otto Rask and contributors
>
>   This program is free software: you can redistribute it and/or modify it
>   under the terms of the GNU Affero General Public License as published by
>   the Free Software Foundation, either version 3 of the License, or (at your
>   option) any later version.
>
>   This program is distributed in the hope that it will be useful, but WITHOUT
>   ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
>   FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License
>   for more details.
>
>   You should have received a copy of the GNU Affero General Public License
>   along with this program. If not, see <https://www.gnu.org/licenses/>.