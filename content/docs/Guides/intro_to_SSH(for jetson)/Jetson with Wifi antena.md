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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGRAP5F%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID74s3UZ42fnTI6qwaj1FjhPVWJVLpo5rAUihuIFDkdpAiEA01f6llTls05o8mG6vsBS0TI8GH%2B608pmBR82hTCjL7oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDMmnDDYruzBoTfl7yrcAxw1Vsavt%2BMizBuDN9%2FSnqnks6%2BODYuPutMegODAP3svM%2FR8s5rEmRl5dQo72LtFX8BUQMxYQPRtYA7zW9Kyfs575xw67E4hpAPe4hpbFlt%2Fn31VbydRa4AmX8rppHep5gsVK3sQIxd2Y5V6M6lda7m9qdslkybYV%2FzNfZJ6gBHSYkAGZCuOc3kbk%2FVmYfpIl5xu1hFJejjNQY63XYmROOSK%2FxPGt1UGKsABDyIxb4thdgUiyJITRKpYpPspmnTWde0Xo2VZMXIW553NIxxNhV7rjKMvarPjW9XI1jvwCEEanSQ%2FD4bS%2BN8OinhZy6EQ2C4bkqBVlrKOoaEhi4CAVrpEWGSUuxoeUAz6Ajfd2jDg5Ves99I%2BdausOheDcQzLH%2BS%2Flo7%2BmMd97dCoVt3JDKuj0BXBX4sIJS%2FeNdR2jQxczhDwsjmAGBYojuEOKbEMgC51WcO5J2ElRMr1%2FW6NC%2B3oJRgGvY6TbmmOS9eHPVv5VT7WfFnLEAWycamN22msp4y8%2Ff3JMwXaig6uq2GWInApAgl0qSPv0kb9MN6ReNzENJkxhn2wyJxO1NadWivAluHnGfY7lGfJox3NPzcNm8XL5pfcmHrsRgQVuaW3zTzc2H2e0KpsnJPuI8KuMI%2B1ztAGOqUBj8h91H7MFK7XIgSJqCnW4t2r5wU1mYNJmL5fxqjzWQPFipymjk0INib4w9RYdenqh7AnAq50focw0cQJ6CIi5iYyXgTkgP8%2F43gBTD5B0AJndOi1Av3WX9nhRL1BMUZ4s28M5kYz6F9UdQIgAqsNWRKaoRvejEulIdVf31JfGHHQE6d%2F714a%2B6yHaA19y0o%2F9gFm6mWwwuj0XqH2HTE44gQbhn8v&X-Amz-Signature=45b36d59abd5c3d60dd02d9d96aee4be377e2dd0290cff72d718918fe709df19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
