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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FGWZDS%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD10Ga%2Bos2dmeyRqnSzxqGGsylk0mI9QvRFDQ5v6UVL%2BgIgZbqRbVIh%2FJ0d3aDfmcuF3y7jJBmRy4R4Hhz01Iptgy0q%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDeDgnJTVG6QlgPD6CrcA3F8BC8QYV%2BhTQC4Yg86XaQhb3jCPefRtakz6bENWtYBwfak8o0hbQc1N874h%2Bfu5kRPiuymOuX78Pf6xI3oHPSDeeUZpAc%2Fqncf0ETh7JbrNjWxLELmNuhtYOL5uyUeCu44ymOp0xAP3hqbUlX0aRZ%2B5wWZA6mS2rOwIkPCOQRUBEuf79WCi4Wj47yBZOiW8bVuWqqSsYGS4aGEuqDd8osi7VYjUJfO9mIgltPdliHS8PfC1lSQW4ZGSvNo9Qc09YBKccJlHnhM4ZilDBOoEm%2FTGt2hThc3zShaqIkQ08VXfxMgGoq8msYEKc%2B66IvBil5RLoxCFT5WGqAbY092lMHJlzPYHrgEJwUj52QW7KxiCAtLWI0jyT1hLpxOFFpouMnKM2wb7wbwQUUjG7f6JCTHR8h3HLM5Hchri4jmS6gfMoIm8BxzLtVv2cVC4jAB50YlUu%2BrTEcocp33luNH7fD8JDS4cKNoegcVaYIi4GSrYiqH7HXtn8fQ81RzEsoB4o5qoUjJmkI4omE4g%2BEt0SyARewMPoT09PNWUVDD0nyO1hYF%2FDdPza1GOZUXCHk4cRVOtvjAUDfvXVxmjD7DdkwnfDF8fCwolTHEwFD2kbx0nTwsfqgXH%2Bm8oXYCMKTgp8oGOqUBso7dZekoa9k7CQapyY0ZjcRMGqrRnodO1O7XHv%2F8qg3il20ugymrs0FPfsgQODuNJ3yqgk92eLyADorXpH12rNunASxaGY9YLj5QNP3CFBNmWk7F4mrlJD5NcLHq9wiWgrHjOW80oq%2B3oW3YrLEBw08CFu87n3WY5V8dZ20Vi5teQtxVujUTC88jcFNhIxH79agLQlUeczLFIiDJ2BuCu7l4hu3Q&X-Amz-Signature=692910122c55aba4420719377498098acbb38f39577ae92b23f7ee27e6118019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
