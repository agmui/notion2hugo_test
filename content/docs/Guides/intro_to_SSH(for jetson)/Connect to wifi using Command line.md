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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAXNADK%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAPlm6rDOjbVntl4qDMhDFY%2BVmgB8ZRuJiicZRhibIVyAiEAvIBZi9rG5tTj8bZAqk3JwGsZgZ0NftPHy7oR204sZyUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNIVOjiBiJW%2FyHaJKircAwT%2FF%2BM7PNZmmolaVL3Wwz1NKodgKoa1klQ3TueLkLSBvC%2F9Hq97Ajww5hbCCAxb2kw7thbfDZpBxuW6RJqxdZrZEnrwrZRRFcEB5CNXU%2BkMZLbj%2Fiu1NtnxN03suLz4bzK1kQMf12Mhn0rYkDPKA%2FhbHza8BFZQQcWNwtgebXXZR6Bzh3%2BbXr665Wyh%2F4zoH9FN64WcCTGqGJX06TDqspCJMXD%2BpO8JlMIy4mIGZPtreZ8BWGQwVumGiBdFcL07Yudb7hip5%2BXZycAgUMstvthr4fRtTXihC3flXvSplqROoVezVmXyWRxxZsYR3hEVO%2BfLMpzvGVqCqGHnRKfpT1WnuDN3P8gkWRCxJoHyG%2Bnk7kCPl%2BTPf4RO9Qmugmz9yfWRGftQRLaCCrMky6S6JYkifAC4n61iW6y2dL6P3qLVgImxSOEUGA%2F0hLqDt%2BH0x380QI47%2Fm1TLkz5Dfn0qRkN0zukTIwD7z4c3ElY1MszH7H3zRZiHMSURgdFd6hGogaIWqocWe%2Bk%2FIbT2lZ1SCpiMl9G9WxTPbXcbSeYubDDOQSL6uF5JiRsi%2BwyyU2TXKEDQAoo2hdNX6YZEy5YeV9jVIJr889cuc3gvtq61FDemZNGempsctInlx3dMKewickGOqUBhezI2yco5ZHXaax5WcahB6utRTf2QOcYkBtd2evQEVc6e5lQGJyFGFaRntu%2Fr3j7X%2F4hu2UR5SEmzBxA4cJVRx2Gg17eY%2B1CmyZ7EC%2FRkwlZ6n6mQlxnvugNEddCKI1atyAy5j%2BHvg3Apuvq4FCSh4KwuYGpS75tnSddARYD6G3Bx%2FQ4jK1DvOyZV67fbGQgb0IrZE%2F2v6vDaP4I8RCZBqFijPjU&X-Amz-Signature=3c189f9c70fa43f5264cd0d6e92909fada8a94b1c4c03a61a7f28e5c28abbd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
