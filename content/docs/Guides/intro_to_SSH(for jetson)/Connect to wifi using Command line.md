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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GLDIHDO%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQC3iMVjT1Gm3huZJom%2FxFvqmqWPVtDWeGNjArhLk7ZCdAIgIQv%2B68RudtclXq6CDfb67I%2BnfA%2FtfEguIsWlnUL%2B5e4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkg924Uo23GxGiHOircA7LG7AIftymHgEukIYs2RPBCgBW9kXCE1FAJlj0714XRuY7Iqsf9uDXWMfSC690Yf87vdq2ide4ftpMthWpN%2FoRLEfcQgKzed2fpvMe9YJpVqTdY%2FHlo4SHkfsBSDlkX9K0h8z7nbTynJ9C%2F1N13Kj3ge8c9qq5f78GkGS8DuXgNZaHG9zPTULGT0AohnhhqTpmEKA5WU7yn%2Fqft3YyaeEkQPvrU9ZxIB1l9iCljmbjDfMk2v2mRUcYEZkPskFnYwuyDQZaRjBHJ9QAuA57PvScJJIr9zp9eCtITa2cclAidMgfR3hd05irMD70m%2BUjj2ZczhOHeqMooAgK8yy3ouwICMMydszW4bV28vOlhrDCbNQVk%2BdL%2Flv8hxhudDmwFFjVuolDGCJjG6reHrX2%2BMy%2B4Te0paevCgYb2Bcvd%2FVw1piXxSiuXryvsopJaBi780BZapY3VgKaFl9ASFZxD1HxC2vMBqWbjH4n2%2BjQ5sklh1DmBzWeS3WjSy79Gg20oO6Z4N0kAC7RwCLr%2F%2Flt8XjvpDBFiXS1AsNOXON%2FtF5bmeOZhJP0nF4IUCjzLQGGWMZuFQ5%2BeSY9FBWMCy386TAdhlD5PZQ8UdDJxc6Q8PD8m9xGpcAMDdwgj8tMYMN3PrckGOqUBhGUFDEvYmdNrFpelTnBv8WOUiIkGNI0uoLw8iSTc15RX6ynvs8pb7EBhbY3wUEzesGpF5NkNZcY5aZv8v%2B61NO6Tw%2FrLXYnhjVDaBQ6LNHzRr8y9uOoWbs9xPqPyvQ2ZADYi124PILxOHcMfzr6BcNTP2B1Pm1KAn7RQsxqvLqOkyyVyznsJGqvW9RzBcUr2vmXYMRkQVXIB3p4mDm%2B4Ka0A50dn&X-Amz-Signature=e98cfcc96ee8af8f829e0f1e9713c9f389c7b72900dacc366459e2c3f979b3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
