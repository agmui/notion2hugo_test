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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMYTMYJG%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCeGC4DuDr6e5MJB2n4wo4A7B670H%2FokLJqyn%2BFJU2wogIgOl50uSx7BL4p1zT4gNc0H7cE6%2Brwke18Us6yUvLQlewqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFvzM4Pz5kERkcoYyrcA%2BprFJyr%2FUf2tSg0AYj4cSYSlWHSm4RWiKZRp4s3NLIEQ3Eh46LMW5A8rIPqar2URfWyjjN5QeC5KMGxSiTbtB8WHAcjXg4oZgSpRDSJpNzaETWgwktbNbJ0CkKMjt8KUMP8bKtgmvOrl2XTTnmRS4n%2B6eCbW6PtGVjU8agV8T05l97yyCzmI4f35rG%2B1ig3gXEyxnLpUguQuwbpqNApzcF5Vhh5AnQwL0dFfDxP9ci%2F01xZM692yqEC3ErmNtyTnWN72nHpKMaGoUx0ARkI76Hex0OTK14r0NZlrDM94%2F2FGvA789Ibf6JTCunvoNRZDDYBQOFc%2BfNdPCDrtWx32oQY2Hl4dxojyym2tJSt5qmzxpX7RtRpkvGQFGPMGX3JImclJMBAi1c4zQVY2yb8J13duT%2BV7%2FK8bLGkgBrUzuVpTrnVvUGZfG0qZMBfyUXwzzobkIfnflbpmtkwq7OZlehVY%2BVsL0KtXSf1tnlX4Iy2UfvgG5ogLxcka2lrJLX9bTTAIGnDUcNyJYcf%2B6XzVeQgzchUuVHTdESe%2FM7nMZM4RPq2qOTpNK%2FZHYX%2B87vqZPgK7RY0rnXNKobPV21GNfIUPEoSPeeXK1kRKQmbudz7slMwkhplTWdHeh6jMI7KkccGOqUB6EhuJn2Z7TSRkZUTcMk2XdMqlYkjuBUXWIzgd1Y1WuNx94M0%2FXC2JSEb48xPXN3r5xqgvxv064Lg2Nml7SB4ZoF1dT28MjVrjMbLOIDBeIGrdjrWek1gLOjPYFyWeZLepyEZlHd04kAVAFjzTn9QQ4g0ihtbr0MhW6ECqHsswCNvwybAN9vCQEJTzN4fyQkyZXucUZ4iODI93tuleQAJx7NMqO%2FC&X-Amz-Signature=bbe34a9749b3448d31a3f4ba08a8f9cfa6ab205df557851d715aec88df9e3dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
