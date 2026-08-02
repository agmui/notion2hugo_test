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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5WKAOHT%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD511T%2FAEbuaL7VfvHTBsbUPfM7inuxxCNDTvp55%2BTIXQIhANlDEPGxxduLEQIaqJYTgXQ50JJQIkaVVswLtIaqJINQKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpS%2F0c4OeutmA0LFoq3AOkLTnDbuflSXjQeuZraMUFjRrdG5rRLpvuF2BLrqIJe4xpTfDNZQYubiUxexi99b%2BaUxvG6Uje1teGGMofj2M%2BJ6vd2lSYu6arbwsDeNQCreiTEsOhd5XWVf%2FegeEOJQoV80J2GL%2Fh3GT1z1mdNRAQZXZzvpXVP0%2B1wMNMLhTcK0ZawxmrxMX8UWyiv5XJYCstNAEiz80Sy2LhiTqN7PivppSW2kGPNRxgPGkn4%2BJCGH%2Bk29Olb1hrZC%2FYq%2BV4FH%2FdLMGXTm%2F9VA9%2FOSdnC5pmZdUWGRiH1BPOrJJSvcuH29gFDqHft8Qhy3owhKlMuT8X1K0KS7e%2Fedi9RtoK7qbbaaK%2BQvONUlxAVzyQ8pYDouSKzGI9RtQSGsv87f8d8YwK1olxP6m%2BCWQTX0yXykxCefEls%2FmHJvPEviA%2FR%2Bq4fqHmEuv4mYhHJ9uxzCAk5HNudU07AAk2WwvmUl0P1xcI67lTEHPfldVZIaEBWs7bc9ZeFON7ODKuIT%2FuX4qgEdSBoK21ts2GSOZl0%2FdTrNZ0y4v8bXwQlx%2Fn1neWluXiOpJjOCshxISr88Lcis5OUBjoMwqiqPXhSD22Lc9J7pFTbfGwScebp6YsBerahIZm%2BccFa6AErut6FecenTDqwbrTBjqkAaaoilMLjYx5osD9WFaOsu3g3KjtRQ6MYvnZYW2RqAJx1nIPpa06aG3cKb5%2FjoStIA0ytuetZ3QHfwVRewuvixSXwuNHZamcQN3EUcxC5Nz5Rnq%2Bz9CTJwnA1YT3YrozEhcsuFl8vYzgCGiWm%2BmzTAkNlgQbfszKJ6Z979xKgIK0N9lxPEi5GD%2Bpod91qww%2BCoVgR9GF2OUK92PQcslkhBmH2ET1&X-Amz-Signature=8bfe2d1c0467e8dbbb99c5855005bcb2396309feca46f833d5899745ae07da28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
