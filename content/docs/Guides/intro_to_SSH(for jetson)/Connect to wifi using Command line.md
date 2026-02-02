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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TEVG767%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDtvckj3woQIoBrKbXwgK2xHHhLKYxiy1WvB7SZmnRg4gIhAIhDpGit1Z0RlhO6plWq9h8rAwVGABmYNvw1K5OdqqXZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZnOlVARxffvv5kZkq3AMut7VGioGwK%2BwkeEsDLpO11w2l7XwjfqzJxIaMvIRL0p4ZL2g1YkgWQPMJ2LDGYhb2s2sQKRsgxyLO3iMS%2FpY4Naej39AJKtb%2BFNEGDGJ7CYkx1jzYCjE2xJtZDqJgpZWa8v9WJu8ypJP8KCZIUg15CsMXqtFwuWzQMJMes7LFFIS%2BEA%2FaW%2BKC2cFH4SlH4PYx5AyntSb4asGqH6byenRPeupf3dBH9Gn8FgjHRjTg8rf8O3aER%2FJkNoo7Qw8mWiDOdsZ3pAHCvCDV9PiyjzOEzVChyjtUq1gz7Xf5YVkWXTYgmWZjeCN7%2BVkaaAJj5W8WNtG4eOiFaU7%2FEieLbelAElif7TUZ3apcxlFtmGHOOxtSEV28K1%2FFWRiyhHq56njFjfCRC%2B8mV4D6EoOlF6ZLdUbQyMjhH5FLpqejGCFM70GWapMirZ3aPi6GIJxgH3PUL3y3PshWXo%2BDVwsoo35T3jGWkMsPzF7CtqmHDFo68TZhnqmVvy3zNrGD0p4yNO9x9saoUQXf%2BfY514%2BFCK%2B4AlC%2Bc3cRBahFl3jbafstxsEIDJeubnTSiNqc2hOhtXfU3Yvh%2BN%2BLaq7u7%2Bn8l%2BCuEmaBAL4UK13s3RBbkCYCQ2XdfWO3Rcle%2Fg6fnDC0hoDMBjqkAab%2FNJ7jB%2FmakcDfK64AX2DnmYK6D8wDxT6qlHD0U15a32k2OVXZb6GjuS%2F1RiWYIFwqZg0SVhI2t1J4IJujjWTJwxNIN9ox09rs08mTn9RwD7rk8p8Tzo2%2BQJrav5pk5LM3NzGW2dfOuoAndGKFIP8%2B6zN7c8E4rt%2BZu4Vz4Qir3IjTXR0JOFIpkN9MZz5IKj2Z%2FTP9OYRT3ynN5iQAHJt6%2B%2BgD&X-Amz-Signature=181ee507787aa0b5350e2d52c53e17d976e517b79e33105efb8825f197d41563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
