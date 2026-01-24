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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV6ATRM2%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD6eVDaMO0oe3tTcJcINkNG7EV6%2Fk0JcWgTnZABQzbqLQIgCINp2U7PbrlZ98za6DP708oIqpNGzyu8dDTgioakWecq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDLO%2FMnsaD2p2%2BeG9CSrcA0HE2NunSuWypjCssyhiz6oORm4ZIUC1eNFhXf5Zt8CSamLt%2BYXJtTknpeeBUjTVp6xOVMQeCBCrkswZ47wR1HQJ9xgaFm%2Bt6b5jg1WF98TMFyf6gB6u5wjKw%2FBZVIILFMQyMMbFVl480m38iAMIIKWJkhJiVdo3aLw51AdUkrSVbOKVmuyyFZHp9BgoV8jqAS80cZni3rpMnMFCe0j9d4dajeDVygqcshsc2gYFC%2BQ7xnyJDKn8yiwi5DGcecJiRRv2swZOZBpj5ARuLAwgrhqDfOz%2FC7wizx5VBJZfpWWxwcv%2FY9fEHTBa%2BLm96IlT90zPgVxNOqlVhlr4viDtMsXJ94MpPPp%2BzFfZdXFChGUNOTa8HOtxHu86LIy8VySua4ehRm12KvrZLvjanz5Aok1Vh4ii8wOcflGx73IMbtfO4Q2lNaPQPst48bt8uFBBwK716UpvCZoC6cKBOpqmJBPvUJAQm917ykkHUHzs66Hy64%2Bs68%2FdqL9%2FJc7owKYkJ3v0tZjBLttArnm3jTNa2qlMhOngLHmxNn6tUSwmuupv29jdeGrHVqZnCZcXzLevILivsfoItfU7Ms6CqFYiTxYVED3rp3ApVph5M9MBuZnOzX7NLRbmLTJbssmWMI%2Bs0MsGOqUBXvUWeTVpFcgenzlfNXzREFJfYs3fIQagacbCQbTKlonz7oONm7STWmWnCkdKeibhtrPilF1MgX8DuYXiM%2BEnWUKlFLNP8JHVqFCOYcmgPh%2FWMvtLfWWsl%2B%2FhkZDGpeue8pDZ8m5%2FNIlgm9OCQARX2Miar9dk9Gb1ax0kjG99FwTueZsVV16MDLSCud9cJ8QUKwdtCDjMrP31ad3PmUaklNsPoKZn&X-Amz-Signature=c6b1457b48234235d11e5443f917fbac309e91e2e44f8265459fef9fe6164ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
