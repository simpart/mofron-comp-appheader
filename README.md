#  mofron-comp-appheader
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

app header component for mofron

title area has a link function that is specified by url parameter


# Install
```
npm install mofron  mofron-comp-appheader
```

# Sample
```html
<require>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-comp-appheader">Header</tag>
</require>

<Header image="./logo.png" imgpos=(0.2rem,-0.05rem)>
    <text>App Header</text>
    <txtpos>(0.1rem,-0.2rem)</txtpos>
    <navi>
        <Text size=0.3rem>&equiv;</Text>
    </navi>
</Header>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | title | mixed | string: header title |
| | | | mofron-comp-text: replace title component of header |
| | | key-value | text config |
| ◯  | image | mixed | string: path to logo image |
| | | | mofron-comp-image: replace image component |
| | | key-value | image config |
| ◯  | navi | component | navigate component |
| | imgpos | string (size) | left offset position |
| | | string (size) | height offset position |
| | url | mixed | string: jump url |
| | | | null: not jump |

