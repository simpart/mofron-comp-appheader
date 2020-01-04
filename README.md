#  mofron-comp-appheader
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

app header component for mofron


# Install
```
npm install mofron  mofron-comp-appheader
```

# Sample
```html
<require>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-comp-appheader">AppHeader</tag>
</require>

<AppHeader logo="./img/logo.png">
    <text>App Header</text>
    <navi>
        <Text size=0.3rem>&equiv;</Text>
    </navi>
</AppHeader>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | title | mixed | string: header title |
| | | | mofron-comp-text: replace title component of header |
| ◯  | image | mixed | string: path to logo image |
| | | | mofron-comp-image: replace image component |
| ◯  | navi | component | navigate component |
| | imgpos | string (size) | left offset position |
| | | string (size) | height offset position |
| | url | mixed | string: jump url |
| | | | null: not jump |

