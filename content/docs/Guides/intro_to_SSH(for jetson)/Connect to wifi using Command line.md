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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAHDSBGF%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC2V%2BTi5fWMJPWzQVluIbtzEG8hzSCvcn9FPQyg2dsmRAiEAgZmI8o8mbXW4YpA%2B5Do%2BFiYG%2FDvS2UzBWZv0Z0T9flwq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDJc83TQIl2EcC2rinCrcAyJB%2Fdu806j0of5B6tZUYY%2Bx3jEqIIdrL5hisr0rdMnYKtvYhVNlzC%2BkKK%2FhZgjrCeulx9Wkl4hQIfcYkvyO7jIg51%2F4zn%2Bs3BZOvHRx8%2BmPhru13v5CxrZV5PHYxi1hEoZeZ%2BeR6BFpL2ynWoGmwImOoJo%2BC0baRGpSHf8494duIpVQVyoOsfgDzjaCricDbsO%2F5w1AoOdR0nJf5jPQMt67LPBjjXgXJg8ya%2BPWWDBjDp6%2BeljIAUEDwhQsih%2FDZ0VZL2rAQfJKsQLz%2BzvIgjbNCtV49awJcdGz2GYy0ecBjS4bIMczqP8Lu84uHoiK%2Fnig9g7RO%2BvHebDxX1L3xRwAxsdwTuS%2FR9fVjiVq%2BAi%2B%2FyllBYIBeQISpDLK8AOr7apqyCshw9fb%2BqqAeW%2F0mhfk6qc1UFMVhRGGTg%2BRYNBUR3zo%2B0wB2ih%2FtLVw5fCFsNooO5yN%2FhCT7EAEnIzue5naAywx104u73EZt6rK3ZQAPd73qTfyG2h53zBFp2QfVhH134GG1tUY%2BjGy0M%2Bp79%2F1fwBiMTPSebop8D5Eby0fgE5iqVbPr5MeOkZMKv403aoxdcved5i4lLssJgMa%2BJ0CH9e9r%2Byn87wSE7DhMrAdD9zr3Cpnlgka73H2MPaRhdAGOqUBw40za6O4uBA7cqHMhX2YhItGRxNpUbsWdbvcGNT2M5CufOCEH1w8akl3FRA%2FF52ax%2B1Bs4588OjfVvOfGsoUYxwu20RgzzbyC7yEL2aoA7Lv2SXEZ4jNdUkhl5b9Enu%2BYwmrSqgqD0FkOVzXtRnQcmN73YS18uhPYTKZhvkKaKYs8HsflNxGIxrtAMIgDb9Ko9wRNEFqUnp0BNKvH1APfFY3M9Q5&X-Amz-Signature=b344d5237af0b240e0bbfdce417d4fc7534e8fedde1d7dc16445b9465ad2d984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
