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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7CKTCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk4ZhdNrKsYVkx9wQv5Qo6jwkMAouU7%2F28ezs5C%2B06SAIhAPyRkH8d1bs%2B6y%2B%2FKPSQ0hDVnKXN%2F8FA8VqEhAle1FWYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaqiUy16mErLt2I14q3APWxaCpd5S%2Fmk3QeeXYi1eRZj3KvFxEeMzH7%2FLMbx2%2FgLkV3ZqeArMHrZzfCs3vK1aaQfMl8EsW6m4yPF%2FjwIh6vYAx8oDhB9CeMcuqDky%2BVrCYOEfvwA3eUxReKf8NMjETlfeppdQWCRpEctc18Y1lleZ9Ml4RzyXFDFBuaRh7q1i6lu6%2F00eQ2IDJNNPlOVEyP3eHZLb%2BRosdS4hKaKsDUgHopbkEh1Vd7iXOu7WmCTXoZKeXpz1Y4FPWCDXwSWSXyVIj4MOVipk16CXH5keWVs%2BtfzJhFN4OmZakgws%2F4w6YzEbVBupBxWx0gxrd6UsfeZxwcgpIkjrMVU088QoZDa2WpzPdwQ0aib7nq6ScaOdvQNb4i%2BIRBa8EK0tk%2F84CFoXv6DcTdBNk9OWAqOtrgaoJRzk4WRExAKB5%2BLq9oE68qXZ77nS62anwRlpXI56N1jcd5ZpVXqJKdZd7BckE59jHtMu4Pfj7ZEvA%2FzPnA2mU21FJKAsJ0cxDFkx%2BZMuAOP8O0MnqDwLDb4U%2Bnw2y0cuCXRFzwaKXudak%2BHZWgW9JMeGBdpV3hjqAUrb5pmOCRBdz0Twm4sc2gLmoiKMQJbcQnKnyVHqRjZ6cxk78n%2BADxaec4YEtEzMxnTDd0djJBjqkAQGfU%2FOOI2C%2BEEW4tV4rB3w5PtmTY70HOAC864IMRktSB84SfIUGjnEqMprH5r7%2BY9MzDaJgtUlGLlGzM%2BuvfwDfb3FTE3AyK57Ox0NeckbWcmhq9pCgb%2FdLD6tCGZdlLClZNWgcWw7LYjl9tjNFepVj%2BO6Avd4U0x9SuDIpDkNO9ZxefHKXR%2F6oaYyV1wx50MwyTuVHUxCzlBTzL9%2FQMByT8Ql%2B&X-Amz-Signature=dd0db77201fcdc091023308caeab776c155a800108b48dc404092dea29d1065f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
