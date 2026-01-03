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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCFGS45%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCSO%2B0Q%2BxSc3%2BRMS1yz4982sAneEFiLfDByju4rsQkeigIhAN70sjmsJf9UuqMVAF5YnPktHXd1PvBl%2B00AP%2F5Pm8gtKv8DCAgQABoMNjM3NDIzMTgzODA1IgwdzgesIvbVoxj81aMq3ANiIgPOS2SlZklrktRnGEwOhg8TI8ayxoIWnR9BkDKeWejnz0eNmumJAYaZV8acI3ivheeqVt2lsH8asB7YxzfOkBXsjX2SmtIiWIfqS%2BeaSPNF6kE0iv4hgJSMQoVWmmoZvgi77%2FUtZ2jqjop945LQ2G4rWT3jCArWBw1Zhw6TWpLtkolXBUaaSKFZCj%2BSD4hpJNWE7Ca0a5kesbzMy4Vuq%2F0iyXh137V8J9%2FQ4lVwLCBQhL9eOa%2FcgHQ97agg6GUU5KJZ4TUhgE%2FMfn%2FO8EsGEEN17zEEG9eB05jFSq8SbhjeztDxoAlnAnuyNhBZ%2BlBAtvT5%2FoVEdY5pBfz5W9i7riZ6G6vHcSpt3f9n5wz4IgjQjFS5FtJjk5K3jT1pTawAekUA4FOjlmXvBn6%2FQoooShoQ5%2FymtVWDQNJxmDuKkrH7rYkLpGwossT%2FDgDd3KEWTIe0TD3PQe0wx2B0FsOyi%2FRV8jca64DTMBFH%2BK5KuRXWG8y%2Fx93%2FyZ6XQckPx0kijrnKUyutWm%2BdKmkuafl%2FFHK8U%2B32n6kpJ3%2Bf3K7NTEX5cIqTwMKaN4cToR8g%2FU5lbY4yrGtsprX%2F0wLx%2BjQxGMyZS24T%2FQxSXiW7MvDlqEOtQUxFhdAZUlCbQTCzjuHKBjqkAdCuX8%2FQTf9DnsBbwf2XGs%2Ba%2BvNV9Gug3ta0%2BOjK6aCJub0wgfbLARGFRZ2t40wsJ4eJ2RNK60OAVBS6DUzrqa%2B0bn0ZJqBA9ur2hStgSvR8h3n6YlaFacCzOp8gF%2BxWvgxyRW3DGHFFj1AeBNxgX31IJ9w%2BQhIxYxLE3DtxvhP7yyblSTQxS8536jXsPDfupeJAEwaqoxwkRZxKnF4JazdQ1VVT&X-Amz-Signature=f010f02f726c6d7d39237e1da34a4cd0fc2b7d400bf1f4ff6f40334afd0418b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
