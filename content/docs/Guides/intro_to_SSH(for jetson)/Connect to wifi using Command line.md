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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBU4VBZC%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bxm9n%2BquBusXkphRliXI8%2FgdEd1QoQ%2FXmqDn9nfEvegIgfEDYJAC%2FdyDTg8wIGkJmXsJUSa9KCV%2FMTLW9LYNzRm4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBYClLV6E0RsmpqWEircA1M5Z5FKLZVY5v%2B8n3K6L87tIf4%2FmUWZjuC32mLNS7%2BG57eY1g4IKh2ydr66niTu8wwjoIZlQPjojVsFxT8tY2YGuZF2uktSZyGaEBS4LcQ5LhSfDQucE%2BQLoeLhn6%2BnwLVTJclgog%2Bc004lacixluyPkaajjomwcUECbqCuE%2BGQvg%2BWxJ2FfG379kActz6SeB1Cl6XItV2NFw1807KhJY83Zt1Wi8jotYAdihoHcTieHtec2%2BEny9EdCVonfR1kQg86hiajZQ1JX7YTbgFtJ6bRaQW92U6nvahp99TNLbGiCaYRsWKIFlmobJZIFm9%2F%2FMwZuf%2BABlLS%2Ft0fomYfxvjzF1wD5Ib2eUVgJnDwaA7Z9ubMVSLI3%2FHswWAUz9BZi5dDBGMusWP4RI0I6lVQPtIkBSDUV7SiHHpaYnFTmb7XqdRgXimC4ipMpAAHP4LULwb6wwZHrsum86YVUEFFMTETYp%2FfuK3fm8hCI3%2B3aN0%2BU8bAP4PJGzJdWoVonHV3aOiqt1zFj66RO0ZN9W%2FoVH0b2yzBsZlB%2FtUmL0oWMd6ezUgYBSVJDem541NguzWeeIc99ia6kIkAkiF06kHTZzxPZE2KitV36FV0y0FMIwfIAjI%2FgLVQRYCpcss0MOb0hscGOqUBaMaapb3gm6wPSaU2ViIxcIlq9WMDGPU2TbNOh8DJwzIpduovSGNW1HyRTq59H4x8h40gGSofXWK%2FGcYMKmjgHgYoKwf3LpjTG6RgJ8pg18H1DoQOkvw5Mk42bx2bRrjJy8afAzp8oEUXIkqDJ7CXJ345ohVX6wepfKZl3tZIS%2Bfbh%2B8pEZyOTLGjwg0e1kZl344rfityqkQTuVKH%2BY1C4teK59qZ&X-Amz-Signature=fd0f4b5bc2eb7dd4c52365141dc34dbe96cbb146cc190624f77b643ceb7e24d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
