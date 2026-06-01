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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQAKUSYB%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEGR%2F3apFVztnj4URwqGxj3J2K6bArFZ4pNz8SqL5usHAiBWDhDQwJ7hOFU5nQxmpjCrbqJnOC2hiiZRRIUUX760Nir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMg5%2B0M9nHOCD%2BAg74KtwD%2BJsuFtiTNWvtG%2BNbkyMykOZ%2FtQp%2FpXrHEQaNXWgWEgBWovdqFcd98LAl58DW5b5ebVyHFGvYx03BP0fmyAz%2BsdpP435bGlFgbTk0GANOJicNbpFPWlkHqzBqlzbCTndzxBE7v8YzKbHKdGqk1ru9x%2FAMAW3Dpapx6xQ3QieLbjYSpZjEdX%2F8UbcwYunf%2BqnHQdEcetK%2Fu6o8rT7Z1C0%2FUXk3CT%2BW7fC4Wk2jnFB0frfV68SVCGIps90PT5%2FJpPUiQrpK%2F6BLYwOjMReA%2FR6tky6uYpAuT6FU%2BCrZDitP8KPkUfSR9E%2FB5uZiFlmDYZFr70rkZw26vCm7cJJTaqDO0Nm2rvBGhQdP0%2FYySnNWOMLK4KgX%2BTjBaq0kGNKCr%2BoyZTyY1FAx7RvyZK3z7ViHglr%2Fi0awMfUg2BXHiwF%2BmXfiaYFctiaoyT%2BUiwxKTgBFe4N5QIqK5J21oCglT862MR69PteGbQMkWFwvcsWpAXT6W0kcOjGH9lk%2BAkTZHTnTH2fSzUX8fWdlAZ%2Bplvwm8eEHNa1kB0yXA94qeTjwJg3woEgbeYLQg6erT99Uan2lIal50xvnGX%2FfHVYJbK5Rokj7VXzjoUtTzQZ2FofnxRwv8QVAGNV5tquWWb4wxKfz0AY6pgFmYxsnuTQo5sWiHNiPmCrTO3tj84OvbOiKopz%2Bbvbc0edwohv3OeDobnBKFAqABZ5ugloXQszV%2FIiPCaL16KkCLQ%2FYrCdgLmtzny6f6jSZlhIT3ufSfWFzOcr7lPvZ9Uw%2FV6xDOXqXIObheNwQTLF4FW%2BNlgu98iRYkykR8X14T%2Bm%2B0fOo2hom%2Flh4%2BJSKFQvYQ4sINgcE1XjCFJb%2Fz5mqSZ6RRp3R&X-Amz-Signature=a2d75d64a841c5e3f1ccc6d23284b011ea139ca20ede8f6d4d7e34ba81f3e69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
