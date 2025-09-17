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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4FNBC7U%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCXlucT5dOifvJ5UV%2BHn2aIh1nvDXGlt%2B1vv2IYSsOqYAIhAOnt9emnwFJyrWt1TBp9F6WdLPLB1CjiAWmqzTFVHGD9KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXWsIsatmEx%2BG%2FQwq3AP9lnNYGUAc5IiKrXkk%2B%2F8zO4tVScc0HCkSB4zh4VOqXUIjN%2FIzhm0%2BjgtOa0Rb6GB4%2Fa3yrF4JFK9w3MGe8Neh8u6wcN7KoWXo9t5QyuYZZopbrwmnVEmaKxIaNWinManZtNZNoZJdy3Su2Xhmd9CLgjHJRARMkBhRvSxBNWBgbYdfGHGbdtOpnEHKArj5xYVAGG8TlM8gdAiEQewoLVDAdHq9%2FB1xh6sh%2B8TjvOX41nv6ILWtXRcz20zwSZ2x3zlh8H5T%2BahUTdcFPGrlwuPQ3E%2BMzwXXLxAZcyIpqAmpAajsEFSgF7ixmN%2BetfP3yenMsSRo386E6j%2BgHS4sJLnRDkbw33nJDGa8bkKSpLNTvJBHwAb8FLANe9DaMxassrIm1hHhWCPnZQ7JBw%2B2jIXrQevqA4bNYX4a1ILSgxJiXYoBb%2Bb9k4kSydsn%2FZoUclk1Qa3xdGH6C9X4VdedNhQQenAKA3WES02tiadN9ZQjwf%2BZaujtcHsvuZ8vRq%2FsVMSco9RgYAWjz8LLm0HVyVJukPyYMORz471Y5RUWr3m4VXKKgTiz7DG1EWgZjVNOLCaQkCZfxYbfTZ82UL6DawA3IpQ8VEJf8S%2FwrBbjVDzsgGn%2B0X2hGL5WNxfORzDu8KfGBjqkAUWx5KJKBbkMKiOE8uUH4UtfTOKY6lE4pWiv5CFVNcQpEs3%2BvSZtZNqUVAKKfpspnlSHS6uS7x3smJbeFuyX%2BZeVzx8hjkFZveSy1arbgT%2Fm%2BLO0k7QAz9NW6Z5Hdzk4ozYha3JUptRWcpyxOfqApbov58MDiDTPol1fVdwpxnafpDfrcuUQlTgWL4hw2cke1%2BG3nmDNmajd08gSidHcp2AudaSm&X-Amz-Signature=b3444d561083735b35cf6a962228f8508252e44304c42f0302c3c21023f268f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
