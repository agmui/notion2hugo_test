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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNNUM4X%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNDtHNagxI4dwYvJFrhs6LZfptLrazYlQWutla2xnaIAiEAnlq0BLTLHrbE6ejG7TPsYz%2FH%2BV%2F0xgd%2Bhj3MkLmFCLoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHdVPfrVNmAgSZTv9yrcA%2BHRBXD6w2RS8%2F2q6psWa7dgW%2FbVYhBbhfLJ44AxZXaNoWiccBjQzpjg9e2ZTywPSjSjr2UBXriqgCvyogV37j2gYRiTnEkTFhMsMdH80VG8NW239QtbT843PLwWjydsLSmJ%2BYp9dUCZe8zf8SHXpkTnS9zxGckG5%2BSvs%2BkMnW%2BY7s7ye9Zr6QXZepPKPP2m8KeGrHgX78RD40Vq4%2FZBkVKyKO3mjrWO4IG1TL2WTY3QZYYvxalTneN4kdkdpwH5vbQS3qijlB6MdcfJWfnrDYPUmuL3g%2B2WZ5qPffCzux6fOuRJGORu13Wk46InoK7DZ2ntkxc4idzMzhXLHKAJDsTikvdBG%2FiuTcvC9r2aghWMBb4Sl8mZcwwxwHhOfqB0LWlw0Gpmq7%2FDTWc2v9CKdnrqr3%2FcNRI5HFBv6z8f6%2F69zln0TtOvzOxsjX5Cz0l5eKVU0z2LVTwo7iuDGyNMT7rB3PBs4Pfza4114sOc73N2IBk%2BWSA2%2FJ1M9WRoFpqoAOuN4WDVf%2BdyQ6JzxgiHPTBG0QNZLtDcJPSEs%2BpHpuJt1kbtRSZwlUCEAySlRqeBYZyBoctiC%2FY2i379Tj3pLEGh%2BYsCJbDcBqrftiIPj13J2Hb98lyJT7Jy4qCJMO2y4MsGOqUB6hcqTeNJZwxAwDVtGmrZ6lw5bMXNq07uCKTqriscPl5x%2FLMV5ZGQ3u7GvUe4DUUueqXQ5QB37jovT3aNwwjCFxpn%2Bp2oqnd8ebGOLqSrnaSe%2FuMdSrca9jRO%2B816CCqP2AITzIXEEvbwZFnQtS%2F%2BuvutlPE%2F9476amjfdIeL55OhD0gmdZLXllOFlK3V6FVUkoUrBTZj5XALTbmjoK9l490TXzZt&X-Amz-Signature=6a5fcae483cb471120439d9c7a4a0437774cda8a2ef20a0e556c1d1032f1580f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
