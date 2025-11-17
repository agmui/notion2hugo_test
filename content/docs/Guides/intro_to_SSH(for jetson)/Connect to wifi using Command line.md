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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LOBZZKO%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG7n3txCY1Ix1Hy1aLbw08LMANmUOz%2FTyK2eqCObBoCQIgKBXDnoIk9OWDjT2k1llDLhFyS8Cnf9tZ8RkA2i2C8Q0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZ%2BRhEferovXRrqWircA3mM9zKpxEpuI4qJFv8jfqvJPv%2FWSwXdPzz%2F2ULfCz%2Bmt8E67e77qOx1O%2ByNoAKT8UsOn6t%2Bqj46CRDAWk2jgojOpO3NkizVTP3GstZzoUj444UbAx7PLaDE5FeLsCNxZq0DwBMSaB%2Fcms165G%2BmT3R6OhN9qtfLmM3jT1QFCYMu7RwqRpWomHluKYWp1yQPobjsk3Zah2YQobICDyz6L2A%2B%2F%2BO7Hzdf3LoEQBYKYOZ9gTlYaJQs3%2FHoZI6kfCab4smmt3%2FKPsFF%2BuFTLNA1xMfaXv%2BfTy3K5osIpn91%2FoLH8ftu0BiDmS4Nc5e6e4mJ%2F5b48iR5YARYHKDLlrICXl%2BMYgwiqM6AZWyunFo5aSSdOCbFjRgS%2BUC4x2KQdLuTqqU0Yo0KfUvlG8pvHNu7zjjKBE2LJrXbeJdnF8kDX9O4P1Fmaocm%2FZVuPdckUvfJCKvQjQ0TxZk%2BfD%2F%2B51VNMhPu3LZsn2mMKlNSCsgz7%2BhH1U32ndHfM%2Fo5eEO%2F2Ov3Ilj77jszpPUesSLR14cQRil%2BoVm3slHKTa0dSbaY2nt1PUz9ibpj%2FCsRgcQ3hJu25r%2FskzzWi1%2BrBbBOLiHeVjEX3%2Fj9nbXqve2WrigWegPQY6bP2RJjGe6OmxidMIDh6cgGOqUB81xm5CpLyUUHvGeztCxgDRgT4lxpvj7xPYNi4%2Fx2V6%2FSy61fA4N8qJTN2H%2FkrbGzY3nkVei4bvowRmXPi9u5wyaihp5b2Rf%2Fp7zFZ6TjRDCeG0chxgZfYG%2BOgw7owtz7b2dft%2B8Y%2Fq6C0v89sUF26wV%2FNJvc82dv573qhRp4zS5D5hKBuIJoriC%2Fq7M1BvFp%2BMtpC%2BjrEcEyhjqW4BTsI4jNRu0D&X-Amz-Signature=8551a22cc416aaf9b4a8feebabe7c935e27f345560c28770954bfd2b0060a18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
