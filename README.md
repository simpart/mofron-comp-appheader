#  mofron-comp-appheader
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

app header component for mofron


# Install
```
npm install mofron  mofron-comp-appheader
```

# Sample
```html
<setting>
    <tag load="mofron-comp-appheader">Header</tag>
</setting>

<Header image="./img/logo.png">
    <text>App Header</text>
    <navi>
        <Text size=0.3rem>&equiv;</Text>
    </navi>
</Header>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | text | mixed | string: header title |
| | | | mofron-comp-text: replace title component of header |
| | | key-value | text config |
| ◯  | title | mixed | string: header title |
| | | | mofron-comp-text: replace title component of header |
| | | key-value | text config |
| ◯  | image | mixed | string: path to logo image |
| | | | mofron-comp-image: replace image component |
| | | key-value | image config |
| ◯  | navi | component | navigate component |
| | | key-value | navigate component config |
| | imgpos | string (size) | left offset position |
| | | string (size) | height offset position |
| | | |  |
| | url | mixed | string: jump url |
| | | | null: not jump |

