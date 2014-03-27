hydration-cli
=============

[Hydration](https://github.com/carlos8f/hydration) on the command line

Usage
=====

**Example**

```sh
redis-cli get "key:with:dehydrated:object" | hydrate
```

For pretty output, and other json manipulation, `npm install -g jsontool` and then:

```sh
redis-cli get "key:with:dehydrated:object" | hydrate | json
```
