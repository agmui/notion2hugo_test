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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466447UCFT2%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjvSpP%2BzmdW0imj9Mk44JHVYLPChnK9l5hc3xVkThmgIhAOKoHHyWZxmBP1loU2u8wpK71szEGqIz75Wf8GC0nAvzKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpdjb9G7igg8HtBYoq3APB9wOYT7iZyvIDkoxW2BhbU5HlJo6mgBjDaytLKnoEv2fJn8x4zRU4D6rV0FjkjqHtCKznSM5XKgeFZ35jEW%2FShIrpjzg8jRHabSBFbAN7bB2XXyXyd472kOilYtVBV5xLe5hGSAnUHLRrOkuGnSSZjIjLuzNNBPtzT%2FA1MomNzHoBDLQQU0ILpsexTOde3cyBsV%2B10JjhoHuax5TXfHdsF6cfkSxE7OEyiml9w2qyFHknqA3hzBUNjTkjpmyA5Tz0B6YsJnsz65ZpMNqN3wTlI9PtUwLe0AxXryvNnNY%2FIfIEY3tVW32ehwAsGp%2FjJGmDn2euJFtwNoPeeYRELsXZdaPve%2FRg5Yh%2BTo464x72aTDyX%2Bf%2FamOGu%2F%2B4cqVL1oWqHqUqUnG12qTmPQRK6OVS%2BxeoYYMWSPBWpnK6%2BHrBPzodUa%2B%2BH%2FEUjsWT87Yuah8aff1OzyU9sBdYmQ9vYe6TNFIX2Hdh4GXvvIYy2cSe%2BWhJXruDPf0dWQsyX07lEpPLKq0auLu2w5BwlpZ4Metsd3R9Xm9pHwDy%2Bu5A10gFhozdAlGNDlng8RPAJHZ6Zm6gbTBmgWUyPbfRijoihWoW5mnKfMttFnCH4mz8FqC0L%2F7xnNrBPqLeYVbGHjD6rJ7UBjqkARvd0%2BmL3%2Fb7dSmDv88AbSx%2Bf5pJyooQQa%2Bn1%2FtzT%2Fbqnn2hZJ4QaFTZkz8unfloVxHn9ias9PvFC8Na%2Fc%2BeXQySlPgZdEaMajQQ1iQLAnq4PcN6S8vEXPBgyyx%2FhU82I7qfyTJqJkgyC41k6e%2F%2BrgJ30DkQNdf12ZSU1MUsEqXqh7Vwa9tRohz7aiXZpn28UgbiyxshG3wT5J7apjXbBeqC26uh&X-Amz-Signature=6fad22ca31e013fa24bfa09f9168143d56d1f7e2d30921855c00d6709b850839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
