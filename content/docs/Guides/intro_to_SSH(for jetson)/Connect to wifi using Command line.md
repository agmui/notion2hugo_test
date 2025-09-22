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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVJ4U4%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC2I1%2BgKyDKSGS%2F5RJlK0kqfJXHnpkI6ahDRqbdqpGjgIge2LU0VPcZQ%2BrelAnIRhuVXH9LIvobHvb6MHsD%2B4zWFcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJeFpPYpjl1vq%2F9cmSrcA1%2BX1K9RIVTYLkQQo2fW3xUNSoGLavaDFMIfIcXwhk%2FYVWoPa6H3pR3mGtZQoKZlpbZtcgKtmG8T3WP4X2ex1towFIvSbViCqSGKLijDusNcOIh3RfwegfrxfYOtfdqIgSwOSERWxsdgw1Bi1vkls%2BVmQ7wna7WJID8qS3NBeG1YOILva9ne2o4IEw5zt5ER2z8duRXNrXWOMvqbUtjk59OsKDu4biLNWdkI5wI1Lo9Wxq%2FBpTYA2aTFqZTHGmodWQyYuMfgkw8hZ8Pw1y5p7AyVEFOS97oOi%2FKtGqusPJ9Tl%2BCK0DzhENAthDC%2B7mJVe2ZBaNWBx4eZTRGX7Oxzp%2FWjUd5PxYzlnwvNSKeNHwLyanqCZAXC6aY16iucoBhY79rjcFGKRSqMd8Sv3X5DZv%2B572vsbX3C6oNEjV%2Fym%2B0ocdojSKwkR2kfgWt5Q7tRcvw754OjdnfRUZt9onaUNU7XsSnx1AKVC81B6C274fpXIys9tX5WQYtpzaENR%2BJoVJRWSXVBxSPnYBW1vHG4PEDVb10m%2Fyp3z6ktkvHnZCwbjvw%2BFP9H3e8fYTftbdhloNVnuacl5%2FkV7e1K7D7o%2Fifaeg2shbrScb0E6vkWeH4jQmvVDkuQibmrxFA2MLzFwsYGOqUB1ErgpNZJLF7LDlsoh4AZ56Zb1L31YSHx7gDTN0AzsclVv8zuJBMgjH6ndka7exTV2o3ALF8vaDjYTUt5Yn7uGqRPqwfwqDmhtdcfVJN7ro%2FW0Nz4BJCcq1atfxBVbPbrMebHl%2BQWeHhAp3Wiatl2UFyjaAlTCuhBCcgZyLhhuSInIlY4MxD2YVoOfYC2NLpykvdBSIIsHlTTdDkKZX9nURJRBOTk&X-Amz-Signature=b7f22177c8007cbf837866b3fa7d32427035a05d83ad3143587e7ca92ee68030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
