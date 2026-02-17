---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHKPCIQ%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGbD0U9niLF6grMZlbL7qDfeihemkAUHwD3aLDB2dBh0AiEAzjIXNat%2BdDPLc5gX2OZs5onJ4UcKEGEdq%2BX7HoTA9Q8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPX9AtxUx111sHypMyrcAwOhToMf%2ByHWaoft1mVWcKzPnWQ%2B3FOmvu5QOhUmlZ%2BXF%2BXZelG8f668BH5onQ94wGomsgHjg4cOANlRzcfE9%2FP9%2F9vVjiTJqZ54dnoCU07Z8IfG2SLVyQkAg0G1RpVZjZxKBZiYblLQ85BJo6HyXOvYzrzUfAhnxm4ACCeG%2FBgjXrI0KJEIA%2BONaoU2jaoFZyKUdIXaPTMqPrlcf26PrEdj40Ne9yqbEVnMJi%2BOXPhWeC1DaikxtttmlnVQEH0NwmkZczI9kDyb9lM7RkpQobbNsFOXRzCQZYp5bdx%2FIFHWsg6o3nl9NacLXt69PrOtgjVZFL5FAK8QuXjulXjblNiOOGBwhAQi87oAtQRTzPgMwPdYo0Bun9L4N994H68FwlT2DzY7BHNt79iLj3YJ8YQ1CWBf615jgSFnRUD8lcTgDwd%2BELUasgzefi4uADaQQpwzapKZPJsBHTrlW732T0uuuk7UQfKMWNMb0dTxrqjqnVYQ7GAxsxBONRY04Mwi0b5cVCo3eyCttmfruXboO7wuEuHd3epAs9qYC8IVgePnhnN3ZFpH%2FC9xVUEQx3VoH9maqVGpnIL7ZINjF%2Bm6uMQ5cOMtfALKO6tchxI40R14igQp3%2B4LtZVnV9NZMMqYz8wGOqUBC4SlFNNnQZ52eAoPh2ZaTolIMlyJlsKNjGn4oLRhNtFhqWq%2FhQAedq9AkA8G%2BADvABs5kul3eF%2Fyt4kmvthFV2cEU5kirs9aHmiRRlXtd%2FqYOv7J8eirxGPOVH8uDyP48PmbZNImoSM51Oo0TIzu1s%2FOlsHkJhYgRB8dmBOcycZDiTdTBTid9ObpzbGFyp3Elyp4W7PhfNVbLNXVDFqCaCB2pd4r&X-Amz-Signature=0bc4501c9208b04aeb3e72d34be98453818a2ea8e7f99c365e11a09b71d1c5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
