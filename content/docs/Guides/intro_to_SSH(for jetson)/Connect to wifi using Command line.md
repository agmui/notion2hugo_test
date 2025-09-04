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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAANVN4K%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD10tKD7dmdG2DbXm%2B05B6ZR2xvgEH9Snh6Kc5eHp3ydQIgbWPD2ZqIKdSE%2FretH4%2Bo8BZUhbcTXf%2F7B46gR3EPefAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHbCki74MFUmTSFiUCrcA%2Bg2pxwGQN%2F%2BlfnFAJnGgxl6TRo2kkVWDnCzdBDH082rfVJu1FAFBnjI7jYPNumf%2FdA2R%2Bsqs277sfjxaABMV%2Fumwz9nVRXcDLPljok%2BqtSjtzuZYShrqFoQkP6Yv6JdZUOBUsivnoC3%2B8EfIT8NZEKGbv8rKBIPAufc1TnEd6IproJLiMarK0oC%2FjYFN7Bjs%2B6XqsU9WR65FQapsh7X0J6mBK4MPN8OApQNyiCvVWKXVLHXM5mSBPrj4Epy2SNZ9Tyf%2BLnJEjIDAaOPPS16ZxqNONw5iOUoWMHFnhEYet5dbnjvSYk%2FmeE2Iy%2FLXtK4C613djcTxuMYQFHTH0wWxQ770L2zxKqKByha%2BBJFhlhBpiPQEhoSTkiCgRTgL2JnKxPIEqhyF0LYDe2Q18ErWtjize3YSho0ozsN5sE6J%2BjaEc6mzkfE5CzMjUZRvk%2BxxCETomUKABT7N4IePdwv9OnC6JG3lrtS4pnHJ1jHQ3wV1mTb4sJY6WvlRwaLA0PeDE6Xmgt9KGdsNt6iESbOfHlyjWXMqwEfZS%2B%2Fs%2Fj0lUnGCUgTQoIdgDOkCusymgJMf98vbOHHchL3nUkbBJ85vlq5ToAM2ZiG2JgajraYDNCBgs9y1SZu5sYaMRWuMJC248UGOqUB8L7eZnJSyt%2FLvGono%2BuLIyGo6oa3TXQBxscD8FFqy3o3SMEmSuD%2FtzIL9wh9959PIvjwNBgIdusG9B4cCUheeXJpxFPpajp7FQWLcaFECJvgD900rwRPhzEWw8Q7xsDYJkj5kYrOUTwX56Mm5YzF1CpuvagOK9X9tPBpeQHABWlJBXA9mMHxDoVDN99xVnZ3dVLqA4oe6GVMl9%2B7tFWPZr5DEwnD&X-Amz-Signature=ced3f9f472d7178fc8a35876cd5a1d874830fcbd464290f9c9ee51ebac04b59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
