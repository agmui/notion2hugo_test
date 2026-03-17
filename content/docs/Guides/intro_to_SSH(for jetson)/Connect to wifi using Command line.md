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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G6OEQ65%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHrgEXtqOmQ4qKbnEtLr2%2BCqGMIUBz4mTYtcyw5LsAn%2FAiA%2BmyTfZIyBuqgRz84w1VZojY3gvChlCgCnVoy3aR8unyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgizeAtKpQdTwjic7KtwD9fEOChkYLt%2F6Qc2NOBRUbSIWtX%2Bl5KeWrWi5WIVmAAIfcpkQh5WpFpvVicEe7uqkDvMK7%2BpZ3%2FvXdFYel0VPvu955zlpa9DYjsnL5XFti%2FrmEwu1tKr8OXNFsl0ubvhZ1G8XUXZ5g%2FMS%2Biz3FnoqEBsiBUbdpxQvuoPJzWlVQwaV7CAMd%2BF%2FVYHi3mAueLNsPI2UlzbBvA2omngtmqsPQ%2F5fxbeHPaWr%2FvySxxlvurjdhx%2Bpr0siDEgQ3WZKagDr94N%2Fl4CnHt4cViaSlp7aii3BNX%2BmmBxW0I4AAPne%2FuN%2FkovdkHs0iIymsluhyI8oOeuHKwgnweiVpbqh5iQOtkin8QRnxmJXDQsx1uV8e02CmNzMUt%2BnSuUDQ0ZrEzGpmL3aocMz1cvnm6tb2MoUXekfRDZxv5JuwvfwD9VdzECyzxCGN7rBDm5hiXzQhOh78q2ykLKIxCquIKCptPTIaldzj4V3TIkh51LQLIijZxLJPhlEYGQ4OOuZQ0unWZFHjw7LNQalVrERfbDATVVewDRmY80kveH%2BHSpEKt6A3KTK1lO16xDhDn2mqfx3H%2BLKUwfW58h4eDlVztHSAg2bwLLdFTAUM5ozX19CY2CZUKUFJFTavRUEvjFCYvgwp%2BjizQY6pgHNb98Obm4xgb0qrNQ7ws7aT1EVABBllBQXHT3GdVo%2FbrSmI9kuYc4ImN2VTw38H9G7sahZWckwfKvjCi88lC72DnHM6ovSA4gz6zZjNQ9CXw2mTb1upNyC1i5OYNnyiw0UeGFc7EWwV6YhPFW4OmXUx5THq5HQiRhFgkvBYGpI1s0pklQAhuDc8qHkgg4U98rdAMm%2F2G8qNJAGdX3R6Slja4oElMMA&X-Amz-Signature=e09404c3e31c9da3f55d863133b26c76f320ede3c3ea379f8770694e3ae684be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
