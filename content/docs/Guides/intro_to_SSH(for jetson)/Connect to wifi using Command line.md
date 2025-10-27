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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBC3ATAU%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC90gpxn6l2Ze4hofZ4zjHEvmuPha60kAcIXneOq9bOSQIhAOSxqFUb55GC3pE34US7W275tEqOAiCCOdc84nyA%2FfBUKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FLKkMwF2oBxdKnz8q3APZ6kpi1FIP4I27RJVn6UNfbPllqBX2mRYTE0j7AChM6F%2F89i6IDC90LoL662bAKiT%2FdZw%2B4Ubs4%2BjWyORnMVXOUzMTgND5%2BoZ6t23OsjWFbJc%2FRvpKg%2Bos0%2BDr4P5G3z0UvNAF%2BRn9S3xBODWzi5gb4RtG%2FuCqrHPBW7ZzVyrCGx96TKngQIjTkCejSeq10fAMiKN7wu1TMdN%2BhFj837tPv5lJejmdvxz%2B%2BHm3QEFFA3JfMhZqIEYVmOgYKoEGKrUyJTG%2FtAH0AmDpuK%2FYvh8PW7g%2B%2F8BL03nqiKhTtYJuhmP%2FLvqwaoY9a3sYbj5O0mSW3vPJImb4N1w%2FP30q3PX5bidhfxFZIc0poMYWWUq%2BnfLe21uqk%2BsXJjxhpiY6SqBbmjWFz86QcCX4BAhBzpPa6He%2BdKfs56N%2FfCB4xzE6W1ZHpDnYW5d9sKbrWeUT6xLlx7OnJK1yvqysY%2FOPFKJiLKmx1Wpq%2FCxcptKi5uO%2FZiCeqHmwaxt4exhGHlOd1rVvzpfMeBfw9sgaa%2F9GVbKHSdSnabYhtYqPO2oNH92AMlhG9itKgcLJ1FaHA4Itf%2BT99CGj%2FWP8VFCEowzANWl9o%2FSxNQ%2BkxaVdRQqA2uoTCbP6nrApS2E8BG4gIzCMj%2FvHBjqkAVnfc4HgpvjBQR31ZCF4jPtybskYXa9NFHh%2BAbfq9m9102nm45SNwhfT82SRcqEqwTEzjSPvdRrc9Pt7DEQXDyJ0Iucq1cHUjh%2FNnHGYkqHwzaRT6N5Ghxqcih8kaezZxdUq2Lbh57RR0LRFW8bFOI3orUbeO%2F4SVXuzfOdyY48bOzeuAr3KsWiLhvK3HdPFC4Fuyd0ecOLlwNJvB%2BkHWlWpQVnG&X-Amz-Signature=51bce6b0a3719d63cc99aaaf64dda056b07209fc3aa031a4a9cff2b0c54fbed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
