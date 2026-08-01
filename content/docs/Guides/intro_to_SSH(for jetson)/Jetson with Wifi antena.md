---
sys:
  pageId: "253da3bc-6297-8011-841f-f88fbe0b7d30"
  createdTime: "2025-08-18T10:37:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Jetson with Wifi antena.md"
title: "Jetson with Wifi antena"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 196
toc: false
icon: ""
---

## Jetson with tp-link AC600 antena

If your jetson does not come with a wifi card then you are able to buy a usb wifi antenna

> In Robomasters it is not allowed to have any WiFi antenna on the field so most teams buy something small that is easily removable right before we head to inspection.

[TP-Link AC600 USB WiFi Adapter](https://www.amazon.com/wireless-USB-WiFi-Adapter-PC/dp/B07P5PRK7J?crid=2A6KL18KI5SF3&dib=eyJ2IjoiMSJ9.Cpk9qEaP8FCv_AaXO1Xwmdj1GYqoa_EkhJ_amXLEabU7PLZMP8AzZEneLC-Q_nogRud0oO5wwc5VQh2Kqoq3H1Hdn97Su2NZg-V3jVWFKL5XL0lN7kGrMrWCY37kt6mFuCclHRHH5Rp3UA9D9gQYdBOUaSa3tI9rAB_biVS9DtI4c1LuYY-yQwoMmGm6ZVzHJPqlysQMd8U0TXJzxeWErZM9QvsEkeqeSMLB-9PStd8.ioFKhTTYaaA_uoO79flxMMDpEKAsdkgsyHzxQBjnf-o&dib_tag=se&keywords=tp%2Blink%2BAC%2B600&qid=1749570822&sprefix=tp%2Blink%2Bac%2B600%2Caps%2C119&sr=8-1&th=1):

Here are the [drivers for TP-Link AC600](https://github.com/lwfinger/rtw88#installation-using-dkms-)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSJLJDF%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8uFmQdFGbijYZukls9361aXBnChjUzXw6NzwuAHf2UQIgJ%2FiLx%2BRSidMEXrYrJwCDyfpF2l3ewEVPUachXJ0VYNEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoZXDIqQoP60I5h%2FircA1JSrzX%2BicvSrSyIgGDUpFvowizD6QIe9YhqEme5qoL35cp03mciTo3%2BOE751Cvvu2ziRQsB9MSPuVIvd4h6gppysJvGNFKEntAbNneda%2BLVNxf7Vd9PitNScNtYMzcHxkTGzFipLJ61H0Rh0cKT55FQ2do0%2FxoefvtIANNwB19Eyp6fcjPqNijxnA8rXZwx4UZm%2FipxgFI5PUYMMeZQ36YlyZdsTRlEgsjL9jTQsJqc2ubNnVTwTtsxRelR5MQnsD8lzOb66WiQbcpc9O0o8W%2FoA0794GRHEU5w0oHPdf7SuxCJr463Moo%2BtXGsza%2BZm4WytWYMWAZYLtkDs0FZzJ%2B4VWyaHMXV3N6tmR8dV6PODbkYbwcq%2BiGGDAtbBTdHrSIpOffpLjSQ4a4VFxP9E2gM%2FHzqtU%2BrQxpkTpFwwF10CaO1py7JeQtsNBRsoEjAOvUatDx5vDlj5hGN0TVvD6wNUcw0%2BIi1SJC5%2BHAmRJmxoJ5Uxgsz8F7L1fBcpgUwr6eulGq2GxXCYbuDow6GpwJLtiCfe6nljeMngVUAocPyVU8oqMpDR9tU%2FdhIALwsHQA8C6NNbs6qRnFxE%2F0iBMrn7ZdVHLj94CslNot44ErQFWd3HZg7sbZYONhLMJW3tdMGOqUBd4CmI91V1VRu%2FeIcnQvUZPHcoRXUFmm6V4LDYaQlKQCa%2BYtwlvN2KyhZtKpLzfq4ZlQ5mi9frKc%2F%2BPpNn7mxi4bZELpqmZPlMvuV1lQcBaISjPdehTNpPN5rM62m1Yg%2BojPKI%2Bq6%2FnkgPXV1PgiyHWff%2B3O%2FFVS8es6JpIYGiuhotAqfTUiGt3EVXEhNFNIUjM%2Btfgip9uLjnO32XtAVg8SgjZfV&X-Amz-Signature=6a6c4525a61a1baeae94833c3d26ddbc7592832b3d8e622db958977f7fb2f581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
