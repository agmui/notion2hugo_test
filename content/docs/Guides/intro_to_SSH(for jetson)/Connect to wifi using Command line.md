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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTQUFZ4%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCsey9h43p0ihRHI9lobPj%2FE9CMpRjVqY9%2FZYvzzc9gfgIgZILcEVtLJtZ%2FbHhRObIlPCL0hhu7z3OiDQOo6A8%2FtN8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH57GbXcTYJqsXPuLCrcAxhcOmwcL6ESm3X5SDhZn42Ub2DXJ8PN7bgdONGULQ8VUdpYbBkPFtQRkfLg9%2BEIxjpXT%2Fr%2BNAH3qSg5IeeEW39vMxrrgvM6z7TVaJjUAjALIZuUrwxrk9QFamyKh2XyXV%2FlebL93d0fUmOSCOpbg2anosImgKCKwoJSvtA8v7zGMfLy%2BJOwr7PYd6IuH%2B5rztxJRF7QqF4kMNBaEGMQZlxokIQc85F%2Bnz2DFhwjw%2Feyzl0UbIPweMGCNjiwBxBq6bbNW3MQqExVDTHjI4IBTXUy2haQ38urc9FTAA%2BYHEZnKEuzI5qaG8c95aHNMv%2FrobwqSUijMCSQkLB%2BpH4X64wF0hS5Kgdes9FoZA4joVjNe3ZpAwJDuftSeftn4zJPWaaEfLVN5hEdgLUYxBPAuEwdfP1g%2FpIlnswsGmeuaYwOd2jf2PqzX%2Fna11u4thW0VKKMxe5rgfgRFGkEAQ3Ik%2BIko%2FAS%2Ffo4t6BKFD75TQhM%2Fn%2BLRfshoog2LU6Efy3n6zLZQDCk%2FgrdN0EQjCi24sPMIgN16iE0o%2FyHBennVqbQzJbs2r%2ByeRi9cq3Cb0LgDHJ1k12wwQozM%2FegDOWUdyk42%2FIiwhLt%2FZ%2FlQXLHNPiWO5yxexaqDOglT0crMJ6Tv8wGOqUB0HAelhSZqe1CApza4XtCG9xP4Z5kI3H2xOnIKZ5i8FO4qBytyoBIBSSpI7obNUAqoSvnoXirBXx5kCxmJeXh7MSz3V2J1rYIKSr6AHDtPjHJvQKf1ixnRXBJJrP5mWiTRNMyVnHQeXUIg%2Fb%2FtlZKxoIPLwr8glRSofyVkbTvVuGK%2FQyVcryFPre53Xfg1PbDHxs39QG8mpDnapIU9IT6JRWCpNKz&X-Amz-Signature=a3176ad427ca92430b429057572f06c9909a5c86237269330057525a1eaf3ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
