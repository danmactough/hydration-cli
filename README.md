hydration-cli
=============

[![Greenkeeper badge](https://badges.greenkeeper.io/danmactough/hydration-cli.svg)](https://greenkeeper.io/)

[Hydration](https://github.com/carlos8f/hydration) on the command line

Usage
=====

**Example**

```sh
$ redis-cli set "key:with:dehydrated:object" "{\"name\":\"some name\",\"counter\":2,\"timestamp\":\"2014-03-27T18:45:00.296Z\",\"fruits\":{\"0\":\"apples\",\"1\":\"bananas\",\"2\":\"oranges\"},\"related\":{\"siblings\":{\"0\":{\"id\":2,\"_types\":{\"id\":\"number\"}},\"1\":{\"id\":3,\"_types\":{\"id\":\"number\"}},\"_types\":{\"0\":\"object\",\"1\":\"object\"}},\"_types\":{\"siblings\":\"array\"}},\"_types\":{\"counter\":\"number\",\"timestamp\":\"date\",\"fruits\":\"array\",\"related\":\"object\"}}"
OK
$ redis-cli get "key:with:dehydrated:object" | hydrate
{"name":"some name","counter":2,"timestamp":"2014-03-27T18:45:00.296Z","fruits":["apples","bananas","oranges"],"related":{"siblings":[{"id":2},{"id":3}]}}
```

For pretty output, and other json manipulation, `npm install -g jsontool` and then:

```sh
$ redis-cli get "key:with:dehydrated:object" | hydrate | json
{
  "name": "some name",
  "counter": 2,
  "timestamp": "2014-03-27T18:45:00.296Z",
  "fruits": [
    "apples",
    "bananas",
    "oranges"
  ],
  "related": {
    "siblings": [
      {
        "id": 2
      },
      {
        "id": 3
      }
    ]
  }
}

# or even...
$ redis-cli get "key:with:dehydrated:object" | hydrate | json -a "related.siblings"
[
  {
    "id": 2
  },
  {
    "id": 3
  }
]
```

- - -

### Developed by [TerraEclipse](https://github.com/TerraEclipse)

Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Santa Cruz, CA and Washington, D.C.

- - -

### License: BSD
Copyright (C) 2014 Terra Eclipse, Inc. ([http://www.terraeclipse.com](http://www.terraeclipse.com))
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of Terra Eclipse, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
