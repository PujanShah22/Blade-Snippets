const jsonMerger = require("json-merger");
const fs = require("fs");

const snippetFiles = [
  "./snippets/Badge.json",
  "./snippets/Button.json",
  "./snippets/ButtonIcon.json",
  "./snippets/Card.json",
  "./snippets/Checkbox.json",
  "./snippets/Divider.json",
  "./snippets/Flex.json",
  "./snippets/FlexView.json",
  "./snippets/Heading.json",
  "./snippets/Icon.json",
  "./snippets/Indicator.json",
  "./snippets/Link.json",
  "./snippets/Position.json",
  "./snippets/ScrollView.json",
  "./snippets/Size.json",
  "./snippets/Snippets.json",
  "./snippets/Space.json",
  "./snippets/SpaceMargin.json",
  "./snippets/SpacePadding.json",
  "./snippets/SpaceView.json",
  "./snippets/Switch.json",
  "./snippets/Text.json",
  "./snippets/TextInput.json",
  "./snippets/View.json",
];

var result = jsonMerger.mergeFiles(snippetFiles);
fs.writeFile(
  "./snippets/index.code-snippets",
  JSON.stringify(result),
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
