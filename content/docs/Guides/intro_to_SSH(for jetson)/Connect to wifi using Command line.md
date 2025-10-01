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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7UUA6V%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFy0VNoOlS77jZHTxBcUk8JiVGwhY4JNGwuOEAC77VKwIgYgYu%2FnPI1ct4BkUGZMZkPKAO4mMsXJnmjao9Rjg9BkgqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPACNZsW0zXJRAUMircA5hq3QPrZyRE3qoaXdYg2jAKHgMVwN%2F2%2FsseThNNi%2FwPOzvBj6ZNpPi1dCYIY1NNyqY4Y2SwvjCyGmtNTpidw8iDuO3U8qrgGg5USNZTwlqOLPyS%2FpABspWzfg99hhDMr0k6c5V0YKhtJSScyR3PLeXc4MarH8nwIdl0DCGohJAqLXApBeL1SMwF0bKZEwpV1dAYtbfy7WndEufbP0RlI7yV2AtYjDaxsesJl6TRkxJ7Xw1ovB1Rvv%2FaEf5w0OeMvL30bC7KK4LJ9O8ekrv8EFbZJ0HwZlM9LLLdj3Yb5xbRU5J0QXZlzo55yzz47FtIBAaWc42vS7MeuPDXw3cK%2BEAC%2B9vymeRqfzZskr5bQpHfd6F9hCn7x6XOnZNJFqjqxUaqBBFia0YI7zXOgq2NkWr2ECfIPkPwodW5q2Uuleg34o%2Fa2AbAsm4okfaK%2BvZU%2BAk4xFwe1OK4vnGUKzOEPGhGJm2tFjCh6BTF%2FI%2FTrNBNLG%2F7NnZyyHvEMJloicxq6M%2BaNNe%2BISl4Ldu%2FtER4c8NH2OGdYrbacWkjKSKrNNY1QnL2Sg13JrR80pHU%2Bu0jRJAuRHfeNA5D%2BxuizSA6%2BTIO%2BjJzT%2BHAEhXNN7MQGuNOx3kLtZuWvGlk6KLzMJOJ8sYGOqUBv9cVuUkL67uO42o%2FR8JbKH3JTy8g9uC6Ftq8wPRhkP4vcmd8y1rHCfsRtY%2BPqOSmZ0ZrYdywSoqTjgVnAwohHPQr%2BdpIwXgB3o5%2B0CCKF6pPUZAuGPnf9REfeMlFqWfTVr%2FCmOVlAnPEo9WuDTabiHAdTl5qu5lytlggXg77NPslg6A0eBT%2B9zS%2FQPN3P7T2Q%2BCO6HhOZTZBBhI4bwfm61hgLQFv&X-Amz-Signature=c4336d5b404d1394d725bbf5c1530696ee273082bee7094f1b9c102af2186b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
