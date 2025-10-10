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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ4ZC7ZJ%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIExWQAdBdU2hWfH3gUnJxXjgzQxDVDtp2drfFZjwlclaAiBAwMjfcUONeYQYh3k8Om9lPsutSFw56bEM8K9rk9XrOSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1U3da0CGs%2B0wCMgbKtwDcZx30MkqOxPxYjbPU1dqD3WFrihdNeUCv3ARGxpuHbZPDyEKK5GYzaUQNymd3%2BkIuAR%2Fzyy5cORogFf9dDC3Z3HSH5gZnR7czeKCEJXR4Kzq0qE%2BIxqdqE%2BCgbMMaYZlSOnPei8o1EFL8Cot2AU%2Ftq2qTckub9MGAwp8e%2FdUKjPwDx6%2FSIlkC7ioUiSNKKIDcSY5ZsG1nX0Ti3eZLtNDszT9xlAEikn%2FUJZzlS2aZlAr9Q0Mx0yEUV6FnSBqhYUZ3C%2FmplxvFni9iGXCovTNTma1F9pVXwel2VaG8lgFdFsWoPRg0zjsaIzOFHTUylF95RrK0g7eDjeXNzvuPKvsGFIxop3c79CnPjM3gZL806p1UAxo3MBwlROMLIfLE0XD0lcdBJTwJLFRGAz8%2BsgzWOgO7cFzrJculC%2FW00a0%2BajbuszjlO4gq4N9dXX9kqP8eJ9caM87vG%2FSijWhg8RMw5NyPRKpSszbcpRtSKDw3uyeEUXAuJhj%2FMCy6uhJTM6F7bgCFTCDbJByBe9owMGc67XVp4VxkR%2FRcMHVHKkXoLm%2BMHPJpthENRp%2FF75J3kRLHxkqNK0VrU%2FyfxPpvjsVYaEXO1ESG3RhyMyLafEfczZE2E5kY%2ByfBdOSh%2FYw1KihxwY6pgFoeJiYuXg2%2FwXQHDL%2BBtYH72lml97tIiTb8y4bBSBhZVKdcC9zFD%2BYRFPfdwms7JXiVGxCHYuE4OTYY93Y%2BWJcLoy%2FnK4nWb5AZwTHjQP7nzq4O7bQQznvXMvTjVqogSW94ohKfrRSBNydkpI7yqGQXbiJ%2BIOxAdKrrGt2%2FYx3tfq%2B5EnfL9YYIDcK05lLnNX6U6WQCElTs5zdYSHODkGiPhuN8wGW&X-Amz-Signature=19b75c2a4d1f21e9c82812f1f155a588cfcecc1b72052f23a2d375b708911478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
