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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRPPUWZ3%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYFOBWrMChHkjS%2F%2FTkgLRcWoLLoIVo8Tm48uOwOpXegIhAMAhXsKWXoWuDj9hhP1twyBdEqVg1Gw3fcMKaGJ4ayAeKv8DCGAQABoMNjM3NDIzMTgzODA1IgzJ9YWqP4zG5biqxa0q3ANY%2FZGpY8seeJgWMCNH15PEa25XgiyOOCKp4dsMdhvU0ioQo0p3llTQxmcA8fzm0B%2B%2B%2Frzv0Tfap5K%2Bn0rbALOK%2F7s5p0IFSui%2B2eInFizfyuyxk2MGgygBU0%2FboVTNKN6VXVwcx6w%2BZ%2BmJ1n%2BN4RyOXs3PiV%2BV6sJ1KUs1nvUlyRoUXRfLkmH4HoMuPOA2TgGcocQ5odftNM2IPANLt4vaqGLC2p2bnfPAPNtFL7M9dj1Jh6ObD9O7ZUFH0sv8Y8UEslpQRDu7KERy7rRsuKcZRBVJh2vuS3xIPP9NejGOePPZmAa2rxhx4z2SMYwN8RR05KxlxaYiNhRYxbVLud12ZnQn2aKUbbdxQuQD1eORwnfdepivo3J2%2FaAZadZViE0XemJBWhJmawnEhStME2Ks%2BCqZnR9HXWu2Dxu16Kg7QxlfoadrN7B%2FYdqpuJCsEIV4iE8r3Eq3xZ0KcE%2FDBbb0JL9TBufOd%2BOm%2BYYCJ8ZNLg%2FYUNJDAfd0khUs%2F8lGWgenRkmeN0oXd7TvULKg6LlnaaIKqvrojxJgQ%2B7lBR3rgoqI3JtAG6gh2CbVVx12aMPn8bqtAZ%2FLla77otYjuInuq8tCjF5gdgDbglIefjKHQ%2BPJglEhrQHcfrGEKTC6y5PJBjqkAap374kF44pp%2FI9DHw7lFwUVXWwZyqIgya%2BV9%2BaCcafgjNnU%2FELVI1GRAE2Y6zeWW2nLZl4GaMkciPS9DTCcpazQPWvzuVtnqPHccawnkVnQBUgcX%2BigLJnXTcDxzwzlNVt5GlmiMgv9480UKx%2BMa6yKGPLTRSgEw3P5XOwHsuKSOSXe4YlStSvLhF6VjoJDVDlkpLjIVkFDYTIZhMe%2BloAG215a&X-Amz-Signature=1be0907d2c6de05668d94402bba4ac7f281e57f7541a4ae5efcad122019fe1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
