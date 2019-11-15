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

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | logo | mixed | string: path to logo image |
| | | | mofron-comp-image: replace image component |
| | | mixed | string: height offset size |
| | | | associative-array: option for image component |
| | title | mixed | string: header title |
| | | | mofron-comp-text: replace title component of header |
| | url | string | jump url |
| | navi | component | navigate component |

