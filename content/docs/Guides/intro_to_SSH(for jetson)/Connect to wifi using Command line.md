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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKUHQIQQ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCL0QfJbE3VIzuIUxGaKCcnlZXtXdraufjt4BUF4C%2FVQgIgbfTfGOh9Xfmtd6aXhW9S0HLf9Vum1ywn1BFNNkJZA18q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOJbdxTTmgIwc4ZJoyrcAxHq3I2GXlFVJunOGYqVTeumHtK3HS0l5SMC4ecgw%2BsNCr0g0XAQT0T%2BhbGkBrVIZzTXlDNW4ls4SALWMr14pPN3Jy32%2BdwalD0%2F0x%2F7HW6eYUHaFf2igQtDlumtJ6lk3n7SlEBzEeKM%2Fs14cU8BSO8h9hSGk8nIzHNSAXMPBiDNlSkpa2CeP29Ad%2BFiNj6bxDAv6%2Bf9%2BpeRa419puM2Yo6UjnTgQX3reMnlL839cMMP9tivxAPoU2KZ27Suji4aPRIJZNB3HYnLmuxm4lrImEKoMKWDhYRUHhNrgTyCzA%2Bh0Jix7GDEDaXDHaQf9%2Fy65RC8QJJxZx11NwVfTJ7kWI3AQat70upGJtz%2BTQ2oQm5WXVdBqa5fPKhlVQRDPZiYBYwJ5rKzBgcAqmEbfA5d1FzzRU8Dm%2F%2BeQaBOAA6bWkwtHQJZybrVVmfMDmqJPfxGZqSGtlJ5g0Lv%2BEPG8xsIvNcjvmu1h2QiO9zskLaZnoAoxRz7b0aaV8eZtTZj%2FBpKEvp2mxe1ilWNNTzm4smPRYPMingrehTNtkKFP%2Fhkt0ajxakrJZQVh9R1zBrsOfYCGnE9Jqd%2FrlRq6DuCikHYiB2dx6dM9zMmeRT46n8feNHmFWPR1Yf2vBe63XP6MPWqidQGOqUB0fkwLUlxDsh%2Be2J7VsxJUtNvamVFvi1eA0Xe6EuMO2gbGkTVdjFeMGRmk10sBQnC5RGzKebDp3EyYKXVlyR32kVn2EItqFcfWBK2U5mWvUBJwSAsUHYUCPCCCKGWVKmInTf%2FBcJwnV4qw7ML7jjq5VY%2FNEnx1ALKi5ZkEh2BOxm8QITzcowNb4R5k9IAA%2B%2BWCx2s0z3zGzQw4eYxuEI5J%2BInUgPD&X-Amz-Signature=5b3773302df28d4cbc0a67a704386395006b304a8901d3e9c7746e586df6ab22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
