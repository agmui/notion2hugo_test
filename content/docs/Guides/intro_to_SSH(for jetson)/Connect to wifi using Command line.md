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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TM4HUAS%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC9iPU%2FDT0ktdAe4006l02fxItlbvrbMSXM62kfy7BpQIgCFC97MiYCJvO4xRs1lHMQHJDNiFeLKUrGteuUe3RqjsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwleajD%2FpiwtVCOSSrcAxjvRriBrGrPMyiQ9u%2F6IlnoeCOkDo9uA39CvNuK9OsHo1Rfqcnavl5%2BQT5hEW7GeLtY0k8JHXRYN4gu8dsptj0BqyXTVVE%2BGB%2F45Pbbid0FD8dvgZ%2Fy6zWTzL5dH8ODsVy%2FrTTgg9fpxG%2Fbh1R7Ewi%2B8IABqV5%2Fqg1AZ67kryVmLSaMRIb6mg9bq5QOxKL40k5oadKaownGTKCIauDAAzsoOpAftidAi1c0RTQDI%2BxdUj0cvSzMAP4ggVUky40XL7v0SIavO0ELnzjXGEAK3GUootaqYc4JiNfV1GiMYgSbDzE%2B48zbhbEpMMSghqO1kM9DjVUNs3UaGaNBM99gRib98p17Mssokvn%2F4a9yVMMVgjCUYzz8r0XNsRorT5ypYvCDji%2BH7GjC%2BQ5WGRAnz7kXL00olj3qhTTu21wWWz%2BtXe%2F%2BrSnxEK8er6PDKQViMx0TLmkrfL5ONqeH6Q2GOX%2B6VyyTU6L7D93dpKwSrgKSniOAE3vZ47LRNH%2BkWxZUfo4gi%2B8KB93U59L5h3M4ye2yTA5KQHmxKF5c07BV%2FLhGWkLVlRqG0o0ABptd5MMYVh8Xs%2BBJ%2BO0Y3rAAg5V3QlYOgnT18eOr%2FsITYdPPpWDABZQVInWdw45AODJGMO65y8oGOqUB%2Fn31etxCwxMcuxMO56zRxkyGCC0WmjCWRpIsDUNXmSZLAi%2BwLkShPnJ3yGp3yfLQrNnFXiRCsBHjzIurqA7yep8G%2BlA4SYISv0umZt9sbPe2mHcYBy03dItzKIhmV0TtldS54Q4YQsS%2FvTW24AneRZ%2FvfynfvxmpPFhGhnQEwFFVW4QjDkjegqzhMK6H0T%2FDTQg%2FjEyatP1LmeiSRhegPHLiHn1o&X-Amz-Signature=b09c4b8e01ab69dc3510b25f128f848088034f5d6f344cc0b2ea3679b8048b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
