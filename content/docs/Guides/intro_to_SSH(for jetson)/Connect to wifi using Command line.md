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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2H7GMFX%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIB2wc2KxSYZPe7eZ%2F7jQGk4DAFkbY2Sy9C8Cf2dpFau8AiEA%2BYuXqucnhY%2B%2BzaeRtL%2B2mSlhfFrKKrZ7Jl9THJ1oEMcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDL9VwIqi0pRs6uGyiCrcAz548FH9PLytbkUbt3qJ%2B80QBfR%2B4Tmd%2B31WppFtvEU0CWQsPhW9Y%2BpzU40PX%2FsY0usLYhW34V9wSfmqX1Vplvvv8IqRUnmHmZSBcv1HQPogdXQ1vXW5XITakqVoSxWjGeW0xuIPom4X4CT6mm9RT9zGSC0GGlQAqleYiDSUD6bGWCUySWJmtbuqwccrLGE1ak4DGrgRoA76QQ8E2T1Nb9q%2BVsS8nqfopa39PMblwbI9EyBtxWJTFCWRsgtuhYwJ2odR9OvQqxfv3whoN0tOlwnB1aO4ZFYX4pofR7EN6GVkBpqhGrtphB8agQ7SyHjJhxvMDTxYXZqOngK%2BVURy8v3wXn0c6NyYr%2Bb7FMN%2FzBxg7a07UthdfqxlIYjhGbmQFgY3pv6sSNvMHm7TQtWZ2dITU8dbjcwp7n7dAiB5ek4YfXZwoo2%2FZJhEnZr4aVwcbQWb%2F0bFedjEJjz4YO%2BQRFD%2F7bYHwS2UevL33PQYdbCLzgNfQHHjITgiaQofSngS00zd0a9bM3BKCiBClOCPZEFhudJ5Y5vnk98d%2BsKAxsy%2FLQQwytAC%2FjlidWdzve%2B4H2qXjFXywnS%2By2eiSk3Zn%2FulpiUKau2k3%2BGaz0MAKLiMWC4IgPXRmWwippMYMK%2B5q8cGOqUBx%2B5HUfjgvg2pH3apXX5Mttfx0X1Z12IzqVH7PhAERjdBRSYbnNsnparYgubjuhrl25%2BvfB8ESeXjqTgDQehWf6V4xQTwhbTI%2BnsADLJfT8Vic3gKKfOesS6zJmwhdhpOHFNR4rMpeTDcScfOnc%2FnLxVJ%2B8afBbMdVAJLi%2BgErIbzRiJc0g90rPVulEJlZHuwZ7JHfh7bEPoVzy5Arsw1NCmmHwAJ&X-Amz-Signature=ec11b4ff0867aaae2470f7f4d756fac71001053b2d198827362647fee4fd3140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
