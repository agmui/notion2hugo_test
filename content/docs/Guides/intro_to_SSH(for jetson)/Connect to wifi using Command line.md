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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUWONLQT%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDci4hKqyUZBkkTgcqXNUL%2B5LJrskK2FHLVlPvpolk%2BZwIhAJ3rpmEt%2Bq5OGQGGBFVULIIowZHlHEdyrPBo6OdEfZo9KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM%2B4M3qGohNETVF8oq3AO8xzionOVNCPgggzOlvjjjmm4sps3i33x%2BIJHa4f%2FLb44C5bUb2lyJzut2kr8Q04CQL1fJQQtv7SPIgQCno7CWcFXPAd4xSJLcUK9rio35eg6agKskjr1EXbfaLb28WRMSmpiRb0w16vQ8%2Bqg%2F%2FlwtXEqkZHy4q7%2BMjA5bQK1Ky7paq3s5XViL8oyI3ebxqb9urwPyENJ1s72g3obmqW58Wu8GwjZdIGgAs%2BOpMRYIufHzbwkZY7W77sLETVeJ7aIePez7cElPorCebydMtdGiPFW2IB35rIWW%2FHvBFDeJacJVcqCwcOwujEpYzgDFtywkkYEFCpx6eUpxk0C9ugJDSV6UTZ7rC5icxKbKdbHKbSgnm0RLTcF%2FI5s2ZXLT%2FMWKaQDofr8cggRVts%2FVbWwqKUDXsEJtjsj4FkDtvKbZhq6cKxWCqN8Ojl8VWT0SNuo2ZXUboiUm7YGx9z2lWpI5TPeWTr95Z0kMFUJ%2FLi%2Fbij2g5yftwcVcLIx3UDdb25HQZ5VXS4zlPvyt8S5V76Xur%2B%2BAtWnevu197XNFB%2Fo6whyv8fw%2FfdA7zTtMhR%2B5ImTyxPXdYXhQFQURmLN0fPa7BkVc1HFfxsz8BdsNpoKHEaaF3HKbmqcENZqEHDCa3s%2FHBjqkAVUA2XBE%2Fzg4Ozi9afoCttxnr%2BkSf7%2FUAwvdK1qhrDnY6Tm3AKeGaCAvZJwQedZ89pvZiWPkFNulF0UUL7ZM4pybNmzdLQamn%2BDDkr7mFdtogfqKsd6Xkb5rJQNdJyLdHeIM9Bc%2FyH4t%2BBXGS%2BxKZ0DUYDQ0i3wdWBHHrfBS%2BDQG0VKOYhcq6KzpLh2PM6UE65Dfu8yh3XgaDiV7CpSNTESIeaFI&X-Amz-Signature=3eb993057752815360c01c5477485add635fc302c51fc4cec0a68b7d974de0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
