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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3J3H2M%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUZoZHY92P9UVloVk1y4e7qcKK%2FfL1VF1D72%2BTovoA5AiBT29Dsd0%2Fmi%2BqelWfpQG0sQiDEClvwZk8amFWtzHxTKyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM5tkVF35bPKejBgZaKtwD82GcxTjuPfwxhNtZRWoWKfK75c%2FfPY44aRw%2FzKmITUGrZmjOtbXe3%2F5s5tssPTTU7XZHj%2Bcj1BqHVHWw76AtbiLP1iM98tiEp8CLt9W8Rn320cBca17u6eUPwWcvzbeVU4%2BN0azr4LK1NpV6rNfjdoSVug9WbQ%2FjuxuzawguVtca2Zw5BdN3VqOdecd5EwYm59xzLoCiVesM5qZozzouNtmNIfzlsQnHMKcKzr3tAeXWgi4%2FJx5eU4uICvXNTlFbHpgz6xVPW%2BeNZ18Qap6WQJ1pywe%2BUhRkl3Kl6ZFTgaqKhiB0WciC7YLKPfqcbJPiRBBggXiig1q%2Fuf4wwnxpZOceaAMablEKW4itUKv%2FfjhxpdHYEuZax4Bxj2CyIp9NcfJQRPRxtujCVqDyKKbnKhAdlXjsweOhnhTqsHKCN3OMmcYyEmDphOHn%2FvDj4ZWUXFN2EJ9LlS6mjU599OCxCeQuu3PyPzvf5vZkTTBWnxb%2Fc%2FcfbLe2DlgVEVuqAF5mjxdGA2LemOxThKTua9XXv4liQblhEOgYRDLavJmBpCWnX0kv8gM6KV5fpUQqzL1%2FXcz9CelvFCirWzlAlO0TpcNkIS41IiAvi7zXpR4aFjFA5oGopRQodfTDXtQwyarm0gY6pgHuPnIV%2FF7HWiaMuWqhADx%2FiTt7Ui3S8OIzE8ywQazsPG7iAUkqJAp10pG3nQkBtBi1gh809KFZEk8KrBWTH0DeDK4xTqsWAWkItdtenqgrRt737uFgBZdOFLLszKbZt7%2BehrVAardzuHX2pLuUxd5xKTqpArQ%2BfMYq0rWqvGXuEbVyGTHWskJFNQs4UI1ruOzzGpxD1S1Ngufv7GUgx3YR7cHfBCsi&X-Amz-Signature=7f6885961091dd24572a3245a624cafefea86ddb2ae13bb797a1759c8da9f353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
