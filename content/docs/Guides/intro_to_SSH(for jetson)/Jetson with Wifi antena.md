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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS54LB44%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIB3OYyk3mM%2BD67c6khzdxHZtyZwNdb1afEr6ErTVGw2XAiADs1X3zEDZE4NrG2CGv0rB0VdYm4e5Q7GA6c1ib6oKYCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCT%2BIpaYYxp670Y7KtwDkRjxSoVJ%2Fdak3buchyhsj1rs1g5J0tR7c8dhtzo3clfMYhzxW3r5b%2Bcua%2F8P7lcFEsmWYhgQFNMQk7a6jxBnc%2B%2FNDepT17ScaIZAhncP5FCwgzHhW0Mc%2BumkM8eXC2ngkmvh943F2DKHaBbl3uduvRhkE4HcezJ9yzwZEyTK9ogojEAmQTLgqa7nmGFaiUuz%2B2amkWSavpVgHNaDH7WHA2Le1WgZ6BS2woNDXPM0ZT5Pgsnt7C0OKgeBk5a57RfhR7aUfB3fwBJO36QEf2v41lM3hcGvVOuDOtlXa6VbN1xVJsQoKWWnzJUNo4kg3Dd7%2FkfbaDwl3WMT7SVd6pWi4A5SwdhdJc%2FS18BxDaw%2FJ2XH4viBPXSKGETyYCX1er5OWpYzTBJjfxplYOsBXTFyS4KVPRaXTB3n%2BoaxOxlNrw%2FMuDKcXlJlQJA0k8s5WmyhymMPpzEfanSF7aNy6HeI19gKoGNv3E52CfsiGznvD8GnFeten6E4OKcOdxKysjDaog%2FRaGBTlYU3fxgSMUlPic6yHUv9hTa17vfY7tyDML9dU3481%2FSK3tspVFlrPyw8eLZcDRNFaKTXlHDyG9qce26gS%2FfkQ9xZf3PrkgyDzaiRqDKPKe6ixNg4%2BOowjM6tyQY6pgFf9gGzhTXS0juPuOJdbSoJJv4C6kI9kpoIQfRSB2T5hTKDGEqhuuLE%2BFY0QAryOS5B6cjMhewbBOvMi%2BlQgBy%2B58T07ZibV62nds%2FmSfjhi6%2FUd%2BeZrm644vMV7vSITn6UmFCNoPRTR5sBcrQdrK%2B1V3KpzZXiVdnGhNqjJ2HkGN8YxW8nDtFDLIFE1PUPOwcyL2XwGs%2FfWDC%2BwG4QwvW9BTQv89nc&X-Amz-Signature=34641b4e90f586be186b80e19a9ac4c7c7a97272be9bb8665bd70fba5e2b4de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
