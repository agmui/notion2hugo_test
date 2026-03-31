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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LL7SEB5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBaBmZaWBPtf4VA6prgUjX5mBuz1JVX3PHzGVwQrh2jSAiEAiAStkpHAWXvuXpBxZ647AFK5lfV9T%2BGQa0RfNUqlB%2FMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAUpl4U%2Fq6Zc4OnMDSrcAyk0F7UM%2BHKvEH48I%2BbB3BrRxeLq2eKxu%2B6QMKv7IxvIrWGBtVrXHHL122hKUF8VuogZubNrFQ9CMm67LCLL6VKKp46pOFGCmO2g6KieTrHeohYe9UUpPXHbC7srLFd1UOarsGp9vnddhvSus%2F8igIo83U8zz3%2B9rBcPlSkihHYvilePjH5DXgZ1w%2F3XnYH4Q7ZQBh4YpQWEU9Hx98IfUS3U2ui%2Bjqgh8UxOvAS%2FgKAfjTF0RNcpsjZSkZfLdScXgi5fNrTheJPNUX3kVdmCwZiISeRMqQZO%2F4c9U0n92D%2FHGzERl8HJ%2BdX4%2F3wDsCOmxgeFk7QOfE9wSaku8ASOj9sx%2BOkyj10UpS5FrV7DVvcetUhBgRmEwBcXPHWO60EgDWLgBTHkwNvh7DlT5oq9xgAiZjZ4d9guZBOjkirBoaKmsRtG6XdURiwtzRpm6wOVp2H9hyotFllbvk5lLT7T44Ay3H0L%2B4Urcng%2BBbBwIwhWILzsSmFo%2BqYm5k8CoP28RahhN4dY4v3iyEYFGq5eHTpXP77sZZH3IEWHjqITkdx4HT4NfMph3goJlbBeuyjEWAzEQ3c1WkjwIjQc1bA43j2D370kqPjKEzdZlrnnr5lJmgSne3dSShfxDQU0MPHdrM4GOqUBFKXkRfA%2FqrfMVzf4a45bWZLfp9Eu4NWnv6l%2BHRJRZbGIN9p%2BAEc%2FBWcQZZv4mSBGDko2ZR4F0J3%2B1p6324DB78O6G6EDNAvXYZxJ5mbf7NQnCv%2FKrlan4unJuTu2bFdfavifuXNYqMkjVdWn%2BWkZ6alMX%2FZFPRAUzFAN88%2BjmBySOqDWvMkb9lKSCzJKmTc%2FVxHNrUSw0LQq2VohI7xZBU22mAeW&X-Amz-Signature=ecbd56081bfd2ca7652f57aed687722fcb35cf89bffaef8dbf911ef7b03c1f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
