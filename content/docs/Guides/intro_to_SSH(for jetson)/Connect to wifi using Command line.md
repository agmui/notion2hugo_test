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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNR5F63%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnyRlS47KT4A6AwG1fVHif5hSLJI4LQWn8sjzOjVuzuwIgOAZALXe5q6Q2mjCi9S7gmqiDE%2FX3FpXBIf2c%2FRQRyBIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa%2FYoV6cqXIFuJU3ircAyFt0%2FqgbJM6670YgnGzB%2BXLMVhBt3p5tGv2LkAu6jk2j4TjvciNEK1EOS8JdicxahIv1ahd%2B%2BYaimeM9B8tcU%2BOYqEB434ml7oW5vv3ZRmEwVAKMaG4bMesmmQv9Hqkn4dEGKM%2FkDUcBS%2F6VWJtnSLP3GpJtJn3gG7wQ1MbgaDXYwkZJJ1P2sf7HMl%2FEqge%2BRbEqcg3A86rj6egADdPQqgD1GV1Ac7X35P63QmBTxYgnPyYQiMNjtELWWFoOa9SRs6HiBbfiscGFg4T%2F0%2BglA%2FO88Se6%2Fn28G91ovJgLNn6H8zNK8UyxcuDIczH76khI3Pws5azn1ZDXZGM3ZbVrH%2BGkDhN7PqNV%2FhFHBZlb1QLZwjSDNOeLNXmt5C5Kehg2tGU%2BcgXHyCgircFf5x0Ns%2FXhguYEkvgBzkXYAMYElAxZFiwb%2BIhfXLBxeZX924gcu3iHyJQ3P2ELq9nSNzSgrfqLMHsRdg9yVKf%2BVfWMRTA%2BkCBmYKpKZe%2B%2FCjAA04hPyDJ%2BZM6uf%2FyrcN8D0LcEXj2Eo3ASBPdhS5xp9NtRT177p%2BXcVBS9fZ%2FbODlBPXOPqXGMuUPvQ1jS%2FrgwrUL9U5%2Bk5yaA%2Bz1Cbi%2Bup4axeWa91ZE9ytJzbv5JRtvMKyxzM4GOqUBc6X1ZwselTpag2HpNZruaIoNGxl5%2FrS%2BA8i%2FoOrNsabkbChZmtUQpnpsW4V65w7LXi%2F%2B8TJ%2BUvm7nMNUApJrl0E26oFyItgVauxDNs%2FqtyV8dnyTehte44XEBty0BqSVpule9o0tl6l0%2BAzDTKWJ3a35Q7%2FB6mgNuhfI2v0fADoocB3t0NOYnB7EebpBewcFm%2BFIK2%2BSn3gmFxD3gyNJex%2FBRCsn&X-Amz-Signature=87f20f5d12831160a0775e76554f20575ada49fc64dc654a5d6e5e3cdb2ada55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
