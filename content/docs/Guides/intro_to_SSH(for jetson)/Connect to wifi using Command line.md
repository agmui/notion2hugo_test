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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PNCEVM%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPns4wMxFOg1gJjmt3LwmBCln4yFkhez2g8yE%2FLp7rJAiEAlfiUVdaVuSEFvVpOBkbj3mCjWcBUApKyEnmk1YbjSV0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEflkR4Fsivr0R%2FOCrcA%2BsThHp9TGrnyTVU1PefGzdS7uhmIzsN32h36BOYlYe%2BbrqOjyHYC6JvukvVKD9IKyAdf2rDlR8QfEx0dC2zZzsv9oCF9321wjDGYkTGxIiUgIdOUDUziJOifLGuCFJLsxYy7ZPSbvzvS%2Fh0rmkmY61clHm%2BTYNKlm9SYNXnMkXsUGKW1RjJdDLRiIYWXB5ogVFGjU%2FwVlzKyjXWe8%2FNBxYCyAedOKlsh4hRQmVCqHe6VnlUCGVWHQHMJt1i0z75uyNYDy1ZNBFxAt27qiDpK%2FvMOIi7kHzruIFNPNPefJAwLTsI%2Fj9qBxoclwTrSWpjlv3pBTA4INcMbpORHoCh2n32efmGjzcayikzw19MYfcfXbdXXH%2FkjrtmMq%2BTF15c2eBk2cloHYVmK1crHf4kPFu8LM4pY1TBCC6vOBKr7aOWERvhlHwnOXd4awwGuAJc%2BA67oqoYyClmIs%2Fl7r30xDf7eAcZD1hSsAXjCMRr1n1DpIgju8etlem0lVI%2BDI1%2B6B9S84KTyNpZnLKtP4uroHbgTfXrUyRK1VSGtkTBOzNW15Cg9DthUH3Dk85YgxIpfESbPoKA82t757OAb605gFk2Q8YbPDp7jVVbZHQgwWAAzZ18HQP5GLZ4qSWpMN%2FD4skGOqUB42Lu0UyMbVdPifym%2BTyyvnOtBa39EJx8iZg1eBaMEikwYBnJKIYQSeurpCqM4SKEGsreRTlilYX2Rc7JTeOlIh8KrPeHh8KjbQbqpIqyVof4wdCRs6nRV9HnyJiQZFPVGxLqIY0N6t7O3nt9RoStu9jjhEuyDk8QmWSJkHLI0WPyqQQYT8OQdG3dFXkcUqb4umd7LpWIkEDQf8AM6GDa%2FZwRfjR9&X-Amz-Signature=74d44d36a50fdecd3f2a53bfab43802687e9d93e64573fefcd216461dadf3aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
