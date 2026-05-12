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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VJB2AM%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDVs977br3BFlhcKD77cshf3FmCEvj8WELhVxeiUAG1yAIgQXRtmq8pbNmgaJCLDc3GlF8CoqnjUqDy95e%2BYbqOOawq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJoynpif2vNV6bS%2F0SrcA6UI9jXEazYav0%2FmhZf1P7%2BjK9Hmc%2B8r0L4XFtd8IEXRYDBa3s2qIAOE0p%2B279YTopdafARA%2FrfDjJ6ojZjQ7U%2FR89Q9W%2B32DDJJsugS0fTHrrWIrDg063Kc88r8gJxi09uXzhu7RYS1zYr7DJFIjqq3E8WUa0aI3t5GzXyh4UUUssUXhD3w9xzCiXChMEiTmrjbWW4shT8UZzEv5vA%2BnRrHjCzs42l1uJiJ9kReRKjQmUE5Kwb94LQY4hOFoWUGDcxMdgbyWTbmEZeeuE3K%2FNIQp8eGlzXJ9RWSJUcVbS%2BrAfpHSG%2BljnI9eACaWixIgK%2BrYT8dJHatr1RJ%2BBvA%2BZIu1Lf6pLmrzUpp3o97OlHiJat8VbqPjjHaeoObd7PnanJN3tuacrcu0%2Fe%2BHNTMhMEgmDm0XQrQDoQ8gPIxf1YzntTyyLqTSH7UPLeUNotjBv%2F0xnPrGjkC1CtL3gjtSsttfL0t226JoINsjQmhgYl%2BTX5RnZqntb3P0yGawtiYGhq04OrOuUZjJ4O2j70DmCysTCyno6AZYYCZHgVY2Qf566sdDHd%2BCfw4Hunn5t6Tkin9PQUMo5amBcrkbnJzkT3tlnc7Y%2Bqu9BcyFBCReJuVKL89FcDXnbmgkZ%2FjMOeiitAGOqUBF%2BE1lcBczHP6D3hJNtx9%2FeMqTWyTPe70C%2F2VkAMZILGReXJCAK47UzjqBHt%2Fyu9wYZRxa%2BjnOUyz7Cx%2FGWjznRZdzBBPlifLnMli3%2F6vXkGFXkJSrbGDhXLlAZE6gMDAADMx%2F1l3oDWULFnaWQPli%2FBGLwu7OAfg8KOA%2FA63ZedbvSIZLLprFOzf9zDIaGEHa223nDCzlWH18Fu7xcGy5pZP%2B8f6&X-Amz-Signature=12bb3247ebb390f368189e7bf2d73af685def0f612e16d1bb380cfac0984a39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
