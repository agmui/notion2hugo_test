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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=12ff41f9e0ac2f643ea4342d861785ab926575a2ae3696f1dc07c6fa1460c3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
